window.addEventListener("load", () => {
    $(".single-items").slick();
    console.log("hello");
    let icon = document.querySelector("div.day_night img");
    document.querySelector("div.color").addEventListener("click", () => {
        document.getElementById("spotlight").classList.toggle("active");
        document.getElementById("contact").classList.toggle("active");
        document.getElementById("middle").classList.toggle("active");
        document.getElementById("main").classList.toggle("active");
        document.querySelector("h1.one").classList.toggle("active");
        document
            .querySelector(".image-container a h1")
            .classList.toggle("active");
        document
            .querySelector(".image-container a .fa-user")
            .classList.toggle("active");
        document.querySelector("div.color a h5").classList.toggle("active");
        document
            .querySelector("#main section.wrapper div.header h1")
            .classList.toggle("active");
        document
            .querySelector("#middle .wrapper .left h2")
            .classList.toggle("active");
        document
            .querySelector("#middle .wrapper .right h2")
            .classList.toggle("active");
        document
            .querySelector("#middle .wrapper .left ul li")
            .classList.toggle("active");
        document.querySelector("footer").classList.toggle("active");
        if (document.getElementById("spotlight").classList.contains("active")) {
            console.log("ffff");
            icon.src = "images/sun-solid.svg";
        } else {
            icon.src = "images/moon-regular.svg";
        }
    });
});
