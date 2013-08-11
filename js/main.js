$(document).ready(function() {
	// $('.title.name').on('mouseover', function() {
	// 	$('.title-menu').slideDown(500);
	// })

	$('#about-tab, #projects-tab, #blog-tab, #bucketlist-tab').on('click', function() {
			$('.tab').css({
				'background': 'transparent',
				'border': 'none',
				'color': '#555'
			});

			$(this).css({
				'background': '#BABABA',
				'color': '#fff200'
			});

			$('.tab-content').css('display', 'none');
			var tabName = $(this).get(0).id;
			$('.' + tabName + '-wrapper').css('display', 'block')
	})
});