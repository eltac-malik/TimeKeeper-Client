import {object,string} from 'yup'


const reg1Val = object(
    {
        name:string().required().min(3),
        surname:string().required().min(3)
    }
)


export default reg1Val