var auto_refresh;

var reloadContent = function() {
  jQuery('#panel').fadeOut('slow', function() {
    jQuery(this).html(Duma.getRandomOne());
  }).fadeIn('slow');
};

jQuery(function() {
  jQuery('.original-newtab').click(function() {
    chrome.tabs.update({url:"chrome-internal://newtab/"});
  });
  jQuery("#changePanel").click(reloadContent);
  reloadContent();
  // auto_refresh = setInterval(reloadContent, 10000);
});