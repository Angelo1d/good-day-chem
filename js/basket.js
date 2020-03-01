{
    document.querySelectorAll(".single-price").forEach(cur => {
        cur.parentElement.parentElement.querySelector(".general-price").textContent = cur.textContent;
    })
}

{
    var tableRows;
    try {
        tableRows = document.querySelector(".table-row").length;
    } catch { tableRows = 0; }

    if (tableRows === 0) {
        document.querySelector('main').removeChild(document.querySelector('.basket-container'));
    } else  document.querySelector('main').removeChild(document.querySelector('.no-orders'));

}

{
    var deliveryTypes = document.querySelectorAll("input[name='delivery']");
    deliveryTypes.forEach(cur => {
        cur.addEventListener('change', cur => {
            checkRadio(cur);
        })
        if (!cur.checked) {
            document.querySelector(`.${cur.id}`).style.display = "none";
        }
    })
}

function checkRadio (elem) {
    document.querySelectorAll(".delivery-address > div").forEach(cur => {
        cur.style.display = "none";
    })
    document.querySelector(`.${elem.target.id}`).style.display = "inline-block";
}

function totalPrice () {
    var priceList = document.querySelectorAll(".general-price")
    var total = 0;
    priceList.forEach(cur => {
        console.log(cur.textContent)
        total += parseFloat(cur.textContent)
    })

    document.querySelector(".total-orders-price").textContent = total.toFixed(2)
}

totalPrice()

function changeTotal (elem, value) {
    var multValue = parseFloat(elem.querySelector(".single-price").textContent);
    elem.querySelector(".general-price").textContent = (multValue * value).toFixed(2);
    totalPrice()
};

function quantityPlus (elem) {
    var parent = elem.parentElement.parentElement.parentElement;
    var inp = elem.parentElement.querySelector(".quantity-num");
    inp.value = parseInt(inp.value) + 1;
    changeTotal(parent, inp.value);
}

function quantityMinus (elem) {
    var parent = elem.parentElement.parentElement.parentElement;
    var inp = elem.parentElement.querySelector(".quantity-num");
    if (inp.value > 1) {
        inp.value = parseInt(inp.value) - 1;
        changeTotal(parent, inp.value);
    }
}

function deleteRow (elem) {
    var parent = elem.parentElement.parentElement.parentElement;
    parent.parentElement.removeChild(parent);
}



function checkform() {
    var fields = document.querySelectorAll('.order-confirm .imp');
    fields = Array.prototype.slice.call(fields);
    var counter = 0;
    var status = 1;
    fields.forEach(cur => {
        if (!cur.value && cur.parentElement.parentElement.style.display != 'none') {
            console.log('here');
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
    else document.querySelector('.order-confirm').submit();
}