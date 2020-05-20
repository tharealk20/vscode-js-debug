// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/****************************************************************
 * Auto-generated by generate-cdp-api.js, do not edit manually. *
 ****************************************************************/

interface IDAPOperationClassification {
  cancel: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!cancel.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  runinterminal: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!runinterminal.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  initialize: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!initialize.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  configurationdone: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!configurationdone.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  launch: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!launch.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  attach: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!attach.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  restart: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!restart.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  disconnect: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!disconnect.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  terminate: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!terminate.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  breakpointlocations: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!breakpointlocations.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  setbreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!setbreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  setfunctionbreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!setfunctionbreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  setexceptionbreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!setexceptionbreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  databreakpointinfo: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!databreakpointinfo.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  setdatabreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!setdatabreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  setinstructionbreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!setinstructionbreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  continue: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!continue.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  next: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!next.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  stepin: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!stepin.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  stepout: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!stepout.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  stepback: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!stepback.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  reversecontinue: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!reversecontinue.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  restartframe: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!restartframe.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  goto: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!goto.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  pause: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!pause.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  stacktrace: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!stacktrace.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  scopes: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!scopes.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  variables: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!variables.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  setvariable: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!setvariable.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  source: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!source.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  threads: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!threads.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  terminatethreads: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!terminatethreads.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  modules: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!modules.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  loadedsources: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!loadedsources.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  evaluate: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!evaluate.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  setexpression: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!setexpression.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  stepintargets: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!stepintargets.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  gototargets: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!gototargets.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  completions: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!completions.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  exceptioninfo: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!exceptioninfo.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  readmemory: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!readmemory.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  disassemble: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!disassemble.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  enablecustombreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!enablecustombreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  disablecustombreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!disablecustombreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  canprettyprintsource: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!canprettyprintsource.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  prettyprintsource: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!prettyprintsource.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  toggleskipfilestatus: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!toggleskipfilestatus.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  startprofile: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!startprofile.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  stopprofile: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!stopprofile.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  launchvscode: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!launchvscode.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  launchunelevated: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!launchunelevated.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  getbreakpoints: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!getbreakpoints.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
  revealpage: { classification: 'SystemMetaData'; purpose: 'PerformanceAndHealth' };
  '!revealpage.errors': { classification: 'CallstackOrException'; purpose: 'PerformanceAndHealth' };
}
