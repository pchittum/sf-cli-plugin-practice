#How To

- Create a new folder under `src/command` that's the namespace you want your commands to run under
- Add a new `.ts` file that will execute your command functionality (as a first go, copy the `ts` file `src/hello/world.ts` and start fiddling with it)
  - Note your module declares a ts class
  - It extends the generic CLI command class `SfCommand`
  - You'll need to declare the result object
  - which will need a schema (unless you reuse the hello world schema)
- Implement your functionality in the `run()` function

#Notes to self

- To run your command with changes to the ts file without recompiling the typescript to js use `bin/dev [namespace] [command]`
- To see changes that you've made to your code using `bin/run` you need to recompile typescript!
- And how do you recompile typescript?
- I suppose people won't necessarily be committing, but the commit rules and hooks are super useful for enterprise-ready SW, but annoying for just hacking together something.
- Question for eng: why are commonjs modules required?
