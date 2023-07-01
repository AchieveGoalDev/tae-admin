import { sha256 } from "js-sha256"

import { PUBLIC_SALT } from "$env/static/public"

export function hashPassword(toHash: string) {
    const hashed = sha256.create()
    hashed.update(toHash + PUBLIC_SALT)
    return hashed.hex()
}