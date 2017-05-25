/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import {ChromeDebugSession, IChromeDebugSessionOpts} from 'vscode-chrome-debug-core';
import {EdgeDebugAdapter} from './edgeDebugAdapter';

export class EdgeDebugSession extends ChromeDebugSession {

    public constructor(targetLinesStartAt1: boolean, isServer: boolean = false, opts?: IChromeDebugSessionOpts) {
        let version = "edge." + require('../../package.json').version;
        opts.adapter = EdgeDebugAdapter;
        super(targetLinesStartAt1, isServer, opts);
    }
}

