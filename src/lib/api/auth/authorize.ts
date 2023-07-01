import { handleAPIPost } from "../RESTFunctions";
import { hashPassword } from "./hashPassword";
import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";

export async function authorize(email: string, password: string) {
    const hashed = hashPassword(password)
    const payload = {
        email,
        password: hashed
    }

    const authResponse = await handleAPIPost(payload, PUBLIC_API_GATEWAY_URL + "/auth")
    return authResponse;
}