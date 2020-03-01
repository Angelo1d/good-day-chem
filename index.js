{
    element = document.querySelector('.reverse-width');
    element.parentElement.addEventListener("mouseenter", function( event ) {
        width = element.clientWidth;
        parentWidth = element.parentElement.clientWidth;
        element.setAttribute("style", `left: -${width - parentWidth}px`);
      }, false);
}

{
    imgElement = document.querySelectorAll('.product-img');
    height1 = document.querySelectorAll('.product-name');
    height2 = document.querySelectorAll('.product-price');
    for (var x = 0; x < imgElement.length; x++) {
      parentHeiht = imgElement[x].parentElement.offsetHeight;
      imgElement[x].setAttribute("style", `height: ${parentHeiht - (
          height1[x].offsetHeight + height2[x].offsetHeight) - 22}px`);
    }   
}

function myFunction() {
    document.getElementById("lang-myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.lang-dropbtn')) {
      var dropdowns = document.getElementsByClassName("lang-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }