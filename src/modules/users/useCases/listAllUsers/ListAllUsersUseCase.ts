import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const adminUser = this.usersRepository.findById(user_id);
    if (adminUser && adminUser.admin) {
      return this.usersRepository.list();
    }
    throw new Error(`User ${user_id} is not admin`);
  }
}

export { ListAllUsersUseCase };
