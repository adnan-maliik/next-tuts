import { getSubscribersListHandler, newsLetterSubscribeHanlder } from "../../handlers/home";

async function hanlder(req,res) {
   const {method} = req
   switch (method) {
    case 'GET': return getSubscribersListHandler(req,res)
    case 'POST': return newsLetterSubscribeHanlder(req,res)
    default:
        console.log('default case'); 
        break
    
   }
}

export default hanlder