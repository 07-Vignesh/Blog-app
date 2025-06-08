import express from "express";
import Post from "../models/post.model.js";
import { createPost, deletePost, getPost, getPosts } from "../controllers/post.control.js";


const router=express.Router()

router.get("/", getPosts)
router.get("/:slug",getPost)
router.post("/", createPost)
router.delete("/:id",deletePost)




  


export default router