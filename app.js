var placeSearch, autocomplete;

// List all address components as laid out in googles address object
var componentForm = {
  autocomplete: ['street_number', 'route'],
  inputCity: 'locality',
  inputState: 'administrative_area_level_1',
  inputZip: 'postal_code',
  inputCountry: 'country'
};

// autocomplete object

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(

(document.getElementById('autocomplete')),
      {type: ['geocode']});

  // Call fillInAddress when user selects an address from dropdown
  autocomplete.addListener('place_changed', fillInAddress);
}

// Fill fields with corresponding values
function fillInAddress() {

  // Get place data from autocomplete object
  var place = autocomplete.getPlace();
  console.log(place);

  // Enable each field, then fill them with the corresponding value from the place object
  for (var component in componentForm) {
    document.getElementById(component).disabled = false;
    document.getElementById(component).value = search(componentForm[component], place.address_components);
  }

  // Fill the autocomplete field with values from the place object
  // If a street # is not found, set the field to route only.
  if (search("street_number", place.address_components) != "") {
    document.getElementById("autocomplete").value = search("street_number", place.address_components) + " ";
  }
  document.getElementById("autocomplete").value += search("route", place.address_components);

  // Search the passed object for a specified address component/type and return value of the matched component.
  // If requested type does not exist, return empty string
  function search(type, placeObject) {
    for (var i = 0; i < placeObject.length; i++) {
      if (placeObject[i].types[0] === type) {
        return placeObject[i].short_name;
      } else if (i === placeObject.length - 1) {
        return "";
      }
    }
  }
}
