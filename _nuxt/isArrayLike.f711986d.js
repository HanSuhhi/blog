import{b as o}from"./isObjectLike.fa346eb6.js";function c(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}var i="[object AsyncFunction]",e="[object Function]",s="[object GeneratorFunction]",a="[object Proxy]";function f(n){if(!c(n))return!1;var t=o(n);return t==e||t==s||t==i||t==a}var b=9007199254740991,u=/^(?:0|[1-9]\d*)$/;function j(n,t){var r=typeof n;return t=t??b,!!t&&(r=="number"||r!="symbol"&&u.test(n))&&n>-1&&n%1==0&&n<t}var y=9007199254740991;function p(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=y}function A(n){return n!=null&&p(n.length)&&!f(n)}export{A as a,j as b,p as c,c as i};
