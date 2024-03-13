import { Product } from "../models/product";


export const mockProductPostBody : Product =

{
            "productId" :"KI098", 
            "productName":"Utensils Stand",
            "productDescription":"This is a utensils stand",
            "productCategory":{
                "categoryId":"KIT098768",
                "categoryName":"Kitchen",
                "categoryDescription":"Category containing kitchen products"
            },
            "productPrice":400

}
