import app from '../routes/app.js';
import { connectToDatabase } from './db.js';

const port = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://OlleOllsson:test1234@hakimslivs4.zrzjb7b.mongodb.net/?retryWrites=true&w=majority&appName=Hakimslivs4';

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

async function run() {
    await connectToDatabase(MONGODB_URI);
}
   
run();
     

