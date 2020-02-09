import { Query } from '../index';

const findUsers = () => Query('select chirpstore.*,  users.name as username from chirpstore join users on users.id=chirpstore.userid group by username');
const findUsersChirps = (id: string) => Query('select chirpstore.*,  users.name as username from chirpstore join users on users.id=chirpstore.userid where userid=?', [ id ]);

export default {
  findUsers,
  findUsersChirps
}
