EZB=window.EZB||{};EZB.Log=EZB.Log||function(){};EZB.req_protocol=EZB.req_protocol||"http:";EZB.req_server=EZB.req_server||"h41213.www4.hp.com";EZB.Paths={};EZB.Paths.php="/ezbuy/common/php";EZB.Paths.build=EZB.req_self.replace("loadjs.php","EzbProcess.php");EZB.req_self=EZB.req_self||(EZB.Paths.php+"/loadjs.php");EZB.Utils=(function(){function A(I,F){var G,E,D,K,J,H;F=F||top.location.href;D=F.indexOf("?");K=D>=0?F.substr(D+1):F;J=K.split("&");for(G=0,E=J.length;G<E;G++){H=J[G].split("=");if(H.length>=2){if((H[0]).toLowerCase()===I.toLowerCase()){EZB.Log("INFO:EZB.Utils.getQueryStringParameter:",["found: ",unescape(H[1])," for ",I].join());return unescape(H[1])}}}EZB.Log("INFO:EZB.Utils.getQueryStringParameter:",[I," not found in query"].join());return null}function C(D){EZB.Log("INFO:EZB.Utils.insertRemoteScript:",D);document.write(["<scr",'ipt type="text/javascript" src="',D,'"></scr',"ipt>"].join(""))}function B(E,G){var D=G||window,H=D.document,I=H.createElement("script"),F=H.getElementsByTagName("head")[0];if(F){I.src=E;I.type="text/javascript";F.appendChild(I);EZB.Log("INFO:EZB.Utils.injectRemoteScript:",E)}}return{getQueryStringParameter:A,insertRemoteScript:C,injectRemoteScript:B}})();EZB.Build=function(){if(window.EZB_load_redirected&&EZB.Utils.getQueryStringParameter("ezbserver")){var B=['<div id="ezb_splash_screen" style="position: absolute; top: 0px; left: 0px; background: pink; width: 50%; height: 10%; opacity: 1; filter: alpha(opacity=100); -moz-opacity: 1">',"This is testing EZB on server:",EZB.Context.ezbserver,"</div>"].join("");document.write(B)}if(window.PL=="-1"||window.PL==""){if(window.page_generic_englishname&&page_generic_englishname!=""){for(var A in PLexceptions){if(page_generic_englishname.toLowerCase().indexOf(A.toLowerCase())!=-1){EZB.Context.PL=PLexceptions[A];EZB.Context.PLexception=true;PL=EZB.Context.PL;break}}}}var C=[EZB.req_protocol,"//",window.EZB_load_redirected==true?EZB.Context.ezbserver:EZB.req_server,EZB.Paths.build,"?cc="+EZB.Context.cc,"&lc="+EZB.Context.lc,"&version="+EZB.Context.version,"&ms="+EZB.Context.m_s,"&clientID="+EZB.Context.clientID,EZB.Context.ezbdebug?"&ezbdebug=1":""].join("");if(!EZB.Context.ForcedDisplayId){EZB.Utils.insertRemoteScript(C)}else{EZB.Utils.injectRemoteScript(C)}};EZB.Context={is_ie:false,RenderingHookUse:window.RenderingHookUse||false,ezbuyExperience:"channel",ForcedDisplayId:window.force_ezb_call||false,ezbEppId:window.ezbEppId,forced_channel:window.forced_channel&&forced_channel==true,forced_partner:window.forced_partner&&forced_partner==true,ezbPartnerList:window.ezbPartnerList,storeId:window.storeId,ezbpartnr:window.ezbpartnr,PL:window.s_ProductLine||"-1",cc:window.country||"",lc:window.lang||"",clientID:window.s_prop4||"",m_s:window.ezb_segment||window.s_prop9||(window.ezbEppId?"hho":"smb"),EppId:window.ezbEppID?ezbEppID:false,version:"999",defer_rendering:this.RenderingHookUse?true:false,ezbdebug:EZB.ezbdebug_cookie||EZB.Utils.getQueryStringParameter("ezbdebug")!==null||window.ezbdebug||false,ezbserver:window.ezbserver||EZB.Utils.getQueryStringParameter("ezbserver")||EZB.req_server,ezbdisable:EZB.Utils.getQueryStringParameter("ezbdisable")!==null?true:false,ezbdisableoptions:EZB.Utils.getQueryStringParameter("ezbdisableoptions")!==null?true:false,ezbuyPNList:window.ezbuyPNList||"",siteId:window.siteId||"",storeUrl:window.storeUrl||"",catalogUrl:window.catalogUrl||"",refererUrl:window.top.location.toString(),theme:window.theme||"#EB5F01"};if(EZB.Context.m_s!="smb"&&EZB.Context.m_s!="hho"){EZB.Context.m_s="smb"}if(EZB.Context.ezbdisableoptions){EZB.Context.clientID="Report"}EZB.Load=function(){if(!EZB.Context.ezbdisable){PL=EZB.Context.PL;if(!window.EZB_load_redirected&&(EZB.Context.ezbdebug||window.ezbserver||EZB.Utils.getQueryStringParameter("ezbserver")||window.EZB_load_redirect)){var A=[EZB.req_protocol,"//",EZB.Context.ezbserver,EZB.req_entry_uri.replace("PL=-1","PL="+EZB.Context.PL),EZB.Context.ezbdebug?"&ezbdebug=1":"","&ezb_redirect=1&version=",EZB.Context.version].join("");EZB.Log("INFO:global","redirection set to:"+A);EZB.Utils.insertRemoteScript(A)}else{EZB.Log("INFO:global","no redirection set");EZB.Build()}}};