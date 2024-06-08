import express, { urlencoded } from "express";
const app = express()


app.use(express.json())

// const conn = new Client({
//   user: "postgres",
//   password: "12345678",
//   database: "postgres",
//   port: 5432,
//   host: "database-2.ctqys2wi0b5w.us-east-1.rds.amazonaws.com",
//   ssl:{
//     rejectUnauthorized:false,
//   }

app.get("/",(req,res)=>{
  console.log("Welcome")
  res.send("server is running")
})
// });

// const conn = new Sequelize(
//     `postgres://postgres:12345678@database-2.ctqys2wi0b5w.us-east-1.rds.amazonaws.com:5432/postgres`,
//     { dialect: "postgres",  logging: false  }
//   );

// conn.connect()
//   .then(() => {
//     console.log('Connected to PostgreSQL database successfully.');
//     // Perform database operations here
//   })
//   .catch(err => {
//     console.error('Error connecting to PostgreSQL database:', err);
//   });

  
app.listen(3000,()=>console.log("server is running 3000"));
