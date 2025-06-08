  import { Webhook } from "svix";
  
  export const clerkwebhook=async (req,res)=>{

const Webhook_SECRET=process.env.CLERK_WEBHOOK_SECRET;


if(!Webhook_SECRET){
    throw new Error("Webhook secret key needed ")
}

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(Webhook_SECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message:"Webhook verfication failed"
        });
    }
console.log(evt.data,"gooooooogle")


   if (evt.type === 'user.created') {
  const newUser=new User({
   
         clerkUserId:evt.data.id,
         username:evt.data.username || evt.data.email_address[0].email_address,
         email:evt.data.email_address[0].email_address,
         img:evt.data.profile_img_url
    
   })
   await newUser.save()
 }

 return res.status(200).json({
    message:"webhook recived"
 })
}