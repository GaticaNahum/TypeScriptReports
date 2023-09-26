import bcrypt from 'bcryptjs';
require ('dotenv').config();


export async function hash(password: string){
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, process.env.BCRYPTJS!, (err, hash) => {
            if(err) reject(err);
            resolve(hash);
        });
    })

}


export async function compare(password: string, hash: string){
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if(err) reject(err);
            resolve(res);
        });
    })
}