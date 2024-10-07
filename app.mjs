import 'dotenv/config'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const appName = process.env.APP_NAME || 'nodejs-express-common';
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.HTML_PAGE_NAME_TO_SERVE_FROM_ROOT));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`${appName} is online and listening on port ${PORT}...`);
});