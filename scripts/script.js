function changeBg(){
    let scrollValue = window.scrollY;
    console.log(scrollValue)
    let bottomNav = document.querySelector(".bottom-nav")
    if(scrollValue > 3){
        bottomNav.style.backgroundColor = "#333435"
        bottomNav.style.transition = "linear"
        bottomNav.style.position = "unset"
        bottomNav.style.position = "sticky"
    } else if (scrollValue < 2) {
        bottomNav.style.backgroundColor = "unset"
    }
}
window.addEventListener("scroll", changeBg)


function fixedNav(){
    let topNav = document.querySelector(".top-nav")
    let bottomNav = document.querySelector(".bottom-nav")
    let headerOverlay = document.querySelector(".overlay")
    let scrollValue = window.scrollY;
    let media = window.matchMedia("(min-width: 768px)")

    if(scrollValue > 75 && !media.matches) {
        topNav.style.display = "none"
        bottomNav.style.position = "fixed"
        bottomNav.style.backgroundColor = "#212529"
        bottomNav.style.top = "0"
        bottomNav.style.left = "0"
        bottomNav.style.right = "0"
    } else if (scrollValue < 75) {
        topNav.style.display = "block"
        topNav.style.transition = "linear 1s"
        bottomNav.style.position = "static"
        headerOverlay.style.marginTop = "0rem"
        bottomNav.style.backgroundColor = "#212529"
    } else if ( media.matches ) {
        headerOverlay.style.marginTop = "0rem"
    }
}
window.addEventListener("scroll", fixedNav)

