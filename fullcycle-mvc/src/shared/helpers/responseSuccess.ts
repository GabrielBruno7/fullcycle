import { Response } from 'express'

export function responseSuccess(res: Response, data: unknown, message: string, status = 200) {
    return res.status(status).json({
        success: true,
        message,
        data
    })
}
