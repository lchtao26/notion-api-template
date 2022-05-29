import config from '../config'
import {message} from './message';

async function request (url = '', opts = {}) {
  const method = opts.method;
  const body = opts.data ? JSON.stringify(opts.data): undefined;

  let headers = {
    Authorization: `Bearer ${config.token}`,
    'Notion-Version': config.version,
    ...opts.headers
  }
  if (
    method === 'post' ||
    method === 'put' ||
    method === 'patch'
  ) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    };
  }

  const resp = await fetch(url, {
    ...opts,
    headers,
    method,
    body,
  });


  if(resp.status > 200) {
    const data = await resp.json();
    const error = {
      code: data.error.code,
      message: data.error.message || '网络错误',
    }
    message.error(error.message);
    throw error;
  }

  return resp.json();
}

export default request;
