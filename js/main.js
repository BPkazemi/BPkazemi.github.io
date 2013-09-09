$(document).ready(function() {
	// $('.title.name').on('mouseover', function() {
	// 	$('.title-menu').slideDown(500);
	// })

	$('.left').on('mouseover', function() {
		$(this).css({
			width: '32%',
			opacity: 1
		});
	}).on('mouseout', function() {
		$(this).css({
			width: '27%',
			opacity: 0.92
		});
	});

	$('#about-tab, #projects-tab, #blog-tab, #bucketlist-tab').on('click', function() {
			// Add custom styling to selected tab
			$('.tab').each(function() {
				$(this).removeClass('selected');
			});
			$(this).addClass('selected');

			// Hide all right side content
			$('.tab-content').css('display', 'none');

			// Show appropriate right side content
			var tabName = $(this).get(0).id;
			$('.' + tabName + '-wrapper').css('display', 'block')
	})
});