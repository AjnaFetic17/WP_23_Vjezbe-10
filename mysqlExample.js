const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abcd1234',
  database: 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

const vocka = {
  naziv: 'Ananas',
  kolcina: 90,
  ocjena: 5
}

// connection.query(`insert into voce(naziv,kolicina, ocjena) values ('${vocka.naziv}', '${vocka.kolcina}','${vocka.ocjena}')`, (err, res) => {
//   if (err) {
//     console.log('ERROR', err);
//   }
//   console.log(res);
// })

connection.query('SELECT * FROM voce', (err, res) => {
  if (err) throw err;
  console.log(res);
  res.forEach(element => {
    console.log(element.naziv);
  });
})


connection.query(`UPDATE voce 
    SET naziv="Borovnica", kolicina=80, ocjena=9
    WHERE id=2`, (err, res) => {
  if (err) throw err;
  console.log(res);

})

connection.query(`DELETE FROM voce WHERE id=${5}`, (err) => {
  if (err) throw err
})

connection.end();