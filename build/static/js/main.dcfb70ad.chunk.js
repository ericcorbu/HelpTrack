(this["webpackJsonphelp-track"]=this["webpackJsonphelp-track"]||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(28),a(29),a(30),a(9)),i=a(10),u=a(11),s=a(13),m=a(12),p=a(5),d=a(22),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.name=r.a.createRef(),n.grading=r.a.createRef(),n.question=r.a.createRef(),n.description=r.a.createRef(),n}return Object(i.a)(a,[{key:"handleSubmit",value:function(e){var t;e.preventDefault(),t=this.grading.current.checked?"Grading":"Question";var a={name:this.name.current.value,type:t,description:this.description.current.value},n=new XMLHttpRequest;n.open("POST","/api/requests"),n.setRequestHeader("Content-type","application/json"),n.send(JSON.stringify(a))}},{key:"render",value:function(){return r.a.createElement(p.a,{id:"helpForm",onSubmit:this.handleSubmit},r.a.createElement(p.a.Group,{controlId:"zoomName"},r.a.createElement(p.a.Label,null,"Zoom Name"),r.a.createElement(p.a.Control,{type:"text",ref:this.name})),r.a.createElement(p.a.Group,{controlId:"helpType"},r.a.createElement(p.a.Label,null,"Type of Help"),r.a.createElement(p.a.Check,{type:"radio",name:"helpType",value:"Grading",ref:this.grading,label:"Grading"}),r.a.createElement(p.a.Check,{type:"radio",name:"helpType",value:"Question",ref:this.question,label:"Question"})),r.a.createElement(p.a.Group,{controlId:"description"},r.a.createElement(p.a.Label,null,"Brief Question Description"),r.a.createElement(p.a.Control,{as:"textarea",rows:"2"}),r.a.createElement(p.a.Text,{className:"text-muted",ref:this.description},"You can leave this blank if you don't have a question.")),r.a.createElement(d.a,{type:"submit"},"Ask For Help"))}}]),a}(r.a.Component),f=a(17),E=a(7),v=a(21),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/requests").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state.data.map((function(e){return r.a.createElement(f.a.Item,null,e.name,r.a.createElement(v.a,{variant:"secondary"},e.type))}));return r.a.createElement(E.a,null,r.a.createElement(f.a,{variant:"flush"},e))}}]),a}(r.a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement("h1",null,"HelpTrack"),r.a.createElement("br",null),r.a.createElement(E.a,null,r.a.createElement(E.a.Body,null,r.a.createElement(h,null))),r.a.createElement("br",null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.dcfb70ad.chunk.js.map