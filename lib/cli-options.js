const re = /^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;

export default function optionMatcher(args) {
  return args.reduce(function (acc, cur) {
    const matches = cur.match(re);
    if (matches) {
      acc[matches[1]] = matches[2];
    }
    return acc;
  }, {});
}
