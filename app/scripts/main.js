(function(){
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    // sectionsColor: ['#DAC500', '#1BBC9B', '#7E8F7C'],
    menu: '#menu',
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    responsiveWidth: 1100,
    afterRender: function(){
      $('video').get(0).play();
    }
  });
})();
