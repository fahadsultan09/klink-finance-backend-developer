const controller = require('./controller');
const employeeService = require('../services/employeeService');
const db = require("../database/db");

const employeeServiceObj = new employeeService(db.user);
class employeeController extends controller {

    constructor(service) {
        console.log("employeeController ========================")
        super(service);
    }
}
module.exports = new employeeController(employeeServiceObj)


// module.exports = {
//     getMovie : function(req, res){

//       console.log("GET MOVIE",req)
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//       console.log("GET MOVIE")
//         res.send({name:"fahad"})
//     },
//     getMovies : function(req, res){
//        //do something
//     },
//     postMovie : function(req, res){
//        //do something
//     }
// }