class Product {
    constructor(datas){
        this.id = datas?.id,
        this.name = datas?.name,
        this.description = datas?.description,
        this.image = datas?.image,
        this.model = datas?.model,
        this.price = datas?.price,
        this.old_price = datas?.old_price,
        this.categoryid = datas?.categoryid,
        this.category_name = datas?.category_name,
        this.created_at = datas?.created_at,
        this.updated_at = datas?.updated_at,
        this.isdeleted = datas?.isdeleted
        this.date = datas?.date
    }

    static mapAll(rows) {
        return rows.map(row => new Product(row));
    }

    static mapOne(row) {
        return new Product(row);
    }
}

module.exports = Product;