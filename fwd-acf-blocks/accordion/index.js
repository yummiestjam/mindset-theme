document.addEventListener("DOMContentLoaded", function() {

    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        window.acf.addAction( 'render_block_preview/type=accordion', acf_render_accordion );
    }
    
    function acf_render_accordion() {

        const accordionButtons = document.querySelectorAll('.accordion-button');

        accordionButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var accordionItem = button.closest('.accordion-item');
                if (accordionItem) {
                    accordionItem.classList.toggle('active');
                }
            });
        });

    }

});