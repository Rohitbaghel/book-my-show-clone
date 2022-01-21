const connect = require("./config/db");

const app = require(".");

app.listen(3600, async () => {
  console.log("listening port 3600");
  await connect();
});
