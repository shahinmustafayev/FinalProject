class ProductAddDTO {
    constructor(requestData){
        this.name = requestData.name,
        this.description = requestData.description,
        this.image = requestData.image,
        this.model = requestData.model,
        this.price = requestData.price,
        this.old_price = requestData.old_price,
        this.categoryid = requestData.categoryid,
        this.isdeleted = requestData.isdeleted,
        this.date = requestData.date
    }
}

module.exports = ProductAddDTO;