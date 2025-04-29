import { NextFunction, Request, Response } from 'express';
import { ErrorResponse, SendResponse } from '../utils/responsehelper';
import { STATUS_CODE } from '../utils/enum';
import jwt from 'jsonwebtoken';
import { AUTH_MESSAGE } from '../utils/messages';

// token management
export const authorizeToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token as string;
  if (!token) {
    return ErrorResponse(res, STATUS_CODE.UNAUTHORIZED, AUTH_MESSAGE.UNAUTHORIZED);
  }
  // verify token logic here
  try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log('verifyToken', verifyToken);
    (req as any).user = verifyToken;
    next();
  } catch (error) {
    return ErrorResponse(res, STATUS_CODE.UNAUTHORIZED, AUTH_MESSAGE.INVALID_TOKEN);
  }
};