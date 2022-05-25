export const COMMANDS = {
	wind32: {
		listFiles: 'dir /b',
		deleteFile: 'rm',
		deleteDirectory: 'del %LOCALAPPDATA%\\cliTestFiles -y',
		writeToFile: 'dir /b > %LOCALAPPDATA%\\cliTestFiles\\filesList.txt',
		getList: 'dir /b > %LOCALAPPDATA%\\cliTestFiles\\getList.txt',
		getDirectories: 'dir /ad > %LOCALAPPDATA%\\cliTestFiles\\directories.txt',
		getFiles: 'dir /a-d > %LOCALAPPDATA%\\cliTestFiles\\files.txt',
		filterFiles: 'findstr complete... ',
		clearCMD: 'cls',
		openInEditor: 'notepad',
		exit: 'exit',
	},
	linux: {
		listFiles: 'ls',
		deleteFile: 'rm',
		deleteDirectory: 'rm -r /home/cliTestFiles',
		writeToFile: 'cat > /home/cliTestFiles/filesList.txt',
		getList: 'dir /b > /home/cliTestFiles/getList.txt',
		getDirectories: 'dir /ad > /home/cliTestFiles/directories.txt',
		getFiles: 'dir /a-d > /home/cliTestFiles/files.txt',
		filterFiles: 'grep complete...',
		clearCMD: 'clear',
		openInEditor: 'nano',
		exit: 'exit',
	},
};
