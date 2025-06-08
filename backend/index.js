import express from 'express'
import userRouter from "./routes/user.routes.js"
import commentRouter from "./routes/comment.routes.js"
import postRouter from "./routes/post.routes.js"
import connectDb from './lib/connectDb.js'
import webhookrouter from './routes/webhook.route.js'


 const app =express()

 app.use("/webhooks",webhookrouter)
 app.use(express.json())


//  app.get("/test",(req,res)=>{
//    res.status(200).send("it is works")
//  })


app.use("/users",userRouter)
app.use("/comment",commentRouter)
app.use("/post",postRouter)


app.use((error,req,res,next)=>{
  res.status(error.status || 500);

  res.json({
    message:error.message || "something went wrong!",
    status:error.status,
    stack:error.stack
  })



})



 app.listen(3001,()=>{
   connectDb()
    console.log("server runing")

 })
 