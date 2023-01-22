// (c)2021 eBay Japan

var stateData={gdlc_cd:'0',price:'',rank_extend:true,nowtrend_page:1,topsellershop_page:1,newarrival_page:1,recommend_brand_page:1}
var extendsMoreRanking=[];$(document).ready(function(){setTimeout(function(){if(document.location.hash=="#nowtrend"){$("html, body").animate({scrollTop:$("#section_fashion_trend").offset().top-25},500);}},1000);pageSetWishMarking();pageEventBinding();pageLoadState();});function pageEventBinding(){setWishClickBind();$("#btn_fashion_trend_more").bind("click",function(e){ShowItemList('trend',stateData.nowtrend_page+1,4);});$("#btn_fashion_topsellershop_more").bind("click",function(e){ShowItemList('topsellershop',stateData.topsellershop_page+1,4);});$("#btn_fashion_newarrival_more").bind("click",function(e){ShowItemList('newarrival',stateData.newarrival_page+1,4);});$("#btn_fashion_recommend_brand_more").bind("click",function(e){ShowItemList('recommend_brand',stateData.recommend_brand_page+1,6);});}
function ShowItemList(section,page_no,cnt){var lis=$("#ul_fashion_"+section+"_list li");lis.hide();var item_cnt=4;if(cnt!=undefined)
item_cnt=cnt;var total_page=Math.ceil(lis.length/item_cnt);var begin=((page_no-1)*item_cnt)-1;if(page_no==1||total_page<page_no){page_no=1;$("#ul_fashion_"+section+"_list li:lt("+item_cnt+")").show();}
else
$("#ul_fashion_"+section+"_list li:gt("+begin+"):lt("+item_cnt+")").show();$("#em_fashion_"+section+"_page").html(page_no.toString());var isSave=false;if(section=='trend'&&stateData.nowtrend_page!=page_no){stateData.nowtrend_page=page_no;isSave=true;}
else if(section=='topsellershop'&&stateData.topsellershop_page!=page_no){stateData.topsellershop_page=page_no;isSave=true;}
else if(section=='newarrival'&&stateData.newarrival_page!=page_no){stateData.newarrival_page=page_no;isSave=true;}
else if(section=='recommend_brand'&&stateData.recommend_brand_page!=page_no){stateData.recommend_brand_page=page_no;isSave=true;}
if(isSave==true)
pageSaveState();}
function getCategoryRanking(){var _gdlc_cd,_price;_price=$("#dv_rank_filter_price ul li.selected > button").attr("data-type");_gdlc_cd=$("#dv_rank_cate ul li.selected > button").attr("data-cd");if(_price==undefined)_price='';if(_gdlc_cd!=stateData.gdlc_cd){$("#dv_rank_filter_price > ul").hide();$("#ul_rank_filter_"+_gdlc_cd).show();$("#dv_rank_filter_price").scrollLeft(0);if(_price!=""){_price="";$("#dv_rank_filter_price > ul > li.selected").removeClass("selected");}
stateData.rank_extend=false;}
else if(_price!=stateData.price){stateData.rank_extend=false;}
else if(_price!=''&&_price==stateData.price){var path=event.path||(event.composedPath&&event.composedPath())||composedPath(event.target);for(var i=0;i<path.length;i++){if(path[i]!=undefined&&path[i]!=null&&path[i].type=='button'){var ctl=$(path[i]);var data_type=ctl.attr("data-type");if(data_type!=undefined){_price="";$("#dv_rank_filter_price > ul > li.selected").removeClass("selected");stateData.rank_extend=false;break;}}}}
if(typeof _gdlc_cd=="string"&&typeof _price=="string"){var view_cnt=10;var url=Public.getCurrentHostUrl()+"/gmkt.inc/Mobile/Category/InnerAjax/CategoryRankingAjaxAppend.aspx?ctg=1&gdlc_cd="+(_gdlc_cd=='0'?'':_gdlc_cd)+"&alias=D&price="+_price+"&v="+view_cnt;RMSHelper.asyncCallWebObject(url,"post",null,function(result,svc,xmlHttp){if(result!=null&&result!=undefined&&xmlHttp.status==200){if(result.trim()!=""){var cate_li=$(result).find("li");$("#ul_category_best").empty();$("#ul_category_best").append(cate_li);initWishButton("#ul_category_best");if(cate_li.length>0)
$("#dv_cate_no_data").hide();else{$("#dv_cate_no_data").show();}}
else{$("#ul_category_best").empty();}}
stateData.gdlc_cd=_gdlc_cd;stateData.price=_price;ExtendCategoryRank(stateData.rank_extend);pageSaveState();});}}
function composedPath(el){var path=[];while(el){path.push(el);if(el.tagName==='HTML'){path.push(document);path.push(window);return path;}
el=el.parentElement;}}
function initWishButton(parentSelector){pageSetWishMarking();setWishClickBind(parentSelector);}
function pageSetWishMarking(){getWishGDNoListMarking({targets:[{gd_attrname:"data_gd_no",selected_classname:"selected"},{gd_attrname:"goodscode",selected_classname:"selected"}]});}
function setWishClickBind(parentSelector){var target="button[name=btn_wish]";if(parentSelector!=undefined&&parentSelector!="")
target=parentSelector+" "+target;$(target).bind("click",function(e){WishItems.proSetWishList=true;WishItems.isShowToast=false;WishItems.setWishList(this,"selected");if(e){e.preventDefault();e.stopPropagation();}});}
function ExtendCategoryRank(isExtend){if(isExtend){$("#ul_category_best li").show();}
if(stateData.rank_extend!=isExtend){stateData.rank_extend=isExtend;pageSaveState();}
var key=getMoreRankingKey();if(extendsMoreRanking.indexOf(key)==-1)
extendsMoreRanking.push(key);}
function getMoreRankingKey(){var _gdlc_cd,_price;_price=$("#dv_rank_filter_price ul li.selected > button").attr("data-type");_gdlc_cd=$("#dv_rank_cate ul li.selected > button").attr("data-cd");return _gdlc_cd+"_"+_price;}
function pageLoadState(){if(window.performance&&performance.navigation.type==1){history.replaceState(null,null);}
if(history.state!=undefined&&history.state!=null&&history.state!=''){stateData=JSON.parse(history.state);ShowItemList('trend',stateData.nowtrend_page,4);ShowItemList('topsellershop',stateData.topsellershop_page,4);ShowItemList('newarrival',stateData.newarrival_page,4);ShowItemList('recommend_brand',stateData.recommend_brand_page,6);var isReloadCategoryRank=false;if(stateData.gdlc_cd!='0'){$("#li_rank_cate_0").removeClass("selected");$("#li_rank_cate_"+stateData.gdlc_cd).addClass("selected");$("#ul_rank_filter_0").css('display','none');$("#ul_rank_filter_"+stateData.gdlc_cd).css('display','');isReloadCategoryRank=true;}
if(stateData.price!=''){var li_id=stateData.price.replace("(","_").replace(",","__").replace("]","___");$("#li_rank_filter_"+stateData.gdlc_cd+"_"+li_id).addClass("selected");isReloadCategoryRank=true;}
if(isReloadCategoryRank)
getCategoryRanking();else if(stateData.rank_extend)
ExtendCategoryRank(true);}}
function pageSaveState(){var json=JSON.stringify(stateData);if(json!=history.state){history.replaceState(json,null,null);}}