var GRACE_MAP=function(){"use strict";var e,t,a,r,o,l,n,i,c,s,u,d,p,y,v,f,g,m,S,h,w,x,E,b,T,P,N,O,F,M,I,L,R,C,_,A,D,G,j,z,U;return G=function(){S=$("#region"),t=S.attr("data-bbox"),t=JSON.parse(t),s=S.attr("data-layers-length"),l=S.attr("data-color-bar"),l=JSON.parse(l),h=S.attr("data-range"),h=JSON.parse(h),x=h[1],w=h[0],r=S.attr("data-range-min"),o=S.attr("data-range-max"),y=S.attr("data-map-center"),y=JSON.parse(y),g=$("#plotter"),c=$("#get-plot"),P=S.attr("data-tracker"),P=JSON.parse(P),a=$(".highcharts-plot").highcharts(),N=S.attr("data-wms-url"),e=1e3,E={}},C=function(){var e=document.getElementById("cv").getContext("2d");l.forEach(function(t,a){e.beginPath(),e.fillStyle=t[0],e.fillRect(35*a,0,35,20),e.fillText(t[1],35*a,30)})},z=function(){var e=document.getElementById("cv"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),l.forEach(function(e,a){t.beginPath(),t.fillStyle=e[0],t.fillRect(35*a,0,35,20),t.fillText(e[1],35*a,30)})},L=function(){$("#poly-lat-lon").val(""),$("#point-lat-lon").val(""),$("#shp-lat-lon").val("")},D=function(){function e(){var e,t=new ol.format.GeoJSON;try{e=t.writeFeatures(n.getSource().getFeatures())}catch(e){return void $("#data").val(e.name+": "+e.message)}return e}var t=ol.proj.get("EPSG:3857"),a=new ol.layer.Tile({source:new ol.source.BingMaps({key:"5TC0yID7CYaqv3nVQLKe~xWVt4aXWMJq2Ed72cO4xsA~ApdeyQwHyH_btMjQS1NJ7OHKY8BK-W-EMQMrIavoQUMYXeZIQOUURnKGBOC7UCt4",imagerySet:"AerialWithLabels"})}),r=new ol.control.FullScreen,o=new ol.View({center:ol.proj.transform(y,"EPSG:4326","EPSG:3857"),projection:t,zoom:5});b=new ol.source.Vector,T=new ol.layer.Vector({source:b});var l=new ol.source.Vector({wrapX:!1}),n=new ol.layer.Vector({name:"my_vectorlayer",source:l,style:new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ol.style.Stroke({color:"#ffcc33",width:2}),image:new ol.style.Circle({radius:7,fill:new ol.style.Fill({color:"#ffcc33"})})})});O=new ol.source.TileWMS,F=new ol.layer.Tile({source:O}),u=[a,n,T,F],d={},(p=new ol.Map({target:document.getElementById("map"),layers:u,view:o})).addControl(new ol.control.ZoomSlider),p.addControl(r),p.crossOrigin="anonymous",i=document.getElementById("popup"),f=new ol.Overlay({element:i,positioning:"bottom-center",stopEvent:!0}),p.addOverlay(f);var c,s,v,g=function(e){var t=document.getElementById("types").value;$("#data").val(""),"None"!==t&&(s&&p.removeInteraction(s),s=new ol.interaction.Draw({source:l,type:e}),p.addInteraction(s)),"Point"!==v&&"Polygon"!==v||(s.on("drawend",function(e){c=e.feature}),s.on("drawstart",function(e){l.clear()}))};n.getSource().on("addfeature",function(t){var a=e(),r=JSON.parse(a),o=r.features[0].geometry.type;if("Point"==o){var l=r.features[0].geometry.coordinates,n=ol.proj.transform(l,"EPSG:3857","EPSG:4326");$("#point-lat-lon").val(n)}else if("Polygon"==o){l=r.features[0].geometry.coordinates[0];n=[],l.forEach(function(e){var t=ol.proj.transform(e,"EPSG:3857","EPSG:4326");n.push("["+t+"]")});var i='{"type":"Polygon","coordinates":[['+n+"]]}";$("#poly-lat-lon").val(i)}}),$("#types").change(function(e){"None"==(v=$(this).find("option:selected").val())?($("#data").val(""),L(),p.removeInteraction(s),n.getSource().clear(),T.getSource().clear()):"Upload"==v?(L(),n.getSource().clear(),T.getSource().clear(),p.removeInteraction(s),$modalUpload.modal("show")):"Point"==v?(L(),T.getSource().clear(),g(v)):"Polygon"==v&&(L(),T.getSource().clear(),g(v))}).change()},A=function(){!function(){var e,t,a;e=$("#app-content-wrapper")[0],t=new MutationObserver(function(){window.setTimeout(function(){p.updateSize()},350)}),$(window).on("resize",function(){p.updateSize()}),a={attributes:!0},t.observe(e,a)}(),p.on("singleclick",function(e){if($(i).popover("destroy"),"pointer"==p.getTargetElement().style.cursor&&"None"==$("#types").find("option:selected").val()){var t=e.coordinate;f.setPosition(t);var a=p.getView(),r=a.getResolution(),o=n.getSource().getGetFeatureInfoUrl(e.coordinate,r,a.getProjection(),{INFO_FORMAT:"application/json"});o&&$.ajax({type:"GET",url:o,dataType:"json",success:function(e){var t=parseFloat(e.features[0].properties.GRAY_INDEX);t=t.toFixed(2),$(i).popover({placement:"top",html:!0,content:"Value: "+t}),$(i).popover("show"),$(i).next().css("cursor","text")},error:function(e,t,a){console.log(Error)}})}}),p.on("pointermove",function(e){if(!e.dragging){var t=p.getEventPixel(e.originalEvent),a=p.forEachLayerAtPixel(t,function(e){if(e!=u[0]&&e!=u[1]&&e!=u[2]&&e!=u[4])return n=e,!0});p.getTargetElement().style.cursor=a?"pointer":""}})},j=function(){$("#slider").slider({value:1,min:0,max:s-1,step:1,animate:"fast",slide:function(e,t){var a=$("#select_layer option")[t.value].text;$("#grace-date").val(a);var r=$("#select_layer option")[t.value].value;U(r)}}),$("#opacity-slider").slider({value:.7,min:.2,max:1,step:.1,animate:"fast",slide:function(e,t){var a=t.value;$("#opacity").val(a);var r=$("#slider").slider("option","value"),o=$("#select_layer option")[r].value;l.forEach(function(e,t){e[2]=a}),U(o)}}),$("#max-slider").slider({value:50,min:1,max:50,step:1,animate:"fast",slide:function(e,t){var a=t.value;$("#cbar-slider").val(a);for(var r=$("#slider").slider("option","value"),n=$("#select_layer option")[r].value,i=(o=t.value)/10,c=-o,s=[],u=0;u<=20;u+=1)s.push(parseFloat(c).toFixed(1)),c+=i;l.forEach(function(e,t){e[1]=s[t]}),z(),U(n)},start:function(){$("#cbar-slider").val(10);for(var e=$("#slider").slider("option","value"),t=$("#select_layer option")[e].value,a=(o=10)/10,r=-o,n=[],i=0;i<=20;i+=1)n.push(parseFloat(r).toFixed(1)),r+=a;l.forEach(function(e,t){e[1]=n[t]}),z(),U(t),$("#max-slider").slider("value",10)}})},I=function(){var t=$("#slider").slider("value");E=setInterval(function(){t+=1,$("#slider").slider("value",t),t===s-1&&(t=0)},e)},$(".btn-run").on("click",I),$(".btn-stop").on("click",function(){clearInterval(E)}),$(".btn-increase").on("click",function(){clearInterval(E),e>250&&(e-=250,$("#speed").val((1/(e/1e3)).toFixed(2)),I())}),$(".btn-decrease").on("click",function(){clearInterval(E),e+=250,$("#speed").val((1/(e/1e3)).toFixed(2)),I()}),M=function(){p.removeLayer(F);var e=R(),t="sw_grace:"+$("#select_layer").find("option:selected").val(),a='<StyledLayerDescriptor version="1.0.0"><NamedLayer><Name>'+t+'</Name><UserStyle><isDefault></isDefault><FeatureTypeStyle><Rule>        <RasterSymbolizer>         <ColorMap>        <ColorMapEntry color="#000000" quantity="'+r+'" label="nodata" opacity="0.0" />'+e+"</ColorMap>        </RasterSymbolizer>        </Rule>        </FeatureTypeStyle>        </UserStyle>        </NamedLayer>        </StyledLayerDescriptor>";O=new ol.source.TileWMS({url:N,params:{LAYERS:t,SLD_BODY:a},serverType:"geoserver",crossOrigin:"Anonymous"}),F=new ol.layer.Tile({source:O}),p.addLayer(F)},U=function(e){var t=R(),a="sw_grace:"+e,o='<StyledLayerDescriptor version="1.0.0"><NamedLayer><Name>'+a+'</Name><UserStyle><FeatureTypeStyle><Rule>        <RasterSymbolizer>         <ColorMap>         <ColorMapEntry color="#000000" quantity="'+r+'" label="nodata" opacity="0.0" />'+t+"</ColorMap>        </RasterSymbolizer>        </Rule>        </FeatureTypeStyle>        </UserStyle>        </NamedLayer>        </StyledLayerDescriptor>";O.updateParams({LAYERS:a,SLD_BODY:o})},R=function(){var e="";return l.forEach(function(t,a){var r='<ColorMapEntry color="'+t[0]+'" quantity="'+t[1]+'" label="label'+a+'" opacity="'+t[2]+'"/>';e+=r}),e},_=function(){if(""==$("#poly-lat-lon").val()&&""==$("#point-lat-lon").val()&&""==$("#shp-lat-lon").val())return $(".warning").html("<b>No feature selected. Please create a feature using the map interaction dropdown. Plot cannot be generated without a feature.</b>"),!1;$(".warning").html("");var e=c.serialize();$.ajax({type:"POST",url:"/apps/grace/plot-region-sw/",dataType:"HTML",data:e,success:function(e){var t=JSON.parse(e);$("#plotter").highcharts({chart:{type:"area",zoomType:"x",height:350},title:{text:"Values at "+t.location,style:{fontSize:"14px"}},xAxis:{type:"datetime",labels:{format:"{value:%d %b %Y}",rotation:45,align:"left"},title:{text:"Date"}},yAxis:{title:{text:"Total Surface Water Storage Anomaly (cm)"}},exporting:{enabled:!0},series:[{data:t.values,name:"Total Surface Water Storage Anomaly (cm)"}]})}})},$("#btn-get-plot").on("click",_),m={},$(function(){G(),D(),A(),j(),C(),(v=$("#max-slider")).slider("option","start").call(v),$("#speed").val((1/(e/1e3)).toFixed(2)),$("#select_layer").change(function(){M();var e=$(this).find("option:selected").index();$("#slider").slider("value",e)}).change(),$("#slider").on("slidechange",function(e,t){var r=P[t.value];a.series[1].setData([[r,w],[r,x]]);var o=$("#select_layer option")[t.value].text;$("#grace-date").val(o);var l=$("#select_layer option")[t.value].value;U(l)})}),m}();