
# **Notice:** This repository is deprecated

This repository was an initial example repository how to integrate terraform-lsp into vscode.

In future you will find an interagtion in [vscode-terraform](https://github.com/mauve/vscode-terraform) at [1.3.12](https://github.com/mauve/vscode-terraform/releases/tag/1.3.12).



## VSCode Terraform LSP Client


https://github.com/mauve/vscode-terraform/issues/157#issuecomment-511531967

Mostly adapted from [lsp-sample](https://github.com/microsoft/vscode-extension-samples/tree/master/lsp-sample)

Use with [Terraform-LSP](https://github.com/juliosueiras/terraform-lsp)



## Getting Started 

### Requirements

* [NodeJS](https://nodejs.org/en/) in 8.x

### Manual

```
$ git clone git@github.com:juliosueiras/vscode-languageclient-terraform.git
$ cd vscode-languageclient-terraform
$ npm install -g vsce
$ npm install
$ vsce package
```

```
$ code --install-extension vscode-languageclient-terraform-0.0.1.vsix
```
