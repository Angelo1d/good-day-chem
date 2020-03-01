{
    var showItems = document.querySelectorAll('.items-dropbtn');
    showItems.forEach(cur => {
        cur.addEventListener('click', function () {
            this.parentNode.querySelector(".items-myDropdown").classList.toggle("show");
        })
    })
}

window.onclick = function(event) {
    if (!event.target.matches('.items-dropbtn')) {
      var dropdowns = document.querySelectorAll(".items-dropdown-content");
      dropdowns.forEach(cur => {
        if (cur.classList.contains('show')) {
            cur.classList.remove('show');
        }
      })
    }
}