class BlogAddDTO {
    constructor(requestData){
        this.title = requestData.title,
        this.description = requestData.description,
        this.author = requestData.author,
        this.date = requestData.date,
        this.image = requestData.image,
        this.isdeleted = requestData.isdeleted
    }
}

module.exports = BlogAddDTO;