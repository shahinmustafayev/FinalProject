class CategoryUpdateDTO {
    constructor(requestData){
        this.id = requestData.id,
        this.name = requestData.name
    }
}

module.exports = CategoryUpdateDTO;