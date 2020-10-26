/*
 Highcharts JS v8.2.2 (2020-10-22)

 Boost module

 (c) 2010-2019 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(f){"object"===typeof module&&module.exports?(f["default"]=f,module.exports=f):"function"===typeof define&&define.amd?define("highcharts/modules/boost-canvas",["highcharts"],function(m){f(m);f.Highcharts=m;return f}):f("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(f){function m(f,m,q,v){f.hasOwnProperty(m)||(f[m]=v.apply(null,q))}f=f?f._modules:{};m(f,"Extensions/BoostCanvas.js",[f["Core/Chart/Chart.js"],f["Core/Color/Color.js"],f["Core/Globals.js"],f["Series/LineSeries.js"],
f["Core/Series/Series.js"],f["Core/Utilities.js"]],function(f,m,q,v,A,r){var ca=m.parse,B=q.doc,da=q.noop,C=r.addEvent,x=r.extend,ea=r.fireEvent,fa=r.isNumber,ha=r.merge,ia=r.pick,y=r.wrap,k=A.seriesTypes,M;return function(){q.seriesTypes.heatmap&&y(q.seriesTypes.heatmap.prototype,"drawPoints",function(){var a=this.chart,b=this.getContext(),e=this.chart.inverted,f=this.xAxis,c=this.yAxis;b?(this.points.forEach(function(d){var g=d.plotY;"undefined"===typeof g||isNaN(g)||null===d.y||(g=d.shapeArgs,
d=a.styledMode?d.series.colorAttribs(d):d.series.pointAttribs(d),b.fillStyle=d.fill,e?b.fillRect(c.len-g.y+f.left,f.len-g.x+c.top,-g.height,-g.width):b.fillRect(g.x+f.left,g.y+c.top,g.width,g.height))}),this.canvasToSVG()):this.chart.showLoading("Your browser doesn't support HTML5 canvas, <br>please use a modern browser")});x(v.prototype,{getContext:function(){var a=this.chart,b=a.chartWidth,e=a.chartHeight,f=a.seriesGroup||this.group,c=this,m=function(a,c,e,b,f,d,g){a.call(this,e,c,b,f,d,g)};a.isChartSeriesBoosting()&&
(c=a,f=a.seriesGroup);var g=c.ctx;c.canvas||(c.canvas=B.createElement("canvas"),c.renderTarget=a.renderer.image("",0,0,b,e).addClass("highcharts-boost-canvas").add(f),c.ctx=g=c.canvas.getContext("2d"),a.inverted&&["moveTo","lineTo","rect","arc"].forEach(function(a){y(g,a,m)}),c.boostCopy=function(){c.renderTarget.attr({href:c.canvas.toDataURL("image/png")})},c.boostClear=function(){g.clearRect(0,0,c.canvas.width,c.canvas.height);c===this&&c.renderTarget.attr({href:""})},c.boostClipRect=a.renderer.clipRect(),
c.renderTarget.clip(c.boostClipRect));c.canvas.width!==b&&(c.canvas.width=b);c.canvas.height!==e&&(c.canvas.height=e);c.renderTarget.attr({x:0,y:0,width:b,height:e,style:"pointer-events: none",href:""});c.boostClipRect.attr(a.getBoostClipRect(c));return g},canvasToSVG:function(){this.chart.isChartSeriesBoosting()?this.boostClear&&this.boostClear():(this.boostCopy||this.chart.boostCopy)&&(this.boostCopy||this.chart.boostCopy)()},cvsLineTo:function(a,b,e){a.lineTo(b,e)},renderCanvas:function(){var a=
this,b=a.options,e=a.chart,f=this.xAxis,c=this.yAxis,k=(e.options.boost||{}).timeRendering||!1,g=0,v=a.processedXData,y=a.processedYData,N=b.data,l=f.getExtremes(),D=l.min,E=l.max;l=c.getExtremes();var A=l.min,B=l.max,O={},F,ja=!!a.sampling,G=b.marker&&b.marker.radius,P=this.cvsDrawPoint,H=b.lineWidth?this.cvsLineTo:void 0,Q=G&&1>=G?this.cvsMarkerSquare:this.cvsMarkerCircle,ka=this.cvsStrokeBatch||1E3,la=!1!==b.enableMouseTracking,R;l=b.threshold;var u=c.getThreshold(l),S=fa(l),T=u,ma=this.fill,U=
a.pointArrayMap&&"low,high"===a.pointArrayMap.join(","),V=!!b.stacking,W=a.cropStart||0;l=e.options.loading;var na=a.requireSorting,X,oa=b.connectNulls,Y=!v,I,J,w,z,K,t=V?a.data:v||N,pa=a.fillOpacity?(new m(a.color)).setOpacity(ia(b.fillOpacity,.75)).get():a.color,Z=function(){ma?(n.fillStyle=pa,n.fill()):(n.strokeStyle=a.color,n.lineWidth=b.lineWidth,n.stroke())},aa=function(c,b,f,d){0===g&&(n.beginPath(),H&&(n.lineJoin="round"));e.scroller&&"highcharts-navigator-series"===a.options.className?(b+=
e.scroller.top,f&&(f+=e.scroller.top)):b+=e.plotTop;c+=e.plotLeft;X?n.moveTo(c,b):P?P(n,c,b,f,R):H?H(n,c,b):Q&&Q.call(a,n,c,b,G,d);g+=1;g===ka&&(Z(),g=0);R={clientX:c,plotY:b,yBottom:f}},qa="x"===b.findNearestPointBy,ba=this.xData||this.options.xData||this.processedXData||!1,L=function(a,b,d){K=qa?a:a+","+b;la&&!O[K]&&(O[K]=!0,e.inverted&&(a=f.len-a,b=c.len-b),ra.push({x:ba?ba[W+d]:!1,clientX:a,plotX:a,plotY:b,i:W+d}))};this.renderTarget&&this.renderTarget.attr({href:""});(this.points||this.graph)&&
this.destroyGraphics();a.plotGroup("group","series",a.visible?"visible":"hidden",b.zIndex,e.seriesGroup);a.markerGroup=a.group;C(a,"destroy",function(){a.markerGroup=null});var ra=this.points=[];var n=this.getContext();a.buildKDTree=da;this.boostClear&&this.boostClear();this.visible&&(99999<N.length&&(e.options.loading=ha(l,{labelStyle:{backgroundColor:ca("#ffffff").setOpacity(.75).get(),padding:"1em",borderRadius:"0.5em"},style:{backgroundColor:"none",opacity:1}}),r.clearTimeout(M),e.showLoading("Drawing..."),
e.options.loading=l),k&&console.time("canvas rendering"),q.eachAsync(t,function(b,d){var g=!1,m=!1,k=!1,l=!1,n="undefined"===typeof e.index,r=!0;if(!n){if(Y){var p=b[0];var h=b[1];t[d+1]&&(k=t[d+1][0]);t[d-1]&&(l=t[d-1][0])}else p=b,h=y[d],t[d+1]&&(k=t[d+1]),t[d-1]&&(l=t[d-1]);k&&k>=D&&k<=E&&(g=!0);l&&l>=D&&l<=E&&(m=!0);if(U){Y&&(h=b.slice(1,3));var q=h[0];h=h[1]}else V&&(p=b.x,h=b.stackY,q=h-b.y);b=null===h;na||(r=h>=A&&h<=B);if(!b&&(p>=D&&p<=E&&r||g||m))if(p=Math.round(f.toPixels(p,!0)),ja){if("undefined"===
typeof w||p===F){U||(q=h);if("undefined"===typeof z||h>J)J=h,z=d;if("undefined"===typeof w||q<I)I=q,w=d}p!==F&&("undefined"!==typeof w&&(h=c.toPixels(J,!0),u=c.toPixels(I,!0),aa(p,S?Math.min(h,T):h,S?Math.max(u,T):u,d),L(p,h,z),u!==h&&L(p,u,w)),w=z=void 0,F=p)}else h=Math.round(c.toPixels(h,!0)),aa(p,h,u,d),L(p,h,d);X=b&&!oa;0===d%5E4&&(a.boostCopy||a.chart.boostCopy)&&(a.boostCopy||a.chart.boostCopy)()}return!n},function(){var b=e.loadingDiv,c=e.loadingShown;Z();a.canvasToSVG();k&&console.timeEnd("canvas rendering");
ea(a,"renderedCanvas");c&&(x(b.style,{transition:"opacity 250ms",opacity:0}),e.loadingShown=!1,M=setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b);e.loadingDiv=e.loadingSpan=null},250));delete a.buildKDTree;a.buildKDTree()},e.renderer.forExport?Number.MAX_VALUE:void 0))}});k.scatter.prototype.cvsMarkerCircle=function(a,b,e,d){a.moveTo(b,e);a.arc(b,e,d,0,2*Math.PI,!1)};k.scatter.prototype.cvsMarkerSquare=function(a,b,e,d){a.rect(b-d,e-d,2*d,2*d)};k.scatter.prototype.fill=!0;k.bubble&&
(k.bubble.prototype.cvsMarkerCircle=function(a,b,e,d,c){a.moveTo(b,e);a.arc(b,e,this.radii&&this.radii[c],0,2*Math.PI,!1)},k.bubble.prototype.cvsStrokeBatch=1);x(k.area.prototype,{cvsDrawPoint:function(a,b,e,d,c){c&&b!==c.clientX&&(a.moveTo(c.clientX,c.yBottom),a.lineTo(c.clientX,c.plotY),a.lineTo(b,e),a.lineTo(b,d))},fill:!0,fillOpacity:!0,sampling:!0});x(k.column.prototype,{cvsDrawPoint:function(a,b,e,d){a.rect(b-1,e,1,d-e)},fill:!0,sampling:!0});f.prototype.callbacks.push(function(a){C(a,"predraw",
function(){a.renderTarget&&a.renderTarget.attr({href:""});a.canvas&&a.canvas.getContext("2d").clearRect(0,0,a.canvas.width,a.canvas.height)});C(a,"render",function(){a.boostCopy&&a.boostCopy()})})}});m(f,"masters/modules/boost-canvas.src.js",[],function(){})});
//# sourceMappingURL=boost-canvas.js.map