require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Esto es necesario para Supabase
  },
});

client.connect()
  .then(() => {
    console.log("Conectado a la base de datos!");
    return client.end();
  })
  .catch(err => {
    console.error("Error al conectar:", err);
  });
