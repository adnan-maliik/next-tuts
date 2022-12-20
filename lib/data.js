import fs from "fs/promises"


export const readPostsJson=async ()=>{
    try {
        const buffer= await fs.readFile(process.cwd()+'/mock/db.json')
        return JSON.parse(buffer)
    } catch (error) {
        throw Error(error)
    }
}