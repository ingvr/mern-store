(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,a){e.exports=a(388)},195:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){},341:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=a(26),l=(a(195),a(34)),u=a.n(l),s=function(e){return function(t){t(function(e){return{type:"CATEGORIES_REQUESTED",payload:e}}(e));var a="".concat("/api/v1/category","/get/all");return u.a.get(a).then(function(e){t({type:"CATEGORIES_RECEIVED",payload:e.data.data,receivedAt:Date.now()})}).catch(function(e){console.log("Fetch categories failed: ",e)})}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.categoryId,a=void 0===t?null:t,n=e.currentPage,r=void 0===n?null:n;return function(e,t){a=a||t().products.filteredProducts,r=r||t().products.currentPage,e({type:"PRODUCTS_REQUESTED",payload:{categoryId:a,currentPage:r}});var n="".concat("/api/v1/product","/get/by-category/").concat(a,"/").concat(r);return u.a.get(n).then(function(t){var n=t.data,c=n.products,o=n.totalPages;e({type:"PRODUCTS_RECEIVED",payload:{products:c,currentPage:r,totalPages:o,filteredProducts:a},receivedAt:Date.now()})}).catch(function(e){console.log("Product filter dispatch failed: ",e)})}},m=function(){return{type:"PRODUCTS_RESET_CATEGORY"}};u.a.interceptors.request.use(function(e){if(["".concat("/api/v1/user","/login"),"".concat("/api/v1/user","/register"),"".concat("/api/v1/user","/info")].some(function(t){return t===e.url}))return e;var t=localStorage.getItem("token");return t&&(e.headers.Authorization=t),e},function(e){return Promise.reject(e)});var p=function(e){return function(t){var a="".concat("/api/v1/user","/info");return u.a.post(a,{token:e}).then(function(e){var a=e.data.user,n=a.name,r=a.email;t({type:"USER_GET_INFO_SUCCESS",payload:{name:n,email:r}})}).catch(function(e){console.log("Error getting user info: ",e),t({type:"USER_GET_INFO_FAILED"})})}},f=function(e){return function(t){var a="".concat("/api/v1/user","/login");return u.a.post(a,e).then(function(e){var a;t((a=e.data.token,localStorage.setItem("token",a),function(e){var t=a.split(" ");e(p(t[1]))}))}).catch(function(e){var a=e.response.data.errorMessage?e.response.data.errorMessage:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430";t({type:"USER_LOGIN_FAILED",payload:a})})}},h=a(17),E=a(18),g=a(21),y=a(19),v=a(20),b=(a(212),a(390)),O=a(391),C=a(392),P=a(9),S=a(45),_=a(28),j=a(396),I=a(395),w=a(397),k=function(e){return function(t){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).state={visible:!1},t.showModal=function(){t.setState({visible:!0})},t.hideModal=function(){t.setState({visible:!1})},t}return Object(v.a)(a,t),Object(E.a)(a,[{key:"render",value:function(){var t=this.state.visible;return r.a.createElement(e,Object.assign({visible:t,showModal:this.showModal,hideModal:this.hideModal},this.props))}}]),a}(n.Component)},R=a(93);function T(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(R.a)({},n,a))}function L(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return!t.some(function(e){return isNaN(e)||e<0})}var D=k(function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={category:""},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.createCategory,r=t.hideModal;n(a.state.category),a.setState({category:""}),r()},a.handleChange=function(e){return T.call(Object(S.a)(a),e)},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.showModal,n=e.hideModal,c=this.handleSubmit,o=this.handleChange,i=this.state.category;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{onClick:a},r.a.createElement(P.a,{type:"folder-add"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),r.a.createElement(j.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",visible:t,onCancel:n,footer:[]},r.a.createElement(I.a,{onSubmit:c},r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"category",prefix:r.a.createElement(P.a,{type:"unordered-list"}),placeholder:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",value:i,onChange:o,required:!0})),r.a.createElement(_.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))))}}]),t}(n.Component)),A=a(398),U=k(function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).initialState={categoryId:"5d2309641c9d4400006c0d13",name:"",rowPrice:"",fullPrice:""},a.state=a.initialState,a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.categoryId,c=t.name,o=t.rowPrice,i=t.fullPrice;if(!L(o,i))return A.a.open({message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430",description:"\u0426\u0435\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c",icon:r.a.createElement(P.a,{type:"exclamation-circle",style:{color:"#CE0014"}})}),!1;var l=a.props,u=l.createProduct,s=l.hideModal;u({categoryId:n,name:c,rowPrice:o,fullPrice:i}),a.setState(a.initialState),s()},a.handleChange=function(e){return T.call(Object(S.a)(a),e)},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.showModal,n=e.hideModal,c=e.categories,o=this.state,i=o.categoryId,l=o.name,u=o.rowPrice,s=o.fullPrice,d=this.handleChange,m=this.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{type:"primary",onClick:a,style:{marginRight:"10px"}},r.a.createElement(P.a,{type:"plus-circle"}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"),r.a.createElement(j.a,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440",visible:t,onCancel:n,footer:[]},r.a.createElement(I.a,{onSubmit:m},r.a.createElement(I.a.Item,null,r.a.createElement("select",{name:"categoryId",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",value:i,onChange:d,required:!0,style:{width:"100%",lineHeight:"32px"}},c.map(function(e){var t=e._id,a=e.title;return r.a.createElement("option",{key:t,value:t},a)}))),r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"name",prefix:r.a.createElement(P.a,{type:"font-colors"}),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:l,onChange:d,required:!0})),r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"rowPrice",prefix:r.a.createElement(P.a,{type:"dollar"}),placeholder:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430",value:u,onChange:d,required:!0})),r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"fullPrice",prefix:r.a.createElement(P.a,{type:"dollar"}),placeholder:"\u0426\u0435\u043d\u0430",value:s,onChange:d,required:!0})),r.a.createElement(_.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(n.Component)),N=k(function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={categoryId:"1",name:"",rowPrice:"",fullPrice:""},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.categoryId,c=t.name,o=t.rowPrice,i=t.fullPrice;if(!L(o,i))return A.a.open({message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430",description:"\u0426\u0435\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c",icon:r.a.createElement(P.a,{type:"exclamation-circle",style:{color:"#CE0014"}})}),!1;var l=a.props,u=l.productKey,s=l.editProduct,d=l.hideModal;s({_id:u,categoryId:n,name:c,rowPrice:o,fullPrice:i}),d()},a.handleChange=function(e){return T.call(Object(S.a)(a),e)},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"updateState",value:function(){var e=this.props,t=e.products,a=e.productKey,n=t.find(function(e){return e._id===a}),r=n.categoryId,c=n.name,o=n.rowPrice,i=n.fullPrice;this.setState({categoryId:r,name:c,rowPrice:o,fullPrice:i})}},{key:"componentDidMount",value:function(){this.updateState()}},{key:"componentDidUpdate",value:function(e,t){this.props!==e&&this.updateState()}},{key:"render",value:function(){var e=this.props,t=e.visible,a=e.showModal,n=e.hideModal,c=e.categories,o=this.state,i=o.categoryId,l=o.name,u=o.rowPrice,s=o.fullPrice,d=this.handleChange,m=this.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{type:"primary",icon:"edit",onClick:a},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement(j.a,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440",visible:t,onCancel:n,footer:[]},r.a.createElement(I.a,{onSubmit:m},r.a.createElement(I.a.Item,null,r.a.createElement("select",{name:"categoryId",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",defaultValue:i,onChange:d,required:!0,style:{width:"100%",lineHeight:"32px"}},c.map(function(e){var t=e._id,a=e.title;return r.a.createElement("option",{key:t,value:t},a)}))),r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"name",prefix:r.a.createElement(P.a,{type:"font-colors"}),placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:l,onChange:d,required:!0})),r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"rowPrice",prefix:r.a.createElement(P.a,{type:"dollar"}),placeholder:"\u0417\u0430\u043a\u0443\u043f\u043e\u0447\u043d\u0430\u044f \u0446\u0435\u043d\u0430",value:u,onChange:d,required:!0})),r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"fullPrice",prefix:r.a.createElement(P.a,{type:"dollar"}),placeholder:"\u0426\u0435\u043d\u0430",value:s,onChange:d,required:!0})),r.a.createElement(_.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))))}}]),t}(n.Component)),x=Object(i.b)(null,function(e){return{createCategory:function(t){return e((a=t,function(e){var t="".concat("/api/v1/category","/add");return u.a.post(t,{title:a}).then(function(t){e({type:"CATEGORY_ADD_SUCCESS",payload:t.data.categories})}).catch(function(e){console.log("Category add dispatch failed: ",e)})}));var a}}})(D),G=Object(i.b)(function(e){return{categories:e.categories.items}},function(e){return{createProduct:function(t){return e((a=t,function(e,t){var n="".concat("/api/v1/product","/add");return u.a.post(n,a).then(function(n){e({type:"PRODUCT_ADD_SUCCESS"});var r=t().products.filteredProducts;r!==a.categoryId&&"ALL_CATEGORIES"!==r||e(d())}).catch(function(e){console.log("Product add dispatch failed: ",e)})}));var a}}})(U),M=Object(i.b)(function(e){return{categories:e.categories.items,products:e.products.items}},function(e){return{editProduct:function(t){return e(function(e){return function(t){var a="".concat("/api/v1/product","/update");return u.a.put(a,e).then(function(e){t({type:"PRODUCT_EDIT_SUCCESS"}),t(d())}).catch(function(e){console.log("Product edit dispatch failed: ",e)})}}(t))}}})(N),F=a(389),z=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.logout;return r.a.createElement(F.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?",onConfirm:function(){e()},onCancel:function(){return!1},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},r.a.createElement(_.a,{style:{marginLeft:"30px"},type:"danger",shape:"round",icon:"logout"},"\u0412\u044b\u0439\u0442\u0438"))}}]),t}(n.Component),q=Object(i.b)(null,function(e){return{logout:function(){return e((localStorage.removeItem("token"),{type:"USER_LOGOUT"}))}}})(z),H=(a(332),b.a.Header),B=function(){return r.a.createElement(H,{className:"store-header"},r.a.createElement(O.a,{gutter:16},r.a.createElement(C.a,{span:4,className:"store-header__logo"},r.a.createElement(P.a,{type:"fire",theme:"filled"})," SuperStore"),r.a.createElement(C.a,{span:20,style:{textAlign:"right"}},r.a.createElement(G,null),r.a.createElement(x,null),r.a.createElement(q,null))))},Y=a(132),K=(a(333),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",null),r.a.createElement("div",null))}),V=(a(334),b.a.Sider),Q=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.loadCategories()}},{key:"render",value:function(){var e=this.props,t=e.deleteCategory,a=e.filterProducts,n=e.categories,c=e.isLoading;return r.a.createElement(V,{width:200,className:"nav"},r.a.createElement(Y.b,{mode:"inline",defaultSelectedKeys:["-1"],className:"nav__menu"},c&&r.a.createElement(K,null),n.map(function(e){var n=e._id,c=e.title;return r.a.createElement(Y.b.Item,{key:n,onClick:function(){return a(n)}},r.a.createElement(F.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e?",onConfirm:function(){t(n)},onCancel:function(){return!1},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},r.a.createElement(_.a,{type:"danger",className:"nav__close-button"},r.a.createElement(P.a,{type:"close",style:{margin:"0px"}}))),c)}),r.a.createElement(Y.b.Item,{key:"0",onClick:function(){return a("0")}},r.a.createElement(P.a,{type:"stop"}),"\u0411\u0435\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),r.a.createElement(Y.b.Item,{key:"-1",onClick:function(){return a("ALL_CATEGORIES")}},r.a.createElement(P.a,{type:"appstore"}),"\u0412\u0441\u0435")))}}]),t}(n.Component),$=Object(i.b)(function(e){return{categories:e.categories.items,isLoading:e.categories.isLoading,filteredProducts:e.products.filteredProducts}},function(e){return{deleteCategory:function(t){return e((a=t,function(e){var t="".concat("/api/v1/category","/delete");return u.a.delete("".concat(t,"/").concat(a)).then(function(t){var a=t.data.data,n=a.categories,r=a.products;e({type:"CATEGORY_DELETE_SUCCESS",payload:n}),e(m(r)),e(d())}).catch(function(e){console.log("Category delete dispatch failed: ",e)})}));var a},filterProducts:function(t){return e(d({categoryId:t,currentPage:1}))},loadCategories:function(){return e(s())}}})(Q),J=a(394),W=a(393),Z=a(101),X=(a(341),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleChangePage=function(e){a.props.changePage(e.target.value)},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.totalPages,a=e.currentPage;if(1===t)return!1;var n=[];a>1&&n.push(r.a.createElement(Z.a.Button,{key:"0",value:a-1},"\u2039"));for(var c=1;c<=t;c++)n.push(r.a.createElement(Z.a.Button,{key:c,value:c},c));return a<t&&n.push(r.a.createElement(Z.a.Button,{key:t+1,value:a+1},"\u203a")),r.a.createElement("div",{className:"pager"},r.a.createElement(Z.a.Group,{value:a,onChange:this.handleChangePage},n))}}]),t}(n.Component)),ee=Object(i.b)(function(e){return{totalPages:e.products.totalPages,currentPage:e.products.currentPage}},function(e){return{changePage:function(t){return e({type:"PRODUCTS_CHANGE_PAGE",payload:t})}}})(X),te=J.a.Column,ae=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadProducts)({filteredProducts:e.filteredProducts})}},{key:"componentDidUpdate",value:function(e,t){if(this.props.currentPage!==e.currentPage||this.props.items!==e.items){var a=this.props,n=a.currentPage;(0,a.loadProducts)({page:n,categoryId:a.filteredProducts})}}},{key:"render",value:function(){var e=this.props,t=e.products,a=e.isLoading,n=e.deleteProduct;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{dataSource:t,loading:a,pagination:!1,rowKey:function(e){return e._id}},r.a.createElement(te,{title:"ID",key:"_id",dataIndex:"_id"}),r.a.createElement(te,{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",key:"name",dataIndex:"name"}),r.a.createElement(te,{title:"\u0426\u0435\u043d\u0430 \u0437\u0430\u043a\u0443\u043f",key:"rowPrice",dataIndex:"rowPrice"}),r.a.createElement(te,{title:"\u0426\u0435\u043d\u0430",key:"fullPrice",dataIndex:"fullPrice"}),r.a.createElement(te,{key:"action",render:function(e){var t=e._id;return r.a.createElement("span",null,r.a.createElement(M,{productKey:t}),r.a.createElement(W.a,{type:"vertical"}),r.a.createElement(F.a,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u0432\u0430\u0440?",onConfirm:function(){n(t)},onCancel:function(){return!1},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442"},r.a.createElement(_.a,{type:"danger",icon:"delete"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}})),!a&&r.a.createElement(ee,null))}}]),t}(n.Component),ne=Object(i.b)(function(e){return{products:e.products.items,isLoading:e.products.isLoading,currentPage:e.products.currentPage}},function(e){return{deleteProduct:function(t){return e((a=t,function(e){var t="".concat("/api/v1/product","/delete");return u.a.delete("".concat(t,"/").concat(a)).then(function(t){e({type:"PRODUCT_DELETE_SUCCESS"}),e(d())}).catch(function(e){console.log("Product delete dispatch failed: ",e)})}));var a},loadProducts:function(t){return e(d(t))}}})(ae),re=(a(384),b.a.Footer),ce=function(){return r.a.createElement(re,{className:"footer"},"\xa9 Copyright 2322 by Igor Leontev",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/nzmi/test-store",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},r.a.createElement(P.a,{type:"github"})," GitHub"))},oe=(a(385),b.a.Content),ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(b.a,null,r.a.createElement($,null),r.a.createElement(b.a,{className:"store"},r.a.createElement(oe,{className:"store__content"},r.a.createElement(ne,null)))),r.a.createElement(ce,null))},le=(a(386),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:""},a.handleChange=function(e){return T.call(Object(S.a)(a),e)},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,c=t.password,o=a.props.login;if(!function(e){return/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e).toLowerCase())}(n))return A.a.open({message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430",description:"Email \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 mail@domain.ru",icon:r.a.createElement(P.a,{type:"exclamation-circle",style:{color:"#CE0014"}})}),!1;o({email:n,password:c})},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(this.props!==e){var a=this.props,n=a.loginError,c=a.resetLoginError;n&&(A.a.open({message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430",description:n,icon:r.a.createElement(P.a,{type:"exclamation-circle",style:{color:"#CE0014"}})}),c())}}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=this.handleSubmit,c=this.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"authorization"},r.a.createElement(I.a,{onSubmit:n,className:"authorization__form"},r.a.createElement("h2",{className:"authorization__header"},"\u0412\u0445\u043e\u0434"),r.a.createElement(I.a.Item,null,r.a.createElement(w.a,{name:"email",prefix:r.a.createElement(P.a,{type:"mail"}),placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 (admin@teststore.com)",value:t,onChange:c,required:!0})),r.a.createElement(I.a.Item,null,r.a.createElement(w.a.Password,{name:"password",prefix:r.a.createElement(P.a,{type:"lock"}),placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c (admin)",value:a,onChange:c,required:!0})),r.a.createElement(_.a,{type:"primary",htmlType:"submit",style:{width:"100%"}},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("p",{className:"authorization__copyright"},"\xa9 Copyright 2322 by Igor Leontev",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/nzmi/test-store",target:"_blank",rel:"noopener noreferrer",className:"authorization__githubLink"},r.a.createElement(P.a,{type:"github"})," GitHub")))))}}]),t}(n.Component)),ue=Object(i.b)(function(e){return{loginError:e.users.loginError}},function(e){return{login:function(t){return e(f(t))},resetLoginError:function(){return e({type:"USER_LOGIN_RESET_ERROR"})}}})(le),se=(a(387),function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("img",{src:"https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif",alt:"\u041e\u0448\u0438\u0431\u043a\u0430!",className:"error-indicator__image"}),r.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement("p",null,"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0439\u0442\u0438 \u043f\u043e\u0437\u0436\u0435"))}),de=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token"),a=this.props.getUser;t?a((t=t.split(" "))[1]).then(function(){e.setState({isLoading:!1})}):this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,a=e.serverAvailable,n=this.state.isLoading,c=r.a.createElement(se,null);return a&&(c=t?r.a.createElement(ie,null):r.a.createElement(ue,null)),r.a.createElement("div",{className:"app"},n?r.a.createElement(K,null):c)}}]),t}(n.Component),me=Object(i.b)(function(e){return{isLoggedIn:e.users.isLoggedIn,serverAvailable:e.users.serverAvailable}},function(e){return{getUser:function(t){return e(p(t))}}})(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(se,null):this.props.children}}]),t}(n.Component),fe=a(59),he=a(182),Ee=a(183),ge=a(30),ye={items:[],isLoading:!1,currentPage:1,totalPages:1,filteredProducts:"ALL_CATEGORIES"},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCTS_REQUESTED":return Object(ge.a)({},e,{isLoading:!0});case"PRODUCTS_RECEIVED":var a=t.payload,n=a.products,r=a.currentPage,c=a.totalPages,o=a.filteredProducts;return Object(ge.a)({},e,{items:n,currentPage:r,totalPages:c,filteredProducts:o,isLoading:!1});case"PRODUCTS_RESET_CATEGORY":return Object(ge.a)({},e,{filteredProducts:"0"});case"PRODUCTS_CHANGE_PAGE":return Object(ge.a)({},e,{currentPage:t.payload});default:return e}},be={items:[],isLoading:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CATEGORIES_REQUESTED":return Object(ge.a)({},e,{isLoading:!0});case"CATEGORIES_RECEIVED":return{items:t.payload.map(function(e){return{title:e.title,_id:e._id,active:!1}}),isLoading:!1};case"CATEGORY_ADD_SUCCESS":case"CATEGORY_DELETE_SUCCESS":return Object(ge.a)({},e,{items:t.payload});default:return e}},Ce={loginError:!1,isLoggedIn:null,serverAvailable:!0},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_GET_INFO_SUCCESS":return Object(ge.a)({},e,{isLoggedIn:!0});case"USER_GET_INFO_FAILED":return Object(ge.a)({},e,{serverAvailable:!1});case"USER_LOGIN_FAILED":return Object(ge.a)({},e,{loginError:t.payload});case"USER_LOGIN_RESET_ERROR":return Object(ge.a)({},e,{loginError:!1});case"USER_LOGOUT":return Object(ge.a)({},e,{isLoggedIn:!1});default:return e}},Se=Object(fe.c)({products:ve,categories:Oe,users:Pe}),_e=Object(he.createLogger)({level:"log"}),je=Object(fe.d)(Se,Object(fe.a)(Ee.a,_e));o.a.render(r.a.createElement(i.a,{store:je},r.a.createElement(pe,null,r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[186,1,2]]]);
//# sourceMappingURL=main.37d8b668.chunk.js.map