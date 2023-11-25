// ../config.js accepts options via environment variables
const options = {};

if (import.meta.env.DOTENV_CONFIG_ENCODING != null) {
  options.encoding = import.meta.env.DOTENV_CONFIG_ENCODING;
}

if (import.meta.env.DOTENV_CONFIG_PATH != null) {
  options.path = import.meta.env.DOTENV_CONFIG_PATH;
}

if (import.meta.env.DOTENV_CONFIG_DEBUG != null) {
  options.debug = import.meta.env.DOTENV_CONFIG_DEBUG;
}

if (import.meta.env.DOTENV_CONFIG_OVERRIDE != null) {
  options.override = import.meta.env.DOTENV_CONFIG_OVERRIDE;
}

if (import.meta.env.DOTENV_CONFIG_DOTENV_KEY != null) {
  options.DOTENV_KEY = import.meta.env.DOTENV_CONFIG_DOTENV_KEY;
}

export default options;
