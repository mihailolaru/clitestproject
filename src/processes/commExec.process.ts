// Commands execution process

import { exec } from 'child_process';
import { filesObject, COMMANDS } from '../resources.js';

export const commandExec = (key?: string, filename?: string) => {
	if (key) {
		exec( `${COMMANDS[key]}${filename||""}`, async ( error, stdout, stderr ) => {
			if ( error ) {
				console.log(`error: ${error.message}`);				
			}
			if ( stderr ) {
				console.log(`stderr: ${stderr}`);				
			}
			if ( key === 'getDirectories' || key === 'getFiles' ) {
				//console.log('stdout', stdout);
				stdout.split('\n').forEach(e =>
					filesObject.push({
						name: e,
						type: key === 'getDirectories' ? 'dir' : 'file',
						selected: false,
					}),
				);
				
			}
		});
	}
	
};
