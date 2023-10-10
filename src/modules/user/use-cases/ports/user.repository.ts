import { TUser } from "../../entities/user";

export interface IUserRepository {
    findAll(): Promise<TUser[]>;
    findById(id: number): Promise<TUser>;
    save(user: TUser): Promise<boolean>;
    update(user: TUser): Promise<boolean>;
    delete(id: number): Promise<boolean>;
    login (email: string, password: string): Promise<TUser>;
}
