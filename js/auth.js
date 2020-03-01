function checkform() {
    var fields = document.querySelectorAll('.imp');
    fields = Array.prototype.slice.call(fields);
    var counter = 0;
    var status = 1;
    fields.forEach(cur => {
        if (!cur.value) {
            if (counter == 0) {
                document.querySelector(".error-message").textContent = '';
                document.querySelector('.error-message').insertAdjacentHTML('afterbegin', `<p style="color: red; font-weight: bold; font-size: 17px;">Потрібно заповнити всі необхідні поля, які позначені *</p>`);
                counter += 1;
            }
            cur.classList.add("rd");
            status = 0;
            
            cur.addEventListener("click", function () {
                this.classList.remove("rd");
            })
        }
    });
    if (!status) return false
    else document.querySelector('form').submit();
}