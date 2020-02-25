parameters = () => {
    var queryString = window.location.search.substr(1);
    var checkedCheckboxes = Array();
    queryString = queryString.split('&');
    queryString.forEach(cur => {
        checkedCheckboxes.push(cur.split('=')[0]);
    })
    if (checkedCheckboxes[0] === "")
        checkedCheckboxes = Array()
    return(checkedCheckboxes)
}

{
    var params = parameters();
    var insertDiv = document.querySelector(".filters-applied");
    insertDiv.style.add
    console.log(!params.length == 0)
    if (!params.length == 0) {
        var generatedHTML = '<div><h3>Вибрані категорії: </h3>';
        params.forEach(cur => {
            let categotyName = document.querySelector(`label[for="${cur}"]`).textContent;
            generatedHTML += `<div class="active-filter">
                                <span>${categotyName}</span>
                                <label for="${cur}"><img src="../images/cancel.png" alt=""></label>
                            </div>`;
        });
        generatedHTML += "</div>"
        insertDiv.insertAdjacentHTML('beforeend', generatedHTML);
    } else {
        insertDiv.style.visbility = "hidden";
    }
}

{
    var params = parameters()
    params.forEach(cur => {
        try {
            document.querySelector(`input[name=${cur}]`).checked = true;
        } catch {}
    })
}

{
    var checkbox = document.querySelectorAll('input[type="checkbox"]')
    for(var i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener('change', function() {
            if (this.checked) {
                if (!parameters().includes(this.name))
                    this.parentElement.parentElement.submit();
            } else {
                this.parentElement.parentElement.submit();
            }
        })
    }
}

function getLastPosition() {
    document.location.reload(true);
}