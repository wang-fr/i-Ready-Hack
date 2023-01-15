//import framework
window.iReadyFramework={utils:{},ui:{},cookieUtil:{},hook:{},lesson:{csidTypes:{}},routes:{}},window.url=window.location.href,iReadyFramework.user=dashboardJson,iReadyFramework.utils.iReadyURL="https://login.i-ready.com/student/dashboard/home",iReadyFramework.utils.dragElement=e=>{var t=0,o=0,s=0,r=0;function n(e){(e=e||window.event).preventDefault(),s=e.clientX,r=e.clientY,document.onmouseup=l,document.onmousemove=a}function a(n){(n=n||window.event).preventDefault(),t=s-n.clientX,o=r-n.clientY,s=n.clientX,r=n.clientY,e.style.top=e.offsetTop-o+"px",e.style.left=e.offsetLeft-t+"px"}function l(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=n:e.onmousedown=n},iReadyFramework.utils.addScript=scriptURL=>fetch(scriptURL).then((e=>e.text())).then((r=>eval(r))),iReadyFramework.utils.goToDashboard=()=>goto("/student/dashboard/home/"),iReadyFramework.utils.isType=e=>Object.prototype.toString.call(e).slice(8,-1),iReadyFramework.utils.delDuplicates=e=>[...new Set(e)],iReadyFramework.utils.isNull=e=>null==e,iReadyFramework.utils.copyToClipboard=e=>navigator.clipboard.writeText(e),iReadyFramework.utils.randomNumberInRange=(e=0,t=100)=>Math.floor(Math.random()*(t-e+1))+e,iReadyFramework.utils.toggleElementDisplay=e=>e.style.display="none"===e.style.display?"block":"none",iReadyFramework.utils.appendScript=e=>{document.body.appendChild(Object.assign(document.createElement("script"),{src:e,onerror:console.error}))},iReadyFramework.ui.closeModal=()=>{goto("/student/dashboard/home/"),clearInterval(interval)},iReadyFramework.ui.getModal=()=>document.getElementsByClassName("css-1w7vrn4 enj526p0")[0],iReadyFramework.ui.openTempModal=()=>goto("/student/error/lockDownBrowserLoader"),iReadyFramework.ui.openModal=(e,t,o,s)=>{iReadyFramework.ui.openTempModal();setInterval((function(){try{null!=iReadyFramework.ui.getModal().innerText&&(!0?(document.getElementsByClassName("css-1w7vrn4 enj526p0")[0].innerHTML=e,document.getElementsByClassName("css-msv3yz enj526p0")[0].innerHTML=t,document.getElementById("continue-button-button").onclick=o):(document.getElementsByClassName("css-1w7vrn4 enj526p0")[0].innerText=e,document.getElementsByClassName("css-msv3yz enj526p0")[0].innerText=t,document.getElementById("continue-button-button").onclick=o))}catch(e){}}),10)},iReadyFramework.cookieUtil.setCookie=(e,t,o)=>{var s="";if(o){var r=new Date;r.setTime(r.getTime()+24*o*60*60*1e3),s="; expires="+r.toUTCString()}document.cookie=e+"="+(t||"")+s+"; path=/"},iReadyFramework.cookieUtil.getCookie=e=>{for(var t=e+"=",o=document.cookie.split(";"),s=0;s<o.length;s++){for(var r=o[s];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null},iReadyFramework.hook.hookObj=(e,t)=>{window[e]=t},iReadyFramework.hook.exposeObj=e=>{debug(e),e()},iReadyFramework.hook.createHook=(e,t,o)=>{let s=e[t];e[t]=function(...e){let t=s.apply(this,e);return t&&"function"==typeof t.then?t.then((t=>(o([t,e]),t))):(o([t,e]),t)}},iReadyFramework.lesson.isOpen=()=>(window.html5Iframe,!1),iReadyFramework.lesson.frame=()=>html5Iframe.contentWindow,iReadyFramework.lesson.env=()=>html5Iframe.contentWindow.env,iReadyFramework.lesson.csid=()=>html5Iframe.src.split("csid=")[1].split("&type")[0],iReadyFramework.lesson.subject=()=>html5Iframe.src.split("csid=")[1].split("&type")[0].split("DI.")[1].split(".")[0],iReadyFramework.lesson.data=()=>html5Iframe.contentWindow.com.cainc.ifabric.lessonReport.collectReportData(),iReadyFramework.lesson.part=()=>html5Iframe.src.split("&type=")[1].split("#")[0],iReadyFramework.lesson.csidTypes.ela={PhonologicalAwareness:"DI.ELA.PA",Phonics:"DI.ELA.PH",HighFrequencyWords:"DI.ELA.HFW",Vocabulary:"DI.ELA.VOC",ComprehensionLiterature:"DI.ELA.COM.LIT",ComprehensionInformationalText:"DI.ELA.COM.INFO"},iReadyFramework.lesson.csidTypes.math={NumberAndOperations:"DI.MATH.NO",AlgebraAndAlgebraicThinking:"DI.MATH.AL",MeasurementAndData:"DI.MATH.MS",Geometry:"DI.MATH.GEO"},iReadyFramework.lesson.cheatStore={getCheat:function(e){iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}");return JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"))[e]},setCheat:function(e,t){iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}");const o=JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"));o[e]=t,iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",JSON.stringify(o))},get getAll(){return iReadyFramework.lesson.frame().window.localStorage.setItem("cheats",iReadyFramework.lesson.frame().window.localStorage.getItem("cheats")??"{}"),JSON.parse(iReadyFramework.lesson.frame().window.localStorage.getItem("cheats"))},clear:function(){html5Iframe.contentWindow.localStorage.clear()},refresh:function(){html5Iframe.contentWindow.document.getElementById("settings-gear").click(),html5Iframe.contentWindow.document.getElementById("cancelBtn").click()}},iReadyFramework.routes={"@@ROUTER@@/":"/","@@ROUTER@@/login":"/login","@@ROUTER@@/login/assistance":"/login/assistance","@@ROUTER@@/login/blacklistedmessage":"/login/blacklistedmessage","@@ROUTER@@/login/clever/error/:status?":"/login/clever/error/:status?","@@ROUTER@@/login/clever/error/S612":"/login/clever/error/S612","@@ROUTER@@/login/educatorIOS13GrayListed":"/login/educatorIOS13GrayListed","@@ROUTER@@/login/error/:status?":"/login/error/:status?","@@ROUTER@@/login/k1":"/login/k1","@@ROUTER@@/login/k1/class/:classCode/letter/:letter?":"/login/k1/class/:classCode/letter/:letter?","@@ROUTER@@/login/k1/class/:classCode/letter/:letter?/student/:studentId":"/login/k1/class/:classCode/letter/:letter?/student/:studentId","@@ROUTER@@/login/k1/class/:classCode/selectLetter":"/login/k1/class/:classCode/selectLetter","@@ROUTER@@/login/login_interstitial":"/login/login_interstitial","@@ROUTER@@/login/login_interstitial_main":"/login/login_interstitial_main","@@ROUTER@@/login/oneroster/error/:status?":"/login/oneroster/error/:status?","@@ROUTER@@/login/oneroster/error/S612":"/login/oneroster/error/S612","@@ROUTER@@/login/passwordexpiredmessage":"/login/passwordexpiredmessage","@@ROUTER@@/login/resetemail":"/login/resetemail","@@ROUTER@@/login/resetpassword/:token":"/login/resetpassword/:token","@@ROUTER@@/login/resetpassword/invalidtoken":"/login/resetpassword/invalidtoken","@@ROUTER@@/login/sso/error/:status?":"/login/sso/error/:status?","@@ROUTER@@/login/sso/error/S612":"/login/sso/error/S612","@@ROUTER@@/login/support":"/login/support","@@ROUTER@@/student":"/student","@@ROUTER@@/student/ActivityLaunchPage":"/student/ActivityLaunchPage","@@ROUTER@@/student/assessment/completed/:assessmentType/:score?":"/student/assessment/completed/:assessmentType/:score?","@@ROUTER@@/student/book":"/student/book","@@ROUTER@@/student/dashboard/assessment/lockdownbrowser/:subject?":"/student/dashboard/assessment/lockdownbrowser/:subject?","@@ROUTER@@/student/dashboard/home":"/student/dashboard/home","@@ROUTER@@/student/dashboard/ssolaunch/:ssotype?":"/student/dashboard/ssolaunch/:ssotype?","@@ROUTER@@/student/error/:errorReason?":"/student/error/:errorReason?","@@ROUTER@@/student/gameLauncherPage":"/student/gameLauncherPage","@@ROUTER@@/student/learningGamePlayerPage":"/student/learningGamePlayerPage","@@ROUTER@@/student/lesson/completed/:isPassingScore/:score?":"/student/lesson/completed/:isPassingScore/:score?","@@ROUTER@@/student/lesson/paused":"/student/lesson/paused","@@ROUTER@@/student/lockDownBrowserLoader":"/student/lockDownBrowserLoader","@@ROUTER@@/student/mathFluencyPlayerPage":"/student/mathFluencyPlayerPage"};
let welcomeModalSeen = false

