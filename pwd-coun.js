function toggleInfo(id) {
    var info = document.getElementById(id);
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
    }
}