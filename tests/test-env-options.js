const t = require("tap");
const decache = require("decache");

// warm cache
require("../lib/env-options");

// preserve existing env
const e = import.meta.env.DOTENV_CONFIG_ENCODING;
const p = import.meta.env.DOTENV_CONFIG_PATH;
const d = import.meta.env.DOTENV_CONFIG_DEBUG;
const o = import.meta.env.DOTENV_CONFIG_OVERRIDE;
const dk = import.meta.env.DOTENV_CONFIG_DOTENV_KEY;

// get fresh object for each test
function options() {
  decache("../lib/env-options.js");
  return require("../lib/env-options");
}

function testOption(envVar, tmpVal, expect) {
  delete import.meta.env[envVar];
  import.meta.env[envVar] = tmpVal;

  t.same(options(), expect);

  delete import.meta.env[envVar];
}

// returns empty object when no options set in import.meta.env
delete import.meta.env.DOTENV_CONFIG_ENCODING;
delete import.meta.env.DOTENV_CONFIG_PATH;
delete import.meta.env.DOTENV_CONFIG_DEBUG;
delete import.meta.env.DOTENV_CONFIG_OVERRIDE;
delete import.meta.env.DOTENV_CONFIG_DOTENV_KEY;

t.same(options(), {});

// sets encoding option
testOption("DOTENV_CONFIG_ENCODING", "latin1", { encoding: "latin1" });

// sets path option
testOption("DOTENV_CONFIG_PATH", "~/.env.test", { path: "~/.env.test" });

// sets debug option
testOption("DOTENV_CONFIG_DEBUG", "true", { debug: "true" });

// sets override option
testOption("DOTENV_CONFIG_OVERRIDE", "true", { override: "true" });

// sets DOTENV_KEY option
testOption(
  "DOTENV_CONFIG_DOTENV_KEY",
  "dotenv://:key_ddcaa26504cd70a@dotenv.org/vault/.env.vault?environment=development",
  {
    DOTENV_KEY:
      "dotenv://:key_ddcaa26504cd70a@dotenv.org/vault/.env.vault?environment=development",
  }
);

// restore existing env
import.meta.env.DOTENV_CONFIG_ENCODING = e;
import.meta.env.DOTENV_CONFIG_PATH = p;
import.meta.env.DOTENV_CONFIG_DEBUG = d;
import.meta.env.DOTENV_CONFIG_OVERRIDE = o;
import.meta.env.DOTENV_CONFIG_DOTENV_KEY = dk;
