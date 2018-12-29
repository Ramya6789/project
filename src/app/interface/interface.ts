export interface signup{
    name: String,
    emailID: String,
    password: String,
    phonenumber: Number,
    address: String
}

export interface login{
    emailID: String,
    password:String
}

export interface productDetails{
    imagePath : String,
    productname: String,
    product_id: Number,
    brandname: String,
    description: String,
    price: Number
}