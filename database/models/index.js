const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAll = function(callback) {
   let queryStr = 'Select * from companies';
   connection.query(queryStr, (err, results) => {
     if (err) {
       console.log(err)
       callback(err, null)
     } else {
       callback(null, results)
     }
   })
};

const getOne = function(id, callback) {
  // let id = req.params.id
  let queryStr = `Select * from companies where id =${id}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
}


const addToCompanies = function(item, callback) {
  let queryStr =`insert into companies ( date, companyName, followUp, dateOfFollowUp) values ('${item.date}', '${item.companyName}', '${item.followUp}', '${item.dateOfFollowUp}')`
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
};

const deleteCompany = function(id, callback) {
  let queryStr = `Delete from companies where id = ${id}`
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
};

const updateCompany = function(id, followUp, dateFollowUp, callback){
  let queryStr = `update companies set followUp = '${followUp}', dateOfFollowUp = '${dateFollowUp}' where id = ${id}`
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
}


module.exports = {
  getAll,
  addToCompanies, 
  deleteCompany, 
  getOne, 
  updateCompany
};