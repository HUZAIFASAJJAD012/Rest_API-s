const  express = require("express");
const app=express();
const  PORT = 8000;
const  users=require("./MOCK_DATA.json");

app.get("/api/users/:id",(req,res)=>{
const id=Number(req.params.id);
const  user=users.find(ap => ap.id===id);
res.json(user);
})

app.get(`/user`,(req,res)=>{
  const html=`
  
  <ul>
  ${users.map(
    user=> `<li>${user.first_name}  </li>`
  ).join("")
  
  }
  </ul>
  
  
  `
  res.send(html);
    
    })
app.listen(PORT,()=> console.log(`sever is started at port ${8000}`))