import {appendFileSync} from "fs"
import {readFile} from "fs/promises"
import {join} from "path"

const filePath= join(process.cwd() , 'mock','subscribers.csv')
async function getSubscribersListHandler(req,res) {
    try {
        const data=await readFile(filePath,'utf-8')
        let list=data.split('\n')
        console.log('reading file....');
        list.pop()
        res.status(200).json(list)
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
}
async function newsLetterSubscribeHanlder(req,res) {
    try {
        const filePath= join(process.cwd() , 'mock','subscribers.csv')
        appendFileSync(filePath,req.body.name + `, ${req.body.email}\n`)
        res.status(201).json()
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
}


export {
    getSubscribersListHandler,
    newsLetterSubscribeHanlder
}