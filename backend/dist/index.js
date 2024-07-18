import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//Connections and listeners
const PORT = process.env.PORT || 5001;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open & Connected to Database 👍"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map