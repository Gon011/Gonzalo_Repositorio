const usuarios = [
    {
        username: "jefichulo",
        contra: "abcABC123,"
    }
];

module.exports = class Usuario {
    
    constructor(username, email, contra) {
        this.username = username;
        this.email = email;
        this.contra = contra;
    }
    
    save() {
        usuarios.push(this)
    }
    
    static fetchAll() {
        return usuarios;
    }

    static login(username, contra) {
        for (let u of usuarios) {
            if (
                u.username == username
                && u.contra == contra
            ) {
               return true; 
            }
        }
        return false;
    }

}
