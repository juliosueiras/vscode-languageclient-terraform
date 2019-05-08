import * as path from 'path';
import { workspace, window, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	let serverOptions: ServerOptions = {
		command: '/Users/sueiraj/terraform-lsp',
		args: [],
		options: {
			env: {
				...process.env
			}
		}
	};

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		documentSelector: ["Terraform"],
		synchronize: {
			configurationSection: 'terraformLanguageServer',
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: workspace.createFileSystemWatcher(window.activeTextEditor.document.fileName)
		}
	};

	// Create the language client and start the client.
	let disp = new LanguageClient(
		'terraformLanguageServer',
		'Language Server',
		serverOptions,
		clientOptions
	).start();

	// Start the client. This will also launch the server
	context.subscriptions.push(disp);
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
