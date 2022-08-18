/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/plugin-zen', 'zenquote.fetch');

// the result object/type
export type ZenQuoteFetchResult = {
  name: string;
  time: string;
};

export default class Fetch extends SfCommand<ZenQuoteFetchResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  // what params will there be for this command? 
  public static flags = {
    name: Flags.string({ // the prop name is the parameter name? 
      char: 'n', //single char abbreviated flag
      description: messages.getMessage('flags.name.description'),
      default: 'World',
    }),
  };

  // here's where we do the work
  public async run(): Promise<ZenQuoteFetchResult> {
    // start each run with getting your flag params
    const { flags } = await this.parse(Fetch);

    const anotherMessage = 'more stuff to say';

    const time = new Date().toDateString();

    // message appears to be a special thing. Anything you want on stdout goes here? 
    const message = `Hello ${flags.name} at ${time}\nAnd now this: ${anotherMessage}`;
    this.log(message);
    this.log(anotherMessage);
    return {
      name: flags.name,
      time,
    };
  }
}
