module.exports = ({ env }) => ({
  auth: {
    secret: "lWGXPcbZqULCmFiZyouvxw==",
  },
  apiToken: {
    salt: "f4YftW28WeItktStfHZ16A==",
  },
  transfer: {
    token: {
      salt: "f4YftW28WeItktStfHZ16A==",
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
