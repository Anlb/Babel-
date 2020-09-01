const express = require ("express");
const app = express();
const port= 3000;
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');
const user = {
    name:"Pikachu",
    email:"pikachu@gmail.com",
    mdp:"1234",
    isAdmin: false, 
}
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public")); 
app.get('/listproduitsbabel', (req, res) => {
   res.render('listproduitsbabel')
    }); 
    app.get('/favoris', (req, res) => {
        res.render('favoris')
         }); 
    app.get('/detail', (req, res) => {
        res.render('detail')
         }); 
         app.get('/formulaire', (req, res) => {
            res.render('formulaire')
             });
       
             app.get('/index', (req, res) => {
                res.render('index', {
                    admin:user.isAdmin
                });
               
                 }); 
               
// affiche la view page index 

app.get('/', (req, res) => {
    res.render('index',{
        admin:user.isAdmin
        
    });
});

app.post('/', (req, res)=> {

    const user = {
        name:"Pikachu",
        email:"pikachu@gmail.com",
        mdp:"1234",
        isAdmin: false, 
    }
    if (user.email != req.body.email || user.mdp != req.body.pass){
        user.isAdmin= false;
       
         } else {

        user.isAdmin= true;
        

         }

         res.render('index',{ admin:user.isAdmin});

});



app.listen(port);

   