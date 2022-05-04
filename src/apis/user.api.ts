import { baseApi } from '@services/api'
import { User } from 'src/models/response/user.model'
import { paths } from './exports'


export const getUsers = () => {
    return baseApi<User[]>({
        endpoint: 'https://613b9431110e000017a456c5.mockapi.io/api/v1',
        path: paths.getUsers,
        method: 'GET',
    })
}