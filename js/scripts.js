
jQuery('.apt-list-item').on('click', function() {
	// pull out the album cover url from the element's attributes
	var aptImageUrl = $(this).attr('data-apt-image')
  // log the album cover url to the console
  console.log(aptImageUrl)

    jQuery('#apartment-view').empty()

    jQuery('#apartment-view').css('background-image', `url(${aptImageUrl})`)

})
