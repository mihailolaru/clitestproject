/** Logging logic.*/

import chalk from 'chalk';
import boxen from 'boxen';
import { exec } from 'child_process';

export const printError = (error: string) => {
	console.log(chalk.bgRed(' error '), error);
};

export const printSuccess = (message: string) => {
	console.log(chalk.bgGreen(' SUCCESS '), message);
};

//dedent is used to remove extra indentation.
export const printHelp = () => {
	console.log(
		`${chalk.bgCyan('Available key command')}
		Use the following keys for:
		q - quit
		d - delete
		arrows keys - to navigate					
		`,
	);
};

export const renderer = (commands: any) => {
	console.log(boxen('Test box', { padding: 1 }));

	//Include here the command from the passed args.
	exec('ls', (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
};