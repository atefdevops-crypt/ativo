import "dotenv/config";
import express from "express" ; 
import cors from "cors" ;

import { clerkMiddleware } from "@clerk/express";
import { clerkWebHookHandler } from "./hooks/clerk";
import { getEnv } from "./lib/env" ;

const env = getEnv() ;
const app = express() ; 
const rawJson = express.raw({ type: "application/json" , "limit": "1mb" }) ;

app.post("/hooks/clerk" ,rawJson ,(req ,res) => {
    void clerkWebHookHandler(req , res)});

app.use(express.json()) ;
app.use(cors()) ;
app.use(clerkMiddleware()) ;
app.listen(env.PORT, ()=> console.log("APP LISTENING PORT", env.PORT)) ;


