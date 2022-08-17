/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/plugin-zen', 'hello.world');

export type ZenQuoteFetchResult = {
  name: string;
  time: string;
};

export default class Fetch extends SfCommand<ZenQuoteFetchResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static flags = {
    name: Flags.string({
      char: 'n',
      description: messages.getMessage('flags.name.description'),
      default: 'World',
    }),
  };

  public async run(): Promise<ZenQuoteFetchResult> {
    const { flags } = await this.parse(Fetch);
    const time = new Date().toDateString();
    const message = `Hello ${flags.name} at ${time}`;
    this.log(message);
    return {
      name: flags.name,
      time,
    };
  }
}
