document.observe('dom:loaded', function(){
	  var loki = new LokiAPI();
	  loki.onSuccess = function(location) {
	    $('address').update(location.house_number+' '+location.street+'<br/>'+location.city+', '+location.region_code+' '+location.postal_code+'<br/>'+location.latitude+', '+location.longitude);
	  };
	  loki.onFailure = function(error, msg){
	    alert('An error has been encountered ('+error+'). '+msg);
	  };
	  loki.setKey('beta');
	  loki.requestLocation(true, loki.FULL_STREET_ADDRESS_LOOKUP);
});