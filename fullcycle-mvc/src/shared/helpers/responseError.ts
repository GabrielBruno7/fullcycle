import { Response } from 'express'

export function responseError(res: Response, message: string, status = 400) {
    return res.status(status).json({
        success: false,
        message
    })
}
