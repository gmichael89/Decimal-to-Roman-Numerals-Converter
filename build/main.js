!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=1)}([function(e,t,n){"use strict";e.exports={NumberRange:{Min:1,Max:3999},NumeralsTable:{1:"I",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",500:"D",900:"CM",1000:"M"}}},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";var r=n(3),u=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(0);document.getElementById("Submit").addEventListener("click",function(){var e=document.getElementById("NumberInput").value,t=(0,u.default)(e);t||(t="Input invalid. Ensure that you are passing in a number and it\n                    is within the range "+a.NumberRange.Min+" and\n                    "+a.NumberRange.Max+"."),document.getElementById("Result").innerHTML=t})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),u=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(0),i=a.NumeralsTable;t.default=function(e){if(e=parseInt(e),isNaN(e)||!(0,u.default)(e,1,3999))return!1;for(var t="",n=Object.keys(i).reverse();e;)n.some(function(n){if(e>=parseInt(n)){var r=i[n];return e-=n,t+=r,!0}});return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return t=parseFloat(t),n=parseFloat(n),e=parseFloat(e),!(isNaN(t)||isNaN(n)||isNaN(e))&&(e>=t&&e<=n)}}]);