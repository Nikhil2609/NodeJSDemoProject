import { Response } from 'express';
import { APIResponse } from '../interface/apiResponse';

export const SendResponse = (
  response: Response,
  statusCode: number = 200,
  data: any,
  message: string
) => {
  let responseJson: APIResponse = {} as APIResponse;
  responseJson = {
    ...responseJson,
    data: data,
    message: message || ''
  };

  return response.status(statusCode).json(responseJson);
};

export const ErrorResponse = (
  response: Response,
  statusCode: number = 200,
  error: string
) => {
  let responseJson: APIResponse = {} as APIResponse;
  responseJson = {
    ...responseJson,
    error: error || ''
  };

  return response.status(statusCode).json(responseJson);
};
