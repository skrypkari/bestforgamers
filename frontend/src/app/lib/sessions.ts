import 'server-only'
import { jwtVerify } from 'jose'


const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

// export async function encrypt(payload: any) {
//
//     if (typeof payload !== 'object' || payload === null) {
//         throw new TypeError('Payload must be a non-null object');
//     }
//
//     return new SignJWT(payload)
//         .setProtectedHeader({ alg: 'HS256' })
//         .setIssuedAt()
//         .setExpirationTime('7d')
//         .sign(encodedKey)
// }

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        console.log('Failed to verify session :', error)
    }
}

// export async function createSession(userId: string) {
//     const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
//     const session = await encrypt({userId, expiresAt})
//
//     cookies().set('session', session, {httpOnly: true, secure: true, sameSite: 'lax', path: '/', expires: 24 * 60 * 60 * 1000})
//     redirect('/admin')
// }
//
// export async function verifySession() {
//     const cookie = cookies().get('session')?.value;
//     const session = await decrypt(cookie);
//     if (!session?.userId){
//         redirect('/login');
//     }
//     return { userId: session.userId }
// }
//
// export async function deleteSession() {
//     cookies().delete('session')
//     redirect('/admin/login')
// }