class User {
    constructor(row){
        this.id = row.id,
        this.username = row.username,
        this.password = row.password
        this.isactive = row.isactive,
        this.isdeleted = row.isdeleted
        this.created_at = datas?.created_at,
        this.updated_at = datas?.updated_at
    }

    static mapOne(row) {
        return new User(row);
    }
}

module.exports = User;