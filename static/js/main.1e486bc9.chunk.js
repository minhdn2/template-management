(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports={templates:[{id:1,imgSrc:"templates/landerz/cover.png",title:"Landerz",shortDescription:"Landerz is your go-to solution when in search of the best free business landing page website template. Rock the online world with a contemporary, clean and light web design that will spark their curiosity.",previewLink:"templates/landerz/landerz/index.html"},{id:2,imgSrc:"templates/confer/cover.png",title:"Confer",shortDescription:"With a free HTML conference website template like Confer, you can market your event or any upcoming gathering like a champ. Kick it off in style and make a difference.",previewLink:"templates/confer/index.html"},{id:3,imgSrc:"templates/traveland/cover.png",title:"Traveland",shortDescription:"Indeed, Traveland is a free travel booking website template for travel agencies and other tourism businesses. Hammer out the best and most impressive travel page that will stand out a mile.",previewLink:"templates/traveland/traveland/index.html"},{id:4,imgSrc:"templates/quitelight/cover.png",title:"Quitelight",shortDescription:"Creativity knows no boundaries and nor does Quitelight free creative magazine website template. Get things going now and shine online with your fresh page.",previewLink:"templates/quitelight/index.html"}]}},25:function(e,a,t){e.exports=t(39)},30:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),s=t.n(r),m=(t(30),t(24)),c=t(5),i=t(6),o=t(8),d=t(7),p=t(9),u=t(10),h=t(20),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("aside",{id:"left-panel",className:"left-panel"},l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-default"},l.a.createElement("div",{id:"main-menu",className:"main-menu collapse navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",{className:"active"},l.a.createElement(u.b,{to:"/template"},l.a.createElement("i",{className:"menu-icon fa fa-home"}),"Home ")),l.a.createElement("li",{className:"menu-title"},"Features"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/addTemplate"},l.a.createElement("i",{className:"menu-icon fa fa-cogs"}),"Add new template")),l.a.createElement("li",{className:"menu-title"},"Pages"),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/about"},l.a.createElement("i",{className:"menu-icon fa fa-book"}),"About")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/contact"},l.a.createElement("i",{className:"menu-icon fa fa-phone-square"}),"Contact"))))))}}]),a}(n.Component),g=function(e){var a=e.templates.map(function(e){return l.a.createElement("div",{className:"col-md-4",key:e.id},l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top",src:e.imgSrc,alt:"Card cover cap"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},e.shortDescription),l.a.createElement("a",{href:e.previewLink,className:"btn btn-primary"},"Preview"))))});return l.a.createElement("div",{className:"row"},a)},E=t(23),v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={imgSrc:null,title:null,shortDescription:null,previewLink:null},t.handleChange=function(e){t.setState(Object(E.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTemplate(t.state)},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"imgScr"},"Image Link:"),l.a.createElement("input",{type:"text",id:"imgScr",className:"form-control",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title:"),l.a.createElement("input",{type:"text",id:"title",className:"form-control",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"shortDescription"},"Short Description:"),l.a.createElement("input",{type:"text",id:"shortDescription",className:"form-control",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"previewLink"},"Preview Link:"),l.a.createElement("input",{type:"text",id:"previewLink",className:"form-control",onChange:this.handleChange})),l.a.createElement("button",null,"Submit")))}}]),a}(n.Component),N=t(11),b=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h4",{className:"center"},"This is the About page"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))},w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h4",{className:"center"},"This is the Contact page"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))},y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={imgSrc:null,title:null,shortDescription:null,previewLink:null},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"right-panel",className:"right-panel"},l.a.createElement("header",{id:"header",className:"header"},l.a.createElement("div",{className:"top-left"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{className:"navbar-brand",href:"./"},l.a.createElement("img",{src:"images/logo.png",alt:"Logo"})),l.a.createElement("a",{className:"navbar-brand hidden",href:"./"},l.a.createElement("img",{src:"images/logo2.png",alt:"Logo"})),l.a.createElement("a",{id:"menuToggle",className:"menutoggle"},l.a.createElement("i",{className:"fa fa-bars"})))),l.a.createElement("div",{className:"top-right"},l.a.createElement("div",{className:"header-menu"},l.a.createElement("div",{className:"header-left"},l.a.createElement("button",{className:"search-trigger"},l.a.createElement("i",{className:"fa fa-search"})),l.a.createElement("div",{className:"form-inline"},l.a.createElement("form",{className:"search-form"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search ...","aria-label":"Search"}),l.a.createElement("button",{className:"search-close",type:"submit"},l.a.createElement("i",{className:"fa fa-close"})))),l.a.createElement("div",{className:"dropdown for-notification"},l.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"notification","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fa fa-bell"}),l.a.createElement("span",{className:"count bg-danger"},"3")),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"notification"},l.a.createElement("p",{className:"red"},"You have 3 Notification"),l.a.createElement("a",{className:"dropdown-item media",href:"#"},l.a.createElement("i",{className:"fa fa-check"}),l.a.createElement("p",null,"Server #1 overloaded.")),l.a.createElement("a",{className:"dropdown-item media",href:"#"},l.a.createElement("i",{className:"fa fa-info"}),l.a.createElement("p",null,"Server #2 overloaded.")),l.a.createElement("a",{className:"dropdown-item media",href:"#"},l.a.createElement("i",{className:"fa fa-warning"}),l.a.createElement("p",null,"Server #3 overloaded.")))),l.a.createElement("div",{className:"dropdown for-message"},l.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"message","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fa fa-envelope"}),l.a.createElement("span",{className:"count bg-primary"},"4")),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message"},l.a.createElement("p",{className:"red"},"You have 4 Mails"),l.a.createElement("a",{className:"dropdown-item media",href:"#"},l.a.createElement("span",{className:"photo media-left"},l.a.createElement("img",{alt:"avatar",src:"images/avatar/1.jpg"})),l.a.createElement("div",{className:"message media-body"},l.a.createElement("span",{className:"name float-left"},"Jonathan Smith"),l.a.createElement("span",{className:"time float-right"},"Just now"),l.a.createElement("p",null,"Hello, this is an example msg"))),l.a.createElement("a",{className:"dropdown-item media",href:"#"},l.a.createElement("span",{className:"photo media-left"},l.a.createElement("img",{alt:"avatar",src:"images/avatar/2.jpg"})),l.a.createElement("div",{className:"message media-body"},l.a.createElement("span",{className:"name float-left"},"Jack Sanders"),l.a.createElement("span",{className:"time float-right"},"5 minutes ago"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur"))),l.a.createElement("a",{className:"dropdown-item media",href:"#"},l.a.createElement("span",{className:"photo media-left"},l.a.createElement("img",{alt:"avatar",src:"images/avatar/3.jpg"})),l.a.createElement("div",{className:"message media-body"},l.a.createElement("span",{className:"name float-left"},"Cheryl Wheeler"),l.a.createElement("span",{className:"time float-right"},"10 minutes ago"),l.a.createElement("p",null,"Hello, this is an example msg"))),l.a.createElement("a",{className:"dropdown-item media",href:"#"},l.a.createElement("span",{className:"photo media-left"},l.a.createElement("img",{alt:"avatar",src:"images/avatar/4.jpg"})),l.a.createElement("div",{className:"message media-body"},l.a.createElement("span",{className:"name float-left"},"Rachel Santos"),l.a.createElement("span",{className:"time float-right"},"15 minutes ago"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur")))))),l.a.createElement("div",{className:"user-area dropdown float-right"},l.a.createElement("a",{href:"#",className:"dropdown-toggle active","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("img",{className:"user-avatar rounded-circle",src:"images/admin.jpg",alt:"User Avatar"})),l.a.createElement("div",{className:"user-menu dropdown-menu"},l.a.createElement("a",{className:"nav-link",href:"#"},l.a.createElement("i",{className:"fa fa- user"}),"My Profile"),l.a.createElement("a",{className:"nav-link",href:"#"},l.a.createElement("i",{className:"fa fa- user"}),"Notifications ",l.a.createElement("span",{className:"count"},"13")),l.a.createElement("a",{className:"nav-link",href:"#"},l.a.createElement("i",{className:"fa fa -cog"}),"Settings"),l.a.createElement("a",{className:"nav-link",href:"#"},l.a.createElement("i",{className:"fa fa-power -off"}),"Logout")))))),l.a.createElement("div",{className:"content"},l.a.createElement(N.a,{path:"/about",component:b}),l.a.createElement(N.a,{path:"/contact",component:w}),l.a.createElement(N.a,{path:"/template",component:function(){return l.a.createElement(g,{templates:e.props.templates})}}),l.a.createElement(N.a,{path:"/addTemplate",component:function(){return l.a.createElement(v,{addTemplate:e.props.addTemplate})}})),l.a.createElement("div",{className:"clearfix"}),l.a.createElement("footer",{className:"site-footer"},l.a.createElement("div",{className:"footer-inner bg-white"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},"Copyright \xa9 2019 Bootstrap 4.0"),l.a.createElement("div",{className:"col-sm-6 text-right"},"Designed by ",l.a.createElement("a",{href:"https://colorlib.com"},"Colorlib"))))))}}]),a}(n.Component),k=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(y,{templates:this.props.templates,addTemplate:this.props.addTemplate}))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).addTemplate=function(e){e.id=Math.random();var a=[].concat(Object(m.a)(t.state.templates),[e]);t.setState({templates:a})},t.state={templates:h.templates},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(k,{templates:this.state.templates,addTemplate:this.addTemplate})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.1e486bc9.chunk.js.map