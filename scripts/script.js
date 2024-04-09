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

    if(scrollValue > 75){
        topNav.style.display = "none"
        bottomNav.style.position = "fixed"
        bottomNav.style.backgroundColor = "#212529"
        bottomNav.style.top = "0"
        bottomNav.style.left = "0"
        bottomNav.style.right = "0"
        headerOverlay.style.marginTop = "8rem"
    } else if (scrollValue < 75) {
        topNav.style.display = "block"
        topNav.style.transition = "linear 1s"
        bottomNav.style.position = "static"
        headerOverlay.style.marginTop = "unset"
        bottomNav.style.backgroundColor = "#212529"

    }
}
window.addEventListener("scroll", fixedNav)


// function changeLiColors(){
//     let scrollValue = window.scrollY;
//     console.log(scrollValue)
//     // let [aboutLi,serviceLi,teamLi,testmonialLi] = document.querySelector("#about-li,#service-li,#team-li,#testmonial-li")
//     let aboutLi = document.querySelector("#about-li")
//     let aboutSection = document.querySelector(".about-section")
//     // aboutSection = aboutSection.scrollHeight
//     // console.log(aboutSection.scrollHeight)

//     if(scrollValue = 160){
//         aboutLi.style.color = "#a4783d"
//         // alert("exav")
//     } else if (scrollValue > 160){
//         aboutLi.style.color = "#ffffff"
//     }
// }

// window.addEventListener("scroll", changeLiColors)
