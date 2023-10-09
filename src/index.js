import app from './app.js';
import { connectDb } from './db.js';
import chalk from 'chalk';
import { PORT } from './config.js';


connectDb();
//app.listen(3000)
app.listen(PORT)
console.log(chalk.greenBright("\nWelcome to TasksApp\n"));
console.log(`Environment: ${process.env.NODE_ENV}`)
console.log(`Server on port ${chalk.bgGreenBright(PORT)}`);