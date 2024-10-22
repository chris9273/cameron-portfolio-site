document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById("menu-btn");
    const menuDropdown = document.getElementById("menu-dropdown");
    const overlay = document.getElementById("full-screen-overlay");
    const menuContentButtons = document.querySelectorAll(".menu-dropdown a");
    const projectsSlideContainer = document.getElementById("projects-slide-container");
    const menuContainer = document.getElementById("menu-dropdown-content-container");
    const menuBack = document.getElementById("menu-back-button");

    document.addEventListener('click', (e) => menuFunctions(e));

    function menuFunctions(e) {
        if (e.target.closest("#menu-btn")) {
            console.log("menu button clicked");
            menuDropdown.classList.toggle("slide-in");
            document.body.classList.toggle("no-scroll");
            //overlay.classList.toggle("overlay-visible")

            if (menuDropdown.classList.contains("slide-in")) {
                overlay.style.display = "block";
                setTimeout(() => {overlay.style.opacity = "1";}, "50");

                menuContainer.style.visibility = "visible";

                menuContentButtons.forEach((element) => {
                    element.style.opacity = "1";
                    element.style.bottom = "0";
                })
            }
            else if (!menuDropdown.classList.contains("slide-in")) {
                setTimeout(() => {
                    overlay.style.opacity = "";
                }, "350");
                setTimeout(() => {overlay.style.display = "";}, "750"); //2nd value = length of menu slideout animation in ms

                menuContainer.style.visibility = "";

                menuContentButtons.forEach((element) => {
                    element.style.opacity = "";
                    element.style.bottom = "";
                })
            }

            if (menuContainer.classList.contains("inner-slide")) {
                setTimeout(() => {menuContainer.classList.remove("inner-slide");}, "750");
                projectsSlideContainer.style.visibility = "hidden";
            }
        }

        if (e.target.closest("#menu-projects-button")) {
            menuContainer.classList.toggle("inner-slide");
            projectsSlideContainer.style.visibility = "visible";
        }

        if (e.target.closest("#menu-back-button")) {
            menuContainer.classList.toggle("inner-slide");
            projectsSlideContainer.style.visibility = "hidden";
        }
    }

});