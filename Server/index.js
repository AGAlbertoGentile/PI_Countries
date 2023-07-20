const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { fillDataBase } =require('./src/seeders/seeder')

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  fillDataBase()
  .then((message)=>{
    console.log(message)
  });
});
}).catch(error => console.error(error))
