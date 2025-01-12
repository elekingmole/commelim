import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('commelim.commelim', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			var result = document.getText().replace(/\/\/.*\r\n[\s\t]*|\/\/.*\r[\s\t]*|\/\/.*\n[\s\t]*/g, '');
			result = result.replace(/#.*\r\n[\s\t]*|#.*\r\n[\s\t]*|#.*\n[\s\t]*/g, '');
			
			editor.edit((edit) => {
				const start = new vscode.Position(0, 0);
				const end = new vscode.Position(document.lineCount, 0);
				edit.replace(new vscode.Range(start, end), result);
			});	
		}
		
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
