import mainpage from "./mainpage.js";

export default class extends mainpage {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }
    async getHtml(){
        return `
        <h2>Welcome back Dom</h1>
        <p>something goes here that tells about the dashboard</p>
        <p>I should have better used lorem ipsum</p>
        <p> But idon't know why i don't want to do that</p>
        `;
    }

}
