(this["webpackJsonpspeed-game"]=this["webpackJsonpspeed-game"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(3),s=c.n(n),i=(c(12),c(4)),o=c(5),a=c(7),l=c(6),d=(c(13),c(0));var u=function(e){return Object(d.jsx)("div",{className:"circle ".concat(e.color," ").concat(e.active?"active":""),onClick:e.click})};var j=function(e){var t;return t=e.score<=3?"C'mon! Let's play!":e.score>3&&e.score<7?"Looking good my friend!":"Wow! Look at you!",Object(d.jsx)("div",{className:"gameOver",children:Object(d.jsxs)("div",{className:"result",children:[Object(d.jsx)("h1",{children:"GAME OVER"}),Object(d.jsxs)("p",{children:["Score: ",e.score]}),Object(d.jsx)("p",{children:t}),Object(d.jsx)("button",{onClick:function(){window.location.reload()},id:"close",children:"Close"})]})})},h=c.p+"static/media/Stock.fc1395a7.mp3",m=new Audio(h),b=function(e,t){return Math.floor(Math.random()*(t-e))+e},p=function(e){Object(a.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={circles:[{id:1},{id:2},{id:3},{id:4}],score:0,current:0,round:0,result:!1,start:!1,clicked:!1},e.SPEED=1e3,e.clickHandler=function(t){if(console.log("You clicked ".concat(t)),m.play(),e.state.current!==t)return e.clearGame(),void m.pause();!1===e.state.clicked&&e.setState({clicked:!0,score:e.state.score+1,round:0})},e.nextCircle=function(){if(e.state.round>=3)e.clearGame();else{var t;do{t=b(1,5)}while(t===e.state.current);e.setState({current:t,round:e.state.round+1,clicked:!1}),console.log("Active circle: ".concat(e.state.current)),e.SPEED-=25,e.timer=setTimeout(e.nextCircle,e.SPEED),console.log("Speed now:",e.SPEED)}},e.startGame=function(){e.nextCircle(),e.setState({start:!0})},e.clearGame=function(){clearTimeout(e.timer),e.setState({result:!0})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.circles.map((function(t){return Object(d.jsx)(u,{id:t.id,color:t.color,click:function(){return e.clickHandler(t.id)},active:e.state.current===t.id},t.id)}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Speed Game"}),Object(d.jsxs)("p",{children:["Score: ",this.state.score]}),Object(d.jsx)("div",{className:"circleGroup",children:t}),Object(d.jsx)("button",{onClick:this.startGame,disabled:this.state.start,children:"Start"}),Object(d.jsx)("button",{onClick:this.clearGame,children:"Stop"}),this.state.result&&Object(d.jsx)(j,{score:this.state.score})]})}}]),c}(r.Component);s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.73e0d2df.chunk.js.map