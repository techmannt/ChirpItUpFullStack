import { Query } from '../index';

const all = () => Query<{}[]>("select chirpstore.*, users.name as username from chirpstore join users on users.id=chirpstore.userid");
const one = (id: string) => Query<{}[]>("select chirpstore.*, users.name as username from chirpstore join users on users.id=chirpstore.userid WHERE chirpstore.id = ?", [id]);
const addOne = (userid: string, message: string) =>
  Query("INSERT INTO chirpstore (userid, message) VALUES (?)", [[ userid, message ]]);
const update = (message: string, id: string) =>  Query("UPDATE chirpstore SET message = ? WHERE id = ?", [message, id]);
const destroy = (id: string) => Query("DELETE FROM chirpstore WHERE id = ?", [id]);

export default {
  all,
  one,
  addOne,
  update,
  destroy
}
