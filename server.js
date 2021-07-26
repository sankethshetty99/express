import app from './app.js';

// access process env variables
import dotenv from 'dotenv';
dotenv.config();

// connection to the database should be made here

//pick port from the
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Serving traffic on port ${port}`);
});
