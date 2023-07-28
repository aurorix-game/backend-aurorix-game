declare namespace Express {
  export interface Request {
    id: string;
    user: {
      id: string;
      nickname: string;
      email: string;
    };
  }
}
