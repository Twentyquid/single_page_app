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
    console.log(match);


}

document.addEventListener('DOMContentLoaded',router);