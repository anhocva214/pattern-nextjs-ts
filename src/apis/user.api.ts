import { User } from 'src/models/response/user.model'
import { axiosClient } from './axios-client'
import { paths } from './exports'


export const getUsers = () => {
    return axiosClient<User[]>({
        baseURL: 'https://613b9431110e000017a456c5.mockapi.io/api/v1',
        url: paths.getUsers,
        method: 'GET',
    })
}