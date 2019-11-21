/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { AriaLiveService } from './aria-live.service';

@Injectable()
export class MockAriaLiveService extends AriaLiveService {
  announce(message) {
    return message;
  }
}

export const MOCK_ARIA_LIVE_SERVICE_PROVIDER = {
  provider: AriaLiveService,
  useClass: MockAriaLiveService,
};