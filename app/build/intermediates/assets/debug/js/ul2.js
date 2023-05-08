//var urlsite_nz="http://www.1000108.ir";

if(jsi()) 
{
    window.alert=alertt; 
    var viewPortTag=document.createElement('meta');
    viewPortTag.id="viewport";
    viewPortTag.name = "viewport";
    viewPortTag.content = "width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;";
    document.getElementsByTagName('head')[0].appendChild(viewPortTag);
}


function ExeFunc(v)
{
	if(jsi()) 
		JSInterface.ExeFunc(v);
}
  
function InitFa()
{
	var list_txtfa=$(".txtfa");
	for(var il=0;il<list_txtfa.length;il++)
	{
		if($(list_txtfa[il]).context.nodeName=="SELECT")
		{ 
			for(var j=0;j<$(list_txtfa[il]).context.length;j++)
				$(list_txtfa[il]).context[j].innerText=parsePersian($(list_txtfa[il]).context[j].innerText); 
			continue;	
		}

		$(list_txtfa[il]).html(parsePersian($(list_txtfa[il]).text()));
		if($(list_txtfa[il]).context.placeholder)$(list_txtfa[il]).context.placeholder=parsePersian($(list_txtfa[il]).context.placeholder);
		if($(list_txtfa[il]).context.defaultValue)$(list_txtfa[il]).context.defaultValue=parsePersian($(list_txtfa[il]).context.defaultValue);
	}
}


window.confirm=function(msg,event){
	var strIn="<div class='confirmBox'><div class='confirmMsg'></div><button class='confirmBtn confirmBtnY'>ﺑﻠﯽ</button><button class='confirmBtn confirmBtnN'>ﺧﯿﺮ</button></div>";
	if($(".confirmMsg").length==0) $(document.body).append(strIn);

	if(ppt)
	  $(".confirmMsg").text(ppt(msg));
	else
	  $(".confirmMsg").text((msg));
	  
	$(".confirmBox").css({"display":"block"});		
	$(".confirmBtn").click(function(){ 
		$(".confirmBox").css({"display":"none"});
		if(event) event(this.className.indexOf("Y")>0);
		$(".confirmBtn").unbind('click');
	});  
    window.scrollTo(0, 0);
}

function GetVer()
{
	try 
    {  
       return JSInterface.GetVerNumber();
    }
    catch(err) 
    { 
       return -1;
    }
	
}
function CheckLoadIframe(ml,func,txt)
{
    var errorload=false;
    var docifr;
    try 
    {  
       var docelm=ml;
       docifr=(docelm.contentWindow.document||docelm.contentDocument);
       errorload=(docifr.title.indexOf("404")>-1)||(docifr.title.indexOf("found")>-1)||(docifr.title.indexOf("Error")>-1)||(docifr.title.indexOf("error")>-1)||   (docifr.title.indexOf("500")>-1);
    }
    catch(err) 
    { 
       errorload=true;
    }

    if(func) func(!errorload,ml);
}


var WinGetVal_onclick=function(v){
    alert("onclick: "+v);
}

function WinGetVal(cmd)
{
    if(cmd=="exit"){
        $(".WinGetVal").css({"display": "none"});
        $(".TxtGetVal").val("");
    }

    if(cmd=="show"){
        $(".TxtGetVal").val("");
        $(".WinGetVal").css({"display": "block"});
        window.scrollTo(0, 0);
    }
    
    if((cmd=="ok")||(cmd=="click")||(cmd=="onclick")){
        WinGetVal_onclick($(".TxtGetVal").val());
        $(".WinGetVal").css({"display": "none"});
        $(".TxtGetVal").val("");
    }
}

function SetBackHref()
{
    SetDV("BackHref",window.location.href);
}

function OpenBrowser(url)
{
	if(jsi())
	   JSInterface.OpenChrome(url);
	else
	   window.open(url, '_blank');
}
 
function LoadingStart()
{ 
   if(jsi())
      JSInterface.UpWin("loading.html");
}
 
function LoadingStop()
{ 
  if(jsi())
     JSInterface.UpWin("");
}

function SelectItem(val)
{ 
    if(jsi())
      JSInterface.SelectItem(val);
}


function GoBackHref()
{
    var BackHref=GetDV("BackHref");
    try
    {
		if(BackHref.length>1) 
		{
			BackHref=BackHref.replace("file:///android_asset/","");
			curl(BackHref);
			//alertt("Go To Size:"+BackHref);
		}
		return (BackHref.length>4);
    }
	catch(err){return false;}
}


function onerrorimg(item)
{// onerror="onerrorimg(this);"
    item.src="";
}

function UpWin(v)
{
    if(jsi())
      JSInterface.UpWin(v);
//     else
//       localStorage.setItem(att,val)
//     item.src="";
}

function GetQueryString()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('='); 
        vars[hash[0]] = hash[1];
    }

    for(var i = 0; i < hashes.length; i++)
    {
		try { 
			hash = hashes[i].split('='); 
			if(eval("window."+[hash[0]])==undefined) 
			   eval("window."+[hash[0]]+" = "+hash[1]);
		}
		catch(err){}
    }

    return vars;
}
 
function alertj(v)
{
	alert(JSON.stringify(v));
}

