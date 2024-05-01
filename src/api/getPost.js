import axios from "axios"

export const fetchPosts=async(postID)=>{
    const URL = `http://localhost:9001`;
    try{
        const payload = await axios.get(`${URL}/post/${postID}`)
        console.log(payload.data)

    }catch(err){
        console.log(err)
    }
}