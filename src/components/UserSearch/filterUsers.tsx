import { User } from '../../models/UserModel'

export const getFilteredUsers = (arr:User[], value:string) =>{
    return arr.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
  }
