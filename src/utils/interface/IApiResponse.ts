export interface APIResponse {
  data?: any;
  meta?: any;
  message?: string;
  error?: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  email: string;
  password: string;
}
