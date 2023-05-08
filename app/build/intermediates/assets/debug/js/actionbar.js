
    //if(jsi()) setInterval(function(){CheckUpdate(); BtnChLogin();}, 6000); 
	   
    //CheckUpdate();
    //BtnChLogin();
    
   /* function CheckUpdate(){
        LoadGetJson(urlsite+"/wservice/?Action=Init",function(val,dEnd)
        { 
            var verNum=GetVer();
   
            if(parseInt(val.apkExpire)>verNum)
            {
               JSInterface.MSG_Expire(val.apkUrl);
               return;
            }
            
            if(parseInt(val.apkNumber)>verNum)
            {
               $(".IconUpdate").css({"display":"block"});
               
               urlDownload=val.apkUrl;
               JSInterface.MSG_Update(val.apkUrl);
            }
            else
            {
               $(".IconUpdate").css({"display":"none"});
               urlDownload="";
            }

        },null,true);
    }
 
    */
    function IconUpdate_OnClick(){
        if(urlDownload!=""){
            JSInterface.ConfirmT("بروز رسانی","آیا مایل به بروز رسانی هستید؟",urlDownload,"","OpenChrome");
        }
    }
    
   function BtnChLogin()
   {
      /*if(!(JSInterface.IsEmptyDV("usrId")|JSInterface.IsEmptyDV("pass")))
      {
          var usr=urlsite_nz+"/wservice/?action=Login&usr="+JSInterface.GetDV("usrId")+"&pwd="+JSInterface.GetDV("pass");  
          LoadGetJson(usr,SubChLogin,null,true);
      }*/
   }
   
   function SubChLogin(val)
   {  
       if(parseInt(val.result)==-1)
       { 
            JSInterface.SetDV("usrId","");  
            JSInterface.SetDV("pass","");
            JSInterface.SetDV("id",""); 
            JSInterface.SetDV("ut",""); 
            JSInterface.SetDV("ul",""); 
            JSInterface.SetDV("city",""); 
            JSInterface.SetDV("nameuser",""); 
            JSInterface.ExeFunc(1);
       }
   }