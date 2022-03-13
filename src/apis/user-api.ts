import { baseApi } from '@services/api'
import { User } from 'src/models/response/user.model'
import { urls } from './exports'


export const test = async () : Promise<User[]> => {

    var users : User[] = []

    try{
        let response = await baseApi({
            url: urls.users,
            method: 'GET'
        })
        
        users = response.data.map(user => new User(user))
        return users
       
    }
    catch(err) {
        console.log(err)
    }

    
    

 
    return users
}