import dashboard from "./pages/dashboard.js";
import settings from "./pages/settings.js";
import posts from "./pages/posts.js";

function navigateTo(url){
    history.pushState(null, null, url);
    router();
}

async function router(){
    const routes = [{path: "/", view: dashboard},
    {path: "/settings", view: settings},
    {path: "/posts", view: posts}]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: route.path == location.pathname
        }
    });
    let match = potentialMatches.find(matches => matches.isMatch);
    if(!match){
        match = {
            route:{path:"/", view:() => console.log("viewing dashboard")},
            isMatch: true
        }
    }
    console.log(match.route);
    let view = new match.route.view();
    document.getElementById('appBody').innerHTML = await view.getHtml();

}
window.addEventListener('popstate',router);

document.addEventListener('DOMContentLoaded',() =>{
    document.addEventListener('click',(e) => {
        if(e.target.matches('[data_link]')){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});