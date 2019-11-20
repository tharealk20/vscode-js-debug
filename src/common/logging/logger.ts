/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { Disposable } from '../events';
import * as os from 'os';
import { ILogger, ILogItem, ILogSink, ILoggerSetupOptions, LogLevel, LogTag, allLogTags } from '.';

const packageJson = require('../../../package.json');

/**
 * Implementation of ILogger for the extension. You should probably use the
 * global const `logger` instance.
 */
export class Logger implements ILogger, Disposable {
  /**
   * The target of the logger. Either a list of sinks, or a queue of items
   * to write once we get sinks.
   */
  private logTarget: { queue: ILogItem<any>[] } | { sinks: ILogSink[] } = { queue: [] };

  /**
   * Minimum log level.
   */
  private minLevel = LogLevel.Verbose;

  /**
   * Log tag filter.
   */
  private tags?: ReadonlySet<string>;

  /**
   * @inheritdoc
   */
  public info(tag: LogTag, msg?: string, metadata?: any): void {
    this.log({
      tag,
      timestamp: Date.now(),
      message: msg,
      metadata,
      level: LogLevel.Info,
    });
  }

  /**
   * @inheritdoc
   */
  public verbose(tag: LogTag, msg?: string, metadata?: any): void {
    this.log({
      tag,
      timestamp: Date.now(),
      message: msg,
      metadata,
      level: LogLevel.Verbose,
    });
  }

  /**
   * @inheritdoc
   */
  public warn(tag: LogTag, msg?: string, metadata?: any): void {
    this.log({
      tag,
      timestamp: Date.now(),
      message: msg,
      metadata,
      level: LogLevel.Warn,
    });
  }

  /**
   * @inheritdoc
   */
  public error(tag: LogTag, msg?: string, metadata?: any): void {
    this.log({
      tag,
      timestamp: Date.now(),
      message: msg,
      metadata,
      level: LogLevel.Error,
    });
  }

  /**
   * @inheritdoc
   */
  public fatal(tag: LogTag, msg?: string, metadata?: any): void {
    this.log({
      tag,
      timestamp: Date.now(),
      message: msg,
      metadata,
      level: LogLevel.Fatal,
    });
  }

  /**
   * @inheritdoc
   */
  public log(data: ILogItem<any>): void {
    if ('queue' in this.logTarget) {
      this.logTarget.queue.push(data);
      return;
    }

    if (data.level < this.minLevel) {
      return;
    }

    if (this.tags && !this.tags.has(data.tag)) {
      return;
    }

    for (const sink of this.logTarget.sinks) {
      sink.write(data);
    }
  }

  /**
   * @inheritdoc
   */
  dispose(): void {
    if ('sinks' in this.logTarget) {
      for (const target of this.logTarget.sinks) {
        target.dispose();
      }
      this.logTarget = { queue: [] };
    }
  }

  /**
   * Adds the given sinks to the loggers. Plays back any items buffered in the queue.
   */
  public async setup(options: ILoggerSetupOptions): Promise<void> {
    this.minLevel = options.level;

    if (options.tags && options.tags.length) {
      // Add all log tags that equal or are children of the one given in the
      // options. For instance, `cdp` adds the tags `cdp`, `cdp.send`, etc.
      this.tags = new Set(
        options.tags
          .map(src => allLogTags.filter(t => t === src || t.startsWith(`${src}.`)))
          .reduce((acc, tags) => [...acc, ...tags], []),
      );
    } else {
      this.tags = undefined;
    }

    await Promise.all(options.sinks.map(s => s.setup()));

    if (options.showWelcome !== false) {
      const message = createWelcomeMessage();
      for (const sink of options.sinks) {
        sink.write(message);
      }
    }

    const prevTarget = this.logTarget;
    this.logTarget = { sinks: options.sinks.slice() };

    if ('sinks' in prevTarget) {
      prevTarget.sinks.forEach(s => s.dispose());
    } else {
      // intentionally re-`log()` instead of writing directly to sinks so that
      // and tag or level filtering is applied.
      prevTarget.queue.forEach(m => this.log(m));
    }
  }
}

/**
 * Global logger instance.
 */
export const logger = new Logger();

const createWelcomeMessage = (): ILogItem<any> => ({
  timestamp: Date.now(),
  tag: LogTag.RuntimeWelcome,
  level: LogLevel.Info,
  message: `${packageJson.name} v${packageJson.version} started`,
  metadata: {
    os: `${os.platform()} ${os.arch()}`,
    nodeVersion: process.version,
    adapterVersion: packageJson.version,
  },
});