let injectionError = () => iReadyFramework.ui.openModal('Error', 'You injected after opening a lesson.', window.location.reload());
//lesson skipper
if (window['html5Iframe'] === undefined || window['html5Iframe'] === null) {
    fetch("https://raw.githubusercontent.com/no9999999/i-Ready-Hack/main/app-12.chunk.js").then(r => r.text()).then(r => eval(r))
} else {
    injectionError(), welcomeModalOpen = true;
}
window.yes = function() {
    if (window['html5Iframe'] === undefined || window['html5Iframe'] === null || window['p1'] === undefined || window['p1'] === null) {
        injectionError()
    } else {
        p1(prompt('score?'))
    }
}
setInterval(function() {
    try {
  if (html5Iframe.contentWindow.document.getElementById('nav-forward') != undefined) { 
    html5Iframe.contentWindow.document.getElementById('nav-forward').disabled = false; // Enable the button
    html5Iframe.contentWindow.document.getElementById('nav-forward').onclick = yes; // Set up event listener to run p1 when button is clicked
  }
} catch (error) {}
}, 10);

//welcome screen
let welcomeModalOpen = () => {
    window.welcomeModal = {}
    window.welcomeModal.title = '<div class="css-1w7vrn4 enj526p0">Welcome</div>' // title of the modal
    window.welcomeModal.description = '<div class="css-msv3yz enj526p0">Press the forward button in a lesson to skip.</div>' // description of the modal
    window.welcomeModal.modal = iReadyFramework.ui.openModal(welcomeModal.title, welcomeModal.description, iReadyFramework.ui.closeModal, true)
}
if (welcomeModalSeen == false) {
    welcomeModalOpen()
    welcomeModalSeen = true
}
