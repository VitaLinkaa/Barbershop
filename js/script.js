"use strict";

const search = document.querySelector("#search");
search.addEventListener('input', changed)

function changed(event) {
	const substring = event.target.value.trim();

	document.querySelectorAll( '.service-list article').forEach( article => {
		const shouldBeVisible = substring === '' || article.dataset.content.toLowerCase().includes(substring.toLowerCase());
		article.style.display = shouldBeVisible ? 'block' : 'none';
	});
}


$(function(){
    $('.menuToggle').on('click', function() {
       $('.menu').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
        $('.arrow-top').addClass('active');
    } else {
        $('.arrow-top').removeClass('active');
    }
});



