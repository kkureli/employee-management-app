/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(n,t,i)},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,m=f?f.emptyScript:"",b=p.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const r=n?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of n){const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n,this[n]=o.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??w)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,b?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,E=x.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+A,_=`<${D}>`,C=document,N=()=>C.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,T="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,L=/>/g,U=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),J=new WeakMap,q=C.createTreeWalker(C,129);function G(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":3===e?"<math>":"",s=P;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===P?"!--"===l[1]?s=O:void 0!==l[1]?s=L:void 0!==l[2]?(I.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=o??P,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?U:'"'===l[3]?j:z):s===j||s===z?s=U:s===O||s===L?s=P:(s=U,o=void 0);const d=s===U&&t[e+1].startsWith("/>")?" ":"";r+=s===P?i+_:c>=0?(n.push(a),i.slice(0,c)+S+i.slice(c)+A+d):i+A+(-2===c?e:d)}return[G(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class W{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[l,c]=V(t,e);if(this.el=W.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=q.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=c[r++],i=n.getAttribute(t).split(A),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?X:"?"===s[1]?tt:"@"===s[1]?et:Y}),n.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:o}),n.removeAttribute(t));if(I.test(n.tagName)){const t=n.textContent.split(A),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],N()),q.nextNode(),a.push({type:2,index:++o});n.append(t[e],N())}}}else if(8===n.nodeType)if(n.data===D)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(A,t+1));)a.push({type:7,index:o}),t+=A.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,n){if(e===B)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const r=M(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,n)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??C).importNode(e,!0);q.currentNode=n;let o=q.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=i[++s]}r!==a?.index&&(o=q.nextNode(),r++)}return q.currentNode=C,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),M(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Z(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new W(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Q(this.O(N()),this.O(N()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=K(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=K(this,n[i+s],e,s),a===B&&(a=this._$AH[s]),r||=!M(a)||a!==this._$AH[s],a===H?t=H:t!==H&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}r&&!n&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class tt extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class et extends Y{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??H)===B)return;const i=this._$AH,n=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==H&&(i===H||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=x.litHtmlPolyfillSupport;nt?.(W,Q),(x.litHtmlVersions??=[]).push("3.3.0");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new Q(e.insertBefore(N(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const st=ot.litElementPolyfillSupport;st?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.0");const at={en:{addEmployee:"Add New Employee",editEmployee:"Edit Employee",firstName:"First Name",lastName:"Last Name",dob:"Date of Birth",employmentDate:"Date of Employment",phone:"Phone Number",email:"Email",department:"Department",position:"Position",select:"Select",submit:"Submit",required:"Required",confirmUpdate:"Are you sure you want to update this employee?",confirmDelete:"Are you sure you want to delete this employee?",fullName:"Name and Surname",actions:"Actions",edit:"Edit",delete:"Delete",employeeList:"Employee List",table:"Table View",list:"List View",search:"Search...",confirmDeleteMultiple:"Are you sure you want to delete the selected employees?",selected:"Selected",deleteSelected:"Delete Selected",confirmDeleteTitle:"Delete Confirmation",proceed:"Proceed",cancel:"Cancel",confirmDeleteMessage:"Selected Employee record of {firstName} {lastName} will be deleted.",confirmDeleteMultipleMessage:"Selected Employee records will be deleted.",confirmDeleteMultipleTitle:"Bulk Delete Confirmation",importFromMock:"Import from Mock Data",emailAlreadyExists:"This email already exists. Please use a different email.",invalidEmail:"Invalid email format. Please enter a valid email address."},tr:{addEmployee:"Yeni Çalışan Ekle",editEmployee:"Çalışanı Düzenle",firstName:"Ad",lastName:"Soyad",dob:"Doğum Tarihi",employmentDate:"İşe Başlama Tarihi",phone:"Telefon Numarası",email:"E-posta",department:"Departman",position:"Pozisyon",select:"Seçiniz",submit:"Gönder",required:"Zorunlu",confirmUpdate:"Çalışanı güncellemek istediğinize emin misiniz?",confirmDelete:"Çalışanı silmek istediğinize emin misiniz?",fullName:"Ad Soyad",actions:"İşlemler",edit:"Düzenle",delete:"Sil",employeeList:"Çalışan Listesi",table:"Tablo Görünümü",list:"Liste Görünümü",search:"Arama...",confirmDeleteMultiple:"Seçilen çalışanları silmek istediğinize emin misiniz?",selected:"Seçilen",deleteSelected:"Seçilenleri Sil",confirmDeleteTitle:"Silme Onayı",proceed:"Devam Et",cancel:"İptal",confirmDeleteMessage:"{firstName} {lastName} adlı çalışanın kaydı silinecektir.",confirmDeleteMultipleMessage:"Seçilen çalışanların kayıtları silinecektir.",confirmDeleteMultipleTitle:"Çoklu Silme Onayı",confirmDeleteMultipleProceed:"Seçilenleri Sil",importFromMock:"Örnek Verilerden İçe Aktar",emailAlreadyExists:"Bu e-posta zaten mevcut. Lütfen farklı bir e-posta kullanın.",invalidEmail:"Geçersiz e-posta formatı. Lütfen geçerli bir e-posta adresi girin."}},lt=localStorage.getItem("lang"),ct=document.documentElement.lang||"en",ht=lt||ct;function dt(t){return at[ht][t]||t}class ut extends rt{static styles=r`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    nav {
      background: #fafafa;
      border-bottom: 1px solid #eee;
      padding: 0.75rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
      box-shadow: 0 3px 8px rgb(0 0 0 / 0.05);
      border-radius: 10px 10px 0 0;
    }
    .logo {
      font-weight: 700;
      color: #f36d00;
      font-size: 1.3rem;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .logo img {
      width: 32px;
      height: 32px;
    }
    .logo span {
      font-weight: bold;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
      font-weight: 600;
      color: #f36d00;
      align-items: center;
    }
    .nav-links a {
      color: #f36d00;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 1rem;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    .nav-links a:hover {
      text-decoration: underline;
      color: #b04c00;
    }
    .nav-links .add-new {
      display: flex;
      align-items: center;
    }
    .nav-links .add-new svg {
      width: 18px;
      height: 18px;
      fill: #f36d00;
      margin-left: 4px;
    }
    .lang-flag {
      width: 24px;
      height: 16px;
      border-radius: 3px;
      cursor: pointer;
    }
  `;constructor(){super(),this.language=localStorage.getItem("lang")||document.documentElement.lang||"en"}render(){return F`
      <nav>
        <div class="logo">
          <img
            width="32"
            height="32"
            src="../../assets/ing.png"
            alt="ING Logo"
          />
          <span>ING</span>
        </div>
        <div class="nav-links">
          <a href="/" title=${dt("employeeList")}> ${dt("employeeList")} </a>
          <a href="/add" class="add-new" title=${dt("addEmployee")}>
            ${dt("addEmployee")} +
          </a>
          <img
            width="24"
            height="16"
            src=${"tr"===this.language?"../../assets/tr.png":"../../assets/uk.png"}
            alt=${"tr"===this.language?"Turkish Flag":"English Flag"}
            class="lang-flag"
            @click=${this._toggleLanguage}
            title="Change Language"
          />
        </div>
      </nav>
    `}_toggleLanguage(){this.language="en"===this.language?"tr":"en",localStorage.setItem("lang",this.language),document.documentElement.lang=this.language,window.location.reload()}}customElements.define("navigation-menu",ut);const pt="employees";let ft=JSON.parse(localStorage.getItem(pt))||[];const mt={getAll:()=>[...ft],add(t){ft.push(t),this._persist()},update(t,e){ft=ft.map((i=>i.id===t?{...i,...e}:i)),this._persist()},delete(t){ft=ft.filter((e=>e.id!==t)),this._persist()},_persist(){localStorage.setItem(pt,JSON.stringify(ft)),window.dispatchEvent(new CustomEvent("employees-updated",{detail:ft}))},initIfEmpty(t=[]){0===ft.length&&t.length>0&&(ft=[...t],this._persist())},clear(){ft=[],this._persist()}};class bt extends rt{static styles=r`
    :host {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    :host([open]) {
      visibility: visible;
      opacity: 1;
    }
    .modal {
      background: white;
      border-radius: 8px;
      width: 360px;
      max-width: 90vw;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      padding: 1.5rem 2rem 2rem 2rem;
      position: relative;
      font-family: Arial, sans-serif;
      box-sizing: border-box;
    }
    .header {
      font-weight: 700;
      font-size: 1.3rem;
      color: #f36d00;
      margin-bottom: 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header button.close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #f36d00;
      line-height: 1;
      padding: 0;
      font-weight: 700;
    }
    .message {
      font-size: 1rem;
      color: #333;
      margin-bottom: 1.8rem;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }
    button.proceed {
      background-color: #f36d00;
      color: white;
      border: none;
      border-radius: 7px;
      padding: 0.7rem 0;
      font-weight: 700;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.25s ease;
    }
    button.proceed:hover {
      background-color: #b04c00;
    }
    button.cancel {
      background: none;
      border: 1.5px solid #3b2f7a;
      color: #3b2f7a;
      border-radius: 7px;
      padding: 0.6rem 0;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.25s ease, color 0.25s ease;
    }
    button.cancel:hover {
      background-color: #3b2f7a;
      color: white;
    }
  `;static properties={open:{type:Boolean,reflect:!0},title:{type:String},message:{type:String}};constructor(){super(),this.open=!1,this.title="",this.message=""}render(){return this.open?F`
      <div
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        aria-describedby="modalDesc"
      >
        <div class="header">
          <div id="modalTitle">${this.title}</div>
          <button
            class="close"
            @click=${this._onCancel}
            aria-label=${dt("close")||"Close"}
          >
            &times;
          </button>
        </div>
        <div class="message" id="modalDesc">${this.message}</div>
        <div class="buttons">
          <button class="proceed" @click=${this._onConfirm}>
            ${dt("proceed")}
          </button>
          <button class="cancel" @click=${this._onCancel}>
            ${dt("cancel")}
          </button>
        </div>
      </div>
    `:F``}_onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}}customElements.define("confirmation-modal",bt);const gt=Array.from({length:25}).map(((t,e)=>({id:e+1,firstName:`John${e}`,lastName:`Doe${e}`,dob:"1990-01-01",employmentDate:"2020-01-01",phone:"555-1234567",email:`john${e}@example.com`,department:e%2==0?"Tech":"Analytics",position:["Junior","Medior","Senior"][e%3]})));class yt extends rt{static styles=r`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      color: #333;
    }
    h2 {
      color: #f36d00;
      margin-bottom: 1rem;
    }
    .table-container {
      background: #fafafa;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 8px;
    }
    th {
      text-align: left;
      padding: 12px 15px;
      font-weight: 600;
      color: #f36d00;
      font-size: 0.9rem;
      user-select: none;
    }
    td {
      padding: 12px 15px;
      background: white;
      vertical-align: middle;
    }
    tr:hover td {
      background: #f9f1e7;
    }
    tbody tr {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    input[type='checkbox'] {
      transform: scale(1.3);
      cursor: pointer;
    }
    .actions button {
      background: none;
      border: none;
      cursor: pointer;
      color: #f36d00;
      font-size: 1.2rem;
      margin-left: 8px;
      transition: color 0.2s ease;
    }
    .actions button:hover {
      color: #b04c00;
    }
    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 6px;
    }
    .pagination button {
      background: none;
      border: 1.5px solid #f36d00;
      color: #f36d00;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 7px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .pagination button:hover:not(:disabled) {
      background: #f36d00;
      color: white;
    }
    .pagination button:disabled {
      background: #f36d00;
      color: white;
      cursor: default;
    }
    .controls {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 0.5rem;
    }
    .view-toggle button {
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      background-color: #f36d00;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    }
    .view-toggle button:hover:not(:disabled) {
      background-color: #b04c00;
    }
    .view-toggle button:disabled {
      background-color: #8c4700;
      cursor: default;
    }
    input[type='text'] {
      flex-grow: 1;
      min-width: 200px;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
    .bulk-actions {
      background: #fce5d6;
      color: #b04c00;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-between;
    }
    .bulk-actions button {
      background-color: #f36d00;
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 7px;
      cursor: pointer;
      font-weight: 700;
      transition: background-color 0.2s ease;
    }
    .bulk-actions button:hover {
      background-color: #b04c00;
    }
    .card {
      background: white;
      box-shadow: 0 3px 8px rgb(0 0 0 / 0.1);
      border-radius: 10px;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      font-size: 1rem;
      color: #333;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .card strong {
      font-weight: 700;
      font-size: 1.15rem;
      color: #f36d00;
    }
    .card .email {
      font-style: italic;
      color: #666;
    }
    .card .department-position {
      font-weight: 600;
      color: #555;
    }
    .card button {
      margin-top: 0.75rem;
      background-color: transparent;
      border: 1.5px solid #f36d00;
      color: #f36d00;
      font-weight: 600;
      border-radius: 6px;
      padding: 0.4rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .card button:hover {
      background-color: #f36d00;
      color: white;
    }
    .card button + button {
      margin-left: 0.5rem;
      border-color: #b04c00;
      color: #b04c00;
    }
    .card button + button:hover {
      background-color: #b04c00;
      color: white;
    }
    .import-btn {
      background-color: #f36d00;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 7px;
      cursor: pointer;
      font-weight: 700;
      margin-top: 1rem;
      transition: background-color 0.2s ease;
    }
    .import-btn:hover {
      background-color: #b04c00;
    }
    @media (max-width: 768px) {
      table,
      thead,
      tbody,
      th,
      td,
      tr {
        display: block;
      }
      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
      tbody tr {
        border: 1px solid #ccc;
        margin-bottom: 1rem;
        border-radius: 8px;
        padding: 0.5rem;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      }
      tbody td {
        border: none;
        position: relative;
        padding-left: 50%;
        text-align: left;
      }
      tbody td::before {
        position: absolute;
        top: 0.5rem;
        left: 1rem;
        width: 45%;
        white-space: nowrap;
        font-weight: 600;
        color: #f36d00;
        content: attr(data-label);
      }
    }
    @media (max-width: 600px) {
      .controls {
        flex-direction: column;
        align-items: flex-start;
      }
      .view-toggle {
        margin-top: 0.5rem;
      }
    }
  `;static properties={viewMode:{type:String},searchQuery:{type:String},currentPage:{type:Number},employees:{type:Array},selectedEmployeeIds:{type:Array},modalOpen:{type:Boolean}};constructor(){super(),this.viewMode="table",this.searchQuery="",this.currentPage=1,this.itemsPerPage=10,this.employees=[],this.selectedEmployeeIds=[],this.modalOpen=!1,mt.initIfEmpty(),this.employees=mt.getAll(),this._onEmployeesUpdate=this._onEmployeesUpdate.bind(this),window.addEventListener("employees-updated",this._onEmployeesUpdate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("employees-updated",this._onEmployeesUpdate)}_onEmployeesUpdate(t){this.employees=t.detail}get filteredEmployees(){return this.employees.filter((t=>`${t.firstName} ${t.lastName}`.toLowerCase().includes(this.searchQuery.toLowerCase())))}get paginatedEmployees(){const t=(this.currentPage-1)*this.itemsPerPage;return this.filteredEmployees.slice(t,t+this.itemsPerPage)}get totalPages(){return Math.ceil(this.filteredEmployees.length/this.itemsPerPage)}render(){return F`
      <h2>${dt("employeeList")}</h2>

      ${this.selectedEmployeeIds.length>0?F`
            <div class="bulk-actions">
              ${this.selectedEmployeeIds.length} ${dt("selected")||"selected"}.
              <button @click=${this._openDeleteModal}>
                ${dt("deleteSelected")||"Delete Selected"}
              </button>
            </div>
          `:""}

      <div class="controls">
        <input
          type="text"
          placeholder=${dt("search")||"Search..."}
          @input=${this._onSearch}
        />
        <div class="view-toggle">
          <button
            ?disabled=${"table"===this.viewMode}
            @click=${()=>this.viewMode="table"}
          >
            ${dt("table")||"Table"}
          </button>
          <button
            ?disabled=${"list"===this.viewMode}
            @click=${()=>this.viewMode="list"}
          >
            ${dt("list")||"List"}
          </button>
        </div>
      </div>

      <div class="table-container">
        ${"table"===this.viewMode?this._renderTable():this._renderList()}
        ${0===this.employees.length?F`
              <button class="import-btn" @click=${this._importMockData}>
                ${dt("importFromMock")||"Import from mock data"}
              </button>
            `:""}
      </div>

      ${this._renderPagination()}

      <confirmation-modal
        .open=${this.modalOpen}
        title=${dt("confirmDeleteTitle")||"Are you sure?"}
        message=${this._modalMessage()}
        @confirm=${this._onModalConfirm}
        @cancel=${this._onModalCancel}
      ></confirmation-modal>
    `}_importMockData(){gt.forEach((t=>mt.add(t))),this.employees=mt.getAll()}_modalMessage(){if(1===this.selectedEmployeeIds.length){const t=this.employees.find((t=>t.id===this.selectedEmployeeIds[0]));if(t){return dt("confirmDeleteMessage").replace("{firstName}",t.firstName).replace("{lastName}",t.lastName)}}else if(this.selectedEmployeeIds.length>1)return dt("confirmDeleteMultipleMessage");return""}_renderTable(){return F`
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                .checked=${this.selectedEmployeeIds.length===this.filteredEmployees.length&&this.filteredEmployees.length>0}
                @change=${this._toggleSelectAll}
              />
            </th>
            <th>${dt("firstName")||"First Name"}</th>
            <th>${dt("lastName")||"Last Name"}</th>
            <th>${dt("employmentDate")||"Date of Employment"}</th>
            <th>${dt("dob")||"Date of Birth"}</th>
            <th>${dt("phone")||"Phone"}</th>
            <th>${dt("email")||"Email"}</th>
            <th>${dt("department")||"Department"}</th>
            <th>${dt("position")||"Position"}</th>
            <th>${dt("actions")||"Actions"}</th>
          </tr>
        </thead>
        <tbody>
          ${this.paginatedEmployees.map((t=>F`
              <tr>
                <td data-label="">
                  <input
                    type="checkbox"
                    .checked=${this.selectedEmployeeIds.includes(t.id)}
                    @change=${e=>this._toggleSelectOne(e,t.id)}
                  />
                </td>
                <td data-label="${dt("firstName")||"First Name"}">
                  ${t.firstName}
                </td>
                <td data-label="${dt("lastName")||"Last Name"}">
                  ${t.lastName}
                </td>
                <td data-label="${dt("employmentDate")||"Date of Employment"}">
                  ${t.employmentDate}
                </td>
                <td data-label="${dt("dob")||"Date of Birth"}">${t.dob}</td>
                <td data-label="${dt("phone")||"Phone"}">${t.phone}</td>
                <td data-label="${dt("email")||"Email"}">${t.email}</td>
                <td data-label="${dt("department")||"Department"}">
                  ${t.department}
                </td>
                <td data-label="${dt("position")||"Position"}">
                  ${t.position}
                </td>
                <td data-label="${dt("actions")||"Actions"}" class="actions">
                  <button @click=${()=>this._edit(t.id)} title="Edit">
                    ✏️
                  </button>
                  <button
                    @click=${()=>this._openDeleteModalSingle(t.id)}
                    title="Delete"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            `))}
        </tbody>
      </table>
    `}_renderList(){return F`
      ${this.paginatedEmployees.map((t=>F`
          <div class="card" role="listitem" tabindex="0">
            <strong>${t.firstName} ${t.lastName}</strong>
            <div class="email">${t.email}</div>
            <div class="department-position">
              ${t.department} - ${t.position}
            </div>
            <div>
              <button
                @click=${()=>this._edit(t.id)}
                aria-label="Edit ${t.firstName} ${t.lastName}"
              >
                ${dt("edit")||"Edit"}
              </button>
              <button
                @click=${()=>this._openDeleteModalSingle(t.id)}
                aria-label="Delete ${t.firstName} ${t.lastName}"
              >
                ${dt("delete")||"Delete"}
              </button>
            </div>
          </div>
        `))}
    `}_renderPagination(){return F`
      <div class="pagination">
        ${Array.from({length:this.totalPages}).map(((t,e)=>F`
            <button
              ?disabled=${this.currentPage===e+1}
              @click=${()=>this.currentPage=e+1}
            >
              ${e+1}
            </button>
          `))}
      </div>
    `}_onSearch(t){this.searchQuery=t.target.value,this.currentPage=1}_edit(t){window.history.pushState({},"",`/edit/${t}`),window.dispatchEvent(new Event("popstate"))}_openDeleteModalSingle(t){this.selectedEmployeeIds=[t],this.modalOpen=!0}_openDeleteModal(){this.selectedEmployeeIds.length>0&&(this.modalOpen=!0)}_onModalConfirm(){this.selectedEmployeeIds.forEach((t=>mt.delete(t))),this.selectedEmployeeIds=[],this.modalOpen=!1}_onModalCancel(){this.modalOpen=!1,this.selectedEmployeeIds=[]}_toggleSelectAll(t){const e=t.target.checked;this.selectedEmployeeIds=e?this.filteredEmployees.map((t=>t.id)):[]}_toggleSelectOne(t,e){t.target.checked?this.selectedEmployeeIds.includes(e)||(this.selectedEmployeeIds=[...this.selectedEmployeeIds,e]):this.selectedEmployeeIds=this.selectedEmployeeIds.filter((t=>t!==e))}}customElements.define("employee-list",yt);class wt extends rt{static styles=r`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    label {
      display: block;
      font-weight: 600;
      color: #f36d00;
    }
    input,
    select {
      display: block;
      margin-top: 0.25rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }
    button[type='submit'] {
      padding: 0.75rem 1.5rem;
      font-weight: 700;
      background-color: #f36d00;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button[type='submit']:hover {
      background-color: #d85c00;
    }
    h2 {
      color: #f36d00;
    }
  `;static properties={employeeId:{type:Number},mode:{type:String},formData:{type:Object},errors:{type:Object}};constructor(){super(),this.employeeId=null,this.mode="add",this.formData={firstName:"",lastName:"",dob:"",employmentDate:"",phone:"",email:"",department:"",position:""},this.errors={}}connectedCallback(){super.connectedCallback();const t=window.location.pathname.match(/^\/edit\/(\d+)/);if(t){this.mode="edit",this.employeeId=Number(t[1]);const e=mt.getAll().find((t=>t.id===this.employeeId));e&&(this.formData={...e})}}updated(t){if(t.has("employeeId")){const t=mt.getAll().find((t=>t.id===this.employeeId));t&&(this.formData={...t})}}render(){return F`
      <h2>${"edit"===this.mode?dt("editEmployee"):dt("addEmployee")}</h2>
      <form @submit=${this._handleSubmit}>
        ${this._renderInput("firstName",dt("firstName"))}
        ${this._renderInput("lastName",dt("lastName"))}
        ${this._renderInput("dob",dt("dob"),"date")}
        ${this._renderInput("employmentDate",dt("employmentDate"),"date")}
        ${this._renderInput("phone",dt("phone"))}
        ${this._renderInput("email",dt("email"),"email")}

        <label>
          ${dt("department")}:
          <select
            name="department"
            .value=${this.formData.department}
            @change=${this._onInput}
          >
            <option value="">${dt("select")}</option>
            <option value="Analytics">Analytics</option>
            <option value="Tech">Tech</option>
          </select>
          ${this.errors.department?F`<span style="color:red">${this.errors.department}</span>`:""}
        </label>

        <label>
          ${dt("position")}:
          <select
            name="position"
            .value=${this.formData.position}
            @change=${this._onInput}
          >
            <option value="">${dt("select")}</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
          ${this.errors.position?F`<span style="color:red">${this.errors.position}</span>`:""}
        </label>

        <button type="submit">${dt("submit")}</button>
      </form>
    `}_renderInput(t,e,i="text"){return F`
      <label>
        ${e}:
        <input
          type=${i}
          name=${t}
          .value=${this.formData[t]}
          @input=${this._onInput}
        />
        ${this.errors[t]?F`<span style="color:red">${this.errors[t]}</span>`:""}
      </label>
    `}_onInput(t){this.formData={...this.formData,[t.target.name]:t.target.value}}_handleSubmit(t){if(t.preventDefault(),this._validate()){if("edit"===this.mode){if(!confirm(dt("confirmUpdate")))return;mt.update(this.employeeId,this.formData)}else{const t=Date.now();mt.add({id:t,...this.formData})}window.history.pushState({},"","/"),window.dispatchEvent(new Event("popstate"))}}_isEmailUnique(t,e=null){return!mt.getAll().some((i=>i.email.toLowerCase()===t.toLowerCase()&&i.id!==e))}_isValidEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}_validate(){const t={};return["firstName","lastName","dob","employmentDate","phone","email","department","position"].forEach((e=>{this.formData[e]||(t[e]=dt("required"))})),this.formData.email&&(this._isValidEmail(this.formData.email)?this._isEmailUnique(this.formData.email,this.employeeId)||(t.email=dt("emailExists")):t.email=dt("invalidEmail")),this.errors=t,0===Object.keys(t).length}}function vt(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var n=t[i];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)e.push({type:"CHAR",index:i,value:t[i++]});else{var o=1,r="";if("?"===t[a=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<t.length;)if("\\"!==t[a]){if(")"===t[a]){if(0===--o){a++;break}}else if("("===t[a]&&(o++,"?"!==t[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));r+=t[a++]}else r+=t[a++]+t[a++];if(o)throw new TypeError("Unbalanced pattern at ".concat(i));if(!r)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:r}),i=a}else{for(var s="",a=i+1;a<t.length;){var l=t.charCodeAt(a);if(!(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||95===l))break;s+=t[a++]}if(!s)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:s}),i=a}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),n=e.prefixes,o=void 0===n?"./":n,r=e.delimiter,s=void 0===r?"/#?":r,a=[],l=0,c=0,h="",d=function(t){if(c<i.length&&i[c].type===t)return i[c++].value},u=function(t){var e=d(t);if(void 0!==e)return e;var n=i[c],o=n.type,r=n.index;throw new TypeError("Unexpected ".concat(o," at ").concat(r,", expected ").concat(t))},p=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e},f=function(t){var e=a[a.length-1],i=t||(e&&"string"==typeof e?e:"");if(e&&!i)throw new TypeError('Must have text between two parameters, missing text after "'.concat(e.name,'"'));return!i||function(t){for(var e=0,i=s;e<i.length;e++){var n=i[e];if(t.indexOf(n)>-1)return!0}return!1}(i)?"[^".concat(Et(s),"]+?"):"(?:(?!".concat(Et(i),")[^").concat(Et(s),"])+?")};c<i.length;){var m=d("CHAR"),b=d("NAME"),g=d("PATTERN");if(b||g){var y=m||"";-1===o.indexOf(y)&&(h+=y,y=""),h&&(a.push(h),h=""),a.push({name:b||l++,prefix:y,suffix:"",pattern:g||f(y),modifier:d("MODIFIER")||""})}else{var w=m||d("ESCAPED_CHAR");if(w)h+=w;else if(h&&(a.push(h),h=""),d("OPEN")){y=p();var v=d("NAME")||"",$=d("PATTERN")||"",x=p();u("CLOSE"),a.push({name:v||($?l++:""),pattern:v&&!$?f(y):$,prefix:y,suffix:x,modifier:d("MODIFIER")||""})}else u("END")}}return a}function $t(t,e){return xt(vt(t,e),e)}function xt(t,e){void 0===e&&(e={});var i=kt(e),n=e.encode,o=void 0===n?function(t){return t}:n,r=e.validate,s=void 0===r||r,a=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)}));return function(e){for(var i="",n=0;n<t.length;n++){var r=t[n];if("string"!=typeof r){var l=e?e[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,h="*"===r.modifier||"+"===r.modifier;if(Array.isArray(l)){if(!h)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===l.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<l.length;d++){var u=o(l[d],r);if(s&&!a[n].test(u))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(u,'"'));i+=r.prefix+u+r.suffix}}else if("string"!=typeof l&&"number"!=typeof l){if(!c){var p=h?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(p))}}else{u=o(String(l),r);if(s&&!a[n].test(u))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(u,'"'));i+=r.prefix+u+r.suffix}}else i+=r}return i}}function Et(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function kt(t){return t&&t.sensitive?"":"i"}function St(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var n=i.strict,o=void 0!==n&&n,r=i.start,s=void 0===r||r,a=i.end,l=void 0===a||a,c=i.encode,h=void 0===c?function(t){return t}:c,d=i.delimiter,u=void 0===d?"/#?":d,p=i.endsWith,f="[".concat(Et(void 0===p?"":p),"]|$"),m="[".concat(Et(u),"]"),b=s?"^":"",g=0,y=t;g<y.length;g++){var w=y[g];if("string"==typeof w)b+=Et(h(w));else{var v=Et(h(w.prefix)),$=Et(h(w.suffix));if(w.pattern)if(e&&e.push(w),v||$)if("+"===w.modifier||"*"===w.modifier){var x="*"===w.modifier?"?":"";b+="(?:".concat(v,"((?:").concat(w.pattern,")(?:").concat($).concat(v,"(?:").concat(w.pattern,"))*)").concat($,")").concat(x)}else b+="(?:".concat(v,"(").concat(w.pattern,")").concat($,")").concat(w.modifier);else{if("+"===w.modifier||"*"===w.modifier)throw new TypeError('Can not repeat "'.concat(w.name,'" without a prefix and suffix'));b+="(".concat(w.pattern,")").concat(w.modifier)}else b+="(?:".concat(v).concat($,")").concat(w.modifier)}}if(l)o||(b+="".concat(m,"?")),b+=i.endsWith?"(?=".concat(f,")"):"$";else{var E=t[t.length-1],k="string"==typeof E?m.indexOf(E[E.length-1])>-1:void 0===E;o||(b+="(?:".concat(m,"(?=").concat(f,"))?")),k||(b+="(?=".concat(m,"|").concat(f,")"))}return new RegExp(b,kt(i))}(vt(t,i),e,i)}function At(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=i.exec(t.source);o;)e.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var n=t.map((function(t){return At(t,e,i).source}));return new RegExp("(?:".concat(n.join("|"),")"),kt(i))}(t,e,i):St(t,e,i)}function Dt(t){return"object"==typeof t&&!!t}function _t(t){return"function"==typeof t}function Ct(t){return"string"==typeof t}function Nt(t=[]){return Array.isArray(t)?t:[t]}function Mt(t){return`[Vaadin.Router] ${t}`}customElements.define("employee-form",wt);class Rt extends Error{code;context;constructor(t){super(Mt(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}const Tt=Symbol("NotFoundResult");function Pt(t){return new Rt(t)}function Ot(t){return(Array.isArray(t)?t[0]:t)??""}function Lt(t){return Ot(t?.path)}const Ut=new Map;function zt(t){try{return decodeURIComponent(t)}catch{return t}}Ut.set("|false",{keys:[],pattern:/(?:)/u});var jt=function(t,e,i=!1,n=[],o){const r=`${t}|${String(i)}`,s=Ot(e);let a=Ut.get(r);if(!a){const e=[];a={keys:e,pattern:At(t,e,{end:i,strict:""===t})},Ut.set(r,a)}const l=a.pattern.exec(s);if(!l)return null;const c={...o};for(let t=1;t<l.length;t++){const e=a.keys[t-1],i=e.name,n=l[t];void 0===n&&Object.hasOwn(c,i)||("+"===e.modifier||"*"===e.modifier?c[i]=n?n.split(/[/?#]/u).map(zt):[]:c[i]=n?zt(n):n)}return{keys:[...n,...a.keys],params:c,path:l[0]}};var It=function t(e,i,n,o,r){let s,a,l=0,c=Lt(e);return c.startsWith("/")&&(n&&(c=c.substring(1)),n=!0),{next(h){if(e===h)return{done:!0,value:void 0};e.i??=function(t){return Array.isArray(t)&&t.length>0?t:void 0}(e.children);const d=e.i??[],u=!e.i&&!e.children;if(!s&&(s=jt(c,i,u,o,r),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:e}};if(s&&d.length>0)for(;l<d.length;){if(!a){const o=d[l];o.parent=e;let r=s.path.length;r>0&&"/"===i.charAt(r)&&(r+=1),a=t(o,i.substring(r),n,s.keys,s.params)}const o=a.next(h);if(!o.done)return{done:!1,value:o.value};a=null,l+=1}return{done:!0,value:void 0}}}};function Ft(t){if(_t(t.route.action))return t.route.action(t)}class Bt extends Error{code;context;constructor(t,e){let i=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=Lt(t.route);n&&(i+=` Resolution had failed on route: '${n}'`),super(i,e),this.code=e?.code,this.context=t}warn(){console.warn(this.message)}}class Ht{baseUrl;#t;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:e="",context:i,errorHandler:n,resolveRoute:o=Ft}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=n,this.resolveRoute=o,Array.isArray(t)?this.#e={i:t,m:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#t={...i,hash:"",next:async()=>Tt,params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#t}get v(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.i??[]]}removeRoutes(){this.#e.i=[]}async resolve(t){const e=this,i={...this.#t,...Ct(t)?{pathname:t}:t,next:l},n=It(this.#e,this.S(i.pathname)??i.pathname,!!this.baseUrl),o=this.resolveRoute;let r=null,s=null,a=i;async function l(t=!1,c=r?.value?.route,h){const d=null===h?r?.value?.route:void 0;if(r=s??n.next(d),s=null,!t&&(r.done||!function(t,e){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(r.value.route,c)))return s=r,Tt;if(r.done)throw Pt(i);a={...i,params:r.value.params,route:r.value.route,chain:a.chain?.slice()},function(t,e){const{path:i,route:n}=e;if(n&&!n.m){const e={path:i,route:n};if(n.parent&&t.chain)for(let e=t.chain.length-1;e>=0&&t.chain[e].route!==n.parent;e--)t.chain.pop();t.chain?.push(e)}}(a,r.value);const u=await o(a);return null!=u&&u!==Tt?(a.result=(p=u)&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?u.result:u,e.#t=a,a):await l(t,c,u);var p}try{return await l(!0,this.#e)}catch(t){const e=t instanceof Rt?t:new Bt(a,{code:500,cause:t});if(this.errorHandler)return a.result=this.errorHandler(e),a;throw t}}setRoutes(t){this.#e.i=[...Nt(t)]}S(t){if(!this.baseUrl)return t;const e=this.v,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,n=new URL(i,e).href;return n.startsWith(e)?n.slice(e.length):void 0}addRoutes(t){return this.#e.i=[...this.#e.i??[],...Nt(t)],this.getRoutes()}}function Jt(t,e,i,n){const o=e.name??n?.(e);if(o&&(t.has(o)?t.get(o)?.push(e):t.set(o,[e])),Array.isArray(i))for(const o of i)o.parent=e,Jt(t,o,o.i??o.children,n)}function qt(t,e){const i=t.get(e);if(i){if(i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i[0]}}var Gt=function(t,e={}){if(!(t instanceof Ht))throw new TypeError("An instance of Resolver is expected");const i=new Map,n=new Map;return(o,r)=>{let s=qt(n,o);if(!s&&(n.clear(),Jt(n,t.root,t.root.i,e.cacheKeyProvider),s=qt(n,o),!s))throw new Error(`Route "${o}" not found`);let a=s.fullPath?i.get(s.fullPath):void 0;if(!a){let t=Lt(s),e=s.parent;for(;e;){const i=Lt(e);i&&(t=`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`),e=e.parent}const n=vt(t),o=Object.create(null);for(const t of n)Ct(t)||(o[t.name]=!0);a={keys:o,tokens:n},i.set(t,a),s.fullPath=t}let l=xt(a.tokens,{encode:encodeURIComponent,...e})(r)||"/";if(e.stringifyQueryParams&&r){const t={};for(const[e,i]of Object.entries(r))!(e in a.keys)&&i&&(t[e]=i);const i=e.stringifyQueryParams(t);i&&(l+=i.startsWith("?")?i:`?${i}`)}return l}};const Vt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Wt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Kt(t,e){if("function"!=typeof t)return;const i=Vt.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Zt=function(t,e){if(window.Vaadin.developmentMode)return Kt(t,e)};function Qt(){
/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Wt?!(Wt&&Object.keys(Wt).map((t=>Wt[t])).filter((t=>t.productionMode)).length>0):!Kt((function(){return!0})))}catch(t){return!1}}());!function(t,e=(window.Vaadin??={})){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),Zt(Qt);var Yt=async function(t,e){return t.classList.add(e),await new Promise((i=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const n=t.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${o}`),((t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)})(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),i()}))}else t.classList.remove(e),i()}))};function Xt(t){if(!t||!Ct(t.path))throw new Error(Mt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(_t(t.action)||Array.isArray(t.children)||_t(t.children)||Ct(t.component)||Ct(t.redirect)))throw new Error(Mt(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach((e=>{e in t&&console.warn(Mt(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function te(t){Nt(t).forEach((t=>Xt(t)))}function ee(t,e){const i=e.v;return i?new URL(t.replace(/^\//u,""),i).pathname:t}function ie(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t),"")}function ne({chain:t=[],hash:e="",params:i={},pathname:n="",redirectFrom:o,resolver:r,search:s=""},a){const l=t.map((t=>t.route));return{baseUrl:r?.baseUrl??"",getUrl:(e={})=>r?ee($t(function(t){return ie(t.map((t=>t.route)))}(t))({...i,...e}),r):"",hash:e,params:i,pathname:n,redirectFrom:o,route:a??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:s,searchParams:new URLSearchParams(s)}}function oe(t,e){const i={...t.params};return{redirect:{from:t.pathname,params:i,pathname:e}}}function re(t,e,...i){if("function"==typeof t)return t.apply(e,i)}function se(t,e,...i){return n=>n&&Dt(n)&&("cancel"in n||"redirect"in n)?n:re(e?.[t],e,...i)}function ae(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function le(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function ce(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t instanceof MouseEvent?t.composedPath():t.path??[];for(let t=0;t<i.length;t++){const n=i[t];if("nodeName"in n&&"a"===n.nodeName.toLowerCase()){e=n;break}}for(;e&&e instanceof Node&&"a"!==le(e);)e=e.parentNode;if(!e||"a"!==le(e))return;const n=e;if(n.target&&"_self"!==n.target.toLowerCase())return;if(n.hasAttribute("download"))return;if(n.hasAttribute("router-ignore"))return;if(n.pathname===window.location.pathname&&""!==n.hash)return;const o=n.origin||function(t){const{port:e,protocol:i}=t;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}(n);if(o!==window.location.origin)return;const{hash:r,pathname:s,search:a}=n;ae("go",{hash:r,pathname:s,search:a})&&t instanceof MouseEvent&&(t.preventDefault(),"click"===t.type&&window.scrollTo(0,0))}function he(t){if("vaadin-router-ignore"===t.state)return;const{hash:e,pathname:i,search:n}=window.location;ae("go",{hash:e,pathname:i,search:n})}let de=[];const ue={CLICK:{activate(){window.document.addEventListener("click",ce)},inactivate(){window.document.removeEventListener("click",ce)}},POPSTATE:{activate(){window.addEventListener("popstate",he)},inactivate(){window.removeEventListener("popstate",he)}}};function pe(t=[]){de.forEach((t=>t.inactivate())),t.forEach((t=>t.activate())),de=t}function fe(){return{cancel:!0}}const me={A:-1,params:{},route:{m:!0,children:[],path:"",action(){}},pathname:"",next:async()=>Tt};class be extends Ht{location=ne({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#n=new WeakSet;#o=this.#r.bind(this);#s=0;#a;D;#l;#c=null;#h=null;constructor(t,e){const i=document.head.querySelector("base"),n=i?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...e,resolveRoute:async t=>await this.#d(t)}),pe(Object.values(ue)),this.setOutlet(t),this.subscribe()}async#d(t){const{route:e}=t;if(_t(e.children)){let i=await e.children(function({next:t,...e}){return e}(t));_t(e.children)||({children:i}=e),function(t,e){if(!Array.isArray(t)&&!Dt(t))throw new Error(Mt(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const i=Nt(t);i.forEach((t=>Xt(t))),e.i=i}(i,e)}const i={component:t=>{const e=document.createElement(t);return this.#n.add(e),e},prevent:fe,redirect:e=>oe(t,e)};return await Promise.resolve().then((async()=>{if(this.#u(t))return await re(e.action,e,t,i)})).then((t=>null==t||"object"!=typeof t&&"symbol"!=typeof t||!(t instanceof HTMLElement||t===Tt||Dt(t)&&"redirect"in t)?Ct(e.redirect)?i.redirect(e.redirect):void 0:t)).then((t=>null!=t?t:Ct(e.component)?i.component(e.component):void 0))}setOutlet(t){t&&this.#p(t),this.#a=t}getOutlet(){return this.#a}async setRoutes(t,e=!1){return this.D=void 0,this.#l=void 0,te(t),super.setRoutes(t),e||this.#r(),await this.ready}addRoutes(t){return te(t),super.addRoutes(t)}async render(t,e=!1){this.#s+=1;const i=this.#s,n={...me,...Ct(t)?{hash:"",search:"",pathname:t}:t,A:i};return this.ready=this.#f(n,e),await this.ready}async#f(t,e){const{A:i}=t;try{const n=await this.resolve(t),o=await this.#m(n);if(!this.#u(o))return this.location;const r=this.D;if(o===r)return this.#b(r,!0),this.location;if(this.location=ne(o),e&&this.#b(o,1===i),ae("location-changed",{router:this,location:this.location}),o.N)return this.#g(o,r),this.D=o,this.location;this.#y(o,r);const s=this.#w(o);if(this.#v(o),this.#$(o,r),await s,this.#u(o))return this.#x(),this.D=o,this.location}catch(n){if(i===this.#s){e&&this.#b(this.context);for(const t of this.#a?.children??[])t.remove();throw this.location=ne(Object.assign(t,{resolver:this})),ae("error",{router:this,error:n,...t}),n}}return this.location}async#m(t,e=t){const i=await this.#E(e),n=i!==e?i:t,o=ee(ie(i.chain??[]),this)===i.pathname,r=async(t,e=t.route,i)=>{const n=await t.next(!1,e,i);return null===n||n===Tt?o?t:null!=e.parent?await r(t,e.parent,n):n:n},s=await r(i);if(null==s||s===Tt)throw Pt(n);return s!==i?await this.#m(n,s):await this.#k(i)}async#E(t){const{result:e}=t;if(e instanceof HTMLElement)return function(t,e){if(e.location=ne(t),t.chain){const i=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[i].element=e}}(t,e),t;if(e&&"redirect"in e){const i=await this.#S(e.redirect,t.M,t.A);return await this.#E(i)}throw e instanceof Error?e:new Error(Mt(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`))}async#k(t){return await this.#A(t).then((async e=>e===this.D||e===t?e:await this.#m(e)))}async#A(t){const e=this.D??{},i=e.chain??[],n=t.chain??[];let o=Promise.resolve(void 0);const r=e=>oe(t,e);if(t.R=0,t.N=!1,i.length){for(let e=0;e<Math.min(i.length,n.length)&&(i[e].route===n[e].route&&(i[e].path===n[e].path||i[e].element===n[e].element)&&this.#D(i[e].element,n[e].element));t.R++,e++);if(t.N=n.length===i.length&&t.R===n.length&&this.#D(t.result,e.result),t.N){for(let e=n.length-1;e>=0;e--)o=this.#_(o,t,{prevent:fe},i[e]);for(let e=0;e<n.length;e++)o=this.#C(o,t,{prevent:fe,redirect:r},n[e]),i[e].element.location=ne(t,i[e].route)}else for(let e=i.length-1;e>=t.R;e--)o=this.#_(o,t,{prevent:fe},i[e])}if(!t.N)for(let e=0;e<n.length;e++)e<t.R?e<i.length&&i[e].element&&(i[e].element.location=ne(t,i[e].route)):(o=this.#C(o,t,{prevent:fe,redirect:r},n[e]),n[e].element&&(n[e].element.location=ne(t,n[e].route)));return await o.then((async e=>{if(e&&Dt(e)){if("cancel"in e&&this.D)return this.D.A=t.A,this.D;if("redirect"in e)return await this.#S(e.redirect,t.M,t.A)}return t}))}async#_(t,e,i,n){const o=ne(e);let r=await t;if(this.#u(e)){r=se("onBeforeLeave",n.element,o,i,this)(r)}if(!Dt(r)||!("redirect"in r))return r}async#C(t,e,i,n){const o=ne(e,n.route),r=await t;if(this.#u(e)){return se("onBeforeEnter",n.element,o,i,this)(r)}}#D(t,e){return t instanceof Element&&e instanceof Element&&(this.#n.has(t)&&this.#n.has(e)?t.localName===e.localName:t===e)}#u(t){return t.A===this.#s}async#S(t,e=0,i=0){if(e>256)throw new Error(Mt(`Too many redirects when rendering ${t.from}`));return await this.resolve({...me,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,M:e+1,A:i})}#p(t=this.#a){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(Mt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#b({pathname:t,search:e="",hash:i=""},n){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==i){const o=n?"replaceState":"pushState";window.history[o](null,document.title,t+e+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#g(t,e){let i=this.#a;for(let n=0;n<(t.R??0);n++){const o=e?.chain?.[n].element;if(o){if(o.parentNode!==i)break;t.chain[n].element=o,i=o}}return i}#y(t,e){this.#p(),this.#N();const i=this.#g(t,e);this.#c=[],this.#h=Array.from(i?.children??[]).filter((e=>this.#i.has(e)&&e!==t.result));let n=i;for(let e=t.R??0;e<(t.chain?.length??0);e++){const o=t.chain[e].element;o&&(n?.appendChild(o),this.#i.add(o),n===i&&this.#c.push(o),n=o)}}#x(){if(this.#h)for(const t of this.#h)t.remove();this.#h=null,this.#c=null}#N(){if(this.#h&&this.#c){for(const t of this.#c)t.remove();this.#h=null,this.#c=null}}#$(t,e){if(e?.chain&&null!=t.R)for(let i=e.chain.length-1;i>=t.R&&this.#u(t);i--){const n=e.chain[i].element;if(n)try{const e=ne(t);re(n.onAfterLeave,n,e,{},this)}finally{if(this.#h?.includes(n))for(const t of n.children)t.remove()}}}#v(t){if(t.chain&&null!=t.R)for(let e=t.R;e<t.chain.length&&this.#u(t);e++){const i=t.chain[e].element;if(i){const n=ne(t,t.chain[e].route);re(i.onAfterEnter,i,n,{},this)}}}async#w(t){const e=this.#h?.[0],i=this.#c?.[0],n=[],{chain:o=[]}=t;let r;for(let t=o.length-1;t>=0;t--)if(o[t].route.animate){r=o[t].route.animate;break}if(e&&i&&r){const t=Dt(r)&&r.leave?r.leave:"leaving",o=Dt(r)&&r.enter?r.enter:"entering";n.push(Yt(e,t)),n.push(Yt(i,o))}return await Promise.all(n),t}subscribe(){window.addEventListener("vaadin-router-go",this.#o)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#o)}#r(t){const{pathname:e,search:i,hash:n}=t instanceof CustomEvent?t.detail:window.location;Ct(this.S(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:i,hash:n},!0))}static setTriggers(...t){pe(t)}urlForName(t,e){return this.#l||(this.#l=Gt(this,{cacheKeyProvider:t=>"component"in t&&"string"==typeof t.component?t.component:void 0})),ee(this.#l(t,e??void 0),this)}urlForPath(t,e){return ee($t(t)(e??void 0),this)}static go(t){const{pathname:e,search:i,hash:n}=Ct(t)?new URL(t,"http://a"):t;return ae("go",{pathname:e,search:i,hash:n})}}class ge extends rt{static styles=r`
    #outlet {
      padding: 1rem;
    }
  `;createRenderRoot(){return this}updated(){new be(document.getElementById("outlet")).setRoutes([{path:"/",component:"employee-list"},{path:"/add",component:"employee-form"},{path:"/edit/:id",component:"employee-form"}])}render(){return F`
      <navigation-menu></navigation-menu>
      <div id="outlet"></div>
    `}}customElements.define("app-root",ge);export{ge as AppRoot};
