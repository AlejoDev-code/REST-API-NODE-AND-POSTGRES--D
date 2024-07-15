import { pool } from "../db.js";

export const getUsers =  async(req, res) =>{
    const {rowCount, rows} = await pool.query("SELECT * FROM users");
    
    if (rowCount === 0) {
        return res.status(404).json({
            message: "User not found"
        })   
    }   
    res.status(200).json(rows);
}

export const getUsersById = async(req, res) =>{
    const {id} = req.params;
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    console.log(rows);
    if (rows.length === 0) {
        return res.status(404).json({
            message: "User not found"
        })   
    }
    res.status(200).json(rows);
}

export const insertUsers = async(req, res) =>{
    const {name, email} = req.body;
    const {rows, rowCount} = await pool.query('INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *', [name, email]);

    if (rowCount === 0) {
        return res.status(404).json({
            message: "User not add"
        })   
    }

    res.status(200).json(rows);
}

export const deleteUser = async(req, res) =>{
    const {id} = req.params;
    const {rows, rowCount} = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]); 

    if (rowCount === 0) {
        return res.status(404).json({
            message: "User not found"
        })   
    }
    
    res.status(200).json(rows);
}

export const updateUser = async(req, res) =>{
    const {id} = req.params;
    const {name, email} = req.body;

    const {rows, rowCount} = await pool.query("UPDATE users SET name =$1, email=$2 WHERE id=$3 RETURNING *", [name, email, id]);

    if (rowCount === 0) {
        return res.status(404).json({
            message: "User not found"
        })   
    }
    
    res.status(200).json(rows);
}