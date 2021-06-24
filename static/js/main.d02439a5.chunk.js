(this["webpackJsonpreact-capstone"]=this["webpackJsonpreact-capstone"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(23),c=n.n(r),i=(n(30),n(8)),o=n(9),l=n(11),u=n(10),j=n(6),h=(n(31),n(48)),b=n(52),p=(n(32),n(15)),d=n(1),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.handleNameChange(t.target.value)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.playerName;return Object(d.jsx)(h.a,{className:"border jumbo",children:Object(d.jsxs)("div",{className:"landingPage",children:[Object(d.jsx)("h1",{className:"title",children:"Trivia Time"}),Object(d.jsx)("h3",{className:"instructionsTitle",children:"Instructions"}),Object(d.jsxs)("span",{className:"instructionsPara",children:["-1000 points wins the game.",Object(d.jsx)("br",{}),"-Each round has up to 15 questions.",Object(d.jsx)("br",{}),"-Easy questions are worth 100 points.",Object(d.jsx)("br",{}),"-Medium questions are worth 200 points.",Object(d.jsx)("br",{}),"-Hard questions are worth 300 points.",Object(d.jsx)("br",{}),"-Hints cost 50 points and display a helpful GIF.",Object(d.jsx)("br",{}),"-If you have not scored 1000 points after question 15, you lose the game.",Object(d.jsx)("br",{})]}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("label",{className:"playerName",for:"playerName",children:["Player Name:"," "]}),Object(d.jsx)("input",{className:"nameField",onChange:this.handleChange,type:"text",name:"name",value:e,required:!0})]}),Object(d.jsx)(p.b,{to:"/game",children:Object(d.jsx)(b.a,{children:"START"})})]})})}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleNameChange,n=e.playerName;return Object(d.jsx)("div",{children:Object(d.jsx)(m,{handleNameChange:t,playerName:n})})}}]),n}(a.Component),x=n(25),f=n(51),v=(n(42),n(43),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(e){window.location.reload(!1)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.status,n=e.triviaQuestions,a=e.userAnswers,s=e.points,r=e.playerName,c=a.map((function(e,t){return{user:e,correct:n[t].correct_answer,question:n[t].question}})),i=c.map((function(e,t){return Object(d.jsx)("div",{className:"result text-left",children:Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{dangerouslySetInnerHTML:{__html:"Question ".concat(t+1,": ").concat(e.question)}}),Object(d.jsxs)("p",{children:["Your Answer:"," ",""===e.user?Object(d.jsx)("span",{className:"noAnswer",children:"No Answer Given"}):e.user]}),Object(d.jsx)("p",{dangerouslySetInnerHTML:{__html:"Correct Answer: ".concat(e.correct)}})]})})}));console.log("finalResults",c);var o=t?"win":"lost";return Object(d.jsxs)("div",{className:"summary-container text-center",children:[Object(d.jsxs)("h1",{children:["Thanks for playing ",r,"!"]}),Object(d.jsx)("h3",{children:"Here is how you did :)"}),t?Object(d.jsx)("h2",{className:o,children:"You have won the game!"}):Object(d.jsx)("h2",{className:o,children:"Better luck next time!"}),Object(d.jsxs)("div",{className:"points",children:["Total points: ",s]}),Object(d.jsx)("ul",{children:i}),Object(d.jsx)(p.b,{to:"/game",children:Object(d.jsx)(b.a,{onClick:this.handleClick,children:"Start Over"})}),Object(d.jsx)(p.b,{to:"/",children:Object(d.jsx)(b.a,{variant:"danger",children:"New Player, Same Questions"})})]})}}]),n}(a.Component)),g=n(49),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={gifImage:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.currentQuestion.correct_answer;fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat("iCE14LxKwLeqaGc2y1lO1Q8UCwnmR5Lh","&q=").concat(t,"&limit=1&offset=0&rating=g&lang=en")).then((function(e){return e.json()})).then((function(t){console.log("gif data",t),e.setState({gifImage:t.data[0].images.original.url})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.gifImage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g.a,{src:e,alt:"gifImage",width:"250"})})}}]),n}(a.Component),N=n(50),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={points:0,userAnswers:[],currentAnswer:"",hint:!1},e.calculatePoints=function(e){return"easy"===e.difficulty?100:"medium"===e.difficulty?200:300},e.handleChange=function(t){e.setState({currentAnswer:t.target.value})},e.handleHint=function(){e.setState({hint:!0})},e.handleSubmit=function(t){t.preventDefault(),e.props.handleNextQuestion();var n=e.state,a=n.userAnswers,s=n.currentAnswer,r=n.hint,c=e.props.currentQuestionNumber,i=a.push(s),o=e.props.triviaQuestions[c],l=0;s.toLowerCase()===o.correct_answer.toLowerCase()&&(l=e.calculatePoints(o)),r?l-=50:l+=0,e.setState((function(e){return console.log("currentState",e),{userAnswer:i,points:e.points+l,currentAnswer:"",hint:!1}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.triviaQuestions,n=e.playerName,a=e.currentQuestionNumber,s=e.allAnswersMapped,r=this.state,c=r.userAnswers,i=r.points,o=r.hint,l=t[a];return Object(d.jsxs)(d.Fragment,{children:[i<100&&a===t.length?Object(d.jsx)("h1",{children:Object(d.jsx)(v,{status:!1,triviaQuestions:t,userAnswers:c,points:i,playerName:n})}):Object(d.jsx)(d.Fragment,{}),l&&Object(d.jsxs)(h.a,{className:"jumbo",children:[Object(d.jsxs)("div",{className:"text-center",children:[" ",Object(d.jsx)(p.b,{to:"/",children:Object(d.jsx)(N.a,{size:50})})]}),Object(d.jsx)("hr",{}),i<100?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{className:"text-center",children:["Current Points for ",n,": ",i]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{className:"category",children:"Category: "}),'"',l.category,'"'," "]}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{dangerouslySetInnerHTML:{__html:"<i className='question'>Question: </i>"+l.question}}),Object(d.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(f.a.Group,{controlId:"formBasicInput",children:[Object(d.jsx)(f.a.Label,{}),Object(d.jsx)(f.a.Control,{type:"text",placeholder:"Enter answer",value:this.state.currentAnswer,onChange:this.handleChange}),Object(d.jsxs)(f.a.Text,{className:"text-muted worth",children:["This question is worth:"," ",this.calculatePoints(l)," points"]})," ",s?Object(d.jsxs)("div",{className:"text-center",children:[" ",Object(d.jsx)("p",{className:"choices",children:"Here are the choices:"})," ",s]}):Object(d.jsx)(d.Fragment,{})]})," ",Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)(b.a,{className:"button submit-btn",variant:"primary",type:"submit",children:"Submit"})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:o?Object(d.jsx)(y,{currentQuestion:l}):Object(d.jsxs)("div",{className:"text-center",children:[" ",Object(d.jsx)(b.a,{onClick:this.handleHint,className:"button",variant:"warning",type:"submit",children:"Need a Hint? (50 points)"})]})})]}):Object(d.jsx)(v,{status:!0,userAnswers:c,points:i,triviaQuestions:t,playerName:n})]})]})}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={currentQuestionNumber:0},e.nextQuestion=function(){e.setState((function(e){return{currentQuestionNumber:e.currentQuestionNumber+1}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e,t,n=this.props,a=n.triviaQuestions,s=n.playerName,r=this.state.currentQuestionNumber,c=a[r];if(c){e=Object(x.a)(c.incorrect_answers);var i=Math.floor(Math.random()*(e.length+1));e.splice(i,0,c.correct_answer),t=e.map((function(e){return Object(d.jsx)("p",{className:"choices",dangerouslySetInnerHTML:{__html:e}},e)}))}return Object(d.jsx)("div",{children:Object(d.jsx)(w,{currentQuestionNumber:r,triviaQuestions:a,playerName:s,allAnswersMapped:t,handleNextQuestion:this.nextQuestion})})}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("h3",{children:["Sorry, there's nothing found at: ",this.props.location.pathname]})}}]),n}(a.Component),Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={questions:{},playerName:""},e.handleNameChange=function(t){e.setState({playerName:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://opentdb.com/api.php?amount=15").then((function(e){return e.json()})).then((function(t){console.log("data",t.results),e.setState({questions:t.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.questions,n=e.playerName;return console.log(n),Object(d.jsx)("main",{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{handleNameChange:this.handleNameChange,playerName:n})}),Object(d.jsx)(j.a,{exact:!0,path:"/game",children:Object(d.jsx)(C,{triviaQuestions:t,playerName:n})}),Object(d.jsx)(j.a,{exact:!0,path:"/summary",children:Object(d.jsx)(v,{playerName:n})}),Object(d.jsx)(j.a,{path:"*",component:A})]})})}}]),n}(a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};n(45);c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(Q,{})})}),document.getElementById("root")),S()}},[[46,1,2]]]);
//# sourceMappingURL=main.d02439a5.chunk.js.map