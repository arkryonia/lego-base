import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export const saltAndHashPassword = (password: string) => {
    return bcrypt.hashSync(password, salt);
};


