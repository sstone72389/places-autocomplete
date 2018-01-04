function initAutocomplete() {
	const input = document.querySelector('[data-type=autocomplete]');
	const autocomplete = new google.maps.places.Autocomplete(
      input,
      { types: ['geocode'] }
	);

	autocomplete.addListener('place_changed', () => {
		const placeSelected = autocomplete.getPlace();
		console.log(placeSelected);
		document.querySelector('[data-id=output]').innerHTML = placeSelected.adr_address;

document.querySelector('[data-type=autocomplete]').value = placeSelected.address_components[0].long_name + " " + placeSelected.address_components[1].short_name;

document.querySelector('[data-id=city]').value = placeSelected.vicinity;

document.querySelector('[data-id=state]').value = placeSelected.address_components[4].short_name;

document.querySelector('[data-id=country]').value = placeSelected.address_components[5].short_name;
    document.querySelector('[data-id=zip]').value = placeSelected.address_components[6].long_name;

});
}
