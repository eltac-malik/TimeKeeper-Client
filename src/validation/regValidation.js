import {object,string} from 'yup'


const reg1Val = object(
    {
        name:string().required("Bos saxlamayin").min(3),
        surname:string().required("Bos saxlamayin").min(3)
    }
)


export default reg1Val