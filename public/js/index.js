function navigateTo(url){
    history.pushState(null, null, url);
    router();
}

async function router(){
    const routes = [{path: "/", view: () => console.log("viewing dashboard")},
    {path: "/settings", view: () => console.log("viewing settings")},
    {path: "/posts", view: () => console.log("viewing posts")}]

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
    match.route.view();


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