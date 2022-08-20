import {object,string} from 'yup'
import * as Yup from 'yup';

const reg2Val = object(
    {
        regusr:string().required("Bos saxlamayin").min(8),
        regmail:string().required("Bos saxlamayin").email(),
        regphone:string().required("Bos saxlamayin"),
        regpsw:string().required("Bos saxlamayin").min(8),
        regcpsw:Yup.string()
        .oneOf([Yup.ref('regpsw'), null], 'Passwords must match')
    }
)


export default reg2Val