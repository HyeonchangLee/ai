// (c)2021 eBay Japan

var stateData={recommendCatalogue_page:1}
$(document).ready(function(){pageEventBinding();pageLoadState();});function pageEventBinding(){if(typeof MobileUtil!="undefinded"&&MobileUtil.isIOSApp()&&typeof GA_Event_Call!="undefined"){window.setTimeout(function(){$('#bestCatalogueCategory ul li button').bind("click",function(e){if(e.currentTarget.classList.contains('trigger')==false&&e.currentTarget.parentElement.className.indexOf("selected")==-1){GA_Event_Call('app_kbeauty','best_category','');}});},1000);}
$("#btn_recommendCatalogue_more").bind("click",function(e){ShowItemList('recommendCatalogue',stateData.recommendCatalogue_page+1,4);});}
function pageLoadState(){if(window.performance&&performance.navigation.type==1){history.replaceState(null,null);}
if(history.state!=undefined&&history.state!=null&&history.state!=''){stateData=JSON.parse(history.state);ShowItemList('recommendCatalogue',stateData.recommendCatalogue_page,4);}
else{var randomPage=getRandomIntInclusive(1,recommendItemTotaPage);ShowItemList('recommendCatalogue',randomPage,4);}}
function pageSaveState(){var json=JSON.stringify(stateData);if(json!=history.state){history.replaceState(json,null,null);}}
function ShowItemList(section,page_no,cnt){var lis=$("#ul_"+section+"_list li");lis.hide();var item_cnt=4;if(cnt!=undefined)
item_cnt=cnt;var total_page=Math.ceil(lis.length/item_cnt);var begin=((page_no-1)*item_cnt)-1;if(page_no==1||total_page<page_no){page_no=1;$("#ul_"+section+"_list li:lt("+item_cnt+")").show();}
else
$("#ul_"+section+"_list li:gt("+begin+"):lt("+item_cnt+")").show();$("#curpage_"+section).html(page_no.toString());var isSave=false;if(section=='recommendCatalogue'&&stateData.nowtrend_page!=page_no){stateData.recommendCatalogue_page=page_no;isSave=true;}
if(isSave==true)
pageSaveState();}
function GetCatalogueBestItem(gdlc_cd){var search_item_url=Public.getCurrentHostUrl()+"/gmkt.inc/Mobile/Special/KBeautyAppend.aspx?search_type=kbeauty_best_item&gdlc_cd="+gdlc_cd;RMSHelper.asyncCallWebObject(search_item_url,"post",null,function(result,svc,xml_http){if(result!=undefined&&result!=null&&result!=''){var ctl=document.getElementById("ul_BestItem");ctl.innerHTML=result;}});}
function getRandomIntInclusive(min,max){min=Math.ceil(min);max=Math.floor(max);return Math.floor(Math.random()*(max-min+1))+min;}