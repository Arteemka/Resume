const panelItem = document.querySelectorAll(".section_title");

Array.from(panelItem).forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.toggle("icon-arrow-up");
    });
});