document.addEventListener("DOMContentLoaded", function() {

    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var accordionItem = button.closest('.accordion-item');
            if (accordionItem) {
                accordionItem.classList.toggle('active');
            }
        });
    });

});