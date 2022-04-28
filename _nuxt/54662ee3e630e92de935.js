(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{234:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.baToJSON=r.addHexPrefix=r.toUnsigned=r.fromSigned=r.bufferToHex=r.bufferToInt=r.toBuffer=r.stripZeros=r.unpad=r.setLengthRight=r.setLength=r.setLengthLeft=r.zeros=void 0;var t=n(166),f=n(25);r.zeros=function(r){return e.allocUnsafe(r).fill(0)},r.setLengthLeft=function(e,n,t){void 0===t&&(t=!1);var f=r.zeros(n);return e=r.toBuffer(e),t?e.length<n?(e.copy(f),f):e.slice(0,n):e.length<n?(e.copy(f,n-e.length),f):e.slice(-n)},r.setLength=r.setLengthLeft,r.setLengthRight=function(e,n){return r.setLength(e,n,!0)},r.unpad=function(a){for(var e=(a=t.stripHexPrefix(a))[0];a.length>0&&"0"===e.toString();)e=(a=a.slice(1))[0];return a},r.stripZeros=r.unpad,r.toBuffer=function(r){if(!e.isBuffer(r))if(Array.isArray(r))r=e.from(r);else if("string"==typeof r){if(!t.isHexString(r))throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: "+r);r=e.from(t.padToEven(t.stripHexPrefix(r)),"hex")}else if("number"==typeof r)r=t.intToBuffer(r);else if(null==r)r=e.allocUnsafe(0);else if(f.isBN(r))r=r.toArrayLike(e);else{if(!r.toArray)throw new Error("invalid type");r=e.from(r.toArray())}return r},r.bufferToInt=function(e){return new f(r.toBuffer(e)).toNumber()},r.bufferToHex=function(e){return"0x"+(e=r.toBuffer(e)).toString("hex")},r.fromSigned=function(e){return new f(e).fromTwos(256)},r.toUnsigned=function(r){return e.from(r.toTwos(256).toArray())},r.addHexPrefix=function(e){return"string"!=typeof e||t.isHexPrefixed(e)?e:"0x"+e},r.baToJSON=function(n){if(e.isBuffer(n))return"0x"+n.toString("hex");if(n instanceof Array){for(var t=[],i=0;i<n.length;i++)t.push(r.baToJSON(n[i]));return t}}}).call(this,n(12).Buffer)},376:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.ecdhUnsafe=r.ecdh=r.recover=r.verify=r.sign=r.signatureImportLax=r.signatureImport=r.signatureExport=r.signatureNormalize=r.publicKeyCombine=r.publicKeyTweakMul=r.publicKeyTweakAdd=r.publicKeyVerify=r.publicKeyConvert=r.publicKeyCreate=r.privateKeyTweakMul=r.privateKeyTweakAdd=r.privateKeyModInverse=r.privateKeyNegate=r.privateKeyImport=r.privateKeyExport=r.privateKeyVerify=void 0;var t=n(902),f=n(919),o=n(933);r.privateKeyVerify=function(e){return 32===e.length&&t.privateKeyVerify(Uint8Array.from(e))},r.privateKeyExport=function(e,r){if(32!==e.length)throw new RangeError("private key length is invalid");var n=f.privateKeyExport(e,r);return o.privateKeyExport(e,n,r)},r.privateKeyImport=function(e){if(null!==(e=o.privateKeyImport(e))&&32===e.length&&r.privateKeyVerify(e))return e;throw new Error("couldn't import from DER format")},r.privateKeyNegate=function(r){return e.from(t.privateKeyNegate(Uint8Array.from(r)))},r.privateKeyModInverse=function(r){if(32!==r.length)throw new Error("private key length is invalid");return e.from(f.privateKeyModInverse(Uint8Array.from(r)))},r.privateKeyTweakAdd=function(r,n){return e.from(t.privateKeyTweakAdd(Uint8Array.from(r),n))},r.privateKeyTweakMul=function(r,n){return e.from(t.privateKeyTweakMul(Uint8Array.from(r),Uint8Array.from(n)))},r.publicKeyCreate=function(r,n){return e.from(t.publicKeyCreate(Uint8Array.from(r),n))},r.publicKeyConvert=function(r,n){return e.from(t.publicKeyConvert(Uint8Array.from(r),n))},r.publicKeyVerify=function(e){return(33===e.length||65===e.length)&&t.publicKeyVerify(Uint8Array.from(e))},r.publicKeyTweakAdd=function(r,n,f){return e.from(t.publicKeyTweakAdd(Uint8Array.from(r),Uint8Array.from(n),f))},r.publicKeyTweakMul=function(r,n,f){return e.from(t.publicKeyTweakMul(Uint8Array.from(r),Uint8Array.from(n),f))},r.publicKeyCombine=function(r,n){var f=[];return r.forEach((function(e){f.push(Uint8Array.from(e))})),e.from(t.publicKeyCombine(f,n))},r.signatureNormalize=function(r){return e.from(t.signatureNormalize(Uint8Array.from(r)))},r.signatureExport=function(r){return e.from(t.signatureExport(Uint8Array.from(r)))},r.signatureImport=function(r){return e.from(t.signatureImport(Uint8Array.from(r)))},r.signatureImportLax=function(e){if(0===e.length)throw new RangeError("signature length is invalid");var r=o.signatureImportLax(e);if(null===r)throw new Error("couldn't parse DER signature");return f.signatureImport(r)},r.sign=function(r,n,f){if(null===f)throw new TypeError("options should be an Object");var o=void 0;if(f){if(o={},null===f.data)throw new TypeError("options.data should be a Buffer");if(f.data){if(32!=f.data.length)throw new RangeError("options.data length is invalid");o.data=new Uint8Array(f.data)}if(null===f.noncefn)throw new TypeError("options.noncefn should be a Function");f.noncefn&&(o.noncefn=function(r,n,t,data,o){var c=null!=t?e.from(t):null,l=null!=data?e.from(data):null,d=e.from("");return f.noncefn&&(d=f.noncefn(e.from(r),e.from(n),c,l,o)),new Uint8Array(d)})}var c=t.ecdsaSign(Uint8Array.from(r),Uint8Array.from(n),o);return{signature:e.from(c.signature),recovery:c.recid}},r.verify=function(e,r,n){return t.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),n)},r.recover=function(r,n,f,o){return e.from(t.ecdsaRecover(Uint8Array.from(n),f,Uint8Array.from(r),o))},r.ecdh=function(r,n){return e.from(t.ecdh(Uint8Array.from(r),Uint8Array.from(n),{}))},r.ecdhUnsafe=function(r,n,t){if(33!==r.length&&65!==r.length)throw new RangeError("public key length is invalid");if(32!==n.length)throw new RangeError("private key length is invalid");return e.from(f.ecdhUnsafe(Uint8Array.from(r),Uint8Array.from(n),t))}}).call(this,n(12).Buffer)},380:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.rlphash=r.ripemd160=r.sha256=r.keccak256=r.keccak=void 0;var t=n(938),f=t.keccak224,o=t.keccak384,c=t.keccak256,l=t.keccak512,d=n(126),v=n(166),h=n(233),y=n(234);r.keccak=function(a,r){switch(void 0===r&&(r=256),a="string"!=typeof a||v.isHexString(a)?y.toBuffer(a):e.from(a,"utf8"),r||(r=256),r){case 224:return f(a);case 256:return c(a);case 384:return o(a);case 512:return l(a);default:throw new Error("Invald algorithm: keccak"+r)}},r.keccak256=function(a){return r.keccak(a)},r.sha256=function(a){return a=y.toBuffer(a),d("sha256").update(a).digest()},r.ripemd160=function(a,e){a=y.toBuffer(a);var r=d("rmd160").update(a).digest();return!0===e?y.setLength(r,32):r},r.rlphash=function(a){return r.keccak(h.encode(a))}}).call(this,n(12).Buffer)},494:function(e,r,n){"use strict";var t=this&&this.__createBinding||(Object.create?function(e,r,n,t){void 0===t&&(t=n),Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[n]}})}:function(e,r,n,t){void 0===t&&(t=n),e[t]=r[n]}),f=this&&this.__exportStar||function(e,r){for(var p in e)"default"===p||r.hasOwnProperty(p)||t(r,e,p)};Object.defineProperty(r,"__esModule",{value:!0}),r.secp256k1=r.rlp=r.BN=void 0;var o=n(376);r.secp256k1=o;var c=n(166),l=n(25);r.BN=l;var d=n(233);r.rlp=d,Object.assign(r,c),f(n(934),r),f(n(935),r),f(n(380),r),f(n(953),r),f(n(234),r),f(n(954),r)},919:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var t=n(25),f=new(0,n(920).ec)("secp256k1"),o=f.curve;r.privateKeyExport=function(e,r){void 0===r&&(r=!0);var n=new t(e);if(n.ucmp(o.n)>=0)throw new Error("couldn't export to DER format");var l=f.g.mul(n);return c(l.getX(),l.getY(),r)},r.privateKeyModInverse=function(r){var n=new t(r);if(n.ucmp(o.n)>=0||n.isZero())throw new Error("private key range is invalid");return n.invm(o.n).toArrayLike(e,"be",32)},r.signatureImport=function(r){var n=new t(r.r);n.ucmp(o.n)>=0&&(n=new t(0));var s=new t(r.s);return s.ucmp(o.n)>=0&&(s=new t(0)),e.concat([n.toArrayLike(e,"be",32),s.toArrayLike(e,"be",32)])},r.ecdhUnsafe=function(e,r,n){void 0===n&&(n=!0);var l=f.keyFromPublic(e),d=new t(r);if(d.ucmp(o.n)>=0||d.isZero())throw new Error("scalar was invalid (zero or overflow)");var v=l.pub.mul(d);return c(v.getX(),v.getY(),n)};var c=function(r,n,t){var f;return t?((f=e.alloc(33))[0]=n.isOdd()?3:2,r.toArrayLike(e,"be",32).copy(f,1)):((f=e.alloc(65))[0]=4,r.toArrayLike(e,"be",32).copy(f,1),n.toArrayLike(e,"be",32).copy(f,33)),f}}).call(this,n(12).Buffer)},933:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0});var n=e.from([48,129,211,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,133,48,129,130,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,33,2,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,36,3,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t=e.from([48,130,1,19,2,1,1,4,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,129,165,48,129,162,2,1,1,48,44,6,7,42,134,72,206,61,1,1,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,255,255,252,47,48,6,4,1,0,4,1,7,4,65,4,121,190,102,126,249,220,187,172,85,160,98,149,206,135,11,7,2,155,252,219,45,206,40,217,89,242,129,91,22,248,23,152,72,58,218,119,38,163,196,101,93,164,251,252,14,17,8,168,253,23,180,72,166,133,84,25,156,71,208,143,251,16,212,184,2,33,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,186,174,220,230,175,72,160,59,191,210,94,140,208,54,65,65,2,1,1,161,68,3,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);r.privateKeyExport=function(r,f,o){void 0===o&&(o=!0);var c=e.from(o?n:t);return r.copy(c,o?8:9),f.copy(c,o?181:214),c},r.privateKeyImport=function(e){var r=e.length,n=0;if(r<n+1||48!==e[n])return null;if(r<(n+=1)+1||!(128&e[n]))return null;var t=127&e[n];if(t<1||t>2)return null;if(r<(n+=1)+t)return null;var f=e[n+t-1]|(t>1?e[n+t-2]<<8:0);return r<(n+=t)+f||r<n+3||2!==e[n]||1!==e[n+1]||1!==e[n+2]||r<(n+=3)+2||4!==e[n]||e[n+1]>32||r<n+2+e[n+1]?null:e.slice(n+2,n+2+e[n+1])},r.signatureImportLax=function(r){var n=e.alloc(32,0),s=e.alloc(32,0),t=r.length,f=0;if(48!==r[f++])return null;var o=r[f++];if(128&o&&(f+=o-128)>t)return null;if(2!==r[f++])return null;var c=r[f++];if(128&c){if(f+(o=c-128)>t)return null;for(;o>0&&0===r[f];f+=1,o-=1);for(c=0;o>0;f+=1,o-=1)c=(c<<8)+r[f]}if(c>t-f)return null;var l=f;if(f+=c,2!==r[f++])return null;var d=r[f++];if(128&d){if(f+(o=d-128)>t)return null;for(;o>0&&0===r[f];f+=1,o-=1);for(d=0;o>0;f+=1,o-=1)d=(d<<8)+r[f]}if(d>t-f)return null;var v=f;for(f+=d;c>0&&0===r[l];c-=1,l+=1);if(c>32)return null;var h=r.slice(l,l+c);for(h.copy(n,32-h.length);d>0&&0===r[v];d-=1,v+=1);if(d>32)return null;var y=r.slice(v,v+d);return y.copy(s,32-y.length),{r:n,s:s}}}).call(this,n(12).Buffer)},934:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.KECCAK256_RLP=r.KECCAK256_RLP_S=r.KECCAK256_RLP_ARRAY=r.KECCAK256_RLP_ARRAY_S=r.KECCAK256_NULL=r.KECCAK256_NULL_S=r.TWO_POW256=r.MAX_INTEGER=void 0;var t=n(25);r.MAX_INTEGER=new t("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16),r.TWO_POW256=new t("10000000000000000000000000000000000000000000000000000000000000000",16),r.KECCAK256_NULL_S="c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",r.KECCAK256_NULL=e.from(r.KECCAK256_NULL_S,"hex"),r.KECCAK256_RLP_ARRAY_S="1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",r.KECCAK256_RLP_ARRAY=e.from(r.KECCAK256_RLP_ARRAY_S,"hex"),r.KECCAK256_RLP_S="56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",r.KECCAK256_RLP=e.from(r.KECCAK256_RLP_S,"hex")}).call(this,n(12).Buffer)},935:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.importPublic=r.privateToPublic=r.privateToAddress=r.publicToAddress=r.pubToAddress=r.isValidPublic=r.isValidPrivate=r.isPrecompiled=r.generateAddress2=r.generateAddress=r.isValidChecksumAddress=r.toChecksumAddress=r.isZeroAddress=r.isValidAddress=r.zeroAddress=void 0;var t=n(274),f=n(166),o=n(376),c=n(25),l=n(234),d=n(380);r.zeroAddress=function(){var e=l.zeros(20);return l.bufferToHex(e)},r.isValidAddress=function(address){return/^0x[0-9a-fA-F]{40}$/.test(address)},r.isZeroAddress=function(address){return r.zeroAddress()===l.addHexPrefix(address)},r.toChecksumAddress=function(address,e){address=f.stripHexPrefix(address).toLowerCase();for(var r=void 0!==e?e.toString()+"0x":"",n=d.keccak(r+address).toString("hex"),t="0x",i=0;i<address.length;i++)parseInt(n[i],16)>=8?t+=address[i].toUpperCase():t+=address[i];return t},r.isValidChecksumAddress=function(address,e){return r.isValidAddress(address)&&r.toChecksumAddress(address,e)===address},r.generateAddress=function(r,n){r=l.toBuffer(r);var t=new c(n);return t.isZero()?d.rlphash([r,null]).slice(-20):d.rlphash([r,e.from(t.toArray())]).slice(-20)},r.generateAddress2=function(r,n,f){var o=l.toBuffer(r),c=l.toBuffer(n),v=l.toBuffer(f);return t(20===o.length),t(32===c.length),d.keccak256(e.concat([e.from("ff","hex"),o,c,d.keccak256(v)])).slice(-20)},r.isPrecompiled=function(address){var a=l.unpad(address);return 1===a.length&&a[0]>=1&&a[0]<=8},r.isValidPrivate=function(e){return o.privateKeyVerify(e)},r.isValidPublic=function(r,n){return void 0===n&&(n=!1),64===r.length?o.publicKeyVerify(e.concat([e.from([4]),r])):!!n&&o.publicKeyVerify(r)},r.pubToAddress=function(e,r){return void 0===r&&(r=!1),e=l.toBuffer(e),r&&64!==e.length&&(e=o.publicKeyConvert(e,!1).slice(1)),t(64===e.length),d.keccak(e).slice(-20)},r.publicToAddress=r.pubToAddress,r.privateToAddress=function(e){return r.publicToAddress(r.privateToPublic(e))},r.privateToPublic=function(e){return e=l.toBuffer(e),o.publicKeyCreate(e,!1).slice(1)},r.importPublic=function(e){return 64!==(e=l.toBuffer(e)).length&&(e=o.publicKeyConvert(e,!1).slice(1)),e}}).call(this,n(12).Buffer)},953:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.hashPersonalMessage=r.isValidSignature=r.fromRpcSig=r.toRpcSig=r.ecrecover=r.ecsign=void 0;var t=n(376),f=n(25),o=n(234),c=n(380);function l(e,r){return r?e-(2*r+35):e-27}function d(e){return 0===e||1===e}r.ecsign=function(e,r,n){var f=t.sign(e,r),o=f.recovery;return{r:f.signature.slice(0,32),s:f.signature.slice(32,64),v:n?o+(2*n+35):o+27}},r.ecrecover=function(r,n,f,s,c){var v=e.concat([o.setLength(f,32),o.setLength(s,32)],64),h=l(n,c);if(!d(h))throw new Error("Invalid signature v value");var y=t.recover(r,v,h);return t.publicKeyConvert(y,!1).slice(1)},r.toRpcSig=function(r,n,s,t){if(!d(l(r,t)))throw new Error("Invalid signature v value");return o.bufferToHex(e.concat([o.setLengthLeft(n,32),o.setLengthLeft(s,32),o.toBuffer(r)]))},r.fromRpcSig=function(e){var r=o.toBuffer(e);if(65!==r.length)throw new Error("Invalid signature length");var n=r[64];return n<27&&(n+=27),{v:n,r:r.slice(0,32),s:r.slice(32,64)}},r.isValidSignature=function(e,r,s,n,t){void 0===n&&(n=!0);var o=new f("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16),c=new f("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",16);if(32!==r.length||32!==s.length)return!1;if(!d(l(e,t)))return!1;var v=new f(r),h=new f(s);return!(v.isZero()||v.gt(c)||h.isZero()||h.gt(c))&&(!n||1!==h.cmp(o))},r.hashPersonalMessage=function(r){var n=e.from("Ethereum Signed Message:\n"+r.length.toString(),"utf-8");return c.keccak(e.concat([n,r]))}}).call(this,n(12).Buffer)},954:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.defineProperties=void 0;var t=n(274),f=n(166),o=n(233),c=n(234);r.defineProperties=function(r,n,data){if(r.raw=[],r._fields=[],r.toJSON=function(label){if(void 0===label&&(label=!1),label){var e={};return r._fields.forEach((function(n){e[n]="0x"+r[n].toString("hex")})),e}return c.baToJSON(r.raw)},r.serialize=function(){return o.encode(r.raw)},n.forEach((function(n,i){function f(){return r.raw[i]}function o(f){"00"!==(f=c.toBuffer(f)).toString("hex")||n.allowZero||(f=e.allocUnsafe(0)),n.allowLess&&n.length?(f=c.stripZeros(f),t(n.length>=f.length,"The field "+n.name+" must not have more "+n.length+" bytes")):n.allowZero&&0===f.length||!n.length||t(n.length===f.length,"The field "+n.name+" must have byte length of "+n.length),r.raw[i]=f}r._fields.push(n.name),Object.defineProperty(r,n.name,{enumerable:!0,configurable:!0,get:f,set:o}),n.default&&(r[n.name]=n.default),n.alias&&Object.defineProperty(r,n.alias,{enumerable:!1,configurable:!0,set:o,get:f})})),data)if("string"==typeof data&&(data=e.from(f.stripHexPrefix(data),"hex")),e.isBuffer(data)&&(data=o.decode(data)),Array.isArray(data)){if(data.length>r._fields.length)throw new Error("wrong number of fields in data");data.forEach((function(e,i){r[r._fields[i]]=c.toBuffer(e)}))}else{if("object"!=typeof data)throw new Error("invalid data");var l=Object.keys(data);n.forEach((function(e){-1!==l.indexOf(e.name)&&(r[e.name]=data[e.name]),-1!==l.indexOf(e.alias)&&(r[e.alias]=data[e.alias])}))}}}).call(this,n(12).Buffer)}}]);