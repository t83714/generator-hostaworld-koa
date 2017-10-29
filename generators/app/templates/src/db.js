import mysql2 from "mysql2";
import dbWarapper from "mysql2-promise";

const db = dbWarapper();
const opts = {
    connectionLimit: 5,
    host: "<%-db_host%>",
    user: "<%-db_username%>",
    password: "<%-db_password%>",
    database: "<%-db_name%>",
};

db.configure(opts, mysql2);

export default db;
