# How To

- Create a new folder under `src/command` that's the namespace you want your commands to run under
- Add a new `.ts` file that will execute your command functionality (as a first go, copy the `ts` file `src/hello/world.ts` and start fiddling with it)
  - Note your module declares a ts class
  - It extends the generic CLI command class `SfCommand`
  - You'll need to declare the result object
  - which will need a schema (unless you reuse the hello world schema)
- Implement your functionality in the `run()` function
- Imported packages must only be commonjs packages currently
- CLI team already uses `got` nodejs package

# Notes to self

- To run your command with changes to the ts file without recompiling the typescript to js use `bin/dev [namespace] [command]`
- To see changes that you've made to your code using `bin/run` you need to recompile typescript!
- And how do you recompile typescript?
- I suppose people won't necessarily be committing, but the commit rules and hooks are super useful for enterprise-ready SW, but annoying for just hacking together something.
- Question for eng: why are commonjs modules required?
- to commit
- to push
  - make sure you've updated the command-snapshot.json file to have correct reference names for commands and project
  - add commands as topics to package.json

# Steps to create a new command and namespace

- If new namespace is being added, create new namespace folder under `commands` folder. For instance `src/commands/custom`.
- Copy/rename an existing command's `.ts` file to the appropriate command folder (like `world.ts`). For instance `src/commands/custom/datagen.ts`.
- Rename the js class declaration for the command: `export default class DataGen extends...`.
- Update the `Flags.parse([object])` call in the `run` function. For `DataGen` like this: `const { flags } = await this.parse(DataGen);`.
- Stub out the the `...Result` object. For instance for the `DataGen` class you would have a `DataGenResult` object and declare a placeholder property (unless properties are already known). Update the return statement of the `run` function to match the stubbed out props.
- Update other references to the `...Result` object to reflect new object name such as in the class declaration: `export default class DataGen extends SfCommand<DataGenResult> {...` and the `run` function declaration.
- Define the schema `.json` file. Easiest again to copy an existing and update details within to reference the new `...Result` object and its properties .
- Add a new messages `.md` file named for the folder/file structure as `messages/[folder].[file].md`. For the above example it would be `messages/custom.datagen.md`.
- Update the `loadMessages` call to use the new messages file, such as: `const messages = Messages.loadMessages('@pchittum/plugin-zen', 'custom.datagen')`.
