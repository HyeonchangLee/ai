// (c)2021 eBay Japan

var captchar_hpno="H";var is_submit=false;var _ykums=1;function onPageLoad_Direct(){initEventHandler_Direct();if($("#ReturnUrl").val().toLowerCase().indexOf("/member/registeraffiliatemember.aspx")>0){$(".g_signMb input").hide();$(".g_signMb label").hide();}
$get("login_id").focus();$get("saveid").checked=true;var save_login_id=Util.getCookie("save_login_id");if(save_login_id.length>0)
{$get("login_id").value=save_login_id;$get("passwd").focus();}
if($("#login_id").val()!="")
$get("passwd").focus();clickMemberKind();if($get("birth_day_layer")!=null)
SelectBoxBinder.bindingJson($get("birth_day_layer"),birth_day_json,"Key","Value");if($get("birth_month_layer")!=null)
SelectBoxBinder.bindingJson($get("birth_month_layer"),birth_month_json,"Key","Value");if($get("birth_year_layer")!=null)
SelectBoxBinder.bindingJson($get("birth_year_layer"),birth_year_json,"Key","Value");$("#cust_nm").val("");$("#passwd1").val("");$("#captcha_src").appendTo("#login_captcha");$("#captcha_src").show();login_hp_no_signin_NationCallingCode();if($("#new_email_confirm").val()=="Y"){if(PageVariable.confirm_email!=""){showSimpleRegisterMember('R');var email_domain=PageVariable.confirm_email.split('@')[1];var email_id=PageVariable.confirm_email.split('@')[0];var check_domain="";if(email_domain!=""){check_domain=$("#email_id_domain option[value='"+email_domain+"']").val();}
if(check_domain!=null&&check_domain!=undefined&&check_domain!=""){$("#email_id_domain option[value='"+email_domain+"']").attr("selected",true);$("#email_id_head").val(email_id);}else{$("div#writeEmail").show();$("div#selectEmail").hide();email_type="F";$("#email_id").val(PageVariable.confirm_email);}}}}
function initEventHandler_Direct()
{ControlUtil.setEnterKeyEvent("passwd",checkValidateForm);if($("#recaptcha_response_field").length>0)
ControlUtil.setEnterKeyEvent("recaptcha_response_field",checkValidateForm);if($("#hp_no_four_digit").length>0)
ControlUtil.setEnterKeyEvent("hp_no_four_digit",checkValidateForm);ControlUtil.addEventHandler("member_kind_m","onclick",clickMemberKind);ControlUtil.addEventHandler("member_kind_n","onclick",clickMemberKind);$("#login_secure_mb").bind("mouseover",function(e){$("#db_login_secure_mb").show();});$("#login_secure_mb").bind("mouseout",function(e){$("#db_login_secure_mb").hide();});$("#lbl_login_secure_mb").bind("mouseover",function(e){$("#db_login_secure_mb").show();});$("#lbl_login_secure_mb").bind("mouseout",function(e){$("#db_login_secure_mb").hide();});$("#hp_no_four_digit").blur(function(){if($("#hp_no_four_digit").val()=="")
$(this).prev("label").show();});$("#a_keep_sign_info").click(function(){$("#dv_keep_signin_info").show();return false;});$("#a_keep_sign_close").click(function(){$("#dv_keep_signin_info").hide();return false;});$("#a_login_hp_no_info").click(function(){$("#dv_login_hp_no_info").show();return false;});$("#a_login_hp_no_close").click(function(){$("#dv_login_hp_no_info").hide();return false;});}
function adultDivFunc(){$get("Layer_DateBirth_div").style.display="";}
function adultclose(){$get("Layer_DateBirth_div").style.display="none";}
function adultdateCheck(){var today=new Date();var temp_birth=$get("birth_year_layer").value+$get("birth_month_layer").value+$get("birth_day_layer").value;if(!isBirthday(temp_birth)){alert(MultiLang.findResource("invalid_date"));return;}
var diff=parseInt(today.getFullYear())-parseInt($get("birth_year_layer").value);if(diff>18){if($get("ReturnUrl").value!=""){Util.setCookie("isAdultCheckConfirm",temp_birth);Util.goPage($get("ReturnUrl").value);}}else{alert(MultiLang.findResource("AdultGoods"));Util.goPage(Public.getWWWServerUrl("/"));}}
function isBirthday(dateStr){var today=new Date(GMKT.ServiceInfo.ServerTime);var year=Number(dateStr.substr(0,4));var month=Number(dateStr.substr(4,2));var day=Number(dateStr.substr(6,2));var max_date=today.getFullYear().toString()+(today.getMonth()+1).toString()+today.getDate().toString();var min_date=(today.getFullYear()-100).toString()+(today.getMonth()+1).toString()+today.getDate().toString();if(dateStr.length<=8){if(dateStr<min_date||dateStr>max_date){return false;}else if(month<1||month>12){return false;}else if(day<1||day>31){return false;}else if((month==4||month==6||month==9||month==11)&&day==31){return false;}else if(month==2){var isleap=(year%4==0&&(year%100!=0||year%400==0));if(day>29||(day==29&&!isleap)){return false;}else{return true;}}else{return true;}}
else{return false;}}
function checkValidateForm(){if($get("member_kind_m").checked){if($("#sel_login_type").val()=="E"){if($("#login_id").val().length<4){noticeMsg(MultiLang.findResource("아이디를 입력하세요"));return;}}
else{if($("#sel_login_hp_nation_signin").val()==""){noticeMsg(MultiLang.findCommonResource("Member/sg/RegisterMember.aspx","로그인 용 핸드폰 번호의 국가를 선택하세요"));return;}
if(chk_login_hp_no_signin_num($("#txt_login_hp_no_signin").val())==""){noticeMsg(MultiLang.findCommonResource("Member/sg/RegisterMember.aspx","로그인 용 핸드폰 번호를 입력하세요"));return;}
var login_hp_no_signin="";login_hp_no_signin="+"+$("#sel_login_hp_nation_signin").val();login_hp_no_signin+="-"+chk_login_hp_no_signin_num($("#txt_login_hp_no_signin").val());$("#login_hp_no_signin").val(login_hp_no_signin);}
if($get("passwd").value==""){noticeMsg(MultiLang.findResource("패스워드를 입력하세요"));return;}
if($("#hp_no_four_digit").length==0){if(!checkQCaptcha()){noticeMsg(MultiLang.findResource("Captchar를 입력하세요"));return;}}
else{if(captchar_hpno=="H"){if($("#hp_no_four_digit").val()==""||$("#hp_no_four_digit").val().length!=4){noticeMsg(MultiLang.findResource("핸드폰번호 네자리를 입력하세요"));return;}}
else{if(!checkQCaptcha()){noticeMsg(MultiLang.findResource("Captchar를 입력하세요"));return;}}}}
else{if($("#login_email").val()=="")
{noticeMsg(MultiLang.findResource("EMAIL를 입력하세요"));return;}
if($("#hp_no").val()==""){noticeMsg(MultiLang.findResource("Please enter mobile phone number"));return;}}
if($get("saveid").checked)
saveId($get("login_id").value);else
saveId("");if($get("keep_sign").checked)
$get("is_keep_login").value="true";else
$get("is_keep_login").value="false";if(is_submit)
{alert(MultiLang.findResource("Please wait the login is being processed"));return;}
else
is_submit=true;sel_login_type_onchange();ControlUtil.submitServerForm();}
function keep_sign_onchanged(){if($("#keep_sign").prop("checked"))
$("#saveid").prop("checked",true)
else
$("#saveid").prop("checked",false)}
function get_contact_no_value(obj){if($("#"+obj).val()==$("#"+obj).attr('title'))
return"";else
return $("#"+obj).val();}
function checkValidID()
{var chk=/[^0-9a-zA-Z_]+/;return!chk.test($get("login_id").value);}
function saveId(login_id)
{if(login_id!="")
{Util.setCookie("save_login_id",login_id,null,7);}else
{Util.setCookie("save_login_id","",null,-1);}}
function popupForgotMemberID()
{Util.openPopup(Public.getWWWServerUrl("/Member/ForgotMemberID.aspx",true),200,200,"ForgotMemberID");}
function popupForgotMemberPwd(){alert(MultiLang.findResource("ck_passwd"));Util.openPopup(Public.getWWWServerUrl("/Member/ForgotMemberPwd.aspx",true),200,200,"ForgotMemberPwd");}
function clickMemberKind(){if($get("member_kind_m").checked){$("#dv_area_bttm_desc").css("position","absolute");$("#dv_member_login").show();if($(".Ordergo").length>0){$(".Ordergo").hide();$(".contactLogin").show();ControlUtil.displayObject("none_member_ul",false);ControlUtil.displayObject("multisite_login_notice_ul",true);}
else{$("#dv_non_member_login").hide();ControlUtil.displayObject("member_ul",true);ControlUtil.displayObject("none_member_ul",false);ControlUtil.displayObject("multisite_login_notice_ul",true);}}
else{$("#dv_area_bttm_desc").css("position","relative");$("#dv_member_login").hide();if($(".Ordergo").length>0){$("#dv_member_login").hide();$(".Ordergo").show();$(".contactLogin").hide();}
else{$("#dv_non_member_login").show();ControlUtil.displayObject("member_ul",false);ControlUtil.displayObject("none_member_ul",true);ControlUtil.displayObject("multisite_login_notice_ul",false);}}}
function alertLoginFail(isMember)
{if(isMember)
noticeMsg(MultiLang.findResource("login_fail"));else
noticeMsg(MultiLang.findResource("login_fail_guest"));$(document).ready(function(){clickMemberKind();});}
function alertCaptcharFail(cnt){if(cnt!=undefined&&cnt>=3)
noticeMsg(MultiLang.findResource("잇따른 로그인 실패로 캅차가 노출됩니다"));else
noticeMsg(MultiLang.findResource("Captchar가 틀렸습니다"));if($("#hp_no_four_digit").length!=0){captchar_hpno="C";$(".security_area .mobile").addClass("off").siblings(".recaptcha").removeClass("off");}}
function alertHpNoFourDigitFail(type){if(type=="notsaved")
noticeMsg(MultiLang.findResource("핸드폰번호 회원정보에 저장되어있지 않음"));else if(type=="notmatch")
noticeMsg(MultiLang.findResource("핸드폰번호 네 자리 틀림"));}
function openPaypalLogin(url){Util.openPopup(url,800,630,"PayPalLogin");}
function openRegisterSiteID(){Util.openInnerPopup(Public.convertNormalUrl("~/Member/RegisterMemberSiteID.aspx"),null,null,true,$(window).height()/2-200,$(window).width()/2-200);}
function openGlobalMemberPass_US(hidden_param1,login_nation_cd){var url=window.location.protocol+"//"+window.location.host+"/gmkt.inc/Member/GlobalMemberPass_US.aspx?callbackFunc=GlobalMemberPass_US_callback&P1="+hidden_param1+"&login_nation_cd="+login_nation_cd;Util.openInnerPopup(url,750,620);}
function GlobalMemberPass_US_callback(){if($get("ReturnUrl").value!=""){Util.goPage($get("ReturnUrl").value);}
else{Util.goPage(Public.getWWWServerUrl("/"));}}
function showSimpleRegisterMember(show_field){if(show_field=="R"){if(GMKT.ServiceInfo.nation=="CN"&&$("#qcaptcha_img").attr("src")=="")
QCaptcha.reload();$(".signIn .LoginL").addClass("disNone");$(".g_loginBnnr:eq(0)").hide();$("#dv_simple_register").removeClass("disNone");$(".signTab ul li:eq(0)").removeClass("selected");$(".signTab ul li:eq(1)").addClass("selected");$("#email_id_head").focus();$("#section_rt_reg").show();$("#section_rt_login").hide();$("#captcha_src").appendTo("#register_captcha");$("#dv_fb_go").prependTo("#dv_sns_register");}
else if(show_field=="S"){$("#dv_simple_register").addClass("disNone");$(".signIn .LoginL").removeClass("disNone");if($get("member_kind_m").checked)$(".g_loginBnnr:eq(0)").show();$(".signTab ul li:eq(1)").removeClass("selected");$(".signTab ul li:eq(0)").addClass("selected");$("#login_id").focus();$("#section_rt_reg").hide();$("#section_rt_login").show();$("#captcha_src").appendTo("#login_captcha");$("#dv_fb_go").prependTo("#dv_sns_login");}
$("#login_error_msg").hide();if(__PAGE_VALUE.VIEW_SITEID=="QSTORE")$("#dv_register_gift_desc").hide();}
function noticeMsg(msg){if(msg!="")
$("#login_error_msg p").html(msg);$("#login_error_msg").show();}
function captcha_login_yn(captcha_login_yn){if(captcha_login_yn=="Y"){$("#hp_no_four_digit").val("");captchar_hpno="C";}}
function change_captcha_login(captcha_login_yn){if(captcha_login_yn=="Y"){if(GMKT.ServiceInfo.nation=="CN"&&$("#qcaptcha_img").attr("src")=="")
QCaptcha.reload();$("#hp_no_four_digit").val("");captchar_hpno="C";$("#login_captcha").show();$("#dv_mobile_captcha").hide();}
else{captchar_hpno="H";$("#login_captcha").hide();$("#dv_mobile_captcha").show();}}
function hp_no_four_digit_onfocus(){$("#hp_no_four_digit_txt").hide();}
function login_hp_no_signin_NationCallingCode(){$("#sel_login_hp_nation_signin").find("option[nation_cd='"+GMKT.ServiceInfo.region+"']").prop("selected",true);sel_login_hp_nation_signin_onchange();a_login_type_onchange('E');}
function sel_login_hp_nation_signin_onchange(){if($("#sel_login_hp_nation_signin").val()=="65"||$("#sel_login_hp_nation_signin").val()=="852")
$("#txt_login_hp_no_signin").attr("placeholder","ex) 12345678");else if($("#sel_login_hp_nation_signin").val()=="62")
$("#txt_login_hp_no_signin").attr("placeholder","ex) 08112345678");else if($("#sel_login_hp_nation_signin").val()=="81")
$("#txt_login_hp_no_signin").attr("placeholder","ex) 09012345678");else if($("#sel_login_hp_nation_signin").val()=="82"||$("#sel_login_hp_nation_signin").val()=="60")
$("#txt_login_hp_no_signin").attr("placeholder","ex) 01012345678");else if($("#sel_login_hp_nation_signin").val()=="86")
$("#txt_login_hp_no_signin").attr("placeholder","ex) 13612345678");else
$("#txt_login_hp_no_signin").attr("placeholder",MultiLang.findCommonResource("Member/sg/RegisterMember.aspx","mobile number"));}
function a_login_type_onchange(type){$("#sel_login_type").val(type);sel_login_type_onchange();}
function sel_login_type_onchange(){if($("#sel_login_type").val()=="E"){$("#login_id").show();$("#login_id").attr("tabindex","1");$("#txt_login_hp_no_signin").attr("tabindex","");$("#p_login_hp_no_signin").hide();$("#a_login_hp_no_signin").show();$("#a_login_id").hide();$("#login_hp_no_signin_use_yn").val("N");$("#dv_login_hp_no_msg").hide();}
else{$("#login_id").hide();$("#login_id").attr("tabindex","");$("#txt_login_hp_no_signin").attr("tabindex","1");$("#p_login_hp_no_signin").show();$("#a_login_hp_no_signin").hide();$("#a_login_id").show();if(__PAGE_VALUE.VIEW_SITEID!="QSTORE")$("#p_signMb").show();$("#login_hp_no_signin_use_yn").val("Y");$("#dv_login_hp_no_msg").show();}}
function chk_login_hp_no_signin_num(str){return(str.trim().replace(/[^0-9]/g,""))}
function login_nation_cd_onchanged(){$("#sel_login_hp_nation_signin").val($("#sel_login_hp_nation_signin").find("option[nation_cd='"+$("#login_nation_cd").val()+"']").val());sel_login_hp_nation_signin_onchange();}
function goSellerRegister(){document.location.href=Public.getWWWServerUrl("/Member/RegisterSeller.aspx")+"?isSellerRegProcess=Y";}
function goLineLogin(){var url=Public.getAppPath()+"/Login/Partner/LineLogin.aspx?login_src=F&ReturnUrl="+encodeURIComponent($("#ReturnUrl").val());Util.openPopup(url,600,600);}
$(document).ready(function(){onPageLoad_Direct();try{if($("#iframeCardLayer",parent.document).length>0){$("#iframeCardLayer",parent.document).css("background-color","#fff");}}catch(e){}});