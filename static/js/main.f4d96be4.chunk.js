(window.webpackJsonpcalendar=window.webpackJsonpcalendar||[]).push([[0],{102:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=(a(102),a(84)),l=a(95),s=a(14),u=a(156),d=function(e){var t=e.type,a=e.onClick,n=e.dayVal,c=e.fieldData,o=u.a.Text;return r.a.createElement("div",{className:"DayField "+t,onClick:a},r.a.createElement(o,{className:"day-field_text"},n),r.a.createElement("br",null),c?r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{strong:!0,className:"day-field_text"},c.name),r.a.createElement("br",null),r.a.createElement(o,{className:"day-field_text"},c.participants)):"")},m=["January","February","March","April","May","June","July","August","September","October","November","December"];var v=Object(n.createContext)(),f=Object(n.createContext)(),p=Object(n.createContext)(),E=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function h(){var e=Object(n.useContext)(f).selectedMonth,t=Object(n.useContext)(v).events,a=Object(n.useContext)(p).showEventForm,c=function(e){var a=function(e,a,r){var c;c=r<=7?E[n.length]+", "+e.getDate():e.getDate();var o=t.find((function(t){return t.date.getFullYear()===e.getFullYear()&&t.date.getMonth()===e.getMonth()&&t.date.getDate()===e.getDate()}));return{date:new Date(e),dayVal:c,type:a,fieldData:o}},n=[];return function(){var t=new Date(e);t.setDate(0);var r=0===t.getDay()?7:t.getDay();t.setDate(t.getDate()-r+1);for(var c=1;c<=r;c++)n.push(a(t,"DayFieldOtherMonth",n.length+1)),t.setDate(t.getDate()+1)}(),function(){var t=new Date(e);t.setDate(1);for(var r=(o=2019,i=t.getMonth(),new Date(o,+i+1,0).getDate()),c=1;c<=r;c++)n.push(a(t,"DayFieldCurrentMonth",n.length+1)),t.setDate(t.getDate()+1);var o,i}(),function(){var t=new Date(e);t.setMonth(t.getMonth()+1),t.setDate(1);for(;n.length<42;)n.push(a(t,"DayFieldOtherMonth",n.length+1)),t.setDate(t.getDate()+1)}(),n}(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"DayFieldsContainer",className:"day-fields-container"},c.map((function(e,t){return r.a.createElement(d,{key:t,type:e.type,onClick:function(t){a(e.fieldData,e.date)},dayVal:e.dayVal,fieldData:e.fieldData})}))))}var g=a(49);var b=function(e){var t=u.a.Text,a=Object(n.useContext)(f),c=a.selectedMonth,o=a.setSelectedMonth,i=m[c.getMonth()],l=c.getFullYear();return r.a.createElement("div",{className:"month-changer"},r.a.createElement(g.a,{icon:"caret-left",size:"small",onClick:function(){c.setMonth(c.getMonth()-1),o(new Date(c))}}),r.a.createElement(t,{strong:!0,className:"month-changer_title"},i+", "+l),r.a.createElement(g.a,{icon:"caret-right",size:"small",onClick:function(){c.setMonth(c.getMonth()+1),o(new Date(c))}}))},O=a(157);var y=function(){var e=u.a.Text,t=O.a.Search,a=Object(n.useRef)(null),c=Object(n.useContext)(v).events,o=Object(n.useContext)(p).showEventForm,i=Object(n.useState)(""),l=Object(s.a)(i,2),d=l[0],f=l[1],E=Object(n.useState)({top:0,left:0}),h=Object(s.a)(E,2),g=h[0],b=h[1];Object(n.useEffect)((function(){b({top:a.current.offsetTop+a.current.clientHeight+10,left:a.current.offsetLeft,width:a.current.clientWidth})}),[]);var y=c.filter((function(e){return""!==d&&(e.name.toLowerCase().includes(d.toLowerCase())||e.participants.toLowerCase().includes(d.toLowerCase())||(e.date.getDate()+" "+m[e.date.getMonth()]).toLowerCase().includes(d.toLowerCase()))}));return y.sort((function(e,t){return e.date-t.date})),r.a.createElement("div",{className:"search",ref:a},r.a.createElement(t,{placeholder:"Event, date or participants",style:{width:220},value:d,onChange:function(e){return f(e.target.value.toString())}}),y.length>0&&null!==a.current&&a.current.querySelector("input:focus")?r.a.createElement("div",{className:"search_items",style:g},y.map((function(t,a){return r.a.createElement("div",{className:"search_items_item",key:a,onClick:function(e){o(t,t.date)}},r.a.createElement(e,{strong:!0},t.name),r.a.createElement(e,null,"".concat(t.date.getDate()," ").concat(m[t.date.getMonth()])))}))):"")},D=a(11),j=function(e){var t=e.info,a=u.a.Title,c=u.a.Text,o=Object(n.useContext)(v).deleteEvent,i=Object(n.useContext)(p),l=i.showEventForm,s=i.hideEventForm;return r.a.createElement("div",{className:"event-form_read"},r.a.createElement(a,{level:4},t.name),r.a.createElement(c,{className:"event-form_read_date"},"".concat(t.date.getDate()," ").concat(m[t.date.getMonth()])),r.a.createElement("div",{className:"event-form_read_participants"},r.a.createElement(c,{type:"secondary",className:"event-form_read_participants_title"},"Participants:"),r.a.createElement(c,null,t.participants)),r.a.createElement(c,{className:"event-form_read_description"},r.a.createElement(c,{className:"event-form_read_description_title"},"Description:"),r.a.createElement(c,null,t.description)),r.a.createElement("div",{className:"event-form_buttons"},r.a.createElement(g.a,{size:"small",onClick:function(){l(t,t.date,!0)}},"Edit"),r.a.createElement(g.a,{size:"small",onClick:function(){o(t),s()}},"Delete")))},w=function(e){var t=e.info,a=void 0===t?{}:t,c=e.date,o=O.a.TextArea,i=Object(n.useContext)(v),l=Object(n.useContext)(p).hideEventForm,u=a.id,d=void 0===u?0:u,m=a.name,f=void 0===m?"":m,E=a.participants,h=void 0===E?"":E,b=a.description,y=void 0===b?"":b,D=Object(n.useState)(f),j=Object(s.a)(D,2),w=j[0],C=j[1],N=Object(n.useState)(h),S=Object(s.a)(N,2),_=S[0],M=S[1],x=Object(n.useState)(y),F=Object(s.a)(x,2),k=F[0],P=F[1];return r.a.createElement("div",{className:"event-form_create"},r.a.createElement("div",{className:"event-form_create_inputs"},r.a.createElement(O.a,{placeholder:"Event name",value:w,onChange:function(e){return C(e.target.value)}}),r.a.createElement(O.a,{placeholder:"Names of participants",value:_,onChange:function(e){return M(e.target.value)}})),r.a.createElement(o,{rows:4,placeholder:"Description",value:k,onChange:function(e){return P(e.target.value)}}),r.a.createElement("div",{className:"event-form_buttons"},r.a.createElement(g.a,{onClick:function(){d?i.updateEvent({id:d,date:c,name:w,participants:_,description:k}):i.addEvent({date:c,name:w,participants:_,description:k}),l()},type:"primary",size:"small"},"Save")))};var C=function(e){var t=e.eventFormState,a=Object(n.useContext)(p).hideEventForm,c=t.target;return r.a.createElement("div",{className:"modal",onClick:function(e){e.currentTarget===e.target&&a()}},r.a.createElement("div",{className:"event-form"},r.a.createElement(D.a,{type:"close",className:"event-form_close-button",onClick:a}),c.isEdit?r.a.createElement(w,{info:c.info,date:c.date}):r.a.createElement(j,{info:c.info})))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e){var t=Object(n.useState)(new Date),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),d=u[0],m=u[1],E=Object(n.useState)({target:null}),g=Object(s.a)(E,2),O=g[0],D=g[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("events"),(function(e,t){return"date"===e?new Date(t):t}))||[];m(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("events",JSON.stringify(d))}),[d]),r.a.createElement(v.Provider,{value:{events:d,setEvents:m,deleteEvent:function(e){m(d.filter((function(t){return t!==e})))},addEvent:function(e){var t=e.date,a=e.name,n=e.participants,r=void 0===n?"":n,c=e.description,o=void 0===c?"":c;m([].concat(Object(l.a)(d),[{id:+d.length+1,date:t,name:a,participants:r,description:o}]))},updateEvent:function(e){var t=e.id,a=e.date,n=e.name,r=e.participants,c=e.description,o=d.find((function(e){return e.id===t}));o.date=a,o.name=n,o.participants=r,o.description=c,m(d)}}},r.a.createElement(p.Provider,{value:{eventFormState:O,hideEventForm:function(){D(S({},O,{target:null}))},showEventForm:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];D(S({},O,{target:{info:e,date:t,isEdit:a||void 0===e}}))}}},r.a.createElement(f.Provider,{value:{selectedMonth:c,setSelectedMonth:o}},r.a.createElement("div",{className:"calendar"},r.a.createElement("div",{className:"header"},r.a.createElement(b,null),r.a.createElement(y,null)),r.a.createElement(h,null),O.target?r.a.createElement(C,{eventFormState:O}):""))))};a(153),a(154);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a(155)}},[[97,1,2]]]);
//# sourceMappingURL=main.f4d96be4.chunk.js.map