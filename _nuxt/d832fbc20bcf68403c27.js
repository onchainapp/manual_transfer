(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1027:function(e){e.exports=JSON.parse('{"_from":"web3@1.2.6","_id":"web3@1.2.6","_inBundle":false,"_integrity":"sha512-tpu9fLIComgxGrFsD8LUtA4s4aCZk7px8UfcdEy6kS2uDi/ZfR07KJqpXZMij7Jvlq+cQrTAhsPSiBVvoMaivA==","_location":"/web3","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"web3@1.2.6","name":"web3","escapedName":"web3","rawSpec":"1.2.6","saveSpec":null,"fetchSpec":"1.2.6"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/web3/-/web3-1.2.6.tgz","_shasum":"c497dcb14cdd8d6d9fb6b445b3b68ff83f8ccf68","_spec":"web3@1.2.6","_where":"/Users/tataufo/bulksender/bulksender_v2","author":{"name":"ethereum.org"},"authors":[{"name":"Fabian Vogelsteller","email":"fabian@ethereum.org","homepage":"http://frozeman.de"},{"name":"Marek Kotewicz","email":"marek@parity.io","url":"https://github.com/debris"},{"name":"Marian Oancea","url":"https://github.com/cubedro"},{"name":"Gav Wood","email":"g@parity.io","homepage":"http://gavwood.com"},{"name":"Jeffery Wilcke","email":"jeffrey.wilcke@ethereum.org","url":"https://github.com/obscuren"}],"bugs":{"url":"https://github.com/ethereum/web3.js/issues"},"bundleDependencies":false,"dependencies":{"@types/node":"^12.6.1","web3-bzz":"1.2.6","web3-core":"1.2.6","web3-eth":"1.2.6","web3-eth-personal":"1.2.6","web3-net":"1.2.6","web3-shh":"1.2.6","web3-utils":"1.2.6"},"deprecated":false,"description":"Ethereum JavaScript API","devDependencies":{"definitelytyped-header-parser":"^1.0.1","dtslint":"0.4.2"},"engines":{"node":">=8.0.0"},"gitHead":"c20bcf09b04f773406ce3532e88fd105bb04e244","homepage":"https://github.com/ethereum/web3.js#readme","keywords":["Ethereum","JavaScript","API"],"license":"LGPL-3.0","main":"src/index.js","name":"web3","repository":{"type":"git","url":"git+https://github.com/ethereum/web3.js.git"},"scripts":{"dtslint":"dtslint types --onlyTestTsNext","postinstall":"node angular-patch.js"},"types":"types/index.d.ts","version":"1.2.6"}')},1040:function(e,t,r){"use strict";var n=r(160),o=r(266).subscriptions,c=r(162),h=r(276),l=function(){var e=this;n.packageInit(this,arguments);var t=this.setProvider;this.setProvider=function(){t.apply(e,arguments),e.net.setProvider.apply(e,arguments)},this.net=new h(this.currentProvider),[new o({name:"subscribe",type:"shh",subscriptions:{messages:{params:1}}}),new c({name:"getVersion",call:"shh_version",params:0}),new c({name:"getInfo",call:"shh_info",params:0}),new c({name:"setMaxMessageSize",call:"shh_setMaxMessageSize",params:1}),new c({name:"setMinPoW",call:"shh_setMinPoW",params:1}),new c({name:"markTrustedPeer",call:"shh_markTrustedPeer",params:1}),new c({name:"newKeyPair",call:"shh_newKeyPair",params:0}),new c({name:"addPrivateKey",call:"shh_addPrivateKey",params:1}),new c({name:"deleteKeyPair",call:"shh_deleteKeyPair",params:1}),new c({name:"hasKeyPair",call:"shh_hasKeyPair",params:1}),new c({name:"getPublicKey",call:"shh_getPublicKey",params:1}),new c({name:"getPrivateKey",call:"shh_getPrivateKey",params:1}),new c({name:"newSymKey",call:"shh_newSymKey",params:0}),new c({name:"addSymKey",call:"shh_addSymKey",params:1}),new c({name:"generateSymKeyFromPassword",call:"shh_generateSymKeyFromPassword",params:1}),new c({name:"hasSymKey",call:"shh_hasSymKey",params:1}),new c({name:"getSymKey",call:"shh_getSymKey",params:1}),new c({name:"deleteSymKey",call:"shh_deleteSymKey",params:1}),new c({name:"newMessageFilter",call:"shh_newMessageFilter",params:1}),new c({name:"getFilterMessages",call:"shh_getFilterMessages",params:1}),new c({name:"deleteMessageFilter",call:"shh_deleteMessageFilter",params:1}),new c({name:"post",call:"shh_post",params:1,inputFormatter:[null]}),new c({name:"unsubscribe",call:"shh_unsubscribe",params:1})].forEach((function(t){t.attachToObject(e),t.setRequestManager(e._requestManager)}))};l.prototype.clearSubscriptions=function(){this._requestManager.clearSubscriptions()},n.addProviders(l),e.exports=l},250:function(e,t,r){"use strict";var n=r(1027).version,o=r(160),c=r(1028),h=r(276),l=r(520),f=r(1040),d=r(1041),m=r(4),w=function(){var e=this;o.packageInit(this,arguments),this.version=n,this.utils=m,this.eth=new c(this),this.shh=new f(this),this.bzz=new d(this);var t=this.setProvider;this.setProvider=function(r,n){return t.apply(e,arguments),this.eth.setProvider(r,n),this.shh.setProvider(r,n),this.bzz.setProvider(r),!0}};w.version=n,w.utils=m,w.modules={Eth:c,Net:h,Personal:l,Shh:f,Bzz:d},o.addProviders(w),e.exports=w},4:function(e,t,r){var n=r(60),o=r(772),c=r(440),h=r(781),l=r(139),f=function(e,t){var r=[];return t.forEach((function(param){if("object"==typeof param.components){if("tuple"!==param.type.substring(0,5))throw new Error("components found but type is not tuple; report on GitHub");var t="",o=param.type.indexOf("[");o>=0&&(t=param.type.substring(o));var c=f(e,param.components);n.isArray(c)&&e?r.push("tuple("+c.join(",")+")"+t):e?r.push("("+c+")"):r.push("("+c.join(",")+")"+t)}else r.push(param.type)})),r},d=function(e){if(!c.isHexStrict(e))throw new Error("The parameter must be a valid HEX string.");var t="",i=0,r=e.length;for("0x"===e.substring(0,2)&&(i=2);i<r;i+=2){var code=parseInt(e.substr(i,2),16);t+=String.fromCharCode(code)}return t},m=function(e){if(!e)return"0x00";for(var t="",i=0;i<e.length;i++){var r=e.charCodeAt(i).toString(16);t+=r.length<2?"0"+r:r}return"0x"+t},w=function(e){if(e=e?e.toLowerCase():"ether",!o.unitMap[e])throw new Error('This unit "'+e+"\" doesn't exist, please use the one of the following units"+JSON.stringify(o.unitMap,null,2));return e};e.exports={_fireError:function(e,t,r,o,c){return!n.isObject(e)||e instanceof Error||!e.data||((n.isObject(e.data)||n.isArray(e.data))&&(e.data=JSON.stringify(e.data,null,2)),e=e.message+"\n"+e.data),n.isString(e)&&(e=new Error(e)),n.isFunction(o)&&o(e,c),n.isFunction(r)&&((t&&n.isFunction(t.listeners)&&t.listeners("error").length||n.isFunction(o))&&t.catch((function(){})),setTimeout((function(){r(e)}),1)),t&&n.isFunction(t.emit)&&setTimeout((function(){t.emit("error",e,c),t.removeAllListeners()}),1),t},_jsonInterfaceMethodToString:function(e){return n.isObject(e)&&e.name&&-1!==e.name.indexOf("(")?e.name:e.name+"("+f(!1,e.inputs).join(",")+")"},_flattenTypes:f,randomHex:function(e){return"0x"+l(e).toString("hex")},_:n,BN:c.BN,isBN:c.isBN,isBigNumber:c.isBigNumber,isHex:c.isHex,isHexStrict:c.isHexStrict,sha3:c.sha3,sha3Raw:c.sha3Raw,keccak256:c.sha3,soliditySha3:h.soliditySha3,soliditySha3Raw:h.soliditySha3Raw,isAddress:c.isAddress,checkAddressChecksum:c.checkAddressChecksum,toChecksumAddress:function(address){if(void 0===address)return"";if(!/^(0x)?[0-9a-f]{40}$/i.test(address))throw new Error('Given address "'+address+'" is not a valid Ethereum address.');address=address.toLowerCase().replace(/^0x/i,"");for(var e=c.sha3(address).replace(/^0x/i,""),t="0x",i=0;i<address.length;i++)parseInt(e[i],16)>7?t+=address[i].toUpperCase():t+=address[i];return t},toHex:c.toHex,toBN:c.toBN,bytesToHex:c.bytesToHex,hexToBytes:c.hexToBytes,hexToNumberString:c.hexToNumberString,hexToNumber:c.hexToNumber,toDecimal:c.hexToNumber,numberToHex:c.numberToHex,fromDecimal:c.numberToHex,hexToUtf8:c.hexToUtf8,hexToString:c.hexToUtf8,toUtf8:c.hexToUtf8,utf8ToHex:c.utf8ToHex,stringToHex:c.utf8ToHex,fromUtf8:c.utf8ToHex,hexToAscii:d,toAscii:d,asciiToHex:m,fromAscii:m,unitMap:o.unitMap,toWei:function(e,t){if(t=w(t),!c.isBN(e)&&!n.isString(e))throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");return c.isBN(e)?o.toWei(e,t):o.toWei(e,t).toString(10)},fromWei:function(e,t){if(t=w(t),!c.isBN(e)&&!n.isString(e))throw new Error("Please pass numbers as strings or BN objects to avoid precision errors.");return c.isBN(e)?o.fromWei(e,t):o.fromWei(e,t).toString(10)},padLeft:c.leftPad,leftPad:c.leftPad,padRight:c.rightPad,rightPad:c.rightPad,toTwosComplement:c.toTwosComplement,isBloom:c.isBloom,isUserEthereumAddressInBloom:c.isUserEthereumAddressInBloom,isContractAddressInBloom:c.isContractAddressInBloom,isTopic:c.isTopic,isTopicInBloom:c.isTopicInBloom,isInBloom:c.isInBloom}},440:function(e,t,r){(function(t){var n=r(60),o=r(25),c=r(437),h=r(776),l=r(777),f=r(778),d=function(object){return o.isBN(object)},m=function(object){return object&&object.constructor&&"BigNumber"===object.constructor.name},w=function(e){try{return c.apply(null,arguments)}catch(t){throw new Error(t+' Given value: "'+e+'"')}},x=function(address){return!!/^(0x)?[0-9a-f]{40}$/i.test(address)&&(!(!/^(0x|0X)?[0-9a-f]{40}$/.test(address)&&!/^(0x|0X)?[0-9A-F]{40}$/.test(address))||y(address))},y=function(address){address=address.replace(/^0x/i,"");for(var e=k(address.toLowerCase()).replace(/^0x/i,""),i=0;i<40;i++)if(parseInt(e[i],16)>7&&address[i].toUpperCase()!==address[i]||parseInt(e[i],16)<=7&&address[i].toLowerCase()!==address[i])return!1;return!0},v=function(e){var t="";e=(e=(e=(e=(e=h.encode(e)).replace(/^(?:\u0000)*/,"")).split("").reverse().join("")).replace(/^(?:\u0000)*/,"")).split("").reverse().join("");for(var i=0;i<e.length;i++){var r=e.charCodeAt(i).toString(16);t+=r.length<2?"0"+r:r}return"0x"+t},S=function(e){if(n.isNull(e)||n.isUndefined(e))return e;if(!isFinite(e)&&!B(e))throw new Error('Given input "'+e+'" is not a number.');var t=w(e),r=t.toString(16);return t.lt(new o(0))?"-0x"+r.substr(1):"0x"+r},T=function(e){if(e=e.toString(16),!B(e))throw new Error('Given value "'+e+'" is not a valid hex string.');e=e.replace(/^0x/i,"");for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},B=function(e){return(n.isString(e)||n.isNumber(e))&&/^(-)?0x[0-9a-f]*$/i.test(e)},P="0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",k=function(e){d(e)&&(e=e.toString()),B(e)&&/^0x/i.test(e.toString())&&(e=T(e));var t=l.keccak256(e);return t===P?null:t};k._Hash=l;e.exports={BN:o,isBN:d,isBigNumber:m,toBN:w,isAddress:x,isBloom:function(e){return f.isBloom(e)},isUserEthereumAddressInBloom:function(e,t){return f.isUserEthereumAddressInBloom(e,t)},isContractAddressInBloom:function(e,t){return f.isContractAddressInBloom(e,t)},isTopic:function(e){return f.isTopic(e)},isTopicInBloom:function(e,t){return f.isTopicInBloom(e,t)},isInBloom:function(e,t){return f.isInBloom(e,t)},checkAddressChecksum:y,utf8ToHex:v,hexToUtf8:function(e){if(!B(e))throw new Error('The parameter "'+e+'" must be a valid HEX string.');for(var t="",code=0,r=(e=(e=(e=(e=(e=e.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length,i=0;i<r;i+=2)code=parseInt(e.substr(i,2),16),t+=String.fromCharCode(code);return h.decode(t)},hexToNumber:function(e){if(!e)return e;if(n.isString(e)&&!B(e))throw new Error('Given value "'+e+'" is not a valid hex string.');return w(e).toNumber()},hexToNumberString:function(e){if(!e)return e;if(n.isString(e)&&!B(e))throw new Error('Given value "'+e+'" is not a valid hex string.');return w(e).toString(10)},numberToHex:S,toHex:function(e,r){if(x(e))return r?"address":"0x"+e.toLowerCase().replace(/^0x/i,"");if(n.isBoolean(e))return r?"bool":e?"0x01":"0x00";if(t.isBuffer(e))return"0x"+e.toString("hex");if(n.isObject(e)&&!m(e)&&!d(e))return r?"string":v(JSON.stringify(e));if(n.isString(e)){if(0===e.indexOf("-0x")||0===e.indexOf("-0X"))return r?"int256":S(e);if(0===e.indexOf("0x")||0===e.indexOf("0X"))return r?"bytes":e;if(!isFinite(e))return r?"string":v(e)}return r?e<0?"int256":"uint256":S(e)},hexToBytes:T,bytesToHex:function(e){for(var t=[],i=0;i<e.length;i++)t.push((e[i]>>>4).toString(16)),t.push((15&e[i]).toString(16));return"0x"+t.join("")},isHex:function(e){return(n.isString(e)||n.isNumber(e))&&/^(-0x|0x)?[0-9a-f]*$/i.test(e)},isHexStrict:B,leftPad:function(e,t,r){var n=/^0x/i.test(e)||"number"==typeof e,o=t-(e=e.toString(16).replace(/^0x/i,"")).length+1>=0?t-e.length+1:0;return(n?"0x":"")+new Array(o).join(r||"0")+e},rightPad:function(e,t,r){var n=/^0x/i.test(e)||"number"==typeof e,o=t-(e=e.toString(16).replace(/^0x/i,"")).length+1>=0?t-e.length+1:0;return(n?"0x":"")+e+new Array(o).join(r||"0")},toTwosComplement:function(e){return"0x"+w(e).toTwos(256).toString(16,64)},sha3:k,sha3Raw:function(e){return null===(e=k(e))?P:e}}}).call(this,r(12).Buffer)},777:function(e,t){var r="0123456789abcdef".split(""),n=[1,256,65536,16777216],o=[0,8,16,24],c=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],h=function(s){var e,t,r,n,o,h,l,f,d,m,w,x,y,v,S,T,B,P,k,E,_,N,A,I,H,C,j,K,M,O,W,F,U,L,z,J,R,G,D,$,X,V,Z,Q,Y,ee,te,re,ne,ie,se,oe,ae,ue,ce,he,le,fe,pe,de,me,we,ge;for(r=0;r<48;r+=2)n=s[0]^s[10]^s[20]^s[30]^s[40],o=s[1]^s[11]^s[21]^s[31]^s[41],h=s[2]^s[12]^s[22]^s[32]^s[42],l=s[3]^s[13]^s[23]^s[33]^s[43],f=s[4]^s[14]^s[24]^s[34]^s[44],d=s[5]^s[15]^s[25]^s[35]^s[45],m=s[6]^s[16]^s[26]^s[36]^s[46],w=s[7]^s[17]^s[27]^s[37]^s[47],e=(x=s[8]^s[18]^s[28]^s[38]^s[48])^(h<<1|l>>>31),t=(y=s[9]^s[19]^s[29]^s[39]^s[49])^(l<<1|h>>>31),s[0]^=e,s[1]^=t,s[10]^=e,s[11]^=t,s[20]^=e,s[21]^=t,s[30]^=e,s[31]^=t,s[40]^=e,s[41]^=t,e=n^(f<<1|d>>>31),t=o^(d<<1|f>>>31),s[2]^=e,s[3]^=t,s[12]^=e,s[13]^=t,s[22]^=e,s[23]^=t,s[32]^=e,s[33]^=t,s[42]^=e,s[43]^=t,e=h^(m<<1|w>>>31),t=l^(w<<1|m>>>31),s[4]^=e,s[5]^=t,s[14]^=e,s[15]^=t,s[24]^=e,s[25]^=t,s[34]^=e,s[35]^=t,s[44]^=e,s[45]^=t,e=f^(x<<1|y>>>31),t=d^(y<<1|x>>>31),s[6]^=e,s[7]^=t,s[16]^=e,s[17]^=t,s[26]^=e,s[27]^=t,s[36]^=e,s[37]^=t,s[46]^=e,s[47]^=t,e=m^(n<<1|o>>>31),t=w^(o<<1|n>>>31),s[8]^=e,s[9]^=t,s[18]^=e,s[19]^=t,s[28]^=e,s[29]^=t,s[38]^=e,s[39]^=t,s[48]^=e,s[49]^=t,v=s[0],S=s[1],ee=s[11]<<4|s[10]>>>28,te=s[10]<<4|s[11]>>>28,K=s[20]<<3|s[21]>>>29,M=s[21]<<3|s[20]>>>29,de=s[31]<<9|s[30]>>>23,me=s[30]<<9|s[31]>>>23,V=s[40]<<18|s[41]>>>14,Z=s[41]<<18|s[40]>>>14,L=s[2]<<1|s[3]>>>31,z=s[3]<<1|s[2]>>>31,T=s[13]<<12|s[12]>>>20,B=s[12]<<12|s[13]>>>20,re=s[22]<<10|s[23]>>>22,ne=s[23]<<10|s[22]>>>22,O=s[33]<<13|s[32]>>>19,W=s[32]<<13|s[33]>>>19,we=s[42]<<2|s[43]>>>30,ge=s[43]<<2|s[42]>>>30,ue=s[5]<<30|s[4]>>>2,ce=s[4]<<30|s[5]>>>2,J=s[14]<<6|s[15]>>>26,R=s[15]<<6|s[14]>>>26,P=s[25]<<11|s[24]>>>21,k=s[24]<<11|s[25]>>>21,ie=s[34]<<15|s[35]>>>17,se=s[35]<<15|s[34]>>>17,F=s[45]<<29|s[44]>>>3,U=s[44]<<29|s[45]>>>3,I=s[6]<<28|s[7]>>>4,H=s[7]<<28|s[6]>>>4,he=s[17]<<23|s[16]>>>9,le=s[16]<<23|s[17]>>>9,G=s[26]<<25|s[27]>>>7,D=s[27]<<25|s[26]>>>7,E=s[36]<<21|s[37]>>>11,_=s[37]<<21|s[36]>>>11,oe=s[47]<<24|s[46]>>>8,ae=s[46]<<24|s[47]>>>8,Q=s[8]<<27|s[9]>>>5,Y=s[9]<<27|s[8]>>>5,C=s[18]<<20|s[19]>>>12,j=s[19]<<20|s[18]>>>12,fe=s[29]<<7|s[28]>>>25,pe=s[28]<<7|s[29]>>>25,$=s[38]<<8|s[39]>>>24,X=s[39]<<8|s[38]>>>24,N=s[48]<<14|s[49]>>>18,A=s[49]<<14|s[48]>>>18,s[0]=v^~T&P,s[1]=S^~B&k,s[10]=I^~C&K,s[11]=H^~j&M,s[20]=L^~J&G,s[21]=z^~R&D,s[30]=Q^~ee&re,s[31]=Y^~te&ne,s[40]=ue^~he&fe,s[41]=ce^~le&pe,s[2]=T^~P&E,s[3]=B^~k&_,s[12]=C^~K&O,s[13]=j^~M&W,s[22]=J^~G&$,s[23]=R^~D&X,s[32]=ee^~re&ie,s[33]=te^~ne&se,s[42]=he^~fe&de,s[43]=le^~pe&me,s[4]=P^~E&N,s[5]=k^~_&A,s[14]=K^~O&F,s[15]=M^~W&U,s[24]=G^~$&V,s[25]=D^~X&Z,s[34]=re^~ie&oe,s[35]=ne^~se&ae,s[44]=fe^~de&we,s[45]=pe^~me&ge,s[6]=E^~N&v,s[7]=_^~A&S,s[16]=O^~F&I,s[17]=W^~U&H,s[26]=$^~V&L,s[27]=X^~Z&z,s[36]=ie^~oe&Q,s[37]=se^~ae&Y,s[46]=de^~we&ue,s[47]=me^~ge&ce,s[8]=N^~v&T,s[9]=A^~S&B,s[18]=F^~I&C,s[19]=U^~H&j,s[28]=V^~L&J,s[29]=Z^~z&R,s[38]=oe^~Q&ee,s[39]=ae^~Y&te,s[48]=we^~ue&he,s[49]=ge^~ce&le,s[0]^=c[r],s[1]^=c[r+1]},l=function(e){return function(t){var c;if("0x"===t.slice(0,2)){c=[];for(var i=2,l=t.length;i<l;i+=2)c.push(parseInt(t.slice(i,i+2),16))}else c=t;return function(e,t){for(var code,c=t.length,l=e.blocks,f=e.blockCount<<2,d=e.blockCount,m=e.outputBlocks,s=e.s,w=0;w<c;){if(e.reset)for(e.reset=!1,l[0]=e.block,i=1;i<d+1;++i)l[i]=0;if("string"!=typeof t)for(i=e.start;w<c&&i<f;++w)l[i>>2]|=t[w]<<o[3&i++];else for(i=e.start;w<c&&i<f;++w)(code=t.charCodeAt(w))<128?l[i>>2]|=code<<o[3&i++]:code<2048?(l[i>>2]|=(192|code>>6)<<o[3&i++],l[i>>2]|=(128|63&code)<<o[3&i++]):code<55296||code>=57344?(l[i>>2]|=(224|code>>12)<<o[3&i++],l[i>>2]|=(128|code>>6&63)<<o[3&i++],l[i>>2]|=(128|63&code)<<o[3&i++]):(code=65536+((1023&code)<<10|1023&t.charCodeAt(++w)),l[i>>2]|=(240|code>>18)<<o[3&i++],l[i>>2]|=(128|code>>12&63)<<o[3&i++],l[i>>2]|=(128|code>>6&63)<<o[3&i++],l[i>>2]|=(128|63&code)<<o[3&i++]);if(e.lastByteIndex=i,i>=f){for(e.start=i-f,e.block=l[d],i=0;i<d;++i)s[i]^=l[i];h(s),e.reset=!0}else e.start=i}if(l[(i=e.lastByteIndex)>>2]|=n[3&i],e.lastByteIndex===f)for(l[0]=l[d],i=1;i<d+1;++i)l[i]=0;for(l[d-1]|=2147483648,i=0;i<d;++i)s[i]^=l[i];h(s);for(var x,y="",i=0,v=0;v<m;){for(i=0;i<d&&v<m;++i,++v)x=s[i],y+=r[x>>4&15]+r[15&x]+r[x>>12&15]+r[x>>8&15]+r[x>>20&15]+r[x>>16&15]+r[x>>28&15]+r[x>>24&15];v%d==0&&(h(s),i=0)}return"0x"+y}(function(e){return{blocks:[],reset:!0,block:0,start:0,blockCount:1600-(e<<1)>>5,outputBlocks:e>>5,s:(s=[0,0,0,0,0,0,0,0,0,0],[].concat(s,s,s,s,s))};var s}(e),c)}};e.exports={keccak256:l(256),keccak512:l(512),keccak256s:l(256),keccak512s:l(512)}},781:function(e,t,r){var n=r(60),o=r(25),c=r(440),h=function(e){var t=typeof e;if("string"===t)return c.isHexStrict(e)?new o(e.replace(/0x/i,""),16):new o(e,10);if("number"===t)return new o(e);if(c.isBigNumber(e))return new o(e.toString(10));if(c.isBN(e))return e;throw new Error(e+" is not a number")},l=function(e,t,r){var n,l,f;if("bytes"===(e=(f=e).startsWith("int[")?"int256"+f.slice(3):"int"===f?"int256":f.startsWith("uint[")?"uint256"+f.slice(4):"uint"===f?"uint256":f.startsWith("fixed[")?"fixed128x128"+f.slice(5):"fixed"===f?"fixed128x128":f.startsWith("ufixed[")?"ufixed128x128"+f.slice(6):"ufixed"===f?"ufixed128x128":f)){if(t.replace(/^0x/i,"").length%2!=0)throw new Error("Invalid bytes characters "+t.length);return t}if("string"===e)return c.utf8ToHex(t);if("bool"===e)return t?"01":"00";if(e.startsWith("address")){if(n=r?64:40,!c.isAddress(t))throw new Error(t+" is not a valid address, or the checksum is invalid.");return c.leftPad(t.toLowerCase(),n)}if(n=function(e){var t=/^\D+(\d+).*$/.exec(e);return t?parseInt(t[1],10):null}(e),e.startsWith("bytes")){if(!n)throw new Error("bytes[] not yet supported in solidity");if(r&&(n=32),n<1||n>32||n<t.replace(/^0x/i,"").length/2)throw new Error("Invalid bytes"+n+" for "+t);return c.rightPad(t,2*n)}if(e.startsWith("uint")){if(n%8||n<8||n>256)throw new Error("Invalid uint"+n+" size");if((l=h(t)).bitLength()>n)throw new Error("Supplied uint exceeds width: "+n+" vs "+l.bitLength());if(l.lt(new o(0)))throw new Error("Supplied uint "+l.toString()+" is negative");return n?c.leftPad(l.toString("hex"),n/8*2):l}if(e.startsWith("int")){if(n%8||n<8||n>256)throw new Error("Invalid int"+n+" size");if((l=h(t)).bitLength()>n)throw new Error("Supplied int exceeds width: "+n+" vs "+l.bitLength());return l.lt(new o(0))?l.toTwos(n).toString("hex"):n?c.leftPad(l.toString("hex"),n/8*2):l}throw new Error("Unsupported or invalid type: "+e)},f=function(e){if(n.isArray(e))throw new Error("Autodetection of array types is not supported.");var t,r,h="";if(n.isObject(e)&&(e.hasOwnProperty("v")||e.hasOwnProperty("t")||e.hasOwnProperty("value")||e.hasOwnProperty("type"))?(t=e.hasOwnProperty("t")?e.t:e.type,h=e.hasOwnProperty("v")?e.v:e.value):(t=c.toHex(e,!0),h=c.toHex(e),t.startsWith("int")||t.startsWith("uint")||(t="bytes")),!t.startsWith("int")&&!t.startsWith("uint")||"string"!=typeof h||/^(-)?0x/i.test(h)||(h=new o(h)),n.isArray(h)){if((r=function(e){var t=/^\D+\d*\[(\d+)\]$/.exec(e);return t?parseInt(t[1],10):null}(t))&&h.length!==r)throw new Error(t+" is not matching the given array "+JSON.stringify(h));r=h.length}return n.isArray(h)?h.map((function(e){return l(t,e,r).toString("hex").replace("0x","")})).join(""):l(t,h,r).toString("hex").replace("0x","")};e.exports={soliditySha3:function(){var e=Array.prototype.slice.call(arguments),t=n.map(e,f);return c.sha3("0x"+t.join(""))},soliditySha3Raw:function(){return c.sha3Raw("0x"+n.map(Array.prototype.slice.call(arguments),f).join(""))}}}}]);