import { Category } from "../models/category";
import { Order } from "../models/order";
import { Product } from "../models/product";

export const productList:Product[] = [
    {
        "productId" :"EL123", 
        "productName":"Laptop",
        "productDescription":"Dell Laptop",
        "productCategory":{
            "categoryId":"E123RAHU0987",
            "categoryName":"Electronics",
            "categoryDescription":"Category containing electronic products"
        },
        "productPrice":1000, 
    },
    {
        "productId" :"CL098", 
        "productName":"Leather Jacket",
        "productDescription":"Leather Jacket from jack and jones",
        "productCategory":{
            "categoryId":"CL765HDTYILKJ",
            "categoryName":"Clothing",
            "categoryDescription":"Category containing clothing and fashion products"
        },
        "productPrice":200, 
    },
    {
        "productId" :"FB987", 
        "productName":"Chivas Regal Whisky",
        "productDescription":"This is a very fine whisky",
        "productCategory":{
            "categoryId":"FANDB876JHYRT",
            "categoryName":"Food & Beverages",
            "categoryDescription":"Category containing food and beverage products"
        },
        "productPrice":100, 
    }
    
]
