import {FormState, SignInFormSchema} from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import axios from "axios";
import {cookies} from "next/headers";



export async function login(state: FormState, formData: FormData) {
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();

    const validatedFields = SignInFormSchema.safeParse({
        username: username,
        password: password
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    try{
        const req = await axios.post('http://localhost:3000/api/auth/login', {username: username, password: password});
        if(req.data.message){
            return {
                message: req.data.message
            }
        } else {
            cookies().set('session', req.data.token, {httpOnly: true, secure: true, sameSite: 'lax', path: '/', expires: 24 * 60 * 60 * 1000})
            redirect('/admin')
        }
    }catch (e){
        return{
            message: 'Server Error!'
        }
    }
}
