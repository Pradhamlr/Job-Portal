import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller To Manage Clerk User
export const clerkWebhooks = async (req, res) => {
    try {

         // Create Svix Instance
         const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

         // Verifying Headers
         await whook.verify(JSON.stringify(req.body), {
             "svix-id": req.headers["svix-id"],
             "svix-timestamp": req.headers["svix-timestamp"],
             "svix-signature": req.headers["svix-signature"]
         })

         // Getting Data From Request Body
         const { data, type } = req.body

         const firstName = data.first_name || ""
         const lastName = data.last_name || ""
         const fullName = lastName ? `${firstName} ${lastName}` : firstName
       

         // Switch Cases 
         switch (type) {
             case 'user.created': {
                 const userData = {
                     _id: data.id,
                     email: data.email_addresses[0].email_address,
                     name: fullName,
                     image: data.image_url,
                     resume: ''
                 };

                 await User.create(userData);
                 res.json({});
                 break;
             }

             case 'user.updated': {
                 const userData = {
                     email: data.email_addresses[0].email_address,
                     name: fullName,
                     image: data.image_url
                 };

                 await User.findByIdAndUpdate(data.id, userData);
                 res.json({});
                 break;
             }

             case 'user.deleted': {
                 await User.findByIdAndDelete(data.id);
                 res.json({});
                 break;
             }

             default:
                 break;
         }

     } catch (error) {
         console.log(error.message);
         res.json({ Success: false, message: 'Webhooks Error' });
     }
 };
