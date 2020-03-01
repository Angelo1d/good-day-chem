clearClass = list => {
    for (var element of list) {
        element.classList.remove("active-img");
    };
}

{
    imgChilds = document.querySelector(".gallery-items").children;
    for (var element of imgChilds) {
        element.addEventListener('click', function () {
            clearClass(imgChilds);
            refreshImg = document.getElementById("selected-img")
            refreshImg.src = this.src;
            this.classList.add("active-img");
        })
    }
}




