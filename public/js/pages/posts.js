import mainpage from "./mainpage.js";

export default class extends mainpage{
    constructor(){
        super();
        this.setTitle("Posts")
    }
    
    async getHtml(){
        return `
        <h2>Posts</h2>
        <p>This is the posts section</p>
        <p>This place can be used for displaying the posts</p>
        <p>If this project is modified to a chat app we can </p>
        <p>show the messages in this section</p>
        `;
    }
}