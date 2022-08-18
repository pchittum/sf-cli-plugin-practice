#How To
- Create a new folder under `src/command` that's the namespace you want your commands to run under
- Add a new `.ts` file that will execute your command functionality (as a first go, copy the `ts` file `src/hello/world.ts` and start fiddling with it)
  - Note your module declares a ts class
  - It extends the generic CLI command class `SfCommand`
- Implement your functionality in the `run()` function
