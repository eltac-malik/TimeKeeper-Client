import {object,string} from 'yup'

let contactVal = object(
    {
        name:string().required(),
        email:string().required(),
        subject:string().required(),
        message:string().required().min(20)
    }
)

export default contactVal