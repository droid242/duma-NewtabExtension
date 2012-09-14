var auto_refresh;
var gplustemplate = '<div class="gplus_container"><div class="g-plus" data-action="share" data-href="http://duma.folyam.info/_ID_.html"></div></div>';

var reloadContent = function(e) {
  e.preventDefault();
  jQuery('#panel').fadeOut('slow', function() {
    var that = this;
    jQuery.get('http://duma.folyam.info/random.json', function(res) {
      jQuery('#panel').html(res.content).fadeIn('slow');
      jQuery('iframe').parent().remove();
      jQuery(gplustemplate.replace(/_ID_/, res.human_id)).appendTo(jQuery("body"));
      (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
      })();
      history.pushState('', '', '/'+res.human_id+'.html');
    }, 'json');
  });
  
  jQuery('#panel').fadeOut('slow', function() {
    var random = Duma.getRandomOne();
    jQuery(this).html(random);
  }).fadeIn('slow');
};

jQuery(function() {
  jQuery('.original-newtab').click(function() {
    chrome.tabs.update({url:"chrome-internal://newtab/"});
  });
  jQuery("#changePanel").click(reloadContent);
  reloadContent(new Event(""));
  // auto_refresh = setInterval(reloadContent, 10000);
  
  window.___gcfg = {lang: 'hu'};

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
});