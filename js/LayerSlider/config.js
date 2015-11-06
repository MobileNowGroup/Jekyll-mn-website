$(document).ready(function() {
  if (typeof lsjQuery.fn.layerSlider == "undefined")
  {
    lsShowNotice('layerslider_1','jquery');
  }
  else if (typeof lsjQuery.transit == "undefined" || typeof lsjQuery.transit.modifiedForLayerSlider == "undefined")
  {
    lsShowNotice('layerslider_1', 'transit');
  }
  else
  {
    lsjQuery("#layerslider_1").layerSlider({
      width : '1440px',
      height : '650px',
      responsive : true,
      responsiveUnder : 0,
      sublayerContainer : 0,
      autoStart : false,
      pauseOnHover : true,
      firstLayer : 1,
      animateFirstLayer : true,
      randomSlideshow : false,
      twoWaySlideshow : true,
      loops : 0,
      forceLoopNum : true,
      autoPlayVideos : true,
      autoPauseSlideshow : 'auto',
      youtubePreview : 'maxresdefault.jpg',
      keybNav : true,
      touchNav : true,
      skin : 'fullwidth',
      skinsPath : '../../css/LayerSlider/skins/',
      navPrevNext : true,
      navStartStop : false,
      navButtons : false,
      hoverPrevNext : true,
      hoverBottomNav : false,
      showBarTimer : false,
      showCircleTimer : true,
      thumbnailNavigation : 'disabled',
      tnWidth : 300,
      tnHeight : 60,
      tnContainerWidth : '60%',
      tnActiveOpacity : 35,
      tnInactiveOpacity : 100,
      imgPreload : true,
      yourLogo : false,
      yourLogoStyle : 'position: absolute; left: 10px; top: 10px; z-index: 99;',
      yourLogoLink : false,
      yourLogoTarget : '_self',
      cbInit : function(element) { },
      cbStart : function(data) { },
      cbStop : function(data) { },
      cbPause : function(data) { },
      cbAnimStart : function(data) { },
      cbAnimStop : function(data) { },
      cbPrev : function(data) { },
      cbNext : function(data) { }
    });
  }
});
