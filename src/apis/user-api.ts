import BaseAxios from '@services/api'
import { User } from 'src/models/response/user.model'
import * as urls from './urls'

export const test = async () : Promise<User[]> => {

    var users : User[] = []

    try{
        let response: any[] = await BaseAxios({
            url: urls.users,
            method: 'GET'
        })

        let keys = Object.keys(response)
        keys.forEach(key=>{
            users.push(new User(response[key]))
        })
        // console.log(users)
       
    }
    catch(err) {
        console.log(err)
    }

    
    

 
    return users
}