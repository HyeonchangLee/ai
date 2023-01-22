// (c)2021 eBay Japan

var storageHtmlKey="interest_items_html",storageJsonKey="interest_items_json",storageDtKey="interest_items_save_dt",storageGdNosKey="interest_items_goods_nos";function existCookieKey(key){var ckValues=document.cookie;if(typeof ckValues==="undefined"||ckValues==null||ckValues=="")
return false;return ckValues.indexOf(key+"=")>=0;}
function useAbleLocalStorage(){if(window.localStorage)
return true;else
return false;}
function getMyInterestGDNos(){var topCnt=10;var wishItemGoodsNos=Util.getCookie("ezwish");var todayViewItemGoodsNos=Util.getTodaysViewGoodsList();if(wishItemGoodsNos==null)wishItemGoodsNos="";if(todayViewItemGoodsNos==null)todayViewItemGoodsNos="";var interestItems=[];var splitWishs=wishItemGoodsNos==""?[]:wishItemGoodsNos.split(',');var splitTodays=todayViewItemGoodsNos==""?[]:todayViewItemGoodsNos.split(',');if(splitWishs.length+splitTodays.length>0){var wishTopCnt=5;var uniqueTodayArray=[];for(var i=0;i<splitTodays.length;i++){var splitInfo=splitTodays[i].split('!');var gd_no=splitInfo.length>0?splitInfo[0]:"";if(gd_no!=""){if(wishItemGoodsNos.indexOf(gd_no)==-1){uniqueTodayArray.push(splitTodays[i]);}}}
if(splitWishs.length<5){wishTopCnt=splitWishs.length;}
if(uniqueTodayArray.length<5){wishTopCnt=10-uniqueTodayArray.length;}
interestItems=setInterestGDNos(interestItems,splitWishs,0,wishTopCnt,"W");if(interestItems.length<10){interestItems=setInterestGDNos(interestItems,uniqueTodayArray,0,topCnt,"T");}}
return{interest_items:interestItems,getGdnos:function(){return interestItems.map(function(item){return item.gd_no;});},getTypes:function(){return interestItems.map(function(item){return item.type;});}}}
function setInterestGDNos(interestItems,itemInfos,gdIdx,maxCnt,type){for(var i=0;i<itemInfos.length;i++){var item=itemInfos[i];var tmpSplit=item.split('!');var gd_no='';if(tmpSplit.length>1)
gd_no=tmpSplit[gdIdx];if(gd_no!=''){if(interestItems.filter(function(element){return element.gd_no==gd_no;}).length==0){interestItems.push({gd_no:gd_no,type:type});}}
if(interestItems.length>=maxCnt)
break;}
return interestItems;}
function getMyInterestItemsGoodsNos(){var ret=[];if(Public.isLogin()){var param=new RMSParam();ret=RMSHelper.callWebMethod(Public.getServiceUrl("swe_MyAjaxService.asmx"),"GetMyInterestItemGDNoList",param.toJson());}
return ret;}
function getMyInterestItemsByGoodsNos(items){var _items=typeof items!=="object"?items:getMyInterestGDNos();var interestItemTypes=_items.getTypes();var interestItems=_items.getGdnos();var ret=[];if(interestItems.length>0){var param=new RMSParam();param.add("interest_gd_nos",interestItems.join(","));param.add("interest_gd_no_types",interestItemTypes.join(","));ret=RMSHelper.callWebMethod(Public.getServiceUrl("swe_MyAjaxService.asmx"),"GetMyInterestItemListByGoodsNos",param.toJson());}
return ret;}
function getMyInterestItems(){var ret=[];if(Public.isLogin()){var param=new RMSParam();ret=RMSHelper.callWebMethod(Public.getServiceUrl("swe_MyAjaxService.asmx"),"GetMyInterestItemList",param.toJson());}
return ret;}
function getRefreshCacheInfo(addCheck){if(useAbleLocalStorage()){var cacheInterestItems=localStorage.getItem(storageGdNosKey);if(cacheInterestItems!=null){var cacheInterestDt=localStorage.getItem(storageDtKey);if(cacheInterestDt=="")
return{isRefresh:true,nowGdnos:null};else{var DAY_NUM=1000*60*60*24;var cacheDt=new Date(cacheInterestDt);var diffMilliseconds=new Date()-cacheDt;if((diffMilliseconds/DAY_NUM)>=1){return{isRefresh:true,nowGdnos:null};}
if(cacheDt<new Date("2020-01-02 17:30:00"))
return{isRefresh:true,nowGdnos:null};}
if(addCheck!=undefined&&typeof addCheck==="function"){if(addCheck()){return{isRefresh:true,nowGdnos:null};}}
var items=getMyInterestGDNos();var nowIntrestItems=items.getGdnos();var joinItems=nowIntrestItems.join(",");if(joinItems==cacheInterestItems){return{isRefresh:false,nowGdnos:items};}}}
return{isRefresh:true,nowGdnos:null};}
function getMainInterestSection(callback){var _callback=callback||function(result,svc,xmlHttp){};var url=Public.getCurrentHostUrl()+"/gmkt.inc/Mobile/My/ViewInterestAjaxAppend.aspx";if(Public.isLogin()){RMSHelper.asyncCallWebObject(url,"POST","",function(result,svc,xmlHttp){if(result!=null&&result!=""&&xmlHttp.status!=500){if(useAbleLocalStorage()){localStorage.setItem(storageHtmlKey,result);localStorage.setItem(storageDtKey,new Date());localStorage.setItem(storageGdNosKey,interestItems);localStorage.removeItem(storageJsonKey);}
_callback(result,svc,xmlHttp);}});}
else{var items=getMyInterestGDNos();var interestItems=items.getGdnos();var interestItemTypes=items.getTypes();var interest_items_html="";if(useAbleLocalStorage()){var addCheck=function(){return localStorage.getItem(storageHtmlKey)==null;}
var refreshInfo=getRefreshCacheInfo(addCheck);if(!refreshInfo.isRefresh)
interest_items_html=localStorage.getItem(storageHtmlKey);}
if(interestItems.length>0&&(!useAbleLocalStorage()||interest_items_html=="")){var postData="interest_gd_nos="+interestItems.join(",");if(interestItemTypes!=null&&interestItemTypes.length>0)
postData+="&interest_gd_no_types="+interestItemTypes.join(",");RMSHelper.asyncCallWebObject(url,"POST",postData,function(result,svc,xmlHttp){if(result!=null&&result!=""&&xmlHttp.status!=500){if(useAbleLocalStorage()){localStorage.setItem(storageHtmlKey,result);localStorage.setItem(storageDtKey,new Date());localStorage.setItem(storageGdNosKey,interestItems);localStorage.removeItem(storageJsonKey);}
_callback(result,svc,xmlHttp);}});}
else{_callback(interest_items_html,null,null);}}}
function getTodayViewsCookieFormat(){var param=new RMSParam();ret=RMSHelper.callWebMethod(Public.getServiceUrl("swe_MyAjaxService.asmx"),"GetViewdTodayCookieFormat",param.toJson());return ret;}
function checkExpireCookie(){if(Public.isLogin()){if(!existCookieKey("ezwish")&&wishItemGoodsNos==""){var wish_items_list=WishItems.getWishItemsList();if(wish_items_list.length>0){var map_items=wish_items_list.map(function(value,idx,items){return value+"!0";});wishItemGoodsNos=map_items.join(",");}
Util.setCookie("ezwish",wishItemGoodsNos);}
if(!existCookieKey("ezview")&&todayViewItemGoodsNos==""){todayViewItemGoodsNos=getTodayViewsCookieFormat();Util.setCookie("ezview",todayViewItemGoodsNos);}}}