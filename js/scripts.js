
$('.apt-list-item').on('click', function() {
	// pull out the apartment url from the element's attributes
	var aptImageUrl = $(this).attr('data-apt-image')
  // log the apartment url to the console
  console.log(aptImageUrl)

    $('#apartment-view').empty()

    $('#apartment-view').css('background-image', `url(${aptImageUrl})`)

})
