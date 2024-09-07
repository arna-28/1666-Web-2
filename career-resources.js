// Search function for the resources section
function searchResources() {
    const input = document.getElementById('resourceSearchInput').value.toUpperCase();
    const resourceCards = document.getElementsByClassName('resource-card');
    
    for (let i = 0; i < resourceCards.length; i++) {
        let title = resourceCards[i].getAttribute('data-title');
        if (title.toUpperCase().indexOf(input) > -1) {
            resourceCards[i].style.display = "";
        } else {
            resourceCards[i].style.display = "none";
        }
    }
}
