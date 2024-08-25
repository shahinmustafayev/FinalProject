class Blog {
    constructor(datas){
        this.id = datas?.id,
        this.title = datas?.title,
        this.description = datas?.description,
        this.author = datas?.author,
        this.date = datas?.date,
        this.image = datas?.image,
        this.isdeleted = datas?.isdeleted,
        this.created_at = datas?.created_at,
        this.updated_at = datas?.updated_at
    }

    static mapAll(rows) {
        return rows.map(row => new Blog(row));
    }

    static mapOne(row) {
        return new Blog(row);
    }
}

module.exports = Blog;