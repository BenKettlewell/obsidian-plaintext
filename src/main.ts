import { Plugin } from 'obsidian';

export default class TxtAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["txt"], "markdown");
    this.registerExtensions(["nmap"], "markdown");
    this.registerExtensions(["gnmap"], "markdown");
    this.registerExtensions(["py"], "markdown");
    this.registerExtensions(["sh"], "markdown");
  }
}
