import * as mysql from 'mysql';
import chirpCrud from './queries/chirpCrud';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'chirprapp',
  password: 'test123',
  database: 'chirpr'
});

connection.connect(err => {
  if (err)
   {
     console.error('You have an error connecting: ' + err.stack);
     return;
   }

});

export const Query = <T=any>(query: string, values?: Array<any>) => {
  return new Promise<T>((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

export default {
  chirpCrud
}
