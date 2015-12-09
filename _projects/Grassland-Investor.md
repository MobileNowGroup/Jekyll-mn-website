---
title: Grassland Finance
permalink: /work/grassland-finance/
order: 6
projectTitle: "Grassland Investor"
support: "html5"
category: "finance_sort"
image: "2015/02/grassland_inv_thumbnail-495x400.jpg"
link: "grassland-finance"
socialShareText: "Grassland+Finance"
---
<div class="avia-layerslider solid_bottom_border">
  <div id="layerslider_1" class="ls-wp-container">

    <div class="ls-layer" style="slidedirection: right; slidedelay: 1000; durationin: 1000; durationout: 1000; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; ">
      <img src="{{ site.assetsurl }}2015/02/g2_back.jpg" class="ls-bg" alt="Slide background">
      <img class="ls-s-1" src="{{ site.assetsurl }}2015/02/g2_computer.png" style="position: absolute; top: 0px; left: 0px; durationin : 1000; durationout : 1000; easingin : easeInOutQuint; easingout : easeInOutQuint; delayin : 500; delayout : 0; showuntil : 0; ">
      <img class="ls-s-1" src="{{ site.assetsurl }}2015/02/g2_ipad1.png" style="position: absolute; top: 0px; left: 1px; durationin : 1000; durationout : 1000; easingin : easeInOutQuint; easingout : easeInOutQuint; delayin : 400; delayout : 0; showuntil : 0; ">
      <img class="ls-s-1" src="{{ site.assetsurl }}2015/02/g2_iphone.png" style="position: absolute; top: 0px; left: 0px; slidedirection : right; slideoutdirection : left; durationin : 1000; durationout : 1000; easingin : easeInOutQuint; easingout : easeInOutQuint; delayin : 300; delayout : 0; showuntil : 0; ">
      <img class="ls-s-1"  src="{{ site.assetsurl }}2015/03/g2_text2.png" style="position: absolute; top: 12px; left: -5px; durationin : 1000; durationout : 1000; easingin : easeInOutQuint; easingout : easeInOutQuint; delayin : 0; delayout : 0; showuntil : 0; ">
    </div>

    <div class="ls-layer" style="slidedirection: right; slidedelay: 1000; durationin: 1000; durationout: 1000; easingin: easeInOutQuint; easingout: easeInOutQuint; delayin: 0; delayout: 0; ">
      <img src="{{ site.assetsurl }}2015/02/g2_back.jpg" class="ls-bg" alt="Slide background">
      <img class="ls-s-1" src="{{ site.assetsurl }}2015/02/g2_computer2.png"  style="position: absolute; top: -1px; left: -1px; slidedirection : right; slideoutdirection : left; durationin : 1000; durationout : 1000; easingin : easeInOutQuint; easingout : easeInOutQuint; delayin : 300; delayout : 0; showuntil : 0; ">
      <img class="ls-s-1" src="{{ site.assetsurl }}2015/03/g2_text.png" style="position: absolute; top: 8px; left: 2px; durationin : 1000; durationout : 1000; easingin : easeInOutQuint; easingout : easeInOutQuint; delayin : 0; delayout : 0; showuntil : 0; ">
    </div>
  </div>
</div>

<div class="wrapper content project-detail" markdown="1">
  <h2 class="content-h2 with-bottom-line">Grassland Investor</h2>

#### Mission

Create a corporate facing platform for China Financial Services solution provider Grassland Finance, to keep existing and potential investors abreast of operations.

Whilst the look and feel should be aligned to the sister consumer sites, a significantly different audience with a more international skew needed to be accommodated.

#### Concept

Responsive was again selected, with a slightly cleaner interface implemented, in keeping with the audience.

With a key focus on making the latest Grassland performance data available to investors, a secure Investor Portal was created to house latest company reports, as well as provide a repository of historical publications.

Powered by the same backend platform as the consumer sites, all content features from; news to team and careers to dynamic performance snapshots can be updated via the CMS.

#### Results

Bilingual site launched in Jan 2015

<http://www.grassfin.com/>

</div>

{% include share-and-download.html %}

<script>
$(document).ready(function() {
  if (typeof $.fn.layerSlider == "undefined") {
    lsShowNotice('layerslider_1','jquery');
  }
  else if (typeof $.transit == "undefined" || typeof $.transit.modifiedForLayerSlider == "undefined") {
    lsShowNotice('layerslider_1', 'transit');
  }
  else
  {
    $("#layerslider_1").layerSlider({
      width : '1440px',
      height : '600px',
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
      globalBGColor : '#ffffff',
      navPrevNext : true,
      navStartStop : false,
      navButtons : true,
      hoverPrevNext : false,
      hoverBottomNav : false,
      showBarTimer : false,
      showCircleTimer : true,
      thumbnailNavigation : 'disabled',
      tnWidth : 100,
      tnHeight : 60,
      tnContainerWidth : '60%',
      tnActiveOpacity : 35,
      tnInactiveOpacity : 100,
      imgPreload : true,
      yourLogo : false,
      yourLogoStyle : 'left: 10px; top: 10px;',
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
</script>
