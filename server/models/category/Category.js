class Category {
    constructor (datas) {
        this.id = datas?.id,
        this.name = datas?.name,
        // this.description = datas?.description,
        // this.status = datas?.status,
        // this.image = datas?.image,
        this.created_at = datas?.created_at,
        this.updated_at = datas?.updated_at,
        this.isdeleted = datas?.isdeleted
    }

    static mapAll(rows) {
        return rows.map(row => new Category(row));
    }

    static mapOne(row) {
        return new Category(row);
    }
}

module.exports = Category;