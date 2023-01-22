// (c)2021 eBay Japan

﻿
function getAppierCode(){var appierCode='644b8d83a794e4a4d54c';var isLocalServer=false;try{if(typeof __PAGE_VALUE["IS_LOCAL_SERVER"]!="undefined")
isLocalServer=__PAGE_VALUE["IS_LOCAL_SERVER"];if(isLocalServer)
appierCode='b35c9cec83e38d7587a6';}catch(e){console.log('function getAppierCode - '+e);}
return appierCode;}
function Appier_Init(GAInfo){try{!function(q,g,r,a,p,h,js){if(q.qg)return;js=q.qg=function(){js.callmethod?js.callmethod.call(js,arguments):js.queue.push(arguments);};js.queue=[];p=g.createElement(r);p.async=!0;p.src=a;h=g.getElementsByTagName(r)[0];h.parentNode.insertBefore(p,h);}(window,document,'script','https://cdn.qgr.ph/qgraph.'+getAppierCode()+'.js');var appier_load_count=0;var appier_load_repeat=setInterval(function(){if(typeof qg!='undefined'){qg("event","custom_page_viewed",{"url":window.location.href});clearInterval(appier_load_repeat);}else if(appier_load_count>20){clearInterval(appier_load_repeat);}
appier_load_count++;},200);}catch(e){console.log('function Appier_Init - '+e);}}
function Appier_Pageview_Init(){if(navigator.userAgent.toLowerCase().indexOf('firefox')>0)
return;if(DeviceUtil.IsBot())
return;try{Appier_Init();}catch(e){console.log('function Appier_Pageview_Init - '+e);}}