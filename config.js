import config from "./lib/main";
import envOptions from "./lib/env-options";
import cliOptions from "./lib/cli-options";

(() => {
  config({
    ...envOptions,
    ...cliOptions(import.meta.env.VITE_GLOB_OPTIONS.commandLineArgs.argv),
  });
})();
