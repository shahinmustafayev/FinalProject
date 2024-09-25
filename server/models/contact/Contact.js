class Contact {
    constructor(datas){
        this.id = datas?.id,
        this.name = datas?.name,
        this.email = datas?.email,
        this.subject = datas?.subject,
        this.message = datas?.message,
        this.isdeleted = datas?.isdeleted,
        this.created_at = datas?.created_at,
        this.updated_at = datas?.updated_at
    }

    static mapAll(rows) {
        return rows.map(row => new Contact(row));
    }
}

module.exports = Contact;