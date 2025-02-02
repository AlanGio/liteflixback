import "dotenv/config";
import { MongoDBSocketClient } from "./db/mongo_db_server_client.js";
const client = await MongoDBSocketClient.getInstance();
import server from "./server/server.js";
server.listen(3000, function () {
    console.log("Server running in Port 3000!");
});
