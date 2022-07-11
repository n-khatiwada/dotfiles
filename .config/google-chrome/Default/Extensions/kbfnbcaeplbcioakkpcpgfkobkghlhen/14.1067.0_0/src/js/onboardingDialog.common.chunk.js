(self.webpackChunk=self.webpackChunk||[]).push([[8391],{53e3:(e,t,n)=>{var o=n(80890),a="chrome-extension://__MSG_@@extension_id__/",r="moz-extension://__MSG_@@extension_id__/",i="safari-web-extension://__MSG_@@extension_id__/",s=self.GR_RESOURCE_ROOT||a,l=self.GR_RESOURCE_ROOT||r,c=self.GR_RESOURCE_ROOT||i;e.exports={__css:o.toString().replace(new RegExp(a,"g"),s).replace(new RegExp(r,"g"),l).replace(new RegExp(i,"g"),c),...o.locals}},84488:(e,t,n)=>{n.d(t,{G:()=>r});var o=n(27378),a=n(31542);const r=({children:e,style:t,dataGrammarlyPart:n="ui-kit-iframe",...r})=>{const[i,s]=o.useState(null),l=o.useCallback((e=>{var t,n;let o=null;"contentDocument"in e.target&&(o=null!==(n=null===(t=e.target.contentDocument)||void 0===t?void 0:t.body)&&void 0!==n?n:null),s(o),o&&(o.style.margin="0",o.style.height="100vh")}),[]);return o.createElement("iframe",{...r,style:{border:"none",...t},onLoad:l,srcDoc:"<html><body></body></html>","data-grammarly-part":n},i&&(0,a.createPortal)(e,i))}},37373:(e,t,n)=>{n.r(t),n.d(t,{OnboardingDialog:()=>se});var o,a=n(44577),r=n(26273),i=n(37896),s=n(27378),l=n(41263),c=n(18505),p=n(2780),d=n(68383),h=n(73763);!function(e){e.Default="default",e.Short="short"}(o||(o={}));var u=n(38983),m=n(5872),g=n(92783),A=n(62111),S=n(19106),v=n(88326),b=n(1620),k=n(12187),y=n(33304),E=n.n(y);const f=e=>s.createElement(v.M,{clickHandler:e.clickHandler},s.createElement("button",{...(0,k.Sh)(E().buttonPrimary,e.className)},e.children)),x=e=>s.createElement(v.M,{clickHandler:e.clickHandler},s.createElement("button",{...(0,k.Sh)(E().buttonSecondary,e.className)},e.children)),C=e=>s.createElement(v.M,{clickHandler:e.clickHandler},s.createElement("button",{...(0,k.Sh)(E().buttonTertiary,e.className)},e.children)),w=e=>s.createElement(v.M,{dataGrammarlyPart:"btnCloseOnboarding",clickHandler:e.clickHandler},s.createElement(b.P,{color:"white"}));var _=n(43694),W=n.n(_);class R extends s.Component{constructor(){super(...arguments),this.onClick=()=>{S.J.onboardingOverlayLetsWriteButtonClick("end-step"),this.props.onClose()}}render(){return s.createElement(s.Fragment,null,s.createElement("h3",{className:W().header},"You’re all set. Happy writing!"),s.createElement(f,{clickHandler:this.onClick},"Let’s Write"))}}class I extends s.Component{componentDidMount(){S.J.onboardingOnboardingStepOverlayShow(this.props.stepName)}render(){return s.createElement(s.Fragment,null,s.createElement("div",{className:W().content},s.createElement("h3",{className:W().header},this.props.header),s.createElement("p",{className:W().text},this.props.text),s.createElement("div",{className:W().footer},s.createElement("span",{className:W().stepIndicator},this.props.currentStep," of ",this.props.totalStep),s.createElement(f,{clickHandler:this.props.onNext},"Next"))))}}var P=n(84488),z=n(68370),N=n(53e3),F=n.n(N);class D extends s.Component{constructor(){super(...arguments),this.onSelectChange=e=>{this.props.onChange(e.target.value)}}render(){return s.createElement(P.G,{style:{width:"100%",height:"85px"}},s.createElement(z.b,null,F().__css),s.createElement("div",{className:F().wrapper},s.createElement("div",{className:F().label},this.props.label),s.createElement("div",{className:F().selectWrapper},s.createElement("select",{className:F().select,onChange:this.onSelectChange,defaultValue:this.props.defaultValue||""},s.createElement("option",{key:"-1",disabled:!0,hidden:!0}),this.props.options.map(((e,t)=>s.createElement("option",{key:t,value:e.value},e.title)))))))}}var J=n(73580),H=n.n(J);const O=e=>s.createElement(v.M,{clickHandler:e.onChange},s.createElement("div",{className:H().checkboxWrapper,onClick:e.onChange},s.createElement("div",{className:(0,m.cs)(H().checkbox,!0===e.value&&H().checkboxActive)}),s.createElement("span",{className:H().label},e.label)));var T=n(94633),V=n.n(T);const M=[{value:"british",title:"🇬🇧 British English"},{value:"american",title:"🇺🇸 American English"},{value:"australian",title:"🇦🇺 Australian English"},{value:"canadian",title:"🇨🇦 Canadian English"}];class G extends s.Component{constructor(){super(...arguments),this.state={dialect:this.defaultDialect,autocorrect:this.props.personalizablePageState.autocorrectEnabled||!1,defs:this.props.personalizablePageState.enabledDefs},this.onSave=()=>{const e=this.props.personalizeActions;this.state.dialect&&e.changeStrongDialect(this.state.dialect),e.toggleAutocorrect(this.state.autocorrect),e.toggleDefs(this.state.defs),this.props.onNext(),S.J.onboardingOverlaySaveButtonClick("personalize-step")},this.onSkip=()=>{S.J.onboardingOverlaySkipPersonalizationButtonClick("personalize-step"),this.props.onNext()}}get defaultDialect(){return this.props.personalizablePageState.dialectStrong||this.props.personalizablePageState.dialectWeak}render(){return s.createElement("div",{className:V().personalizeStep},s.createElement("h2",{className:V().header},"Personalize Grammarly to meet your writing needs."),s.createElement("div",{className:V().formWrapper},s.createElement(D,{label:"I write in:",options:M,onChange:e=>this.setState({dialect:e}),defaultValue:this.defaultDialect}),s.createElement(O,{onChange:()=>this.setState({autocorrect:!this.state.autocorrect}),value:this.state.autocorrect,label:"Correct spelling automatically"}),s.createElement(O,{onChange:()=>this.setState({defs:!this.state.defs}),value:this.state.defs,label:"Show synonyms and definitions"})),s.createElement("div",{className:V().footer},s.createElement(x,{clickHandler:this.onSkip},"Skip"),s.createElement(f,{clickHandler:this.onSave},"Save")))}}var U;!function(e){e[e.checkWriting=0]="checkWriting",e[e.acceptSuggestion=1]="acceptSuggestion",e[e.popupEditor=2]="popupEditor",e[e.personalize=3]="personalize",e[e.end=4]="end"}(U||(U={}));const B={[U.checkWriting]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-check-text.mp4",[U.acceptSuggestion]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-accept-suggestion.mp4",[U.popupEditor]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-popup-editor.mp4",[U.end]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-white-G.mp4"},Q={[U.checkWriting]:"data:image/png;base64,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"},Z=[U.checkWriting,U.acceptSuggestion,U.popupEditor,U.personalize,U.end];class L extends s.Component{constructor(){super(...arguments),this.state={stepIndex:0},this.goToNextStep=()=>{this.state.stepIndex<Z.length-1&&this.setState({stepIndex:this.state.stepIndex+1})}}componentDidMount(){S.J.onboardingOverlayShow(),(0,A.T)().onboardingTutorialShow()}get currentStep(){return Z[this.state.stepIndex]}renderStep(){const e={onClose:this.props.onClose,onNext:this.goToNextStep,key:this.currentStep},t={...e,currentStep:this.state.stepIndex+1,totalStep:Z.filter((e=>e!==U.end)).length};switch(this.currentStep){case U.checkWriting:return s.createElement(I,{...t,stepName:"checkWriting",header:"When you see the Grammarly logo, it means Grammarly is checking your writing.",text:"When Grammarly finds an issue, you’ll see a red number. When it’s green, it means Grammarly found no issue."});case U.acceptSuggestion:return s.createElement(I,{...t,stepName:"acceptSuggestion",header:"Review and accept Grammarly suggestions as you’re writing.",text:"Hover on underlines to see Grammarly’s suggestion and click to apply the change."});case U.popupEditor:return s.createElement(I,{...t,stepName:"popupEditor",header:"Click the Grammarly logo to go deeper.",text:"Clicking the Grammarly logo will open an editing window. Here you can see additional details about Grammarly’s suggestions."});case U.personalize:return s.createElement(G,{...e,personalizeActions:this.props.personalizeActions,personalizablePageState:this.props.personalizablePageState,saveAnonymousProps:this.props.saveAnonymousProps});case U.end:return s.createElement(R,{...e});default:return null}}renderVideoWithPreload(){return Z.map(((e,t)=>!!B[e]&&t<=this.state.stepIndex+1&&s.createElement("video",{key:t,...(0,k.Sh)(W().video,this.currentStep===e&&W().show),autoPlay:!0,loop:!0,muted:!0,preload:"auto",poster:Q[e]},s.createElement("source",{src:B[e]}))))}render(){return s.createElement("div",{...(0,k.Sh)(W().onboardingTour,this.currentStep===U.end&&W().white)},s.createElement("div",{className:W().close},s.createElement(w,{clickHandler:()=>{S.J.onboardingOverlayCloseButtonClick("dialog"),this.props.onClose()}})),this.renderVideoWithPreload(),this.renderStep())}}var q,j=n(75668);!function(e){e.inlineSuggestions="inlineSuggestions",e.clickToAccept="clickToAccept",e.happyWriting="happyWriting"}(q||(q={}));const K=j.Rd().appConfig.url.assets.onboardingTour,Y={[q.inlineSuggestions]:K.inlineSuggestionsAnimation,[q.clickToAccept]:K.clickToAcceptAnimation,[q.happyWriting]:K.happyWritingAnimation},X=({isActive:e})=>s.createElement("div",{...(0,k.Sh)(W().progressDot,e&&W().active)}),$=({stepIndex:e,totalSteps:t})=>s.createElement("div",{className:W().progressDotsContainer},[...Array(t).keys()].map((t=>s.createElement(X,{isActive:t===e}))),`${e+1}/${t}`),ee=e=>{const{title:t,skipText:n,nextText:o,stepName:a,stepIndex:r,totalSteps:i,onSkipClick:l,onNextClick:c}=e;return s.useEffect((()=>{S.J.onboardingOnboardingStepOverlayShow(a)}),[a]),s.createElement("div",{className:W().newContent},s.createElement("h3",{className:W().newHeader},t),s.createElement("div",{className:W().buttonRow},s.createElement($,{stepIndex:r,totalSteps:i}),s.createElement("div",null,n&&s.createElement(C,{className:W().buttonMinWidth,clickHandler:l},n),s.createElement(f,{className:W().buttonMinWidth,clickHandler:c},o))))},te={[q.inlineSuggestions]:"To view inline suggestions, hover over the underlined text. Click the suggestion to accept it.",[q.clickToAccept]:"Grammarly keeps count of all your suggestions. To review them, click the number. Click the suggestion to accept it.",[q.happyWriting]:"All right, you’re ready to go. Happy writing!"},ne={[q.inlineSuggestions]:K.inlineSuggestionsPreviewImage},oe=[q.inlineSuggestions,q.clickToAccept,q.happyWriting],ae=({onClose:e})=>{const[t,n]=s.useState(0),o=t>=oe.length-1;s.useEffect((()=>{S.J.onboardingOverlayShow(),(0,A.T)().onboardingTutorialShow()}),[]);return s.createElement("div",{...(0,k.Sh)(W().onboardingTour)},s.createElement("div",{className:W().close},s.createElement(w,{clickHandler:()=>{S.J.onboardingOverlayCloseButtonClick("dialog"),e()}})),oe.map(((e,n)=>!!Y[e]&&n<=t+1&&s.createElement("video",{key:e,...(0,k.Sh)(W().newVideo,n===t&&W().show),autoPlay:!0,loop:t<oe.length-1,muted:!0,height:720,width:392,preload:"auto",poster:ne[e]},s.createElement("source",{type:"video/mp4",src:Y[e]})))),s.createElement(ee,{title:te[oe[t]],skipText:o?"":"Skip tutorial",nextText:o?"Finish":"Next",stepName:oe[t],stepIndex:t,totalSteps:oe.length,onSkipClick:()=>{S.J.onboardingSkipButtonClick("onboardingTour",oe[t]),n(oe.length-1)},onNextClick:o?()=>{S.J.onboardingOverlayLetsWriteButtonClick("end-step"),e()}:()=>{n((e=>e+1))}}))};var re=n(33163);class ie extends s.Component{constructor(){super(...arguments),this._containerRef=null,this.state={hide:!1},this.onClose=e=>{e&&e.stopPropagation(),this.setState({hide:!0}),this._containerRef&&this._containerRef.addEventListener("animationend",(()=>this.props.onClose()))},this.setOnboardingRef=e=>{e&&!this._containerRef?(this._containerRef=e,this._containerRef.addEventListener("click",this.preventClick)):!e&&this._containerRef&&(this._containerRef.removeEventListener("click",this.preventClick),this._containerRef=null)},this.preventClick=e=>{e.stopPropagation(),e.stopImmediatePropagation()}}componentDidMount(){this._sub=this.props.shouldClose.subscribe((e=>{e&&this.onClose()}))}componentWillUnmount(){var e;null===(e=this._sub)||void 0===e||e.unsubscribe()}render(){const e=(0,m.cs)({[re.onboardingDialog]:!0,[re.hide]:this.state.hide,[re.windows]:(0,g.ED)()}),t=(0,m.cs)({[re.content]:!0,[re.oldContent]:this.props.tourVersion!==o.Short,[re.newContent]:this.props.tourVersion===o.Short});return s.createElement("div",{ref:this.setOnboardingRef,className:e,"data-grammarly-part":"onboarding"},s.createElement("div",{className:t},s.createElement("div",{className:(0,m.cs)({[re.viewContainer]:!0,[re.experiment]:this.props.tourVersion===o.Short})},this.props.tourVersion===o.Short?s.createElement(ae,{onClose:this.onClose}):s.createElement(L,{onClose:this.onClose,personalizeActions:this.props.personalizeActions,personalizablePageState:this.props.personalizablePageState,saveAnonymousProps:this.props.saveAnonymousProps}))))}}class se extends((0,i.qH)(a.u)){constructor({doc:e,experimentClient:t,saveAnonymousProps:n,personalizeActions:a,personalizablePageState:c}){super(),this.view=null,this.shouldClose=u.h.create(!1),this.onKey=e=>{(0,i.rw)(e)===i.DG&&this.view&&this.shouldClose.set(!0)},this.onClose=()=>{this.emit("hide"),this.remove()},this.component=()=>(s.useEffect((()=>((0,r.o)(this.doc.defaultView,"keydown",this.onKey,!1),()=>(0,r.E)(this.doc.defaultView,"keydown",this.onKey,!1))),[]),s.createElement(l.L,{chunkName:"onboardingDialog"},s.createElement(ie,{tourVersion:"test"===this.experimentClient.getTreatment(h.p.ShortOnboardingTour)?o.Short:o.Default,saveAnonymousProps:this.saveAnonymousProps,personalizeActions:this.personalizeActions,personalizablePageState:this.personalizablePageState,onClose:this.onClose,shouldClose:this.shouldClose}))),this.doc=e,this.experimentClient=t,this.saveAnonymousProps=n,this.personalizeActions=a,this.personalizablePageState=c,this.createView()}createView(){if(!this.view){const e=this.component;this.view=c.VB.get({monitorAs:"onboarding"}).inject(p.EM.fromDocument(this.doc,"grammarly-onboarding"),p.zs.appendChild(this.doc.documentElement),d.G7.showWhenLoaded(s.createElement(e,null)))}}remove(){this.view&&(this.view.dispose(),this.view=null)}}},80890:(e,t,n)=>{var o=n(93476),a=n(91678),r=n(87546),i=o((function(e){return e[1]})),s=a(r);i.push([e.id,'._10TAx-wrapper{font-family:grInter,"SF UI Text",system,-apple-system,".SFNSDisplay-Regular",SFProText-Regular,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif !important;color:#0e101a !important;margin-bottom:16px !important}._3YQRC-label{font-weight:600 !important;font-size:14px !important;line-height:24px !important;margin-bottom:4px !important}._3FRQz-selectWrapper{position:relative !important;}._3FRQz-selectWrapper:after{pointer-events:none !important;content:\'\' !important;position:absolute !important;top:4px !important;right:4px !important;width:32px;height:32px;background-size:32px 32px;background-image:url('+s+');background-repeat:no-repeat}._3SUP2-select{font-family:grInter,"SF UI Text",system,-apple-system,".SFNSDisplay-Regular",SFProText-Regular,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif !important;color:#0e101a !important;-webkit-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;box-shadow:none !important;background-color:transparent !important;background-image:none !important;outline:none !important;margin:0 !important;pointer-events:auto !important;background:#f9faff !important;border:1px solid #e7e9f5 !important;box-sizing:border-box !important;border-radius:4px !important;width:100% !important;height:40px !important;padding:8px !important}',""]),i.locals={wrapper:"_10TAx-wrapper",label:"_3YQRC-label",selectWrapper:"_3FRQz-selectWrapper",select:"_3SUP2-select"},e.exports=i},93476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},91678:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},33163:e=>{e.exports={onboardingDialog:"_2PUCY",gr__onboarding_dialog_appear:"_2kQom",viewContainer:"_2r76m",view:"iXxau",windows:"_3YNSP",footer:"_220RP",hide:"_2crZn",gr__onboarding_dialog_disappear:"_3pI3R",content:"_2WdMd",gr__centered_onboarding_dialog_content_disappear:"_1MuSx",gr__centered_onboarding_dialog_content_appear:"_1PPL8",oldContent:"_1snd7",newContent:"_1J2QV",experiment:"_218Xl"}},33304:e=>{e.exports={buttonPrimary:"DeSZy",buttonSecondary:"_19BHo",buttonTertiary:"MlFOd"}},73580:e=>{e.exports={checkboxWrapper:"_1nbHQ",checkbox:"_1rrFK",checkboxActive:"_3QCtQ",label:"_2uB3E"}},43694:e=>{e.exports={onboardingTour:"_1kT00",close:"_1d9eL",video:"_1EkJs",show:"_30F92",content:"_26qzv",header:"_5zyYS",text:"_1nSmD",footer:"_1U2Zt",stepIndicator:"_1ASb6",white:"_1a0vu",newContent:"AwMmd",buttonRow:"_3pl-d",newVideo:"ZQlY3",progressDotsContainer:"_3QaH9",progressDot:"_3woi7",active:"_1mm7L",newHeader:"_1SRns",buttonMinWidth:"_3AvOJ"}},94633:e=>{e.exports={personalizeStep:"_3UcZy",header:"_2WHOT",formWrapper:"_18hhZ",footer:"_3Laiq"}},87546:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o="chrome-extension://__MSG_@@extension_id__/src/images/31cf0fff64370d348f4388b99eecd7c3/dropdown-double-arrow.svg"}}]);