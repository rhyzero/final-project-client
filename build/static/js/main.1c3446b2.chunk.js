(this["webpackJsonpstarter-client"]=this["webpackJsonpstarter-client"]||[]).push([[0],{56:function(e,t,s){},57:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var a={};s.r(a),s.d(a,"allCampuses",(function(){return ye})),s.d(a,"campus",(function(){return ve})),s.d(a,"allStudents",(function(){return Se})),s.d(a,"student",(function(){return Ne}));var n=s(1),i=s.n(n),c=s(21),r=s.n(c),l=(s(56),s(57),s(5)),d=s(109),o=s(106),j=s(107),h=s(108),p=s(104),b=s(4),u=s(0);const m=Object(p.a)((e=>({root:{flexGrow:1},title:{flexGrow:1,textAlign:"left",fontType:"bold",fontFamily:"sans-serif",fontSize:"35px",color:"darkblue"},appBar:{backgroundColor:"#fcb6bb",shadows:["none"]},greeting:{display:"flex",justifyContent:"center",backgroundColor:"white",width:"50%",margin:"auto"},links:{textDecoration:"none"}})));var x=()=>{const e=m();return Object(u.jsx)("div",{className:e.root,children:Object(u.jsx)(d.a,{position:"static",elevation:0,className:e.appBar,children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(j.a,{variant:"h6",className:e.title,color:"inherit",children:"Campus Management System"}),Object(u.jsx)(b.b,{className:e.links,to:"/",children:Object(u.jsx)(h.a,{variant:"contained",color:"primary",style:{marginRight:"10px"},children:"Home"})}),Object(u.jsx)(b.b,{className:e.links,to:"/campuses",children:Object(u.jsx)(h.a,{variant:"contained",color:"primary",style:{marginRight:"10px"},children:"All Campuses"})}),Object(u.jsx)(b.b,{className:e.links,to:"/students",children:Object(u.jsx)(h.a,{variant:"contained",color:"primary",children:"All Students"})})]})})})};var O=()=>Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Home Page"}),Object(u.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(u.jsxs)("div",{className:"all-campuses",style:{backgroundColor:"white",paddingLeft:64,paddingRight:64,paddingBottom:64,display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[Object(u.jsx)("h2",{style:{marginBottom:24},children:"View Campuses"}),Object(u.jsx)(b.b,{to:"/campuses",style:{width:128,height:36,alignSelf:"center",marginBottom:32},children:Object(u.jsx)("button",{style:{width:128,height:36,alignSelf:"center",marginBottom:32},children:"Campuses"})}),Object(u.jsx)("img",{src:"https://images.unsplash.com/photo-1622604647545-0cada2f34470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",style:{width:480}})]}),Object(u.jsxs)("div",{className:"all-students",style:{backgroundColor:"white",paddingLeft:64,paddingRight:64,paddingBottom:64,display:"flex",flexDirection:"column"},children:[Object(u.jsx)("h2",{children:"View Students"}),Object(u.jsx)(b.b,{to:"/students",style:{width:128,height:36,alignSelf:"center",marginBottom:32},children:Object(u.jsx)("button",{style:{width:128,height:36,alignSelf:"center",marginBottom:32},children:"Students"})}),Object(u.jsx)("img",{src:"https://sterlinggroupunited.com/wp-content/uploads/2022/03/cheerful-college-students-walking-out-campus-together-posing-outdoors-camera-having-break-classes-free-space-175174081.jpg",style:{width:480}})]})]})]});var g=()=>Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(O,{})]}),f=s(9);const y="FETCH_ALL_CAMPUSES",C="DELETE_CAMPUS",v="FETCH_CAMPUS",S="FETCH_ALL_STUDENTS",w="ADD_STUDENT",N="DELETE_STUDENT",A="EDIT_STUDENT",R="FETCH_STUDENT",D=e=>({type:N,payload:e}),U=s(67),I=()=>async e=>{try{let s=await U.get("/api/campuses");e((t=s.data,{type:y,payload:t}))}catch(s){console.error(s)}var t},k=e=>async t=>{try{let a=await U.get("/api/campuses/".concat(e));t((s=a.data,{type:v,payload:s}))}catch(a){console.error(a)}var s},T=e=>async t=>{try{await U.delete("/api/campuses/".concat(e)),t({type:C,payload:e})}catch(s){console.error(s)}},E=()=>async e=>{try{let s=await U.get("/api/students");e((t=s.data,{type:S,payload:t}))}catch(s){console.error(s)}var t},L=e=>async t=>{try{let s=await U.post("/api/students",e);return t((e=>({type:w,payload:e}))(s.data)),s.data}catch(s){console.error(s)}},W=e=>async t=>{try{await U.delete("/api/students/".concat(e)),t(D(e))}catch(s){console.error(s)}},B=e=>async t=>{try{t((e=>({type:A,payload:e}))(await U.put("/api/students/".concat(e.id),e)))}catch(s){console.error(s)}},F=e=>async t=>{try{let a=await U.get("/api/students/".concat(e));t((s=a.data,{type:R,payload:s}))}catch(a){console.error(a)}var s};var M=e=>{const{deleteCampus:t}=e;return e.allCampuses.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"All Campuses"}),e.allCampuses.map((e=>Object(u.jsxs)("div",{children:[Object(u.jsx)(b.b,{to:"/campus/".concat(e.id),children:Object(u.jsx)("h2",{children:e.name})}),Object(u.jsxs)("h4",{children:["campus id: ",e.id]}),Object(u.jsx)("img",{src:e.imageURL,alt:"User profile",style:{width:175,height:175,objectFit:"cover",borderRadius:100}}),Object(u.jsx)("p",{children:e.address}),Object(u.jsx)("p",{children:e.description}),Object(u.jsx)("button",{onClick:()=>t(e.id),children:"Delete"}),Object(u.jsx)("hr",{})]},e.id))),Object(u.jsx)("br",{}),Object(u.jsx)(b.b,{to:"/newcampus",children:Object(u.jsx)("button",{children:"Add New Campus"})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"There are no campuses."}),Object(u.jsx)(b.b,{to:"/newcampus",children:Object(u.jsx)("button",{children:"Add New Campus"})})]})};var V=e=>{const{students:t,deleteStudent:s}=e;return t.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"All Students"}),t.map((e=>{let t=e.firstname+" "+e.lastname;return Object(u.jsxs)("div",{children:[Object(u.jsx)(b.b,{to:"/student/".concat(e.id),children:Object(u.jsx)("h2",{children:t})}),Object(u.jsx)("img",{src:e.imageURL,alt:"User Profile",style:{width:175,height:175,objectFit:"cover",borderRadius:100}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:()=>s(e.id),children:"Delete"}),Object(u.jsx)("hr",{})]},e.id)})),Object(u.jsx)("br",{}),Object(u.jsx)(b.b,{to:"/newstudent",children:Object(u.jsx)("button",{children:"Add New Student"})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"There are no students."}),Object(u.jsx)(b.b,{to:"newstudent",children:Object(u.jsx)("button",{children:"Add New Student"})})]})};const H=Object(p.a)((()=>({formContainer:{width:"500px",backgroundColor:"#f0f0f5",borderRadius:"5px",margin:"auto"},title:{flexGrow:1,textAlign:"left",textDecoration:"none"},customizeAppBar:{backgroundColor:"#11153e",shadows:["none"]},formTitle:{backgroundColor:"#c5c8d6",marginBottom:"15px",textAlign:"center",borderRadius:"5px 5px 0px 0px",padding:"3px"}})));var P=e=>{const{handleChange:t,handleSubmit:s,handleChangeNames:a}=e,n=H();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"New Student"}),Object(u.jsx)("div",{className:n.root,children:Object(u.jsxs)("div",{className:n.formContainer,children:[Object(u.jsx)("div",{className:n.formTitle,children:Object(u.jsx)(j.a,{style:{fontWeight:"bold",fontFamily:"Courier, sans-serif",fontSize:"20px",color:"#11153e"},children:"Add a Student"})}),Object(u.jsxs)("form",{style:{textAlign:"center"},onSubmit:e=>s(e),children:[Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["First Name:"," "]}),Object(u.jsx)("input",{type:"text",name:"firstname",onChange:e=>a(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Last Name:"," "]}),Object(u.jsx)("input",{type:"text",name:"lastname",onChange:e=>a(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Email:"," "]}),Object(u.jsx)("input",{type:"text",name:"email",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Image URL:"," "]}),Object(u.jsx)("input",{placeholder:"(optional)",type:"text",name:"imageUrl",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["GPA:"," "]}),Object(u.jsx)("input",{type:"number",step:"0.1",name:"gpa",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Campus Id:"," "]}),Object(u.jsx)("input",{type:"number",name:"campusId",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]})})]})},_=s(46);var z=e=>{const{campus:t,deleteCampus:s,deleteStudent:a}=e,n=Object(_.useHistory)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:t.name}),Object(u.jsx)("img",{src:t.imageURL,alt:"Campus building",style:{width:175,height:175,objectFit:"cover",borderRadius:100}}),Object(u.jsx)("p",{children:t.address}),Object(u.jsx)("p",{children:t.description}),Object(u.jsx)(b.b,{to:"/campus/".concat(t.id,"/edit"),children:Object(u.jsx)("button",{children:"Edit Campus"})}),Object(u.jsx)("button",{onClick:()=>{s(t.id),n.push("/campuses")},children:"Delete"}),t.students.map((e=>{let s=e.firstname+" "+e.lastname;return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{children:"Students"}),Object(u.jsx)(b.b,{to:"/student/".concat(e.id),children:Object(u.jsx)("h2",{children:s})}),Object(u.jsx)("button",{onClick:()=>{a(t.id,e.id)},children:"Remove Student"})]},e.id)}))]})};var G=e=>{const{student:t,deleteStudent:s}=e;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:t.firstname+" "+t.lastname}),Object(u.jsx)("img",{src:t.imageURL,alt:"User Profile",style:{width:175,height:175,objectFit:"cover",borderRadius:100}}),Object(u.jsx)("h3",{children:t.campus?Object(u.jsx)(b.b,{to:"/campus/".concat(t.campus.id),children:Object(u.jsx)("p",{children:t.campus.name})}):"This student is not enrolled in any college."}),Object(u.jsx)(b.b,{to:"/student/".concat(t.id,"/edit"),children:Object(u.jsx)("button",{children:"Edit Student"})}),Object(u.jsx)(b.b,{to:"/students",children:Object(u.jsx)("button",{onClick:()=>{s(t.id)},children:"Delete Student"})})]})};class Y extends n.Component{componentDidMount(){this.props.fetchAllCampuses()}render(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(M,{allCampuses:this.props.allCampuses,deleteCampus:this.props.deleteCampus})]})}}var q=Object(l.withRouter)(Object(f.b)((e=>({allCampuses:e.allCampuses})),(e=>({fetchAllCampuses:()=>e(I()),deleteCampus:t=>e(T(t))})))(Y));class J extends n.Component{componentDidMount(){this.props.fetchCampus(this.props.match.params.id)}render(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(z,{campus:this.props.campus,deleteCampus:this.props.deleteCampus,deleteStudent:this.props.deleteStudent})]})}}var Z=Object(f.b)((e=>({campus:e.campus})),(e=>({fetchCampus:t=>e(k(t)),deleteCampus:t=>e(T(t))})))(J);class X extends n.Component{componentDidMount(){this.props.fetchAllStudents()}render(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(V,{students:this.props.allStudents,deleteStudent:this.props.deleteStudent})]})}}var K=Object(l.withRouter)(Object(f.b)((e=>({allStudents:e.allStudents})),(e=>({fetchAllStudents:()=>e(E()),deleteStudent:t=>e(W(t))})))(X));class Q extends n.Component{componentDidMount(){this.props.fetchStudent(this.props.match.params.id)}render(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(G,{student:this.props.student,deleteStudent:this.props.deleteStudent})]})}}var $=Object(f.b)((e=>({student:e.student})),(e=>({fetchStudent:t=>e(F(t)),deleteStudent:t=>e(W(t))})))(Q);const ee=/\d/;class te extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleChangeNames=e=>{this.setState({[e.target.name]:e.target.value}),!0===ee.test(e.target.value)&&(alert("Names must not contain numbers"),e.target.value=e.target.value.slice(0,-1))},this.handleSubmit=async e=>{if(e.preventDefault(),""===this.state.firstname||""===this.state.lastname||""===this.state.email)return void alert("You have not filled in all inputs.");if(!this.state.email.includes("@"))return void alert("Email addresses must contain an @");let t={firstname:this.state.firstname,lastname:this.state.lastname,campusId:this.state.campusId,email:this.state.email,imageURL:"".concat(""===this.state.imageUrl?"https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png":this.state.imageUrl),gpa:this.state.gpa},s=await this.props.addStudent(t);this.setState({firstname:"",lastname:"",email:"",imageURL:"",gpa:"",campusId:null,redirect:!0,redirectId:s.id})},this.state={firstname:"",lastname:"",email:"",imageUrl:"",gpa:null,campusId:null,redirect:!1,redirectId:null}}componentWillUnmount(){this.setState({redirect:!1,redirectId:null})}render(){return this.state.redirect?Object(u.jsx)(l.Redirect,{to:"/student/".concat(this.state.redirectId)}):Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(P,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleChangeNames:this.handleChangeNames})]})}}var se=Object(f.b)(null,(e=>({addStudent:t=>e(L(t))})))(te);const ae=Object(p.a)((()=>({formContainer:{width:"500px",backgroundColor:"#f0f0f5",borderRadius:"5px",margin:"auto"},title:{flexGrow:1,textAlign:"left",textDecoration:"none"},customizeAppBar:{backgroundColor:"#11153e",shadows:["none"]},formTitle:{backgroundColor:"#c5c8d6",marginBottom:"15px",textAlign:"center",borderRadius:"5px 5px 0px 0px",padding:"3px"}})));var ne=e=>{const{handleChange:t,handleSubmit:s}=e,a=ae();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"New Campus"}),Object(u.jsx)("div",{className:a.root,children:Object(u.jsxs)("div",{className:a.formContainer,children:[Object(u.jsx)("div",{className:a.formTitle,children:Object(u.jsx)(j.a,{style:{fontWeight:"bold",fontFamily:"Courier, sans-serif",fontSize:"20px",color:"#11153e"},children:"Add a Campus"})}),Object(u.jsxs)("form",{style:{textAlign:"center"},onSubmit:e=>s(e),children:[Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Name:"," "]}),Object(u.jsx)("input",{type:"text",name:"name",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Image URL:"," "]}),Object(u.jsx)("input",{placeholder:"(optional)",type:"text",name:"campusId",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Address:"," "]}),Object(u.jsx)("input",{type:"text",name:"campusId",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Description:"," "]}),Object(u.jsx)("textarea",{placeholder:"Enter Description Here",type:"text",name:"description",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]})})]})};class ie extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleSubmit=async e=>{e.preventDefault();let t={name:this.state.name,address:this.state.address,description:this.state.description};if(""===this.state.name||""===this.state.address)return void alert("You have not filled in all required inputs.");let s=await this.props.addCampus(t);this.setState({name:"",address:"",description:"",redirect:!0,redirectId:s.id})},this.state={name:"",address:"",description:""}}componentWillUnmount(){this.setState({redirect:!1,redirectId:null})}render(){return this.state.redirect?Object(u.jsx)(l.Redirect,{to:"/campus/".concat(this.state.redirectId)}):Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(ne,{handleChange:this.handleChange,handleSubmit:this.handleSubmit})]})}}var ce=Object(f.b)(null,(e=>({addCampus:t=>e((e=>async t=>{try{let s=await U.post("/api/campuses",e);return t((e=>({type:"ADD_CAMPUS",payload:e}))(s.data)),s.data}catch(s){console.error(s)}})(t))})))(ie);const re=Object(p.a)((()=>({formContainer:{width:"500px",backgroundColor:"#f0f0f5",borderRadius:"5px",margin:"auto"},title:{flexGrow:1,textAlign:"left",textDecoration:"none"},customizeAppBar:{backgroundColor:"#11153e",shadows:["none"]},formTitle:{backgroundColor:"#c5c8d6",marginBottom:"15px",textAlign:"center",borderRadius:"5px 5px 0px 0px",padding:"3px"}})));var le=e=>{const{handleSubmit:t,handleChange:s,campus:a}=e,n=re();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Edit Campus Information"}),Object(u.jsx)("div",{className:n.root,children:Object(u.jsxs)("div",{className:n.formContainer,children:[Object(u.jsx)("div",{className:n.formTitle,children:Object(u.jsx)(j.a,{style:{fontWeight:"bold",fontFamily:"Courier, sans-serif",fontSize:"20px",color:"#11153e"},children:"Edit Campus"})}),Object(u.jsxs)("form",{style:{textAlign:"center"},onSubmit:e=>t(e),children:[Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Name:"," "]}),Object(u.jsx)("input",{type:"text",name:"name",defaultValue:a.name,onChange:e=>s(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Image URL:"," "]}),Object(u.jsx)("input",{type:"text",name:"campusId",defaultValue:a.imageURL,placeholder:"(Optional)",onChange:e=>s(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Address:"," "]}),Object(u.jsx)("input",{type:"text",name:"campusId",defaultValue:a.address,onChange:e=>s(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Description:"," "]}),Object(u.jsx)("textarea",{type:"text",name:"description",defaultValue:a.description,placeholder:"Enter Description Here",onChange:e=>s(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]})})]})};class de extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleSubmit=async e=>{e.preventDefault();let t={name:"".concat(this.state.name?this.state.name:this.props.match.params.name),address:"".concat(this.state.address?this.state.address:this.props.match.params.address),description:"".concat(this.state.description?this.state.description:this.props.match.params.description),id:this.props.match.params.id};await this.props.editCampus(t)},this.state={name:"",address:"",description:""}}componentDidMount(){this.props.fetchCampus(this.props.match.params.id),this.state.name=this.props.campus.name,this.state.address=this.props.campus.address,this.state.description=this.props.campus.description}render(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(le,{campus:this.props.campus,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editCampus:this.props.editCampus})]})}}var oe=Object(f.b)((e=>({campus:e.campus})),(e=>({fetchCampus:t=>e(k(t)),editCampus:t=>e((e=>async t=>{try{console.log(e),t((e=>({type:"EDIT_CAMPUS",payload:e}))(await U.put("/api/campuses/".concat(e.id),e)))}catch(s){console.error(s)}})(t))})))(de);const je=Object(p.a)((()=>({formContainer:{width:"500px",backgroundColor:"#f0f0f5",borderRadius:"5px",margin:"auto"},title:{flexGrow:1,textAlign:"left",textDecoration:"none"},customizeAppBar:{backgroundColor:"#11153e",shadows:["none"]},formTitle:{backgroundColor:"#c5c8d6",marginBottom:"15px",textAlign:"center",borderRadius:"5px 5px 0px 0px",padding:"3px"}})));var he=e=>{const{handleChange:t,handleSubmit:s,handleChangeNames:a,student:n}=e,i=je();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Edit Student"}),Object(u.jsx)("div",{className:i.root,children:Object(u.jsxs)("div",{className:i.formContainer,children:[Object(u.jsx)("div",{className:i.formTitle,children:Object(u.jsxs)(j.a,{style:{fontWeight:"bold",fontFamily:"Courier, sans-serif",fontSize:"20px",color:"#11153e"},children:[n.firstname," ",n.lastname]})}),Object(u.jsxs)("form",{style:{textAlign:"center"},onSubmit:e=>s(e),children:[Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["First Name:"," "]}),Object(u.jsx)("input",{type:"text",name:"firstname",defaultValue:n.firstname,onChange:e=>a(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Last Name:"," "]}),Object(u.jsx)("input",{type:"text",name:"lastname",defaultValue:n.lastname,onChange:e=>a(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Email:"," "]}),Object(u.jsx)("input",{type:"text",name:"email",onChange:e=>t(e),defaultValue:n.email}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Image URL:"," "]}),Object(u.jsx)("input",{type:"text",name:"imageUrl",defaultValue:n.imageURL?n.imageURL:"Optional",onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["GPA:"," "]}),Object(u.jsx)("input",{type:"number",step:"0.1",name:"gpa",defaultValue:n.gpa,onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{style:{color:"#11153e",fontWeight:"bold"},children:["Campus Id:"," "]}),Object(u.jsx)("input",{type:"number",name:"campusId",defaultValue:n.campusId,onChange:e=>t(e)}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]})})]})};const pe=/\d/;class be extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleChangeNames=e=>{this.setState({[e.target.name]:e.target.value}),!0===pe.test(e.target.value)&&(alert("Names must not contain numbers"),e.target.value=e.target.value.slice(0,-1))},this.handleSubmit=async e=>{if(e.preventDefault(),""===this.state.firstname||""===this.state.lastname||""===this.state.email||void 0===this.state.email)return void alert("You have not filled in all required inputs.");if(!this.state.email.includes("@"))return void alert("Email addresses must contain an @");let t={firstname:"".concat(this.state.firstname?this.state.firstname:this.props.match.params.firstname),lastname:"".concat(this.state.lastname?this.state.lastname:this.props.match.params.lastname),campusId:"".concat(this.state.campusId?this.state.campusId:this.props.match.params.campusId),email:"".concat(this.state.email?this.state.email:this.props.match.params.email),imageURL:"".concat(""===this.state.imageUrl?"https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png":this.state.imageUrl),gpa:"".concat(this.state.gpa?this.state.gpa:this.props.match.params.gpa),id:this.props.match.params.id};await this.props.editStudent(t)},this.state={firstname:"",lastname:"",email:"",imageUrl:"",gpa:null,campusId:null,redirect:!1,redirectId:null}}componentDidMount(){this.props.fetchStudent(this.props.match.params.id),this.state.firstname=this.props.student.firstname,this.state.lastname=this.props.student.lastname,this.state.campusId=this.props.student.campusId,this.state.email=this.props.student.email,this.state.imageURL=this.props.student.imageURL,this.state.gpa=this.props.student.gpa}render(){return this.state.redirect?Object(u.jsx)(l.Redirect,{to:"/students"}):Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(he,{student:this.props.student,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleChangeNames:this.handleChangeNames,editStudent:this.props.editStudent})]})}}var ue=Object(f.b)((e=>({student:e.student})),(e=>({fetchStudent:t=>e(F(t)),editStudent:t=>e(B(t))})))(be);var me=()=>Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l.Switch,{basename:"/final-project-client",children:[Object(u.jsx)(l.Route,{exact:!0,path:"/",component:g}),Object(u.jsx)(l.Route,{exact:!0,path:"/campuses",component:q}),Object(u.jsx)(l.Route,{exact:!0,path:"/campus/:id",component:Z}),Object(u.jsx)(l.Route,{exact:!0,path:"/students",component:K}),Object(u.jsx)(l.Route,{exact:!0,path:"/newstudent",component:se}),Object(u.jsx)(l.Route,{exact:!0,path:"/newcampus",component:ce}),Object(u.jsx)(l.Route,{exact:!0,path:"/student/:id",component:$}),Object(u.jsx)(l.Route,{exact:!0,path:"/campus/:id/edit",component:oe}),Object(u.jsx)(l.Route,{exact:!0,path:"/student/:id/edit",component:ue})]})});var xe=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,111)).then((t=>{let{getCLS:s,getFID:a,getFCP:n,getLCP:i,getTTFB:c}=t;s(e),a(e),n(e),i(e),c(e)}))},Oe=s(32),ge=s(47),fe=s(48);var ye=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.payload;case C:return e.filter((e=>e.id!==t.payload));default:return e}};const Ce={students:[]};var ve=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;return t.type===v?t.payload:e};var Se=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload;case w:return[...e,t.payload];case N:return e.filter((e=>e.id!==t.payload));case A:return e.map((e=>e.id===t.payload.id?t.payload:e));default:return e}};const we={campus:{}};var Ne=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;return t.type===R?t.payload:e};const Ae=Object(Oe.b)(a),Re=Object(ge.createLogger)({collapsed:!0});var De=Object(Oe.c)(Ae,Object(Oe.a)(fe.a,Re));r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f.a,{store:De,children:Object(u.jsx)(b.a,{children:Object(u.jsx)(me,{})})})}),document.getElementById("root")),xe()}},[[87,1,2]]]);
//# sourceMappingURL=main.1c3446b2.chunk.js.map