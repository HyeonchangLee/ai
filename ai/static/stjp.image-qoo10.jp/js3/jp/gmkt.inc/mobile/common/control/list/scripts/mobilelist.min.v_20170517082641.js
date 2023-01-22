// (c)2013 Giosis Group

var COUNT_lp=0;var TYPE_lp="";var __slide_page_size_lp=1;var __slide_now_page_lp=0;var __slide_total_page_lp=0;var __new_li_cnt_lp=1;var currency_cd=GMKT.ServiceInfo.currencyCode;var LPLuckyPriceTotalListTimerIndex_lp=new Array();var LPLuckyPriceTotalListTimerTime_lp=new Array();var start_dt_lp="";var slot_priority_no_lp=0;var s_page_index_lp=0;var NewTimerIndex_lp=new Array();var NewTimerTime_lp=new Array();var NewTimerAucInfo_lp=new Array();var QshoppingiosApp="";var QshoppingandApp="";var Qshopping_m18_iosApp="";var Qshopping_m18_andApp="";var QstyleiosApp="";var QstyleandApp="";var QtalkiosApp="";var QtalkandApp="";window.isActive=true;$(window).focus(function(){this.isActive=true;});$(window).blur(function(){this.isActive=false;});var __width=parseInt($(window).width());var timer;var timer1;$(function(){$(document).ready(function(){if(GMKT.DeviceInfo.BrowserName=="MSIE"){if($("#top_Slide_lp").length>0)$("#top_Slide_lp").draggable(desk_slide_drag_option_lp);$("#next_sliding_lp").each(function(){$(this).bind("click",function(e){if(__slide_now_page_lp<__slide_total_page_lp){LPSetPageData_lp("next");}
LPSetSlideEvent_lp("slow");return false;});});$("#prev_sliding_lp").each(function(){$(this).bind("click",function(e){if(__slide_now_page_lp>1){LPSetPageData_lp("prev");}
LPSetSlideEvent_lp("slow");return false;});});}
else if(GMKT.DeviceInfo.Kind=="Desktop"){if(__slide_now_page_lp>1)
topSlideMove_lp("");if($("#top_Slide_lp").length>0)$("#top_Slide_lp").draggable(desk_slide_drag_option_lp);$("#next_sliding_lp").each(function(){$(this).bind("click",function(e){if(__slide_now_page_lp<__slide_total_page_lp){LPSetPageData_lp("next");}
LPSetSlideEvent_lp("slow");return false;});});$("#prev_sliding_lp").each(function(){$(this).bind("click",function(e){if(__slide_now_page_lp>1){LPSetPageData_lp("prev");}
LPSetSlideEvent_lp("slow");return false;});});}
else if(GMKT.DeviceInfo.Kind=="Mobile"||GMKT.DeviceInfo.Kind=="Tablet"){if(window.navigator.userAgent.indexOf("PlayBook")==-1){if($("#top_Slide_lp").length>0)$("#top_Slide_lp").touch(touch_event_top_lp);$("#next_sliding_lp").each(function(){$(this).bind("click",function(e){topSlideMove_lp('next');return false;});});$("#prev_sliding_lp").each(function(){$(this).bind("click",function(e){topSlideMove_lp('prev');return false;});});}}
__slide_now_page_lp=1;COUNT_lp=$("#lucky_tempate_div_cnt").val();__slide_total_page_lp=COUNT_lp;if(COUNT_lp==1)$("#next_sliding_lp").hide();LPSetSlideLayerWidthHeight1_lp();$("#itemDetail").hide();$("#btn_LuckPriceHelp").each(function(){$(this).bind("click",function(e){$("#div_LuckPriceHelp").css("top",$(window).scrollTop()+50);$("#bg_black").show();$("#div_LuckPriceHelp").show();});});$("#btn_LuckPriceHelp_close").each(function(){$(this).bind("click",function(e){$("#bg_black").hide();$("#div_LuckPriceHelp").hide();});});$("#btn_ly_close").each(function(){$(this).bind("click",function(e){$("#div_ly_cm").hide();});});$("#btn_MameQFind_Close").each(function(){$(this).bind("click",function(e){$("#div_MameQHelp").hide();});});$("#btn_MameQFind_Close2").each(function(){$(this).bind("click",function(e){$("#div_MameQHelp2").hide();});});$("#btn_ShareLayer").each(function(){$(this).bind("click",function(e){$("#div_ly_cm").show();});});if($('#btn_LuckPriceHelp').length>0){$get("btn_LuckPriceHelp").focus();}
if(typeof(LPLuckyPriceTotalList_lp)=="object")
{LPLuckyPriceTotalList_lp.TimerStart();}
if($("#div_mobile_list").find("div[class*=lst_vm_slide]")){SlideShowImgInit();$("div.slide_innr").find("ul[class*=ui-draggable]").children('li').eq(1).addClass('on');$("div.slide_innr").find("ul[class*=ui-draggable]").each(function(){var len=$(this).children('li').length;$(this).css("width",__width*len);$(this).children('li').css("width",__width);$(this).css("margin-left",(__width*-1));})}
$("div.slide_innr").find("button").on('click',function(){var selectedIdx=0;var left=100;var total_len=$(this).closest('div.slide_innr').find('ul').find('li').length;var selectdUl=$(this).closest('div.slide_innr').find('ul');var page=$(this).closest('div.slide_innr').find('span[class^=total]').find('strong').text();if($(this).hasClass('bt_nxt')){$(selectdUl).animate({left:-(__width)},800,function(){$(selectdUl).find('li').first().appendTo($(selectdUl));$(selectdUl).css("left","");var next_page=parseInt(page)+1;if(total_len<next_page)
next_page=1;$(this).closest('div.slide_innr').find('span[class^=total]').find('strong').text(next_page);});}else{$(selectdUl).animate({left:__width},800,function(){$(selectdUl).find('li').last().prependTo($(selectdUl));$(selectdUl).css("left","");var prev_page=parseInt(page)-1;if(prev_page<1)
prev_page=total_len;$(this).closest('div.slide_innr').find('span[class^=total]').find('strong').text(prev_page);});}});if(GMKT.DeviceInfo.Kind=='Mobile'||GMKT.DeviceInfo.Kind=='Tablet'){$("#div_mobile_list").children("div[class*=lst_vm_slide]").find('div.slide_innr').find('ul').touch(Drag.Touch);}
$("#div_mobile_list").find("select[gid]").each(function(){var gid=$(this).attr("gid");var gid_bar_style="gid_bar_style_"+gid;var gid_spot_div=$("#"+gid_bar_style);var gid_bar_div_length=$("#"+gid_bar_style).find("ul").length;if(gid_bar_div_length==0){gid_spot_div.hide();return;}
MobileGidBarSwiperSlide("gid_bar_slide_"+gid);});})});function SlideShowImgInit(){$("#div_mobile_list").children("div[class*=lst_vm_slide]").find("ul[id*=ul_slide_]").each(function(){var selectedID=$(this).attr("id");var firstNode=$("#"+selectedID).children('li').first();var lastNode=$("#"+selectedID).children('li').last();firstNode.before(lastNode);});}
var Drag={belt_obj:undefined,slide_list:undefined,page_no:1,isAnimate:false,MAX_PAGE:undefined,SLIDE_WIDTH:undefined,SLIDE_LI:undefined,SLIDE_LI_LEN:undefined,SLIDE_HEIGHT:undefined,SELECTED_ON:1}
Drag.Touch={dragx:true,stop:function(ui,val){var selectedId=ui.attr('id');Drag.belt_obj=$('#'+selectedId);Drag.SLIDE_WIDTH=$(Drag.belt_obj).css('width');Drag.SLIDE_LI_LEN=$(Drag.belt_obj).children('li').length;Drag.page_no=$(Drag.belt_obj).parent().children('div[class^=lst_vm_ctrl]').find('strong').text();var isValidate=((Drag.isAnimate==false)&&val.dragx);if(isValidate==false){return false;}
Drag.SLIDE_LI=__width;var distance=val.move_position.left;if(distance>0){Drag.PrevPage(selectedId);}else if(distance==0){Drag.CurrentPage();}
else{Drag.NextPage(selectedId);}}};Drag.NextPage=function(id){var direction=-1;var x=(Drag.SLIDE_LI*direction)*Drag.SELECTED_ON;gtouch.translate($(Drag.belt_obj),__width*direction,0,'500ms',function(){Drag.NextMoveSlideAfter($(Drag.belt_obj));},true);}
Drag.NextMoveSlideAfter=function(obj){Drag.SELECTED_ON=Drag.SELECTED_ON+1;Drag.page_no=(parseInt(Drag.page_no)+1);$(obj).children('li:eq('+Drag.SELECTED_ON+')').addClass('on');$(obj).find('li').first().appendTo($(obj));if(Drag.SLIDE_LI_LEN<Drag.page_no)
Drag.page_no=1;$(obj).parent().children('div[class^=lst_vm_ctrl]').find('strong').text(Drag.page_no);}
Drag.PrevPage=function(id){var direction=1;var x=(Drag.SLIDE_LI*direction)*Drag.SELECTED_ON;gtouch.translate($(Drag.belt_obj),__width*direction,0,'500ms',function(){Drag.PrevMoveSlideAfter($(Drag.belt_obj));},true);}
Drag.PrevMoveSlideAfter=function(obj){Drag.SELECTED_ON=Drag.SELECTED_ON-1;Drag.page_no=(parseInt(Drag.page_no)-1);if(Drag.page_no<1)
Drag.page_no=Drag.SLIDE_LI_LEN;$(obj).children('li:eq('+Drag.SELECTED_ON+')').addClass('on');$(obj).find('li').last().prependTo($(obj));$(obj).parent().children('div[class^=lst_vm_ctrl]').find('strong').text(Drag.page_no);}
Drag.CurrentPage=function(){var direction=0;gtouch.translate($(Drag.belt_obj),0,0,'500ms');}
function LPSetSlideLayerWidthHeight1_lp(){var height,left;if(GMKT.DeviceInfo.DeviceName=="iPhone"||GMKT.DeviceInfo.DeviceName=="iPod"){height=430;}
else if(GMKT.DeviceInfo.DeviceName=="iPad"){height=430;}
else if(GMKT.DeviceInfo.DeviceName=="GalaxyNote"){height=480;}
else if(GMKT.DeviceInfo.DeviceName=="Galaxy"||GMKT.DeviceInfo.DeviceName=="GalaxyTab"){height=374;}
else{height=430;}
if($("#top_Slide_lp").length>0)$("#top_Slide_lp").css("width",(__slide_total_page_lp*320)+"px");$("li[name='s_slide']").css("height",height+"px");$("li[name='s_slide']").css("width","320px");}
var desk_slide_drag_option_lp={axis:'x',start:function(e,ui){__org_position=ui.position;},stop:function(e,ui){if(parseInt(ui.position.left)-__org_position.left<0){if(parseInt(ui.position.left)-__org_position.left<-100){$("#next_sliding_lp").click();}
else{LPSetSlideEvent_lp("fast");}}
else{if(parseInt(ui.position.left)-__org_position.left>100){$("#prev_sliding_lp").click();}
else{LPSetSlideEvent_lp("fast");}}}};LPSetSlideEvent_lp=function(speed){var left_position=0;left_position=(__slide_now_page_lp-1)*-320;if(speed==undefined)speed="slow";LPMameQ_imgLoadChange();if($("#top_Slide_lp").length>0)$("#top_Slide_lp").animate({left:left_position+"px"},speed);}
LPMameQ_imgLoadChange=function(){if($("#lp_goods_img"+(__slide_now_page_lp-1))!=undefined){if($("#lp_goods_img"+(__slide_now_page_lp-1)).attr("mameq_load")=="N"&&$("#lp_goods_img"+(__slide_now_page_lp-1)).attr("gd_img_src")!=""){$("#lp_goods_img"+(__slide_now_page_lp-1)).attr("mameq_load","Y");$("#lp_goods_img"+(__slide_now_page_lp-1)).attr("src",$("#lp_goods_img"+(__slide_now_page_lp-1)).attr("gd_img_src").toString());}}}
LPSetPageData_lp=function(type){if(type=="next"){if(__slide_now_page_lp<__slide_total_page_lp){__slide_now_page_lp++;}}
else if(type=="prev"){if(__slide_now_page_lp>1){__slide_now_page_lp--;}}
if(__slide_total_page_lp>__slide_now_page_lp){$("#next_sliding_lp").show();}
else{$("#next_sliding_lp").hide();}
if(__slide_now_page_lp>1){$("#prev_sliding_lp").show();}
else{$("#prev_sliding_lp").hide();}}
LPLuckyPriceTotalList_lp={TimerStart:function(){var _i=0;for(var i=0;i<$("span[name='lp_total_auction_left_time']").length;i++){var remain_time=0,remain_hour=0,remain_minute=0,remain_second=0;var dream_remain_time=$("span[name='lp_total_auction_left_time']")[i].attributes.remain_time.value;var timeround_yn=$("span[name='lp_total_auction_left_time']")[i].attributes.timeround.value;if(timeround_yn=="Y"){if(dream_remain_time==null||dream_remain_time==""||dream_remain_time=="____"||dream_remain_time=="NaN"||dream_remain_time=="0_0_0_0"){remain_time=0;remain_hour=0;remain_minute=0;remain_second=0;}
else{var split_remain_time=dream_remain_time.split("_");if(split_remain_time.length>0)
remain_time=split_remain_time[0];if(split_remain_time.length>1)
remain_hour=split_remain_time[1];if(split_remain_time.length>2)
remain_minute=split_remain_time[2];if(split_remain_time.length>3)
remain_second=split_remain_time[3];}
remain_time=parseInt(remain_time)+1;var NewTime=new Date(2000,1,remain_time,remain_hour,remain_minute,remain_second);LPLuckyPriceTotalListTimerIndex_lp[_i]=parseInt(i+1);LPLuckyPriceTotalListTimerTime_lp[_i]=NewTime;_i++;}}
LPLuckyPriceTotalList_lp.TimeRoutine();},TimeRoutine:function(){for(var r=0;r<LPLuckyPriceTotalListTimerIndex_lp.length;r++){var NewTime=LPLuckyPriceTotalListTimerTime_lp[r];var index=LPLuckyPriceTotalListTimerIndex_lp[r];var intNew=NewTime.getSeconds()-1;NewTime.setSeconds(intNew);var strTime="";if(NewTime.getMonth()!=1){strTime=strTime+eval(NewTime.getMonth()-1)+' '+MultiLang.findCommonResource("mobile/common/control/goods/mameqluckypricelist.ascx","months")+' ';}
if(NewTime.getDate()!=1){if(NewTime.getDate()>1){strTime=strTime+eval(NewTime.getDate()-1)+' '+MultiLang.findCommonResource("mobile/common/control/goods/mameqluckypricelist.ascx","days")+' ';}else{strTime=strTime+eval(NewTime.getDate()-1)+' '+MultiLang.findCommonResource("mobile/common/control/goods/mameqluckypricelist.ascx","day")+' ';}}
strTime=strTime
+(NewTime.getHours()<10?("0"+NewTime.getHours()):NewTime.getHours())+' : '
+(NewTime.getMinutes()<10?("0"+NewTime.getMinutes()):NewTime.getMinutes())+' : '
+(NewTime.getSeconds()<10?("0"+NewTime.getSeconds()):NewTime.getSeconds());if(strTime=="00 : 00 : 00"){Util.reloadPage();return;}
$get("lp_total_auction_left_time"+parseInt(index-1)).innerHTML=strTime;}
clearTimeout(timer1);if(LPLuckyPriceTotalListTimerTime_lp.length>0){timer1=setTimeout("LPLuckyPriceTotalList_lp.TimeRoutine()",1000);}},GoListpage:function(__auction_no){var _url=Public.getMobileServerUrl("/Mobile/auction/MameQLuckypriceItemList.aspx");if(__auction_no!="")
_url+="?auction_no="+__auction_no;window.open(_url,"MameQLuckyPriceToTalList","");return false;}}
function sharePage(type){var msg='Share this item with your friends';var url='<%=ShareUrl %>';var eid;if(GMKT.ServiceInfo.nation=="SG")
eid='KBCa1m3RRZk_g_3_';else if(GMKT.ServiceInfo.nation=="JP")
eid='g_g_1_0ABepnFNw_g_3_';else if(GMKT.ServiceInfo.nation=="MY")
eid='S6Uxf3uFMNM_g_3_';else if(GMKT.ServiceInfo.nation=="ID")
eid='ouckfe0Fuik_g_3_';else if(GMKT.ServiceInfo.nation=="CN")
eid='7eTMDwB8_g_1_gg_g_3_';else if(GMKT.ServiceInfo.nation=="HK")
eid='iH2WU3BXC7E_g_3_';else if(GMKT.ServiceInfo.nation=="US")
eid='jSKM85ylLnI_g_3_';if(eid!=''){if(!Public.isLogin()){nextUrl=location.href;document.location.href=Public.getMobileServerUrl("/Mobile/Login/Login.aspx?nextUrl="+nextUrl,false);return;}
MobileUtil.EventApply(eid);if(MobileUtil.isShoppingApp()){window.setTimeout(function(){MobileUtil.Share(type,url,msg);},2000);}else{MobileUtil.Share(type,url,msg);}}else{MobileUtil.Share(type,url,msg);}}
var touch_event_top_lp={dragx:true,stop:function(ui,val){if(val.dragx&&!isNaN(val.speed.x)){var distance=val.move_position.left;var last_left=-1*320;var duration="100ms";if(val.speed.x<-5000||distance<last_left*0.3){topSlideMove_lp('next');}else if(val.speed.x>5000||distance>-1*last_left*0.3){topSlideMove_lp('prev');}
else{topSlideMove_lp("");}}else{topSlideMove_lp("");}}}
function topSlideMove_lp(type){if(type=="next"){if(__slide_now_page_lp<__slide_total_page_lp){__slide_now_page_lp++;}
if(__slide_now_page_lp>=2&&(s_page_index_lp+1)<=COUNT_lp&&__slide_now_page_lp==s_page_index_lp){gtouch.translate($('#top_Slide_lp'),(__slide_now_page_lp-1)*-310,0,"300ms",function(){},false);}}
else if(type=="prev"){if(__slide_now_page_lp>1){__slide_now_page_lp--;}}
gtouch.translate($('#top_Slide_lp'),(__slide_now_page_lp-1)*-320,0,"300ms",function(){LPMameQ_imgLoadChange();},false);if(__slide_total_page_lp>__slide_now_page_lp){$("#next_sliding_lp").show();}
else{$("#next_sliding_lp").hide();}
if(__slide_now_page_lp>1){$("#prev_sliding_lp").show();}
else{$("#prev_sliding_lp").hide();}}
function setAffiliateCookie(gd_no,affiliate_contract_cd,obj){var url=Public.getMobileServerUrl("/Goods/Goods.aspx?goodscode="+gd_no);if(gd_no!=""&&affiliate_contract_cd!=""){url=url+(url.indexOf("?")>=0?"&":"?")+"sAffiliate="+affiliate_contract_cd;}
this.location.href=url;}
MobileGidBarSwiperSlide=function(div){var gid_bar_ul_length=$("#"+div).find("ul").length;var loop_bool=true;var pagination_val='.paging';if(gid_bar_ul_length<=1){loop_bool=false;}
if(gid_bar_ul_length==1){pagination_val='';}
var swiperOption={pagination:pagination_val,paginationClickable:true,lazyLoading:true,loop:loop_bool,slidesPerColumn:1,spaceBetween:10}
var swiper=SlideHelper.CreateSlide('#'+div,swiperOption);}