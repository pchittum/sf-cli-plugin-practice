/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@pchittum/plugin-zen', 'custom.datagen');

export type DataGenResult = {
  name: string;
};

export default class DataGen extends SfCommand<DataGenResult> {
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

  public async run(): Promise<DataGenResult> {
    const { flags } = await this.parse(DataGen);
    const time = new Date().toDateString();
    const message = `Hello ${flags.name} at ${time} and I ate my pants`;
    // this logs and is the output on stdout
    this.log(message);
    return {
      name: flags.name,
    };
  }
}
