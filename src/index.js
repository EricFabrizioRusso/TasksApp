import app from './app.js';
import { connectDb } from './db.js';
import chalk from 'chalk';


connectDb();
app.listen(3000)
console.log(chalk.greenBright("\nWelcome to ExpressApp\n"));
console.log(`Server on port ${chalk.bgGreenBright(3000)}`);