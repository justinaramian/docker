const hostRules = [
  {
    hostType: 'docker',
    matchHost: 'ghcr.io',
    username: process.env.GHCR_USERNAME,
    password: process.env.GHCR_TOKEN,
  },
];

if (process.env.GITEA_HOST) {
  hostRules.push({
    matchHost: process.env.GITEA_HOST,
    allowInternal: true,
  });
}

module.exports = { hostRules };