import { LoginBody } from '../utils/interface/apiResponse';
import { UserModal } from '../models/user.modal';

export default class AuthRepository {
  constructor() {}

  login = async (email: string) => {
    return await UserModal.findOne({ where: { email } });
  };

  register = async (body: LoginBody) => {
    const customer = await UserModal.create({ ...body });
    return customer;
  };
}
