{
    element = document.querySelector('.reverse-width');
    element.parentElement.addEventListener("mouseenter", function( event ) {
        width = element.clientWidth;
        parentWidth = element.parentElement.clientWidth;
        element.setAttribute("style", `left: -${width - parentWidth}px`);
      }, false);
}