import mainpage from "./mainpage.js";

export default class extends mainpage{
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
        <h2>Settings</h2>
        <p>This is the settings page</p>
        <p>This page provides the settings for the app</p>
        <p>In the future we can add the settings to this part</p>
        `;
    }
}