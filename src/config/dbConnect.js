import mongoose from "mongoose";
mongoose.connect("mongodb+srv://mongodb:mongodb@mycluster.vydqgr0.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;