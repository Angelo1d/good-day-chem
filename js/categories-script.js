parameters = () => {
    var queryString = window.location.search.substr(1);
    console.log(queryString)
    var checkedCheckboxes = Array();
    queryString = queryString.split('&');
    queryString.forEach(cur => {
        checkedCheckboxes.push(cur.split('=')[0]);
    })
    return(checkedCheckboxes)
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