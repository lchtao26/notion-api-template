import request from '../utils/request';
import config from '../config';

export async function fetchDatabase () {
  return request(`/api/v1/databases/${config.dbID}/query`, {
    method: 'post',
  });
}
