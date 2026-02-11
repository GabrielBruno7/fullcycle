import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";
import { success } from "zod";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }

    console.log("Unexpected Error");

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}
