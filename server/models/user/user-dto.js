class UserDTO {
    constructor(datas){
        this.username = datas.username,
        this.password = datas.password
        this.isactive = datas.isactive,
        this.isdeleted = datas.isdeleted
    }
}

module.exports = UserDTO;