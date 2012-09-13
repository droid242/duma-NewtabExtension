var auto_refresh;
var gplustemplate = '<div class="gplus_container"><div class="g-plus" data-action="share" data-href="http://droid242.github.com/duma/#_ID_"></div></div>';

var reloadContent = function() {
  jQuery('#panel').fadeOut('slow', function() {
    var random = Duma.getRandomOne();
    jQuery(this).html(random);
    jQuery('iframe').parent().remove();
    jQuery(gplustemplate.replace(/_ID_/, random)).appendTo(jQuery("body"));
    (function() {
      var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
      po.src = 'https://apis.google.com/js/plusone.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
  }).fadeIn('slow');
};

jQuery(function() {
  jQuery('.original-newtab').click(function() {
    chrome.tabs.update({url:"chrome-internal://newtab/"});
  });
  jQuery("#changePanel").click(reloadContent);
  reloadContent();
  // auto_refresh = setInterval(reloadContent, 10000);
  
  window.___gcfg = {lang: 'hu'};

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
});