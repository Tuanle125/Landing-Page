const imgOpts = document.querySelectorAll(".img-opt");
const bigImg = document.querySelector(".big-img");
imgOpts.forEach((img) => {
    img.addEventListener("click", (e) => {
        bigImg.src = e.target.src;
    });
});