import { Query } from '../index';

const all = () => Query<{}[]>("SELECT * FROM chirpstore");
const one = (id: string) => Query<{}[]>("SELECT * FROM chirpstore WHERE id = ?", [id]);
const addOne = (username: string, message: string) =>
  Query("INSERT INTO chirpstore (username, message) VALUES (?)", [[ username, message ]]);
const update = (message: string, id: string) =>  Query("UPDATE chirpstore SET message = ? WHERE id = ?", [message, id]);
const destroy = (id: string) => Query("DELETE FROM chirpstore WHERE id = ?", [id]);

export default {
  all,
  one,
  addOne,
  update,
  destroy
}
