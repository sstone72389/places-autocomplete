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

document.querySelector('[data-id=address]').value = placeSelected.name;

document.querySelector('[data-id=city]').value = placeSelected.address_components[2].long_name;

document.querySelector('[data-id=state]').value = placeSelected.address_components[4].long_name;
    document.querySelector('[data-id=zip]').value = placeSelected.address_components[6].long_name;

});
}
