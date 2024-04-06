function changeBg(){
    let scrollValue = window.scrollY;
    console.log(scrollValue)
    let bottomNav = document.querySelector(".bottom-nav")
    if(scrollValue > 3){
        bottomNav.style.backgroundColor = "#333435"
        bottomNav.style.transition = "linear 1s"
        bottomNav.style.position = "unset"
        bottomNav.style.position = "sticky"
    } else if (scrollValue < 2) {
        bottomNav.style.backgroundColor = "unset"
    }
}
changeBg()

window.addEventListener("scroll", changeBg)


function fixedNav(){
    let topNav = document.querySelector(".top-nav")
    let bottomNav = document.querySelector(".bottom-nav")
    let scrollValue = window.scrollY;

    if(scrollValue > 3){
        topNav.style.display = "none"
        bottomNav.style.position = "sticky"
        bottomNav.style.top = "0"
    } else if (scrollValue < 2) {
        topNav.style.display = "block"
        bottomNav.style.position = "static
    }
}

// window.addEventListener("scroll", fixedNav)

// function changeLiColors(){
//     let scrollValue = window.scrollY;
//     console.log(scrollValue)
//     let [aboutLi,serviceLi,teamLi,testmonialLi] = 
//     document.getElementById(".about-li,.service-li,.team-li,.testmonial-li")

//     let aboutSection = document.querySelector(".about-section")
//     aboutSection = aboutSection.scrollHeight
//     console.log(aboutSection)

//     if(scrollValue === aboutSection){
//         aboutLi.style.color = "a4783d"
//         console.log("exav")
//     }
// }
// changeLiColors()