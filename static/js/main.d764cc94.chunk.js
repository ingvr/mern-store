(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){e.exports=a(332)},179:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(6),l=a.n(c),o=a(33),i=(a(179),a(333)),u=(a(180),a(334)),s=a(335),m=a(9),d=a(23),p=a(24),y=a(26),h=a(25),f=a(48),E=a(27),g=a(22),b=a(341),v=a(339),O=a(340),C=function(e){return function(t){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(y.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={visible:!1},t.showModal=function(){t.setState({visible:!0})},t.hideModal=function(){t.setState({visible:!1})},t}return Object(E.a)(a,t),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({visible:this.state.visible,showModal:this.showModal,hideModal:this.hideModal},this.props))}}]),a}(n.Component)},P=a(90);function j(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(P.a)({},n,a))}var k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={category:""},a.handleSubmit=function(e){e.preventDefault(),a.props.createCategory(a.state.category),a.setState({category:""}),a.props.hideModal()},a.handleChange=function(e){return j.call(Object(f.a)(a),e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.showModal,n=e.hideModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{onClick:a},r.a.createElement(m.a,{type:"folder-add"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),r.a.createElement(b.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",visible:t,onCancel:n,footer:[]},r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{name:"category",prefix:r.a.createElement(m.a,{type:"unordered-list"}),placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:this.state.category,onChange:this.handleChange,required:!0})),r.a.createElement(g.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))))}}]),t}(n.Component),w=Object(o.b)(null,function(e){return{createCategory:function(t){return e({type:"CATEGORY_ADD",payload:t})}}})(C(k)),I=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).initialState={category:"1",name:"",rowPrice:"",fullPrice:""},a.state=a.initialState,a.handleSubmit=function(e){e.preventDefault();var t=a.state,n={category:t.category,name:t.name,rowPrice:t.rowPrice,fullPrice:t.fullPrice};a.props.createProduct(n),a.setState(a.inintialState),a.props.hideModal()},a.handleChange=function(e){return j.call(Object(f.a)(a),e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.showModal,n=e.hideModal,c=e.categories,l=this.state,o=l.category,i=l.name,u=l.rowPrice,s=l.fullPrice;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{type:"primary",onClick:a,style:{marginRight:"10px"}},r.a.createElement(m.a,{type:"plus-circle"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"),r.a.createElement(b.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440",visible:t,onCancel:n,footer:[]},r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(v.a.Item,null,r.a.createElement("select",{name:"category",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",value:o,onChange:this.handleChange,required:!0,style:{width:"100%",lineHeight:"32px"}},c.map(function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.title)}))),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{name:"name",prefix:r.a.createElement(m.a,{type:"font-colors"}),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:i,onChange:this.handleChange,required:!0})),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{name:"rowPrice",prefix:r.a.createElement(m.a,{type:"dollar"}),placeholder:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430",value:u,onChange:this.handleChange,required:!0})),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{name:"fullPrice",prefix:r.a.createElement(m.a,{type:"dollar"}),placeholder:"\u0426\u0435\u043d\u0430",value:s,onChange:this.handleChange,required:!0})),r.a.createElement(g.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(n.Component),D=Object(o.b)(function(e){return{categories:e.categories.items}},function(e){return{createProduct:function(t){return e({type:"PRODUCT_ADD",payload:t})}}})(C(I)),x=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={category:"1",name:"",rowPrice:"",fullPrice:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.category,r=t.name,c=t.rowPrice,l=t.fullPrice,o={key:a.props.productKey,category:n,name:r,rowPrice:c,fullPrice:l};a.props.editProduct(o),a.props.hideModal()},a.handleChange=function(e){return j.call(Object(f.a)(a),e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.products,a=e.productKey,n=t.find(function(e){return e.key===a}),r=n.categoryId,c=n.name,l=n.rowPrice,o=n.fullPrice;this.setState({category:r,name:c,rowPrice:l,fullPrice:o})}},{key:"render",value:function(){var e=this.props,t=e.visible,a=e.showModal,n=e.hideModal,c=e.categories,l=this.state,o=l.category,i=l.name,u=l.rowPrice,s=l.fullPrice;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{type:"primary",icon:"edit",onClick:a},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement(b.a,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440",visible:t,onCancel:n,footer:[]},r.a.createElement(v.a,{onSubmit:this.handleSubmit},r.a.createElement(v.a.Item,null,r.a.createElement("select",{name:"category",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",defaultValue:o,onChange:this.handleChange,required:!0,style:{width:"100%",lineHeight:"32px"}},c.map(function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.title)}))),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{name:"name",prefix:r.a.createElement(m.a,{type:"font-colors"}),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:i,onChange:this.handleChange,required:!0})),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{name:"rowPrice",prefix:r.a.createElement(m.a,{type:"dollar"}),placeholder:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430",value:u,onChange:this.handleChange,required:!0})),r.a.createElement(v.a.Item,null,r.a.createElement(O.a,{name:"fullPrice",prefix:r.a.createElement(m.a,{type:"dollar"}),placeholder:"\u0426\u0435\u043d\u0430",value:s,onChange:this.handleChange,required:!0})),r.a.createElement(g.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))))}}]),t}(n.Component),T=Object(o.b)(function(e){return{categories:e.categories.items,products:e.products.items}},function(e){return{editProduct:function(t){return e(function(e){return{type:"PRODUCT_EDIT",payload:e}}(t))}}})(C(x)),_=(a(279),i.a.Header),S=function(){return r.a.createElement("div",null,r.a.createElement(_,{className:"store-header"},r.a.createElement(u.a,{gutter:16},r.a.createElement(s.a,{span:4,className:"store-header__logo"},r.a.createElement(m.a,{type:"fire",theme:"filled"})," SuperStore"),r.a.createElement(s.a,{span:20,style:{textAlign:"right"}},r.a.createElement(D,null),r.a.createElement(w,null)))))},A=a(125),R=a(336),M=(a(280),i.a.Sider),N=function(e){function t(){return Object(d.a)(this,t),Object(y.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.categories;return r.a.createElement(M,{width:200,className:"nav"},r.a.createElement(A.b,{mode:"inline",defaultSelectedKeys:["5"],defaultOpenKeys:["sub1"],className:"nav__menu"},t.map(function(t){return r.a.createElement(A.b.Item,{key:t.key,onClick:function(){return e.props.filterProducts(t.key)}},r.a.createElement(R.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e?",onConfirm:function(){e.props.deleteCategory(t.key)},onCancel:function(){return!1},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},r.a.createElement(g.a,{type:"danger",className:"nav__close-button"},r.a.createElement(m.a,{type:"close",style:{margin:"0px"}}))),t.title)}),r.a.createElement(A.b.Item,{key:"4",onClick:function(){return e.props.filterProducts(null)}},r.a.createElement(m.a,{type:"stop"}),"\u0411\u0435\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),r.a.createElement(A.b.Item,{key:"5",onClick:function(){return e.props.filterProducts(0)}},r.a.createElement(m.a,{type:"appstore"}),"\u0412\u0441\u0435")))}}]),t}(n.Component),q=Object(o.b)(function(e){return{categories:e.categories.items}},function(e){return{deleteCategory:function(t){return e({type:"CATEGORY_DELETE",payload:t})},filterProducts:function(t){return e({type:"PRODUCTS_FILTER",payload:t})}}})(N),L=a(338),U=a(337),F=L.a.Column,G=function(e){function t(){return Object(d.a)(this,t),Object(y.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.products,n=t.filteredCategory,c=a.filter(function(e){return n===e.categoryId||0===n});return r.a.createElement(L.a,{dataSource:c},r.a.createElement(F,{title:"ID",key:"key",dataIndex:"key"}),r.a.createElement(F,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",key:"name",dataIndex:"name"}),r.a.createElement(F,{title:"\u0426\u0435\u043d\u0430 \u0437\u0430\u043a\u0443\u043f",key:"rowPrice",dataIndex:"rowPrice"}),r.a.createElement(F,{title:"\u0426\u0435\u043d\u0430",key:"fullPrice",dataIndex:"fullPrice"}),r.a.createElement(F,{key:"action",render:function(t){return r.a.createElement("span",null,r.a.createElement(T,{productKey:t.key}),r.a.createElement(U.a,{type:"vertical"}),r.a.createElement(R.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u0432\u0430\u0440?",onConfirm:function(){e.props.deleteProduct(t.key)},onCancel:function(){return!1},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},r.a.createElement(g.a,{type:"danger",icon:"delete"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}}))}}]),t}(n.Component),H=Object(o.b)(function(e){return{products:e.products.items,filteredCategory:e.products.filteredCategory}},function(e){return{deleteProduct:function(t){return e({type:"PRODUCT_DELETE",payload:t})}}})(G),K=(a(329),i.a.Footer),Y=function(){return r.a.createElement(K,{className:"footer"},"\xa9 Copyright 2322 by Igor Leontev",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/nzmi/test-store",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},r.a.createElement(m.a,{type:"github"})," GitHub"))},B=(a(330),i.a.Content),J=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(S,null),r.a.createElement(i.a,null,r.a.createElement(q,null),r.a.createElement(i.a,{className:"app__layout"},r.a.createElement(B,{className:"app__content"},r.a.createElement(H,null)))),r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(331);var W=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement("img",{src:"https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif",alt:"\u041e\u0448\u0438\u0431\u043a\u0430!",className:"error-indicator__image"}))},z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(W,null):this.props.children}}]),t}(n.Component),V=a(57),$=a(167),Q=a(41),X=a(50),Z={items:[{key:1,name:"\u0422\u043e\u0432\u0430\u0440 1",rowPrice:"2000",fullPrice:"2500",categoryId:1},{key:2,name:"\u0422\u043e\u0432\u0430\u0440 2",rowPrice:"2200",fullPrice:"2700",categoryId:2},{key:3,name:"\u0422\u043e\u0432\u0430\u0440 3",rowPrice:"2200",fullPrice:"2700",categoryId:3},{key:4,name:"\u0422\u043e\u0432\u0430\u0440 4",rowPrice:"2200",fullPrice:"2700",categoryId:null}],nextProductId:5,filteredCategory:0},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=e.items;switch(t.type){case"PRODUCTS_LOADED":return{items:t.payload};case"PRODUCT_ADD":var n=e.nextProductId,r=t.payload,c=r.name,l=r.rowPrice,o=r.fullPrice,i=r.category;return Object(X.a)({},e,{items:[].concat(Object(Q.a)(e.items),[{key:n,name:c,rowPrice:l,fullPrice:o,categoryId:parseInt(i)}]),nextProductId:e.nextProductId+1});case"PRODUCT_DELETE":var u=a.findIndex(function(e){return e.key===t.payload}),s=[].concat(Object(Q.a)(a.slice(0,u)),Object(Q.a)(a.slice(u+1)));return Object(X.a)({},e,{items:s});case"PRODUCT_EDIT":var m=t.payload,d=m.key,p=m.name,y=m.category,h=m.rowPrice,f=m.fullPrice,E=a.findIndex(function(e){return e.key===d}),g=[].concat(Object(Q.a)(a.slice(0,E)),[{key:d,name:p,categoryId:parseInt(y),rowPrice:h,fullPrice:f}],Object(Q.a)(a.slice(E+1)));return Object(X.a)({},e,{items:g});case"PRODUCTS_FILTER":return Object(X.a)({},e,{filteredCategory:t.payload});default:return e}},te={items:[{key:1,title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 1",active:!1},{key:2,title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2",active:!1},{key:3,title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 3",active:!1}],nextCategoryId:6},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,a=e.items;switch(t.type){case"CATEGORIES_LOADED":return{items:t.payload};case"CATEGORY_ADD":return Object(X.a)({},e,{items:[].concat(Object(Q.a)(a),[{key:e.nextCategoryId,title:t.payload,active:!1}]),nextCategoryId:e.nextCategoryId+1});case"CATEGORY_DELETE":var n=a.findIndex(function(e){return e.key===t.payload}),r=[].concat(Object(Q.a)(a.slice(0,n)),Object(Q.a)(a.slice(n+1)));return Object(X.a)({},e,{items:r});default:return e}},ne=Object(V.c)({products:ee,categories:ae}),re=Object($.createLogger)({level:"log"}),ce=Object(V.d)(ne,Object(V.a)(re));l.a.render(r.a.createElement(o.a,{store:ce},r.a.createElement(z,null,r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[170,1,2]]]);
//# sourceMappingURL=main.d764cc94.chunk.js.map