function ajax(a,b,c)
{
	LoadGetJson.apply(this, arguments);
}

 var xmlhttpGlobal=new XMLHttpRequest();
function LoadGetJson(a,b,c,d)
{ 
    var url="",FEvent=[],CancelLoading=false,newxhr=false;
 
    if(arguments.length==2)
    {
        url=a;
        FEvent=b;
    }
    
    if(arguments.length==3)
    {
        url=a;
        FEvent=b;
        newxhr=c;
    }
    
    else if(arguments.length==4)
    {
        url=a;;
        FEvent=b;
        if(c!=null) newxhr=c;
        CancelLoading=d;
    }

    var xmlhttp;
    if(newxhr)
    {
    	xmlhttp=xmlhttpGlobal;
    	if(xmlhttp.readyState!= 0)
    		xmlhttp.abort();
    }
    else
    	xmlhttp=new XMLHttpRequest();
    
    if(!CancelLoading) 
         LoadingStart();

    xmlhttp.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            try { 
                FEvent(eval(xmlhttp.responseText),1); 
            }
            catch(err) {
                prompt("Error:"+err+"  "+xmlhttp.responseText);
            }
            LoadingStop();
        }

        if(xmlhttp.readyState==4 && xmlhttp.status==0)
        { 
            LoadingStop();
            if(jsi())
            {
                if(JSInterface.GetUrl().indexOf("tk_error_connetion.html")==-1)
                {
                    JSInterface.ExeFunc(404);  
                    alert("خطا در برقراری ارتباط"); 
                    //ChengeUrl("tk_error_connetion.html#Error=404&bref="+encodeURIComponent(JSInterface.GetUrlConnect()));
                }
            } 
            else
            {
//                 if(document.location.href.indexOf("tk_error_connetion.html")==-1)
//                     ChengeUrl("tk_error_connetion.html#Error=404&bref="+encodeURIComponent(document.location.href));
            }
            
        } 
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

function ChengeUrl(url){
	ChangeUrl(url);
}

function curl(url){
	ChangeUrl(url);
} 
//JSInterface.OpenChrome
  

function ChangeUrl(url)
{  
    if(jsi())
        JSInterface.NewPage(url);
    else
    {
        if(location.protocol=="file:")
        {
           var iurl= RemoveAttUrl(location.href.substr(location.href.lastIndexOf("/")+1));
           if(RemoveAttUrl(url)==iurl)
           { 
               window.location.replace(".");
               location.reload();
               
               window.location.replace(url);
               location.reload();

           }
           else
               window.location.replace(url);
        }
        else
            window.location.replace(url);
    }


}

function RemoveAttUrl(url)
{
    var ss=url.lastIndexOf("#");
    if(ss>0)
    {
        var nurl=url.substr(0,ss);
        return nurl;
    }
    return url;
}

 
function SetDV(att,val)
{
    if(jsi())
      JSInterface.SetDV(att,val);
    else
      localStorage.setItem(att,val)
}

function GetDV(att)
{
    if(jsi())
       return JSInterface.GetDV(att);
    else 
       return localStorage.getItem(att);
}

function IsEmptyDV(att)
{
    if(jsi())
        return JSInterface.IsEmptyDV(att);
    else
    {
        var attv=GetDV(att);
        if(attv==undefined) return true;
        return (attv.length==0);
    }
}

function gotoback(){
    ChengeUrl(decodeURIComponent(GetQueryString().backref));
} 

function alertt(v){ 
    try {
       if(JSInterface!=undefined) JSInterface.Alert(v);
    }
    catch(err) { 
       alert(v);
    }
}
 
function jsi(){ 
    try {
       if(JSInterface==undefined) return false;
    }
    catch(err) { 
       return false;
    }
    return true;
}
//nezam mohandesi

var _upbox=-1;
function ScrollDown(element,eventfunc)
{
	$(document).ready(function(){
		$(element).scroll(function() {
		  var el=$(element)[0];
		  
		  if((el.scrollTop>el.clientHeight)&&(_upbox!=0)){
		    $(".upbox").fadeIn("slow");
		    _upbox=0;
		  }
		  
		  if((el.scrollTop<el.clientHeight)&&(_upbox!=1)){
		    $(".upbox").fadeToggle("slow");
		    _upbox=1;
		  }

	      if((el.scrollHeight-el.scrollTop)<=(el.clientHeight+1)){
			if(eventfunc) 
			    eventfunc();
		  }

		});
	});
}

function NavUrl(arr)
{
	var sret="",span="<span class='spanRoute'>></span>";
	for(var i=0;i<(arr.length-1);i++)
		sret+="<span onclick=curl('"+arr[i].url+"')>"+ppt(arr[i].name)+"</span>"+span;
	
	sret+="<span onclick=curl('"+arr[i].url+"')>"+ppt(arr[i].name)+"</span>";
	$(".RouteTop").html(sret);
	return sret;
}
 
 
function OpenFile() {
    alert("فایل را انتخاب نمایید");
    JSInterface.ShowFileChooser();
}

function FileToBin(fileid) {
    var data = [];
    if(jsi())
    {
        data=(JSInterface.GetBufferValueBase64()); 
        JSInterface.GetBufferClear();
        alert("Size: " + data.length);
    }
    else
    { 
        data="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"; 
        alert("PC > Size:" + data.length);
    }
    $(fileid).val(data);  
}
 