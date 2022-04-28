(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,t,r){var n;function o(e){this.rand=e}if(e.exports=function(e){return n||(n=new o(null)),n.generate(e)},e.exports.Rand=o,o.prototype.generate=function(e){return this._rand(e)},o.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),i=0;i<t.length;i++)t[i]=this.rand.getByte();return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?o.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?o.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(o.prototype._rand=function(){throw new Error("Not implemented yet")});else try{var c=r(852);if("function"!=typeof c.randomBytes)throw new Error("Not supported");o.prototype._rand=function(e){return c.randomBytes(e)}}catch(e){}},267:function(e,t,r){var n=r(21).Buffer;function o(e){n.isBuffer(e)||(e=n.from(e));for(var t=e.length/4|0,r=new Array(t),i=0;i<t;i++)r[i]=e.readUInt32BE(4*i);return r}function c(e){for(;0<e.length;e++)e[0]=0}function h(e,t,r,n,o){for(var c,h,d,f,l=r[0],y=r[1],v=r[2],_=r[3],m=e[0]^t[0],w=e[1]^t[1],S=e[2]^t[2],k=e[3]^t[3],B=4,E=1;E<o;E++)c=l[m>>>24]^y[w>>>16&255]^v[S>>>8&255]^_[255&k]^t[B++],h=l[w>>>24]^y[S>>>16&255]^v[k>>>8&255]^_[255&m]^t[B++],d=l[S>>>24]^y[k>>>16&255]^v[m>>>8&255]^_[255&w]^t[B++],f=l[k>>>24]^y[m>>>16&255]^v[w>>>8&255]^_[255&S]^t[B++],m=c,w=h,S=d,k=f;return c=(n[m>>>24]<<24|n[w>>>16&255]<<16|n[S>>>8&255]<<8|n[255&k])^t[B++],h=(n[w>>>24]<<24|n[S>>>16&255]<<16|n[k>>>8&255]<<8|n[255&m])^t[B++],d=(n[S>>>24]<<24|n[k>>>16&255]<<16|n[m>>>8&255]<<8|n[255&w])^t[B++],f=(n[k>>>24]<<24|n[m>>>16&255]<<16|n[w>>>8&255]<<8|n[255&S])^t[B++],[c>>>=0,h>>>=0,d>>>=0,f>>>=0]}var d=[0,1,2,4,8,16,32,64,128,27,54],f=function(){for(var e=new Array(256),t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=[],n=[],o=[[],[],[],[]],c=[[],[],[],[]],h=0,d=0,i=0;i<256;++i){var f=d^d<<1^d<<2^d<<3^d<<4;f=f>>>8^255&f^99,r[h]=f,n[f]=h;var l=e[h],y=e[l],v=e[y],_=257*e[f]^16843008*f;o[0][h]=_<<24|_>>>8,o[1][h]=_<<16|_>>>16,o[2][h]=_<<8|_>>>24,o[3][h]=_,_=16843009*v^65537*y^257*l^16843008*h,c[0][f]=_<<24|_>>>8,c[1][f]=_<<16|_>>>16,c[2][f]=_<<8|_>>>24,c[3][f]=_,0===h?h=d=1:(h=l^e[e[e[v^l]]],d^=e[e[d]])}return{SBOX:r,INV_SBOX:n,SUB_MIX:o,INV_SUB_MIX:c}}();function l(e){this._key=o(e),this._reset()}l.blockSize=16,l.keySize=32,l.prototype.blockSize=l.blockSize,l.prototype.keySize=l.keySize,l.prototype._reset=function(){for(var e=this._key,t=e.length,r=t+6,n=4*(r+1),o=[],c=0;c<t;c++)o[c]=e[c];for(c=t;c<n;c++){var h=o[c-1];c%t==0?(h=h<<8|h>>>24,h=f.SBOX[h>>>24]<<24|f.SBOX[h>>>16&255]<<16|f.SBOX[h>>>8&255]<<8|f.SBOX[255&h],h^=d[c/t|0]<<24):t>6&&c%t==4&&(h=f.SBOX[h>>>24]<<24|f.SBOX[h>>>16&255]<<16|f.SBOX[h>>>8&255]<<8|f.SBOX[255&h]),o[c]=o[c-t]^h}for(var l=[],y=0;y<n;y++){var v=n-y,_=o[v-(y%4?0:4)];l[y]=y<4||v<=4?_:f.INV_SUB_MIX[0][f.SBOX[_>>>24]]^f.INV_SUB_MIX[1][f.SBOX[_>>>16&255]]^f.INV_SUB_MIX[2][f.SBOX[_>>>8&255]]^f.INV_SUB_MIX[3][f.SBOX[255&_]]}this._nRounds=r,this._keySchedule=o,this._invKeySchedule=l},l.prototype.encryptBlockRaw=function(e){return h(e=o(e),this._keySchedule,f.SUB_MIX,f.SBOX,this._nRounds)},l.prototype.encryptBlock=function(e){var t=this.encryptBlockRaw(e),r=n.allocUnsafe(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r},l.prototype.decryptBlock=function(e){var t=(e=o(e))[1];e[1]=e[3],e[3]=t;var r=h(e,this._invKeySchedule,f.INV_SUB_MIX,f.INV_SBOX,this._nRounds),c=n.allocUnsafe(16);return c.writeUInt32BE(r[0],0),c.writeUInt32BE(r[3],4),c.writeUInt32BE(r[2],8),c.writeUInt32BE(r[1],12),c},l.prototype.scrub=function(){c(this._keySchedule),c(this._invKeySchedule),c(this._key)},e.exports.AES=l},371:function(e,t,r){var n=r(841),o=r(849),c=r(471);t.createCipher=t.Cipher=n.createCipher,t.createCipheriv=t.Cipheriv=n.createCipheriv,t.createDecipher=t.Decipher=o.createDecipher,t.createDecipheriv=t.Decipheriv=o.createDecipheriv,t.listCiphers=t.getCiphers=function(){return Object.keys(c)}},372:function(e,t,r){var n={ECB:r(842),CBC:r(843),CFB:r(844),CFB8:r(845),CFB1:r(846),OFB:r(847),CTR:r(469),GCM:r(469)},o=r(471);for(var c in o)o[c].module=n[o[c].mode];e.exports=o},373:function(e,t,r){(function(t){var n=r(25),o=r(139);function c(e,r){var o=function(e){var t=h(e);return{blinder:t.toRed(n.mont(e.modulus)).redPow(new n(e.publicExponent)).fromRed(),unblinder:t.invm(e.modulus)}}(r),c=r.modulus.byteLength(),d=(n.mont(r.modulus),new n(e).mul(o.blinder).umod(r.modulus)),f=d.toRed(n.mont(r.prime1)),l=d.toRed(n.mont(r.prime2)),y=r.coefficient,p=r.prime1,q=r.prime2,v=f.redPow(r.exponent1),_=l.redPow(r.exponent2);v=v.fromRed(),_=_.fromRed();var m=v.isub(_).imul(y).umod(p);return m.imul(q),_.iadd(m),new t(_.imul(o.unblinder).umod(r.modulus).toArray(!1,c))}function h(e){for(var t=e.modulus.byteLength(),r=new n(o(t));r.cmp(e.modulus)>=0||!r.umod(e.prime1)||!r.umod(e.prime2);)r=new n(o(t));return r}e.exports=c,c.getr=h}).call(this,r(12).Buffer)},464:function(e){e.exports=JSON.parse('{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}')},469:function(e,t,r){var n=r(228),o=r(21).Buffer,c=r(470);function h(e){var t=e._cipher.encryptBlockRaw(e._prev);return c(e._prev),t}t.encrypt=function(e,t){var r=Math.ceil(t.length/16),c=e._cache.length;e._cache=o.concat([e._cache,o.allocUnsafe(16*r)]);for(var i=0;i<r;i++){var d=h(e),f=c+16*i;e._cache.writeUInt32BE(d[0],f+0),e._cache.writeUInt32BE(d[1],f+4),e._cache.writeUInt32BE(d[2],f+8),e._cache.writeUInt32BE(d[3],f+12)}var l=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),n(t,l)}},470:function(e,t){e.exports=function(e){for(var t,r=e.length;r--;){if(255!==(t=e.readUInt8(r))){t++,e.writeUInt8(t,r);break}e.writeUInt8(0,r)}}},471:function(e){e.exports=JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')},472:function(e,t,r){var n=r(267),o=r(21).Buffer,c=r(141),h=r(18),d=r(848),f=r(228),l=r(470);function y(e,t,r,h){c.call(this);var f=o.alloc(4,0);this._cipher=new n.AES(t);var y=this._cipher.encryptBlock(f);this._ghash=new d(y),r=function(e,t,r){if(12===t.length)return e._finID=o.concat([t,o.from([0,0,0,1])]),o.concat([t,o.from([0,0,0,2])]);var n=new d(r),c=t.length,h=c%16;n.update(t),h&&(h=16-h,n.update(o.alloc(h,0))),n.update(o.alloc(8,0));var f=8*c,y=o.alloc(8);y.writeUIntBE(f,0,8),n.update(y),e._finID=n.state;var v=o.from(e._finID);return l(v),v}(this,r,y),this._prev=o.from(r),this._cache=o.allocUnsafe(0),this._secCache=o.allocUnsafe(0),this._decrypt=h,this._alen=0,this._len=0,this._mode=e,this._authTag=null,this._called=!1}h(y,c),y.prototype._update=function(e){if(!this._called&&this._alen){var t=16-this._alen%16;t<16&&(t=o.alloc(t,0),this._ghash.update(t))}this._called=!0;var r=this._mode.encrypt(this,e);return this._decrypt?this._ghash.update(e):this._ghash.update(r),this._len+=e.length,r},y.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var e=f(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt&&function(a,b){var e=0;a.length!==b.length&&e++;for(var t=Math.min(a.length,b.length),i=0;i<t;++i)e+=a[i]^b[i];return e}(e,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=e,this._cipher.scrub()},y.prototype.getAuthTag=function(){if(this._decrypt||!o.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},y.prototype.setAuthTag=function(e){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=e},y.prototype.setAAD=function(e){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(e),this._alen+=e.length},e.exports=y},473:function(e,t,r){var n=r(267),o=r(21).Buffer,c=r(141);function h(e,t,r,h){c.call(this),this._cipher=new n.AES(t),this._prev=o.from(r),this._cache=o.allocUnsafe(0),this._secCache=o.allocUnsafe(0),this._decrypt=h,this._mode=e}r(18)(h,c),h.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},h.prototype._final=function(){this._cipher.scrub()},e.exports=h},484:function(e){e.exports=JSON.parse('{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}')},832:function(e,t,r){e.exports=r(464)},834:function(e,t,r){var n=r(835),o=r(371),c=r(372),h=r(850),d=r(268);function f(e,t,r){if(e=e.toLowerCase(),c[e])return o.createCipheriv(e,t,r);if(h[e])return new n({key:t,iv:r,mode:e});throw new TypeError("invalid suite type")}function l(e,t,r){if(e=e.toLowerCase(),c[e])return o.createDecipheriv(e,t,r);if(h[e])return new n({key:t,iv:r,mode:e,decrypt:!0});throw new TypeError("invalid suite type")}t.createCipher=t.Cipher=function(e,t){var r,n;if(e=e.toLowerCase(),c[e])r=c[e].key,n=c[e].iv;else{if(!h[e])throw new TypeError("invalid suite type");r=8*h[e].key,n=h[e].iv}var o=d(t,!1,r,n);return f(e,o.key,o.iv)},t.createCipheriv=t.Cipheriv=f,t.createDecipher=t.Decipher=function(e,t){var r,n;if(e=e.toLowerCase(),c[e])r=c[e].key,n=c[e].iv;else{if(!h[e])throw new TypeError("invalid suite type");r=8*h[e].key,n=h[e].iv}var o=d(t,!1,r,n);return l(e,o.key,o.iv)},t.createDecipheriv=t.Decipheriv=l,t.listCiphers=t.getCiphers=function(){return Object.keys(h).concat(o.getCiphers())}},835:function(e,t,r){var n=r(141),o=r(370),c=r(18),h=r(21).Buffer,d={"des-ede3-cbc":o.CBC.instantiate(o.EDE),"des-ede3":o.EDE,"des-ede-cbc":o.CBC.instantiate(o.EDE),"des-ede":o.EDE,"des-cbc":o.CBC.instantiate(o.DES),"des-ecb":o.DES};function f(e){n.call(this);var t,r=e.mode.toLowerCase(),o=d[r];t=e.decrypt?"decrypt":"encrypt";var c=e.key;h.isBuffer(c)||(c=h.from(c)),"des-ede"!==r&&"des-ede-cbc"!==r||(c=h.concat([c,c.slice(0,8)]));var f=e.iv;h.isBuffer(f)||(f=h.from(f)),this._des=o.create({key:c,iv:f,type:t})}d.des=d["des-cbc"],d.des3=d["des-ede3-cbc"],e.exports=f,c(f,n),f.prototype._update=function(data){return h.from(this._des.update(data))},f.prototype._final=function(){return h.from(this._des.final())}},841:function(e,t,r){var n=r(372),o=r(472),c=r(21).Buffer,h=r(473),d=r(141),f=r(267),l=r(268);function y(e,t,r){d.call(this),this._cache=new _,this._cipher=new f.AES(t),this._prev=c.from(r),this._mode=e,this._autopadding=!0}r(18)(y,d),y.prototype._update=function(data){var e,t;this._cache.add(data);for(var r=[];e=this._cache.get();)t=this._mode.encrypt(this,e),r.push(t);return c.concat(r)};var v=c.alloc(16,16);function _(){this.cache=c.allocUnsafe(0)}function m(e,t,r){var d=n[e.toLowerCase()];if(!d)throw new TypeError("invalid suite type");if("string"==typeof t&&(t=c.from(t)),t.length!==d.key/8)throw new TypeError("invalid key length "+t.length);if("string"==typeof r&&(r=c.from(r)),"GCM"!==d.mode&&r.length!==d.iv)throw new TypeError("invalid iv length "+r.length);return"stream"===d.type?new h(d.module,t,r):"auth"===d.type?new o(d.module,t,r):new y(d.module,t,r)}y.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return e=this._mode.encrypt(this,e),this._cipher.scrub(),e;if(!e.equals(v))throw this._cipher.scrub(),new Error("data not multiple of block length")},y.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},_.prototype.add=function(data){this.cache=c.concat([this.cache,data])},_.prototype.get=function(){if(this.cache.length>15){var e=this.cache.slice(0,16);return this.cache=this.cache.slice(16),e}return null},_.prototype.flush=function(){for(var e=16-this.cache.length,t=c.allocUnsafe(e),i=-1;++i<e;)t.writeUInt8(e,i);return c.concat([this.cache,t])},t.createCipheriv=m,t.createCipher=function(e,t){var r=n[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var o=l(t,!1,r.key,r.iv);return m(e,o.key,o.iv)}},842:function(e,t){t.encrypt=function(e,t){return e._cipher.encryptBlock(t)},t.decrypt=function(e,t){return e._cipher.decryptBlock(t)}},843:function(e,t,r){var n=r(228);t.encrypt=function(e,t){var data=n(t,e._prev);return e._prev=e._cipher.encryptBlock(data),e._prev},t.decrypt=function(e,t){var r=e._prev;e._prev=t;var o=e._cipher.decryptBlock(t);return n(o,r)}},844:function(e,t,r){var n=r(21).Buffer,o=r(228);function c(e,data,t){var r=data.length,c=o(data,e._cache);return e._cache=e._cache.slice(r),e._prev=n.concat([e._prev,t?data:c]),c}t.encrypt=function(e,data,t){for(var r,o=n.allocUnsafe(0);data.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=n.allocUnsafe(0)),!(e._cache.length<=data.length)){o=n.concat([o,c(e,data,t)]);break}r=e._cache.length,o=n.concat([o,c(e,data.slice(0,r),t)]),data=data.slice(r)}return o}},845:function(e,t,r){var n=r(21).Buffer;function o(e,t,r){var o=e._cipher.encryptBlock(e._prev)[0]^t;return e._prev=n.concat([e._prev.slice(1),n.from([r?t:o])]),o}t.encrypt=function(e,t,r){for(var c=t.length,h=n.allocUnsafe(c),i=-1;++i<c;)h[i]=o(e,t[i],r);return h}},846:function(e,t,r){var n=r(21).Buffer;function o(e,t,r){for(var n,o,i=-1,h=0;++i<8;)n=t&1<<7-i?128:0,h+=(128&(o=e._cipher.encryptBlock(e._prev)[0]^n))>>i%8,e._prev=c(e._prev,r?n:o);return h}function c(e,t){var r=e.length,i=-1,o=n.allocUnsafe(e.length);for(e=n.concat([e,n.from([t])]);++i<r;)o[i]=e[i]<<1|e[i+1]>>7;return o}t.encrypt=function(e,t,r){for(var c=t.length,h=n.allocUnsafe(c),i=-1;++i<c;)h[i]=o(e,t[i],r);return h}},847:function(e,t,r){(function(e){var n=r(228);function o(e){return e._prev=e._cipher.encryptBlock(e._prev),e._prev}t.encrypt=function(t,r){for(;t._cache.length<r.length;)t._cache=e.concat([t._cache,o(t)]);var c=t._cache.slice(0,r.length);return t._cache=t._cache.slice(r.length),n(r,c)}}).call(this,r(12).Buffer)},848:function(e,t,r){var n=r(21).Buffer,o=n.alloc(16,0);function c(e){var t=n.allocUnsafe(16);return t.writeUInt32BE(e[0]>>>0,0),t.writeUInt32BE(e[1]>>>0,4),t.writeUInt32BE(e[2]>>>0,8),t.writeUInt32BE(e[3]>>>0,12),t}function h(e){this.h=e,this.state=n.alloc(16,0),this.cache=n.allocUnsafe(0)}h.prototype.ghash=function(e){for(var i=-1;++i<e.length;)this.state[i]^=e[i];this._multiply()},h.prototype._multiply=function(){for(var e,t,r,n=[(e=this.h).readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)],o=[0,0,0,0],i=-1;++i<128;){for(0!=(this.state[~~(i/8)]&1<<7-i%8)&&(o[0]^=n[0],o[1]^=n[1],o[2]^=n[2],o[3]^=n[3]),r=0!=(1&n[3]),t=3;t>0;t--)n[t]=n[t]>>>1|(1&n[t-1])<<31;n[0]=n[0]>>>1,r&&(n[0]=n[0]^225<<24)}this.state=c(o)},h.prototype.update=function(e){var t;for(this.cache=n.concat([this.cache,e]);this.cache.length>=16;)t=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(t)},h.prototype.final=function(e,t){return this.cache.length&&this.ghash(n.concat([this.cache,o],16)),this.ghash(c([0,e,0,t])),this.state},e.exports=h},849:function(e,t,r){var n=r(472),o=r(21).Buffer,c=r(372),h=r(473),d=r(141),f=r(267),l=r(268);function y(e,t,r){d.call(this),this._cache=new v,this._last=void 0,this._cipher=new f.AES(t),this._prev=o.from(r),this._mode=e,this._autopadding=!0}function v(){this.cache=o.allocUnsafe(0)}function _(e,t,r){var d=c[e.toLowerCase()];if(!d)throw new TypeError("invalid suite type");if("string"==typeof r&&(r=o.from(r)),"GCM"!==d.mode&&r.length!==d.iv)throw new TypeError("invalid iv length "+r.length);if("string"==typeof t&&(t=o.from(t)),t.length!==d.key/8)throw new TypeError("invalid key length "+t.length);return"stream"===d.type?new h(d.module,t,r,!0):"auth"===d.type?new n(d.module,t,r,!0):new y(d.module,t,r)}r(18)(y,d),y.prototype._update=function(data){var e,t;this._cache.add(data);for(var r=[];e=this._cache.get(this._autopadding);)t=this._mode.decrypt(this,e),r.push(t);return o.concat(r)},y.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return function(e){var t=e[15];if(t<1||t>16)throw new Error("unable to decrypt data");var i=-1;for(;++i<t;)if(e[i+(16-t)]!==t)throw new Error("unable to decrypt data");if(16===t)return;return e.slice(0,16-t)}(this._mode.decrypt(this,e));if(e)throw new Error("data not multiple of block length")},y.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},v.prototype.add=function(data){this.cache=o.concat([this.cache,data])},v.prototype.get=function(e){var t;if(e){if(this.cache.length>16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t}else if(this.cache.length>=16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t;return null},v.prototype.flush=function(){if(this.cache.length)return this.cache},t.createDecipher=function(e,t){var r=c[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=l(t,!1,r.key,r.iv);return _(e,n.key,n.iv)},t.createDecipheriv=_},850:function(e,t){t["des-ecb"]={key:8,iv:0},t["des-cbc"]=t.des={key:8,iv:8},t["des-ede3-cbc"]=t.des3={key:24,iv:8},t["des-ede3"]={key:24,iv:0},t["des-ede-cbc"]={key:16,iv:8},t["des-ede"]={key:16,iv:0}},855:function(e,t,r){(function(t){var n=r(126),o=r(163),c=r(18),h=r(856),d=r(887),f=r(464);function l(e){o.Writable.call(this);var data=f[e];if(!data)throw new Error("Unknown message digest");this._hashType=data.hash,this._hash=n(data.hash),this._tag=data.id,this._signType=data.sign}function y(e){o.Writable.call(this);var data=f[e];if(!data)throw new Error("Unknown message digest");this._hash=n(data.hash),this._tag=data.id,this._signType=data.sign}function v(e){return new l(e)}function _(e){return new y(e)}Object.keys(f).forEach((function(e){f[e].id=new t(f[e].id,"hex"),f[e.toLowerCase()]=f[e]})),c(l,o.Writable),l.prototype._write=function(data,e,t){this._hash.update(data),t()},l.prototype.update=function(data,e){return"string"==typeof data&&(data=new t(data,e)),this._hash.update(data),this},l.prototype.sign=function(e,t){this.end();var r=this._hash.digest(),n=h(r,e,this._hashType,this._signType,this._tag);return t?n.toString(t):n},c(y,o.Writable),y.prototype._write=function(data,e,t){this._hash.update(data),t()},y.prototype.update=function(data,e){return"string"==typeof data&&(data=new t(data,e)),this._hash.update(data),this},y.prototype.verify=function(e,r,n){"string"==typeof r&&(r=new t(r,n)),this.end();var o=this._hash.digest();return d(r,o,e,this._signType,this._tag)},e.exports={Sign:v,Verify:_,createSign:v,createVerify:_}}).call(this,r(12).Buffer)},856:function(e,t,r){(function(t){var n=r(462),o=r(373),c=r(229).ec,h=r(25),d=r(271),f=r(484);function l(e,q,r,o){if((e=new t(e.toArray())).length<q.byteLength()){var c=new t(q.byteLength()-e.length);c.fill(0),e=t.concat([c,e])}var h=r.length,d=function(e,q){e=(e=y(e,q)).mod(q);var r=new t(e.toArray());if(r.length<q.byteLength()){var n=new t(q.byteLength()-r.length);n.fill(0),r=t.concat([n,r])}return r}(r,q),f=new t(h);f.fill(1);var l=new t(h);return l.fill(0),l=n(o,l).update(f).update(new t([0])).update(e).update(d).digest(),f=n(o,l).update(f).digest(),{k:l=n(o,l).update(f).update(new t([1])).update(e).update(d).digest(),v:f=n(o,l).update(f).digest()}}function y(e,q){var t=new h(e),r=(e.length<<3)-q.bitLength();return r>0&&t.ishrn(r),t}function v(q,e,r){var o,c;do{for(o=new t(0);8*o.length<q.bitLength();)e.v=n(r,e.k).update(e.v).digest(),o=t.concat([o,e.v]);c=y(o,q),e.k=n(r,e.k).update(e.v).update(new t([0])).digest(),e.v=n(r,e.k).update(e.v).digest()}while(-1!==c.cmp(q));return c}function _(g,e,p,q){return g.toRed(h.mont(p)).redPow(e).fromRed().mod(q)}e.exports=function(e,r,n,m,w){var S=d(r);if(S.curve){if("ecdsa"!==m&&"ecdsa/rsa"!==m)throw new Error("wrong private key type");return function(e,r){var n=f[r.curve.join(".")];if(!n)throw new Error("unknown curve "+r.curve.join("."));var o=new c(n).keyFromPrivate(r.privateKey).sign(e);return new t(o.toDER())}(e,S)}if("dsa"===S.type){if("dsa"!==m)throw new Error("wrong private key type");return function(e,r,n){var o,c=r.params.priv_key,p=r.params.p,q=r.params.q,g=r.params.g,d=new h(0),f=y(e,q).mod(q),s=!1,m=l(c,q,e,n);for(;!1===s;)o=v(q,m,n),d=_(g,o,p,q),0===(s=o.invm(q).imul(f.add(c.mul(d))).mod(q)).cmpn(0)&&(s=!1,d=new h(0));return function(e,s){e=e.toArray(),s=s.toArray(),128&e[0]&&(e=[0].concat(e));128&s[0]&&(s=[0].concat(s));var r=[48,e.length+s.length+4,2,e.length];return r=r.concat(e,[2,s.length],s),new t(r)}(d,s)}(e,S,n)}if("rsa"!==m&&"ecdsa/rsa"!==m)throw new Error("wrong private key type");e=t.concat([w,e]);for(var k=S.modulus.byteLength(),B=[0,1];e.length+B.length+1<k;)B.push(255);B.push(0);for(var i=-1;++i<e.length;)B.push(e[i]);return o(B,S)},e.exports.getKey=l,e.exports.makeKey=v}).call(this,r(12).Buffer)},887:function(e,t,r){(function(t){var n=r(25),o=r(229).ec,c=r(271),h=r(484);function d(b,q){if(b.cmpn(0)<=0)throw new Error("invalid sig");if(b.cmp(q)>=q)throw new Error("invalid sig")}e.exports=function(e,r,f,l,y){var v=c(f);if("ec"===v.type){if("ecdsa"!==l&&"ecdsa/rsa"!==l)throw new Error("wrong public key type");return function(e,t,r){var n=h[r.data.algorithm.curve.join(".")];if(!n)throw new Error("unknown curve "+r.data.algorithm.curve.join("."));var c=new o(n),d=r.data.subjectPrivateKey.data;return c.verify(t,e,d)}(e,r,v)}if("dsa"===v.type){if("dsa"!==l)throw new Error("wrong public key type");return function(e,t,r){var p=r.data.p,q=r.data.q,g=r.data.g,o=r.data.pub_key,h=c.signature.decode(e,"der"),s=h.s,f=h.r;d(s,q),d(f,q);var l=n.mont(p),y=s.invm(q);return 0===g.toRed(l).redPow(new n(t).mul(y).mod(q)).fromRed().mul(o.toRed(l).redPow(f.mul(y).mod(q)).fromRed()).mod(p).mod(q).cmp(f)}(e,r,v)}if("rsa"!==l&&"ecdsa/rsa"!==l)throw new Error("wrong public key type");r=t.concat([y,r]);for(var _=v.modulus.byteLength(),m=[1],w=0;r.length+m.length+2<_;)m.push(255),w++;m.push(0);for(var i=-1;++i<r.length;)m.push(r[i]);m=new t(m);var S=n.mont(v.modulus);e=(e=new n(e).toRed(S)).redPow(new n(v.publicExponent)),e=new t(e.fromRed().toArray());var k=w<8?1:0;for(_=Math.min(e.length,m.length),e.length!==m.length&&(k=1),i=-1;++i<_;)k|=e[i]^m[i];return 0===k}}).call(this,r(12).Buffer)}}]);