import { Request, Response } from "express";
import { productList } from "../mockData/mockdata";


export const getProductDetailsForPostgres = (req:Request,res:Response)=>{
    res.status(200).json(productList)
};

export const getProductDetailsForMongo = (req:Request,res:Response)=>{
    res.status(200).json(productList)
};
