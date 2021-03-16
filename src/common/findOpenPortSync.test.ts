/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { expect } from 'chai';
import { findOpenPortSync } from './findOpenPortSync';

describe('findOpenPortSync', () => {
  it('works', async () => {
    expect(findOpenPortSync({ attempts: 5 })).to.be.greaterThan(0);
  });
});
