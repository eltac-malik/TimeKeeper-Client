import {object,string} from 'yup'
import * as Yup from 'yup';

const reg2Val = object(
    {
        regusr:string().required().min(8),
        regmail:string().required().email(),
        regphone:string().required(),
        regpsw:string().required().min(8),
        regcpsw:Yup.string()
        .oneOf([Yup.ref('regpsw'), null], 'Passwords must match')
    }
)


export default reg2Val