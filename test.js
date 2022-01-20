window.onload = function () {
    var modal = document.getElementById("modal-background");
    var close = document.getElementById("close");
    var open = document.getElementsByClassName("open")[0];

    open.onclick = function () {
        modal.style.display = "block";
    }

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}   //End window.onload
