import {object,string} from 'yup'
import * as Yup from 'yup';

const reg2Val = object(
    {
        regusr:string().required(),
        regmail:string().required(),
        regphone:string().required(),
        regpsw:string().required(),
        regcpsw:Yup.string()
        .oneOf([Yup.ref('regpsw'), null], 'Passwords must match')
    }
)


export default reg2Val