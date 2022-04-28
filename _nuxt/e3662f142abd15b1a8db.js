(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1012:function(e,t,r){"use strict";r.r(t);r(189),r(159),r(512);var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,O,T,_,w,y,N=r(50),R=(r(226),r(358),r(251),r(184),r(359),r(134),r(135),r(53),r(56),r(225),r(109),r(64),r(2)),j=(r(407),r(4)),F=r(213),C=r.n(F),L=r(1),G=(r(195),r(195)),B={updateContructIndex:function(e,t){e.dispatch;(0,e.commit)("SET_CONTRUCT_INDEX",t.contructTxIndex)},updateCheckingFrom:function(e,t){e.dispatch;(0,e.commit)("SET_CHECKING_ADDRESS_FROM",t.checkingFrom)},updateCheckingTo:function(e,t){e.dispatch;(0,e.commit)("SET_CHECKING_ADDRESS_TO",t.checkingTo)},setSendLoading:function(e,t){e.dispatch;(0,e.commit)("SET_SEND_LOADING",t.loading)},setResendDisabled:function(e,t){e.dispatch;(0,e.commit)("SET_RESEND_DISABLED",t.disabled)},setSendingIndex:function(e,t){e.dispatch;(0,e.commit)("SET_SENDING_INDEX",t.sendingIndex)},setCode:function(e,t){e.dispatch;(0,e.commit)("SET_CODE",t.code)},setInputType:function(e,t){e.dispatch;(0,e.commit)("SET_INPUT_TYPE",t.type)},setHeaderClosed:function(e,t){e.dispatch;(0,e.commit)("SET_HEADER_CLOSED",t.closed)},updateLanguage:function(e,t){e.dispatch;var r=e.commit,n=t.language;try{r("SET_LANGUAGE",n),localStorage.language=n}catch(e){}},checkAddressIsValid:(y=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var address;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.commit,address=r.address,e.abrupt("return","0x0000000000000000000000000000000000000000"!=address&&Object(j.isAddress)(address));case 3:case"end":return e.stop()}}),e)}))),function(e,t){return y.apply(this,arguments)}),initBulksender:(w=Object(R.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rootState,t.rootGetters,t.dispatch,t.commit,t.state;case 1:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)}),initBaseParams:(_=Object(R.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rootState,t.rootGetters,t.dispatch,t.commit,t.state;case 1:case"end":return e.stop()}}),e)}))),function(e){return _.apply(this,arguments)}),parseInsertAddresses:(T=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,n=t.dispatch,t.commit,o=r.insertedAddress,d=(d=o.replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,"")).split("\n"),e.next=6,n("checkInsertAddresses",{addresses:d});case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return T.apply(this,arguments)}),parseInsertTxs:(O=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,n=t.dispatch,t.commit,o=r.insertedAddress,d=(d=o.replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,"")).split("\n"),e.next=6,n("checkInsertTxs",{addresses:d});case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return O.apply(this,arguments)}),prepareTransactions:(E=Object(R.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,f,address,h,S,v,A,x,k,D,I,E,O,T,_,w,y,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.rootState,n=t.rootGetters,o=t.state,d=t.dispatch,c=t.commit,l=r.token,m=l.allowanceEnough,f=l.balanceEnough,address=l.address,h=l.gasForProcessing,r.metamask.netId,e.next=5,d("checkTheLessBalance");case 5:if(S=e.sent,!(m&&f&&S)){e.next=31;break}v=address,A=r.checkBulksend.addressInfo,x=n["metamask/networkConfig"].blockConfig,k=r.bulksender,D=k.commonExtraGas,I=k.defaultBlockConfig,null==x&&(x=I),E=x.blockGasLimit,O=Object.assign({},A),T=O.batches,_=0,w=[],y=regeneratorRuntime.mark((function e(){var t,r,n,l,m,f,S,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c("SET_CONTRUCT_INDEX",N+1),t=T[N],r=Object.assign({},t),n=r.addressValues,l=[],m=[],f=[],n.forEach((function(e){l.push(e.address),m.push(e.amount),null!=e.tokenId&&f.push(e.tokenId)})),S=0,!l.length||!m.length){e.next=13;break}return e.next=12,d("bulksender/estimateGasForBatchTransfer",{tokenAddress:v,addresses:l,amounts:m,tokenIds:f},{root:!0});case 12:S=e.sent;case 13:if(-1!=S){e.next=15;break}throw Error("EstimateCostForTransferOfHolder error");case 15:(h>0||o.queryLimitForBadAddress<=o.queryLimitForBadAddressSpecialProcess)&&(A=S,0==N?h>0&&(A=2*S):(N>0&&(A=2*S),N==T.length-1&&(A=3*S)),A>E&&(A=E),S=A),r.estimateGas=S,_+=S,w.push(r);case 19:case"end":return e.stop()}}),e)})),N=0;case 19:if(!(N<T.length)){e.next=24;break}return e.delegateYield(y(),"t0",21);case 21:N++,e.next=19;break;case 24:return O.batches=w,O.totalGas=_+D*T.length,c("SET_ADDRESS_INFO",O),e.next=29,d("estimateExtraFee");case 29:return e.next=31,d("estimateTotalEtherCost");case 31:return e.abrupt("return",!0);case 32:case"end":return e.stop()}}),e)}))),function(e){return E.apply(this,arguments)}),checkDuplicatedTokenIds:(I=Object(R.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,f,h,S,v,A,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.state,r=t.rootState,n=t.commit,t.rootGetters,t.dispatch,o=r.checkBulksend.addressInfo,r.metamask.ethAccount,d=Object.assign({},o),c=d.validData,l=[],m=[],f=Object(L.a)(o.validAmount),h=[],S={},v=0;v<c.length;v++)A=c[v],null==S[A.tokenId]?(S[A.tokenId]=!0,h.push(A)):(l.push({index:v,address:A.address,amount:A.amount,tokenId:A.tokenId,errorType:6}),m.push(v),x=Object(L.a)(A.amount),f=f.minus(x));if(!(m.length>0)){e.next=19;break}return d.validData=h,d.validAmount=f.toString(10),d.invalidAddressesIndexes=m,d.invalidAddresses=l,n("SET_ADDRESS_INFO",d),e.abrupt("return",!0);case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)}))),function(e){return I.apply(this,arguments)}),checkInsertTxs:(D=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,O,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rootState,t.rootGetters,t.dispatch,o=t.commit,d=r.addresses,c=(new Date).getTime(),l=n.token.tokenSelected,m=18,null!=l&&(m=l.decimals),f=new Set,h=[],S=new Set,v=[],A=Object(L.a)(0),x=Object(L.a)(0),k=[],D=[],I=[],E={},O=function(e){return/^0x([A-Fa-f0-9]{64})$/.test(e)},d.forEach((function(e,t){var r=e.split(",");r.length<2&&(r=e.split("，"));var address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=1,o=!0,d=!1;if(!O(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||!isNaN(n)&&Number(n)<=0){var c=0;(isNaN(n)||Number(n)<=0)&&(c=1,O(address)||(c=2)),S.add({index:t,address:address,amount:n,errorType:c}),v.push(t),o=!1}else{var l=!1,T=n.toString().split(".");if(T.length>1&&T[1].length>m&&(l=!0),l)c=4,S.add({index:t,address:address,amount:n,errorType:c}),v.push(t),o=!1;else{var _=Object(L.a)(n);n=_.toString(10),x=x.plus(_),k.push({address:address,amount:n,amountStr:_.toString(10)}),null==E[address]?(E[address]=!0,D.push({address:address,amount:n,amountStr:_.toString(10)}),A=A.plus(_)):(d=!0,f.add(address),h.push(t))}}var w=n;try{w=Object(L.a)(n).toString(10)}catch(e){}I.push({address:address,amount:n,amountStr:w,valid:o,duplicated:d})})),T=(new Date).getTime(),console.info("addresses processing time",(T-c)/1e3),A=A.toString(10),x=x.toString(10),f=Array.from(f),S=Array.from(S),o("SET_TXS_INFO",{validAmount:x,nonDuplicatedAmount:A,originalData:I,originalAddressStr:d,duplicatedAddresses:f,duplicatedAddressesIndexes:h,invalidAddresses:S,invalidAddressesIndexes:v,validData:k,nonDuplicatedData:D,finalData:I,finalAmount:A});case 27:case"end":return e.stop()}}),e)}))),function(e,t){return D.apply(this,arguments)}),checkInsertAddresses:(k=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,O,T,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,o=t.rootGetters,d=t.dispatch,c=t.commit,l=r.addresses,!o["token/isNFTToken"]){e.next=7;break}return e.next=6,d("checkInsertAddressesForNFT",{addresses:l});case 6:return e.abrupt("return");case 7:m=(new Date).getTime(),f=n.token.tokenSelected,h=18,null!=f&&(h=f.decimals),S=new Set,v=[],A=new Set,x=[],k=Object(L.a)(0),D=Object(L.a)(0),I=[],E=[],O=[],T={},l.forEach((function(e,t){var r=e.split(",");r.length<2&&(r=e.split("，"));var address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=r[1],o=!0,d=!1;try{address.startsWith("xdc")&&(address=address.replace("xdc","0x"))}catch(e){}if(!Object(j.isAddress)(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||!isNaN(n)&&Number(n)<=0){var c=0;(isNaN(n)||Number(n)<=0)&&(c=1,Object(j.isAddress)(address)||(c=2)),A.add({index:t,address:address,amount:n,errorType:c}),x.push(t),o=!1}else{var l=!1,m=n.toString().split(".");if(m.length>1&&m[1].length>h&&(l=!0),l)c=4,A.add({index:t,address:address,amount:n,errorType:c}),x.push(t),o=!1;else{address=Object(j.toChecksumAddress)(address);var f=Object(L.a)(n);n=f.toString(10),D=D.plus(f),I.push({address:address,amount:n,amountStr:f.toString(10)}),null==T[address]?(T[address]=!0,E.push({address:address,amount:n,amountStr:f.toString(10)}),k=k.plus(f)):(d=!0,S.add(address),v.push(t))}}var _=n;try{_=Object(L.a)(n).toString(10)}catch(e){}O.push({address:address,amount:n,amountStr:_,valid:o,duplicated:d})})),_=(new Date).getTime(),console.info("addresses processing time",(_-m)/1e3),k=k.toString(10),D=D.toString(10),S=Array.from(S),A=Array.from(A),c("SET_ADDRESS_INFO",{validAmount:D,nonDuplicatedAmount:k,originalData:O,originalAddressStr:l,duplicatedAddresses:S,duplicatedAddressesIndexes:v,invalidAddresses:A,invalidAddressesIndexes:x,validData:I,nonDuplicatedData:E,finalData:O,finalAmount:k});case 31:case"end":return e.stop()}}),e)}))),function(e,t){return k.apply(this,arguments)}),checkInsertAddressesForNFT:(x=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,O,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rootState,o=t.rootGetters,d=t.commit,c=r.addresses,null!=(l=n.token.tokenSelected)&&l.decimals,m=o["token/isERC1155"],f=(new Date).getTime(),h=new Set,S=[],v=new Set,A=[],x=Object(L.a)(0),k=Object(L.a)(0),D=[],I=[],E=[],O={},c.forEach((function(e,t){var r=(e=e.replace("，",",")).split(","),address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=r[1],o="0";r.length>2&&(o=r[2]);try{address.startsWith("xdc")&&(address=address.replace("xdc","0x"))}catch(e){}var d=!0,c=!1;if(!Object(j.isAddress)(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||isNaN(o)){var l=0;isNaN(o)&&(l=7,Object(j.isAddress)(address)||(l=10,isNaN(n)||(l=100)),isNaN(n)||(l=9)),isNaN(n)&&(l=8,Object(j.isAddress)(address)||(l=11)),v.add({index:t,address:address,amount:o,tokenId:n,errorType:l}),A.push(t),d=!1}else{var f=!1,T=(l=0,parseInt(o)<=0&&m);if(o%1!=0||T?(f=!0,l=7,T&&(l=101),n%1!=0&&(l=9)):n%1!=0&&(f=!0,l=8),f)v.add({index:t,address:address,amount:o,tokenId:n,errorType:l}),A.push(t),d=!1;else{address=Object(j.toChecksumAddress)(address);var _=Object(L.a)(o);o=_.toString(10),k=k.plus(_),D.push({address:address,amount:o,tokenId:n,amountStr:_.toString(10)}),null==O[address]?(O[address]=!0,I.push({address:address,amount:o,tokenId:n,amountStr:_.toString(10)}),x=x.plus(_)):(c=!0,h.add(address),S.push(t))}}var w=o;try{w=Object(L.a)(o).toString(10)}catch(e){}E.push({address:address,amount:o,tokenId:n,amountStr:w,valid:d,duplicated:c})})),T=(new Date).getTime(),console.info("addresses processing time",(T-f)/1e3),x=x.toString(10),k=k.toString(10),h=Array.from(h),v=Array.from(v),d("SET_ADDRESS_INFO",{validAmount:k,nonDuplicatedAmount:x,originalData:E,originalAddressStr:c,duplicatedAddresses:h,duplicatedAddressesIndexes:S,invalidAddresses:v,invalidAddressesIndexes:A,validData:D,nonDuplicatedData:I,finalData:E,finalAmount:x});case 27:case"end":return e.stop()}}),e)}))),function(e,t){return x.apply(this,arguments)}),combineBalances:(A=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=[],c=n.checkBulksend.addressInfo,(l=Object.assign({},c)).validData.forEach((function(e){this[e.address]||(this[e.address]={address:e.address,amount:Object(L.a)(0)},d.push(this[e.address]));var t=Object(L.a)(e.amount),r=Object(L.a)(this[e.address].amount);this[e.address].amount=r.plus(t).toString(10),this[e.address].amountStr=r.plus(t).toString(10)}),Object.create(null)),l.combinedData=d,l.finalData=d,l.finalAmount=c.validAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],l.duplicatedAddressesIndexes=[],l.duplicatedAddresses=[],o("SET_ADDRESS_INFO",l),e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e)}))),function(e,t){return A.apply(this,arguments)}),keepFirstOne:(v=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.addressInfo,(c=Object.assign({},d)).finalData=d.nonDuplicatedData,c.finalAmount=d.nonDuplicatedAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],c.duplicatedAddressesIndexes=[],c.duplicatedAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return v.apply(this,arguments)}),keepFirstOneForTxs:(S=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.txs,c=d,(l=Object.assign({},c)).finalData=c.nonDuplicatedData,l.finalAmount=c.nonDuplicatedAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],l.duplicatedAddressesIndexes=[],l.duplicatedAddresses=[],o("SET_TXS_INFO",l),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)}))),function(e,t){return S.apply(this,arguments)}),keepDuplicated:(h=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.addressInfo,(c=Object.assign({},d)).finalData=c.validData,c.finalAmount=d.validAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],c.duplicatedAddressesIndexes=[],c.duplicatedAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)}),deleteInvalidTxs:(f=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.txs,c=d,l=Object.assign({},c),m=l.validData,l.duplicatedAddressesIndexes.length>0&&(f={},h=[],m.forEach((function(e,t){null!=f[e.address]?h.push(t):f[e.address]=!0})),l.duplicatedAddressesIndexes=h),l.finalData=m,l.finalAmount=c.validAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],o("SET_TXS_INFO",l),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)}),deleteInvalidAddresses:(m=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.addressInfo,c=Object.assign({},d),l=c.validData,c.duplicatedAddressesIndexes.length>0&&(m={},f=[],l.forEach((function(e,t){null!=m[e.address]?f.push(t):m[e.address]=!0})),c.duplicatedAddressesIndexes=f),c.finalData=l,c.finalAmount=d.validAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return m.apply(this,arguments)}),readFileAsync:(l=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,t.dispatch,t.state,n=r.fileData,o=n,e.abrupt("return",new Promise((function(e,t){var r=new FileReader;r.onload=function(){for(var t="",n=new Uint8Array(r.result),o=n.byteLength,i=0;i<o;i++)t+=String.fromCharCode(n[i]);var d=C.a.read(t,{type:"binary",raw:!0}),c=d.SheetNames[0],l=d.Sheets[c],data=C.a.utils.sheet_to_csv(l);e(data)},r.onerror=t,r.readAsArrayBuffer(o)})));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return l.apply(this,arguments)}),parseFile:(c=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,n=t.dispatch,t.rootGetters,t.state,o=r.fileData,e.prev=2,e.next=5,n("readFileAsync",{fileData:o});case 5:return d=e.sent,e.next=8,n("parseInsertAddresses",{insertedAddress:d});case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(2),console.info(e.t0),e.next=16,n("uploadFile",{fileData:o});case 16:return c=e.sent,e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[2,11]])}))),function(e,t){return c.apply(this,arguments)}),parseFileForTxs:(d=Object(R.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,n=t.dispatch,t.rootGetters,t.state,o=r.fileData,e.prev=2,e.next=5,n("readFileAsync",{fileData:o});case 5:return d=e.sent,e.next=8,n("parseInsertTxs",{insertedAddress:d});case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(2),e.next=15,n("uploadFile",{fileData:o});case 15:return c=e.sent,e.abrupt("return",c);case 17:case"end":return e.stop()}}),e,null,[[2,11]])}))),function(e,t){return d.apply(this,arguments)}),getTxData:(o=Object(R.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,address,f,h,S,v,A,x,k,D,i,I,E,O,T,_,w,y,N,R,j,F,C,B,P,X,H,U,Y,$;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,t.getters,n=t.rootGetters,o=t.rootState,d=t.dispatch,c=t.commit,n["metamask/networkConfig"].smartContractShortPollTime,o.bulksender.bulksenderAddress,l=o.token,m=l.tokenSelected,address=l.address,f=m.decimals,h=address,S=r.txs.finalData,v=Object.assign({},r.txs),A=[],x=[],k=[],D=function(time){return new Promise((function(e){return setTimeout(e,time)}))},i=0;case 13:if(!(i<S.length)){e.next=70;break}return e.prev=14,c("SET_QUERY_INDEX",i+1),e.next=18,D(500);case 18:return I=S[i].address,E=void 0,e.next=23,d("metamask/getTransactionReceipt",{txHash:I},{root:!0});case 23:if(null==(O=e.sent)){e.next=60;break}if("0x1"!=(T=O.status)&&1!=T){e.next=58;break}return e.next=29,d("metamask/getTransactionByHash",{txHash:I},{root:!0});case 29:if(E=e.sent,e.prev=30,"0x0000000000000000000000000000000000000000"!=address){e.next=42;break}if("0x"==E.input){e.next=35;break}return A.push(I),e.abrupt("continue",67);case 35:_=E.value,_=Object(L.a)(_).div(Object(L.a)(10).pow(Object(L.a)(f))).toString(10),w=E.totoAddress+","+_,x.push(w),k.push(w.toLowerCase()),e.next=52;break;case 42:if(y=G.decodeParameters([{name:"_to",type:"address"},{name:"_value",type:"uint256"}],E.input.slice(10)),N=y._to,R=y._value,E.to.toLowerCase()==h.toLowerCase()){e.next=47;break}return A.push(I),e.abrupt("continue",67);case 47:_=R,_=Object(L.a)(_).div(Object(L.a)(10).pow(Object(L.a)(f))).toString(10),j=N+","+_,x.push(j),k.push(j.toLowerCase());case 52:e.next=58;break;case 54:e.prev=54,e.t0=e.catch(30),console.info(e.t0),A.push(I);case 58:e.next=61;break;case 60:A.push(I);case 61:e.next=67;break;case 63:e.prev=63,e.t1=e.catch(14),console.info("checking error",e.t1),A.push(I);case 67:i++,e.next=13;break;case 70:return A.length?(B=[],P=[],X=[],S.forEach((function(e,t){A.includes(e.address)?(B.push({index:t,address:e.address,amount:e.amount,errorType:13}),P.push(t)):X.push(e)})),B.length>0&&(v.validData=X,v.invalidAddressesIndexes=P,v.invalidAddresses=B,c("SET_TXS_INFO",v)),F=!1,C=A):C=x,H=Object.assign({},r.addressInfo),U=H.finalData,Y=[],$=[],U.forEach((function(e,i){var t=e.address+","+e.amountStr;k.includes(t.toLowerCase())&&Y.push(t)})),U.forEach((function(e,i){var t=e.address+","+e.amountStr;k.includes(t.toLowerCase())||$.push(t)})),H.matched=Y,H.notReceived=$,H.received=x,c("SET_ADDRESS_INFO",H),e.abrupt("return",{status:F,result:C});case 82:case"end":return e.stop()}}),e,null,[[14,63],[30,54]])}))),function(e){return o.apply(this,arguments)}),getTxData_bulksender:(n=Object(R.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,address,f,h,S,v,A,x,k,i,D,I,E,O,T,_,w,y,N,R,j,F,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,t.getters,n=t.rootGetters,o=t.rootState,d=t.dispatch,c=t.commit,n["metamask/networkConfig"].smartContractShortPollTime,o.bulksender.bulksenderAddress,l=o.token,m=l.tokenSelected,address=l.address,f=m.decimals,h=address,S=r.txs.finalData,v=Object.assign({},r.txs),A=[],x=[],k=[],i=0;case 12:if(!(i<S.length)){e.next=53;break}return e.prev=13,c("SET_QUERY_INDEX",i+1),D=S[i].address,I=void 0,e.next=20,d("metamask/getTransactionReceipt",{txHash:D},{root:!0});case 20:if(null==(E=e.sent)){e.next=43;break}if("0x1"!=(O=E.status)&&1!=O){e.next=41;break}return e.next=26,d("metamask/getTransactionByHash",{txHash:D},{root:!0});case 26:if(I=e.sent,e.prev=27,"0x0000000000000000000000000000000000000000"!=address){e.next=32;break}!function(){var e=G.decodeParameters([{name:"_to",type:"address[]"},{name:"_values",type:"uint256[]"},{name:"_uniqueId",type:"bytes32"}],I.input.slice(10)),t=e._to,r=e._values;t.forEach((function(e,i){if(i){var t=r[i],n=e+","+(t=Object(L.a)(t).div(Object(L.a)(10).pow(Object(L.a)(f))).toString(10));x.push(n),k.push(n.toLowerCase())}}))}(),e.next=35;break;case 32:if("continue"!==function(){var e=G.decodeParameters([{name:"_token",type:"address"},{name:"_to",type:"address[]"},{name:"_values",type:"uint256[]"},{name:"_uniqueId",type:"bytes32"}],I.input.slice(10)),t=e._token,r=e._to,n=e._values;if(t.toLowerCase()!=h.toLowerCase())return A.push(D),"continue";r.forEach((function(e,i){if(i){var t=n[i],r=e+","+(t=Object(L.a)(t).div(Object(L.a)(10).pow(Object(L.a)(f))).toString(10));x.push(r),k.push(r.toLowerCase())}}))}()){e.next=35;break}return e.abrupt("continue",50);case 35:e.next=41;break;case 37:e.prev=37,e.t0=e.catch(27),console.info(e.t0),A.push(D);case 41:e.next=44;break;case 43:A.push(D);case 44:e.next=50;break;case 46:e.prev=46,e.t1=e.catch(13),console.info("checking error",e.t1),A.push(D);case 50:i++,e.next=12;break;case 53:return A.length?(w=[],y=[],N=[],S.forEach((function(e,t){A.includes(e.address)?(w.push({index:t,address:e.address,amount:e.amount,errorType:13}),y.push(t)):N.push(e)})),w.length>0&&(v.validData=N,v.invalidAddressesIndexes=y,v.invalidAddresses=w,c("SET_TXS_INFO",v)),T=!1,_=A):_=x,R=Object.assign({},r.addressInfo),j=R.finalData,F=[],C=[],j.forEach((function(e,i){var t=e.address+","+e.amountStr;k.includes(t.toLowerCase())&&F.push(t)})),j.forEach((function(e,i){var t=e.address+","+e.amountStr;k.includes(t.toLowerCase())||C.push(t)})),R.matched=F,R.notReceived=C,R.received=x,c("SET_ADDRESS_INFO",R),e.abrupt("return",{status:T,result:_});case 65:case"end":return e.stop()}}),e,null,[[13,46],[27,37]])}))),function(e){return n.apply(this,arguments)})};t.default={namespaced:!0,state:function(){return{inputType:0,addressesInsertWay:0,code:"",queryLimit:1e3,queryLimitForBadAddress:210,queryLimitForBadAddressOrigional:210,queryLimitForBadAddressSpecialProcess:80,queryIndex:1,addressInfo:{taskID:"",nonAmount:0,validAmount:0,nonDuplicatedAmount:0,originalData:[],originalAddressStr:[],duplicatedAddresses:[],duplicatedAddressesIndexes:[],invalidAddresses:[],invalidAddressesIndexes:[],validData:[],combinedData:[],nonDuplicatedData:[],finalData:[],finalAmount:0,batches:[],times:1,batchSize:100,holders:[],freshers:[],matched:[],notReceived:[],received:[],estimateGasUsed:0,baseFeeEnough:!0},txs:{taskID:"",nonAmount:0,validAmount:0,nonDuplicatedAmount:0,originalData:[],originalAddressStr:[],duplicatedAddresses:[],duplicatedAddressesIndexes:[],invalidAddresses:[],invalidAddressesIndexes:[],validData:[],combinedData:[],nonDuplicatedData:[],finalData:[],finalAmount:0,batches:[],times:1,batchSize:100,holders:[],freshers:[],estimateGasUsed:0,baseFeeEnough:!0},balanceBurners:[{address:"Loading",balanceDisplay:"0",balance:0}]}},getters:{addressInfo:function(e){return e.addressInfo}},mutations:{SET_INPUT_TYPE:function(e,t){e.inputType=t},SET_CODE:function(e,code){e.code=code},SET_ORIGIN_INPUT_DATA:function(e,t){e.originInputData=t},SET_ADDRESS_INFO:function(e,t){e.addressInfo=t},SET_TXS_INFO:function(e,t){e.txs=t},SET_SEND_LOADING:function(e,t){e.sendLoading=t},SET_ADDRESSES_INSERT_WAY:function(e,t){e.addressesInsertWay=t},SET_SENDING_INDEX:function(e,t){e.sendingIndex=t},SET_CONTRUCT_INDEX:function(e,t){e.contructTxIndex=t},SET_CHECKING_ADDRESS_FROM:function(e,t){e.checkingAddressFrom=t},SET_CHECKING_ADDRESS_TO:function(e,t){e.checkingAddressTo=t},SET_QUERY_INDEX:function(e,t){e.queryIndex=t}},actions:B}},413:function(e,t,r){"use strict";var n=r(14),o=r(695),d=r.n(o);r(1203),r(1213),r(1214),r(198),r(665),r(666),r(1215),r(1216),r(667),r(1217),r(668),r(1218),r(1220),r(1221),r(1222),r(1224),r(1225),r(669),r(1226),r(1227),r(1228),r(1229),r(1230);n.a.use(d.a)},414:function(e,t,r){"use strict";var n=r(14);t.a=function(e,t){t("bus",new n.a)}},415:function(e,t,r){"use strict";r(56),r(76),r(109),r(134),r(135),r(53),r(225),r(251);var n=r(14),o={1e3:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if("string"==typeof e){if(isNaN(e))return e;e=Number(e)}if("number"==typeof e){try{t=e%1==0?0:-1==t?4:e.toString().split(".")[1].length}catch(e){}return e.toFixed(t).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}},truncate:function(e,t){return null!=e?e.length>t?e.substr(0,t/4)+"..."+e.substr(e.length-t/4,t/4):e:""}};Object.keys(o).forEach((function(e){n.a.filter(e,o[e])}))}}]);