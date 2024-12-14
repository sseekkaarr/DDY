const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://dailydoseofyou_owner:OyViLMAC8N0p@ep-broad-darkness-a1lxunzm.ap-southeast-1.aws.neon.tech/dailydoseofyou?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => {
    console.log("Connected to the database!");
    return client.end();
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
