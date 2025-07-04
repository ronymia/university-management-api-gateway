import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const loginUser = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await AuthService.post(`/auth/login`, req.body);

  // RETURN
  return result;
};

// HANDLE ACCESS TOKEN THROUGH REFRESH TOKEN
const refreshToken = async (req: Request): Promise<IGenericResponse> => {
  const { refreshToken } = req.cookies;

  const result: IGenericResponse = await AuthService.post(`/auth/refresh-token`, req.body, {
    headers: {
      cookie: `refreshToken=${refreshToken}`
    }
  });

  // RETURN
  return result;
};

// logout
const logout = async (req: Request): Promise<IGenericResponse> => {
  //
  const { refreshToken } = req.cookies;

  const result: IGenericResponse = await AuthService.post(`/auth/logout`, req.body, {
    headers: {
      cookie: `refreshToken=${refreshToken}`
    }
  });

  // RETURN
  return result;
};

// DELETE STUDENT
const changePassword = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await AuthService.post(`/auth/change-password`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  // RETURN
  return result;
};

// EXPORT SERVICES
export const AuthServices = {
  logout,
  loginUser,
  refreshToken,
  changePassword
};
