(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(2),s=n.n(o),c=n(5),l=n(3),i=n(4),u=n(7),h=n(6),p=(n(13),function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t},t)})))}),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={stateGoods:b,isStarted:!1,isReversed:!1,sortBy:""},t.start=function(){t.setState({isStarted:!0})},t.hide=function(){t.setState({isStarted:!1})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState({sortBy:"alphabet"})},t.resetSort=function(){t.setState({sortBy:""})},t.sortByLength=function(){t.setState({sortBy:"length"})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.stateGoods,n=t.isStarted,r=t.isReversed,o=t.sortBy,s=Object(c.a)(e);return s.sort((function(t,e){switch(o){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),r&&s.reverse(),a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),!n&&a.a.createElement("button",{type:"button",onClick:this.start},"Start"),n&&a.a.createElement("button",{type:"button",onClick:this.hide},"Hide"),n&&a.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),n&&a.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),n&&a.a.createElement("button",{type:"button",onClick:this.resetSort},"Reset"),n&&a.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),n&&a.a.createElement(p,{goods:s}))}}]),n}(a.a.Component);s.a.render(a.a.createElement(d,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.19602f79.chunk.js.map