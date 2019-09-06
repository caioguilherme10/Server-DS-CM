import * as express from 'express'
import * as jwt from 'jsonwebtoken'

export function expressAuthentication(request: express.Request, securityName: string, scopes?: string[]): Promise<any> {
    if (securityName === 'api_token') {
        const obj = request.headers.authorization
        const token = obj.replace("Bearer ", "")
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.TOKEN_SECRET , function (err: any, decoded: any) {
                if (err) {
                   reject(err)
                } else {
                    resolve(decoded)
                }
            })
        })
    }
}