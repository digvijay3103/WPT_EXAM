const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo = {
    host : "localhost",
    user : "root",
    password : "cdac",
    database : "wpt_backend",
};

const checkConnection = () => {
    const connection = mysql.createConnection(dbinfo);
    connection.connect();
    console.log("Connected....");
    connection.end();
}
checkConnection();

const addMessage = async (user) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into user (input) values (?)`;
    await connection.queryAsync(sql, [user.input]);    
    console.log("Message Added...");
    await connection.endAsync();
}
let message = ({message : "Hello Digvijay..."});
addMessage(message);

module.exports = {addMessage};

const getAllMessage = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from message`;
    const list = await connection.queryAsync(sql);    
    await connection.endAsync();
    return list;
}

let message = {message : "Hello CDAC..."};
addMessage(message);
getAllMessage();
