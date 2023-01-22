// (c)2021 eBay Japan

GACustomKey={};for(i=1;i<201;i++){GACustomKey['Dimension'+i]='dimension'+i;GACustomKey['Metric'+i]='metric'+i;}
GACustomKey.UACode='UACode';GAHitKey=new Object();GAHitKey.CID='clientId';GAHitKey.Title='title';GAHitKey.UserId='userId';GAHitKey.URL='location';GAHitKey.EventCategory='eventCategory';GAHitKey.EventAction='eventAction';GAHitKey.EventLabel='eventLabel';GAHitKey.EventValue='eventValue';GAHitKey.NonInteraction='nonInteraction';GAHitKey.campaignContent='campaignContent';GAHitKey.campaignId='campaignId';GAHitKey.campaignKeyword='campaignKeyword';GAHitKey.campaignMedium='campaignMedium';GAHitKey.campaignSource='campaignSource';GAHitKey.campaignName='campaignName';GAHitKey.currencyCode='currencyCode';GAHitKey.referrer='referrer';GAActionFieldKey=new Object();GAActionFieldKey.TransactionID='id';GAActionFieldKey.TransactionRevenue='revenue';GAActionFieldKey.TransactionTax='tax';GAActionFieldKey.TransactionShipping='shipping';GAActionFieldKey.TransactionCouponCode='coupon';GAActionFieldKey.TransactionAffiliation='affiliation';GAActionFieldKey.ProductActionList='list';GAActionFieldKey.CheckoutStep='step';GAActionFieldKey.CheckoutOptions='option';GAActionFieldKey.PromotionID='id';GAActionFieldKey.PromotionName='name';GAActionFieldKey.PromotionCreative='creative';GAActionFieldKey.PromotionPosition='position';GAEcommerceStepKey=new Object();GAEcommerceStepKey.Impression='impressions';GAEcommerceStepKey.Expose='expose';GAEcommerceStepKey.Detail='detail';GAEcommerceStepKey.Click='click';GAEcommerceStepKey.Add='add';GAEcommerceStepKey.Remove='remove';GAEcommerceStepKey.Checkout='checkout';GAEcommerceStepKey.Purchase='purchase';GAEcommerceStepKey.Refund='refund';GAEcommerceStepKey.PromotionImpression='promoView';GAEcommerceStepKey.PromotionClick='promoClick';GAProductKey=new Object();GAProductKey.ProductID='id';GAProductKey.ProductName='name';GAProductKey.ProductBrand='brand';GAProductKey.ProductCategory='category';GAProductKey.ProductVariant='variant';GAProductKey.ProductPrice='price';GAProductKey.ProductQuantity='quantity';GAProductKey.ProductCouponCode='coupon';GAProductKey.ProductPosition='position';GAProductKey.ImpressionList='list';var GA_CustomData={};var GA_HitData={};var GA_InitTrigger=false;function getCid(){var clientId="";try{var cookieData=document.cookie;var Cookies=cookieData.split(';')
for(var i=0;i<Cookies.length;i++){if(Cookies[i].split('=')[0]=='_ga'||Cookies[i].split('=')[0]==' _ga'){clientId=Cookies[i].split('=')[1];}}
if(clientId!=""){clientId=clientId.substring(6);}
if(clientId==""){ga(function(tracker){clientId=tracker.get('clientId');});}}catch(e){console.log('function getCid - '+e);}
return clientId;}
function getQueryStringObject(){var paramObj={};try{var params=window.location.search.substr(1).split('&');if(params=='')return{};for(var i=0;i<params.length;++i){var p=params[i].split('=',2);if(p.length==1)paramObj[p[0]]='';else paramObj[p[0]]=decodeURIComponent(p[1].replace(/\+/g,' '));}}catch(e){console.log('function getQueryStringObject - '+e);}
return paramObj;}
function doRequest(url){try{if(url!=null&&url!=''){var iframe=document.createElement("IFRAME");iframe.setAttribute("src",url);document.documentElement.appendChild(iframe);iframe.parentNode.removeChild(iframe);iframe=null;}}catch(e){console.log('function doRequest - '+e);}}
function getUACode(){var uacode='UA-154898041-1';var isLocalServer=false;try{if(typeof __PAGE_VALUE["IS_LOCAL_SERVER"]!="undefined")
isLocalServer=__PAGE_VALUE["IS_LOCAL_SERVER"];if(isLocalServer)
uacode='UA-154898041-2';}catch(e){console.log('function getUACode - '+e);}
return uacode;}
var qs=getQueryStringObject();var ga_referrer=qs.referrer;var ga_campaignSource=qs.utm_source;var ga_campaignMedium=qs.utm_medium;var ga_campaignName=qs.utm_campaign;var ga_campaignContent=qs.utm_content;var ga_campaignKeyword=qs.utm_term;var Scheme='jscall://';var UAcode=getUACode();var GTMcode='GTM-TH65ZF7';var AndroidWebview='GA_Android';var iOS_Webview_WK='GA_iOS_WK';var iOS_WebView_UI='GA_iOS_UI';var CustomObject={dimension:{},metric:{}};var gaLoad={GTM:true,GA:true,APP:DeviceUtil.isApp()};var browserInfo=navigator.userAgent;function GADatasend_Event(GAInfo_GA){try{var GAInfo={};var _category='';var _action='';if(!gaLoad.APP){GAInfo.hitType='event';for(key in GAInfo_GA){if(key.indexOf('dimension')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('metric')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('userId')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('location')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('title')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('eventLabel')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('eventValue')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('eventCategory')!==-1){_category=GAInfo_GA[key];GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('eventAction')!==-1){_action=GAInfo_GA[key];GAInfo[key]=GAInfo_GA[key];}}
if(_category.length>0&&_action.length>0){ga('gp.send',GAInfo);}}
else{var emptyObject=JSON.parse(JSON.stringify(CustomObject));emptyObject.type='E';for(key in GAInfo_GA){if(key.indexOf('dimension')!==-1){emptyObject.dimension[key]=GAInfo_GA[key];}
if(key.indexOf('metric')!==-1){emptyObject.metric[key]=GAInfo_GA[key];}
if(key.indexOf('userId')!==-1){emptyObject[key]=GAInfo_GA[key];}
if(key.indexOf('location')!==-1){emptyObject[key]=GAInfo_GA[key];}
if(key.indexOf('title')!==-1){emptyObject[key]=GAInfo_GA[key];}
if(key.indexOf('eventLabel')!==-1){emptyObject['label']=GAInfo_GA[key];}
if(key.indexOf('eventValue')!==-1){emptyObject['value']=GAInfo_GA[key];}
if(key.indexOf('eventCategory')!==-1){_category=GAInfo_GA[key];emptyObject['category']=GAInfo_GA[key];}
if(key.indexOf('eventAction')!==-1){_action=GAInfo_GA[key];emptyObject['action']=GAInfo_GA[key];}}
if(_category.length>0&&_action.length>0){if(DeviceUtil.isAndroidApp()&&window.gascriptAndroid)
window.gascriptAndroid.GA_DATA(JSON.stringify(emptyObject));else if(DeviceUtil.isIOSApp()&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.gascriptCallbackHandler)
webkit.messageHandlers.gascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));}}}catch(e){console.log('function GADatasend_Event - '+e);}}
function GADatasend_Page(GAInfo_GA){try{var GAInfo={};if(!gaLoad.APP){GAInfo.hitType='pageview';for(key in GAInfo_GA){if(key.indexOf('dimension')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('metric')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('userId')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('location')!==-1){GAInfo[key]=GAInfo_GA[key];}
if(key.indexOf('title')!==-1){GAInfo[key]=GAInfo_GA[key];}}
ga('gp.send',GAInfo);}
else{var emptyObject=JSON.parse(JSON.stringify(CustomObject));emptyObject.type='P';for(key in GAInfo_GA){if(key.indexOf('dimension')!==-1){emptyObject.dimension[key]=GAInfo_GA[key];}
if(key.indexOf('metric')!==-1){emptyObject.metric[key]=GAInfo_GA[key];}
if(key.indexOf('userId')!==-1){emptyObject[key]=GAInfo_GA[key];}
if(key.indexOf('location')!==-1){emptyObject[key]=GAInfo_GA[key];}
if(key.indexOf('title')!==-1){emptyObject[key]=GAInfo_GA[key];}}
if(DeviceUtil.isAndroidApp()&&window.gascriptAndroid)
window.gascriptAndroid.GA_DATA(JSON.stringify(emptyObject));else if(DeviceUtil.isIOSApp()&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.gascriptCallbackHandler)
webkit.messageHandlers.gascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));}}catch(e){console.log('function GADatasend_Page - '+e);}}
function GA_Init(GAInfo){try{if(!gaLoad.APP){if(browserVersionCheck==='MSIE 5'||browserVersionCheck==='MSIE 6'||browserVersionCheck==='MSIE 7'||browserVersionCheck==='MSIE 8'){gaLoad.GTM=false;}
if(gaLoad.GTM){GTMsetCustomDimension(GAInfo);(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',GTMcode);}
if(gaLoad.GA){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create',UAcode,'auto','gp');ga('gp.set','anonymizeIp',true);ga('gp.require','ec');for(key in GAInfo){switch(true){case(key.indexOf('dimension')!==-1):case(key.indexOf('metric')!==-1):case(key.indexOf('title')!==-1):case(key.indexOf('userId')!==-1):case(key.indexOf('campaignContent')!==-1):case(key.indexOf('campaignId')!==-1):case(key.indexOf('campaignKeyword')!==-1):case(key.indexOf('campaignMedium')!==-1):case(key.indexOf('campaignSource')!==-1):case(key.indexOf('campaignName')!==-1):case(key.indexOf('referrer')!==-1):ga('gp.set',key,GAInfo[key]);break;}}
if(!gaLoad.GTM){GADatasend_Page(GAInfo)};}}
else{for(key in GAInfo){if(key.indexOf('dimension')!==-1)CustomObject.dimension[key]=GAInfo[key];if(key.indexOf('metric')!==-1)CustomObject.metric[key]=GAInfo[key];if(key.indexOf('title')!==-1)CustomObject[key]=GAInfo[key];if(key.indexOf('userId')!==-1)CustomObject[key]=GAInfo[key];}
GADatasend_Page(GAInfo);}}catch(e){console.log('function GA_Init - '+e);}}
function App_GTMGA_Create(){try{if(typeof window['google_tag_manager']=='undefined'){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',GTMcode);}
if(typeof ga=='undefined'){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create',UAcode,'auto','gp');ga('gp.set','anonymizeIp',true);ga('gp.require','ec');}}catch(e){console.log('function App_GTMGA_Create - '+e);}}
function GA_Event(_category,_action,_label){try{if(!gaLoad.APP){var GAInfo={};GAInfo.hitType='event';GAInfo.eventCategory=_category;GAInfo.eventAction=_action;GAInfo.eventLabel=_label;ga('gp.send',GAInfo);}
else{var emptyObject=JSON.parse(JSON.stringify(CustomObject));emptyObject.type='E';if(_category!=null&&_category.length>0){emptyObject['category']=_category;}
if(_action!=null&&_action.length>0){emptyObject['action']=_action;}
if(_label!=null&&_label.length>0){emptyObject['label']=_label;}
if(DeviceUtil.isAndroidApp()&&window.gascriptAndroid)
window.gascriptAndroid.GA_DATA(JSON.stringify(emptyObject));else if(DeviceUtil.isIOSApp()&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.gascriptCallbackHandler)
webkit.messageHandlers.gascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));}}catch(e){console.log('function GA_Event - '+e);}}
function GTMsetCustomDimension(GAInfo_GTM){try{var GAInfo={};for(key in GAInfo_GTM){if(key.indexOf('dimension')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('metric')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('userId')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('location')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('title')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('campaignContent')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('campaignId')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('campaignKeyword')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('campaignMedium')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('campaignName')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('campaignSource')!==-1){GAInfo[key]=GAInfo_GTM[key];}
if(key.indexOf('referrer')!==-1){GAInfo[key]=GAInfo_GTM[key];}}
dataLayer=[GAInfo];}catch(e){console.log('function GTMsetCustomDimension - '+e);}}
function GADataSend_Ecommerce(EcommerceStep,GAAction,GAProduct,GAInfo){try{if(GAAction!=null&&EcommerceStep!=='promoView'&&EcommerceStep!=='promoClick')var GAActionField=GAAction;if(EcommerceStep.toLowerCase()==GAEcommerceStepKey.Expose)return;if(!gaLoad.APP){var GAInfoObj={};var EcommerceCategory='Ecommerce';var EcommerceAction=EcommerceStep.substring(0,1).toUpperCase()+EcommerceStep.substring(1).toLowerCase();for(key in GAInfo){if(key.indexOf('dimension')!==-1){GAInfoObj[key]=GAInfo[key];}
if(key.indexOf('metric')!==-1){GAInfoObj[key]=GAInfo[key];}
if(key.indexOf('userId')!==-1){GAInfoObj[key]=GAInfo[key];}
if(key.indexOf('location')!==-1){GAInfoObj[key]=GAInfo[key];}
if(key.indexOf('title')!==-1){GAInfoObj[key]=GAInfo[key];}
if(key.indexOf('nonInteraction')!==-1){GAInfoObj[key]='1';}
if(key.indexOf('currencyCode')!==-1){GAInfoObj[key]=GAInfo[key];}}
switch(EcommerceStep.toLowerCase()){case'impressions':if(GAAction!==null&&GAProduct!==null){for(var i=0;i<GAProduct.length;i++){GAProduct[i].list=GAActionField.list;}
GA_Impression_Product(GAProduct);}
break;case'detail':case'click':case'add':case'remove':case'checkout':case'purchase':case'refund':ga('gp.ec:setAction',EcommerceStep,GAActionField);if(GAProduct!==null){GA_Product(GAProduct);}
break;case'promoview':if(GAAction!==null){GA_Promotion_WEB(GAAction);}
break;case'promoclick':ga('gp.ec:setAction','promo_click');if(GAAction!==null){GA_Promotion_WEB(GAAction);}
default:break;}
ga('gp.send','event',EcommerceCategory,EcommerceAction,GAInfoObj);}
else{var emptyObject=JSON.parse(JSON.stringify(CustomObject));emptyObject.type='E';emptyObject.category='Ecommerce';emptyObject.action=EcommerceStep.substring(0,1).toUpperCase()+EcommerceStep.substring(1).toLowerCase();for(key in GAInfo){if(key.indexOf('dimension')!==-1){emptyObject.dimension[key]=GAInfo[key];}
if(key.indexOf('metric')!==-1){emptyObject.metric[key]=GAInfo[key];}
if(key.indexOf('userId')!==-1){emptyObject[key]=GAInfo[key];}
if(key.indexOf('location')!==-1){emptyObject[key]=GAInfo[key];}
if(key.indexOf('title')!==-1){emptyObject[key]=GAInfo[key];}
if(key.indexOf('nonInteraction')!==-1){emptyObject[key]='1';}}
var step=EcommerceStep.toLowerCase();emptyObject.ecommerce={};if(GAInfo!==null&&GAInfo.currencyCode){emptyObject.ecommerce.currencyCode=GAInfo.currencyCode;}
emptyObject.ecommerce[step]={};switch(EcommerceStep.toLowerCase()){case'impressions':case'detail':case'click':case'add':case'remove':case'checkout':case'purchase':case'refund':if(GAAction!==null){emptyObject.ecommerce[step]['actionField']=GAActionField;}
if(GAProduct!==null){emptyObject.ecommerce[step]['products']=GAProduct;}
break;case'promoview':case'promoclick':var step=EcommerceStep.toLowerCase();if(GAAction!==null){emptyObject.ecommerce[step]['promotions']=GAActionField;}
break;default:break;}
if(DeviceUtil.isAndroidApp()&&window.gascriptAndroid)
window.gascriptAndroid.GA_DATA(JSON.stringify(emptyObject));else if(DeviceUtil.isIOSApp()&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.gascriptCallbackHandler)
webkit.messageHandlers.gascriptCallbackHandler.postMessage(JSON.stringify(emptyObject));}}catch(e){console.log('function GADataSend_Ecommerce - '+e);}}
function GA_Product(cart){try{for(var i=0;i<cart.length;i++){var product=cart[i];ga('gp.ec:addProduct',product);}}catch(e){console.log('function GA_Product - '+e);}}
function GA_Impression_Product(cart){try{for(var i=0;i<cart.length;i++){var product=cart[i];ga('gp.ec:addImpression',product);}}catch(e){console.log('function GA_Impression_Product - '+e);}}
function GA_Promotion_WEB(GAAction){try{for(key in GAAction){if(key.indexOf('promo')!==-1){var promotionObj=GAAction[key];ga('gp.ec:addPromo',promotionObj);}}}catch(e){console.log('function GA_Promotion_WEB - '+e);}}
function GA_Promotion_APP(GAAction){var promoArray=[];try{for(key in GAAction){if(key.indexOf('promo')!==-1){var promotionObj=GAAction[key];promoArray.push(promotionObj);}}}catch(e){console.log('function GA_Promotion_WEB - '+e);}
return promoArray;}
var browserVersionCheck=(function(){var userAgentbrowser=navigator.userAgent,tem,M=userAgentbrowser.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(M[1])){tem=/\brv[ :]+(\d+)/g.exec(userAgentbrowser)||[];return'IE '+(tem[1]||'');}
if(M[1]==='Chrome'){tem=userAgentbrowser.match(/\b(OPR|Edge)\/(\d+)/);if(tem!=null)return tem.slice(1).join(' ').replace('OPR','Opera');}
M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,'-?'];if((tem=userAgentbrowser.match(/version\/(\d+)/i))!=null)M.splice(1,1,tem[1]);return M.join(' ');})();function eventLinstener(vari){try{var gpGaEventAttrCategory=vari.getAttribute('ga-category');var gpGaEventAttrAction=varivari.getAttribute('ga-action');var gpGaEventAttrLabel=vari.getAttribute('ga-label');if(gpGaEventAttrCategory!==null&&gpGaEventAttrAction!==null){if(gpGaEventAttrLabel!==null||gpGaEventAttrLabel!==undefined)
GA_Event(gpGaEventAttrCategory,gpGaEventAttrAction,gpGaEventAttrLabel);else GA_Event(gpGaEventAttrCategory,gpGaEventAttrAction,undefined);}
if(gpGaEventAttrCategory===null&&gpGaEventAttrAction===null){console.log('gp_className 클래스를 가진 태그에 카테고리와 액션을 추가해주세요.');}}catch(e){console.log('function eventLinstener - '+e);}}
function useWinloadd(){try{if(browserVersionCheck!=='MSIE 5'&&browserVersionCheck!=='MSIE 6'&&browserVersionCheck!=='MSIE 7'&&browserVersionCheck!=='MSIE 8'){var gpGaEventClickClass=document.getElementsByClassName('gp_className');for(var i=0;i<gpGaEventClickClass.length;i++){gpGaEventClickClass[i].removeEventListener('click',eventLinstener(event));gpGaEventClickClass[i].addEventListener('click',eventLinstener(event));}}
else{document.getElementsByClassName=function(cl){ga
var retnode=[];var elem=this.getElementsByTagName('*');for(var i=0;i<elem.length;i++){if((' '+elem[i].className+' ').indexOf(' '+cl+' ')>-1)retnode.push(elem[i]);}
return retnode;};var gpGaEventClickClass=document.getElementsByClassName('gp_className');for(var i=0;i<gpGaEventClickClass.length;i++){gpGaEventClickClass[i].attachEvent('onclick',function(event){var gpGaEventAttrCategory=undefined;var gpGaEventAttrAction=undefined;var gpGaEventAttrLabel=undefined;for(var i=0;i<event.srcElement.attributes.length;i++){if(event.srcElement.attributes[i].name==='ga-category'){gpGaEventAttrCategory=event.srcElement.attributes('ga-category').value;}else if(event.srcElement.attributes[i].name==='ga-action'){gpGaEventAttrAction=event.srcElement.attributes('ga-action').value;}else if(event.srcElement.attributes[i].name==='ga-label'){gpGaEventAttrLabel=event.srcElement.attributes('ga-label').value;}}
if(gpGaEventAttrCategory!==undefined&&gpGaEventAttrAction!==undefined){if(gpGaEventAttrLabel!==null||gpGaEventAttrLabel!==undefined)
GA_Event(gpGaEventAttrCategory,gpGaEventAttrAction,gpGaEventAttrLabel);else GA_Event(gpGaEventAttrCategory,gpGaEventAttrAction,undefined);}
if(gpGaEventAttrCategory===undefined&&gpGaEventAttrAction===undefined){console.log('gp_className 클래스를 가진 태그에 카테고리와 액션을 추가해주세요.');}});}}}catch(e){console.log('function useWinloadd - '+e);}}
function GetGACommonData(){try{GA_CustomData.Dimension1=getCid();var data=Util.getCookie("GA_COMMON_DATA");if(data!=''&&Public.isLogin()){var arr=data.split("||");GA_CustomData.Dimension2=arr[0];GA_CustomData.Dimension4=arr[2];GA_CustomData.Dimension5=arr[3];GA_CustomData.Dimension6=arr[4];GA_CustomData.Dimension17=arr[5];GA_HitData.UserId=arr[0];}
GA_CustomData.Dimension7=(Public.isLogin()?'Y':'N');GA_CustomData.Dimension8=(typeof(__PAGE_VALUE.MEMBER_KIND)!="undefined"&&__PAGE_VALUE.MEMBER_KIND=="N"?'Y':'N');var ga_jaehu_id=Util.getCookie("jaehu_id");var ga_jaehu_group_id='';var ga_channel_type=DeviceUtil.isApp()?'APP':(DeviceUtil.isMobile()?"MOWEB":"PCWEB");var ga_lastviewed_item=Util.getCookie("lastViewGoods").split(":").length>1?Util.getCookie("lastViewGoods").split(":")[0]:"";var ga_sid=UriUtil.parseQueryString("sid","",location.href);if(_page_screen_name=='catalog_goods_goods'&&typeof(qs["catalogno"])!='undefined')GA_CustomData.Dimension21=qs["catalogno"];if(!DeviceUtil.isApp()&&ga_sid!='')GA_CustomData.Dimension22=ga_sid;GA_CustomData.Dimension23=Util.getCookie("searchinflowcheck");if(ga_jaehu_id!='')GA_CustomData.Dimension24=ga_jaehu_id;if(ga_jaehu_group_id!='')GA_CustomData.Dimension25='';if(ga_lastviewed_item)GA_CustomData.Dimension26=ga_lastviewed_item;GA_CustomData.Dimension32=ga_channel_type;GA_CustomData.Dimension33=GMKT.ServiceInfo.ClientLang;GA_CustomData.Dimension34=window.location.href;GA_CustomData.Dimension35=(window.ga_search_keyword&&ga_search_keyword!='')?ga_search_keyword:'';if(GA_CustomData.Dimension35.endsWith(" "))GA_CustomData.Dimension35=GA_CustomData.Dimension35.substring(0,GA_CustomData.Dimension35.length-1);if(GA_CustomData.Dimension35.endsWith("%20"))GA_CustomData.Dimension35=GA_CustomData.Dimension35.substring(0,GA_CustomData.Dimension35.length-3);GA_CustomData.Dimension36=(window.ga_search_type)?ga_search_type:'';GA_CustomData.Dimension37=(window.ga_search_result)?ga_search_result:'';if(typeof(ga_cart_count_item_active)!="undefined")GA_CustomData.Dimension59=ga_cart_count_item_active;if(typeof(ga_cart_count_item_inactive)!="undefined")GA_CustomData.Dimension60=ga_cart_count_item_inactive;if(typeof(ga_cart_count_shop)!="undefined")GA_CustomData.Dimension61=ga_cart_count_shop;if(typeof(ga_cart_count_save_deliveryfee)!="undefined")GA_CustomData.Dimension62=ga_cart_count_save_deliveryfee;if(typeof(ga_cart_count_set_discount_shop)!="undefined")GA_CustomData.Dimension63=ga_cart_count_set_discount_shop;if(typeof(ga_cart_count_set_discount_item)!="undefined")GA_CustomData.Dimension64=ga_cart_count_set_discount_item;GA_HitData.Title=_page_screen_name;GA_HitData.currencyCode='JPY';}catch(e){console.log('function GetGACommonData - '+e);}}
function GA_CheckData(){}
function IsPossibleSendGA(){var ret=false;try{if(typeof ga!=='undefined'&&ga.hasOwnProperty('loaded')&&ga.loaded===true){ret=true;}}catch(e){console.log('function IsPossibleSendGA - '+e);}
return ret;}
function GA_Pageview_Init(){if(DeviceUtil.IsBot())
return;if(typeof ga!='undefined'&&GA_InitTrigger)return;GA_InitTrigger=true;try{if(DeviceUtil.isApp()){App_GTMGA_Create();return;}
GA_CheckData();GetGACommonData();var pv_obj=new Object();for(key in GA_CustomData){pv_obj[GACustomKey[key]]=GA_CustomData[key];}
for(key in GA_HitData){pv_obj[GAHitKey[key]]=GA_HitData[key];}
GA_Init(pv_obj);GA_Data_Clear();}catch(e){console.log('function GA_Pageview_Init - '+e);}}
function GA_Virtual_Pageview_Init(virtual_obj){try{if(DeviceUtil.isApp())
return;GA_CheckData();GetGACommonData();for(key in GA_CustomData){if(typeof virtual_obj[GACustomKey[key]]=='undefined')
virtual_obj[GACustomKey[key]]=GA_CustomData[key];}
for(key in GA_HitData){if(typeof virtual_obj[GAHitKey[key]]=='undefined')
virtual_obj[GAHitKey[key]]=GA_HitData[key];}
GADatasend_Page(virtual_obj);GA_Data_Clear();}catch(e){console.log('function GA_Pageview_Init - '+e);}}
function GA_Ecommerce_Send(step_Key,action_obj,product_arr,ecommerce_hit){try{if(DeviceUtil.IsBot())
return;GA_CheckData();GetGACommonData();for(key in GA_CustomData){if(typeof ecommerce_hit[GACustomKey[key]]=='undefined')
ecommerce_hit[GACustomKey[key]]=GA_CustomData[key];}
for(key in GA_HitData){if(typeof ecommerce_hit[GAHitKey[key]]=='undefined')
ecommerce_hit[GAHitKey[key]]=GA_HitData[key];}
for(var i=0;i<product_arr.length;i++){CheckExternalUrl(product_arr[i]);if(typeof(product_arr[i].dimension50)!="undefined"&&product_arr[i].dimension50=='')product_arr[i].dimension50="(not_set)";if(typeof(product_arr[i].dimension67)!="undefined"&&product_arr[i].dimension67=='')product_arr[i].dimension67="(not_set)";}
if(!gaLoad.APP)GetDataForDataLake(step_Key,action_obj,product_arr,ecommerce_hit);GADataSend_Ecommerce(step_Key,action_obj,product_arr,ecommerce_hit);GA_Data_Clear();}catch(e){console.log('function GA_Ecommerce_Send - '+e);}}
function GA_Data_Clear(){GA_CustomData={};GA_HitData={};}
function GetGACommonDataForApp(){if(DeviceUtil.isApp()){App_GTMGA_Create();}
var obj=new Object();try{GA_CheckData();GetGACommonData();GA_CustomData.Dimension34='';for(key in GA_CustomData){obj[GACustomKey[key]]=GA_CustomData[key];}
for(key in GA_HitData){obj[GAHitKey[key]]=GA_HitData[key];}
GA_Data_Clear();}catch(e){console.log('function GetGACommonDataForApp - '+e);}
return obj;}
function GA_Event_Call(_category,_action,_label){GA_Event(_category,_action,_label);}
function CheckExternalUrl(data){var temp_pagescreenname=data.dimension50;if(temp_pagescreenname.length>0){if(temp_pagescreenname=='external_url'||temp_pagescreenname.indexOf('external_url(')>-1){if(temp_pagescreenname.indexOf('qsm')>-1)
data.dimension67='external_qsm';else if(temp_pagescreenname.indexOf('admin')>-1)
data.dimension67='external_admin';else
data.dimension67='external_othersite';}
else if(temp_pagescreenname=='push')
data.dimension67='external_push';else if(temp_pagescreenname=='directurl')
data.dimension67='external_directurl';else if(temp_pagescreenname.indexOf('valuecommerce(')>-1)
data.dimension67='external_othersite';}}
function GetGAPageScreenName(){if(typeof(_page_screen_name)!="undefined"&&_page_screen_name!=null&&_page_screen_name.length>0)
return _page_screen_name;else
return"";}
function GetDataForDataLake(step_Key,action_obj,product_arr,ecommerce_hit){var DataLakeObj={};try{if(action_obj&&typeof(action_obj)!='undefined'){DataLakeObj.action_obj=action_obj;}
if(product_arr&&typeof(product_arr)!='undefined'){DataLakeObj.product_arr=product_arr;}
if(ecommerce_hit&&typeof(ecommerce_hit)!='undefined'){DataLakeObj.ecommerce_hit=ecommerce_hit;}
DataLakeObj.step=step_Key;DataLakeObj.channel=(DeviceUtil.isMobile()?(DeviceUtil.isApp()?'APP':'MOWEB'):'PCWEB');DataLakeObj.mobile_os=(DeviceUtil.isMobile()?(DeviceUtil.isIOS()?'IOS':'Android'):'');DataLakeObj.useragent=window.navigator.userAgent;DataLakeObj.timestamp=getTimeStamp();var str_json=JSON.stringify(DataLakeObj);var param=new RMSParam();param.add("queueName","GADATA_WEB");param.add("jsonData",str_json);RMSHelper.asyncCallWebMethod(Public.getServiceUrl("swe_AjaxLoggingService.asmx"),"SendGAData",param.toJson(true),function(result,svc,methodName,xmlHttpasync){},true);}catch(ex){}}
function getTimeStamp(){var curr_time=new Date();var utc_time=curr_time.getTime()+(curr_time.getTimezoneOffset()*60*1000);var jp_time_diff=9*60*60*1000;var jp_curr=new Date(utc_time+jp_time_diff);var s=leadingZeros(jp_curr.getFullYear(),4)+'-'+
leadingZeros(jp_curr.getMonth()+1,2)+'-'+
leadingZeros(jp_curr.getDate(),2)+' '+
leadingZeros(jp_curr.getHours(),2)+':'+
leadingZeros(jp_curr.getMinutes(),2)+':'+
leadingZeros(jp_curr.getSeconds(),2);return s;}
function leadingZeros(n,digits){var zero='';n=n.toString();if(n.length<digits){for(i=0;i<digits-n.length;i++)
zero+='0';}
return zero+n;}
if(!String.prototype.endsWith){String.prototype.endsWith=function(searchString,position){var subjectString=this.toString();if(typeof position!=='number'||!isFinite(position)||Math.floor(position)!==position||position>subjectString.length){position=subjectString.length;}
position-=searchString.length;var lastIndex=subjectString.indexOf(searchString,position);return lastIndex!==-1&&lastIndex===position;};}