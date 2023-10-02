import { pool } from "../../../config/postgress";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

// Dao | "Service Repositorio"
export class UserStorageGateway implements IUserRepository{
    async findAll(): Promise<TUser[]> {
        const query = `SELECT * FROM users ORDER BY id DESC`;
        const {rows: userRows} = await pool.query(query);
        return userRows.map(user => <TUser> user);
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    save(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}