import pg from "pg";

export default new pg.Pool({
    user:"postgres",
    host:"localhost",
    database:"site_games",
    password:"postgres", 
    port:5432
})