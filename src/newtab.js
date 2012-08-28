var auto_refresh;

var reloadContent = function() {
  jQuery('#panel').fadeOut('slow', function() {
    jQuery(this).html(Duma.getRandomOne());
  }).fadeIn('slow');
};

jQuery(function() {
  jQuery("#changePanel").click(reloadContent);
  reloadContent();
  // auto_refresh = setInterval(reloadContent, 10000);
});