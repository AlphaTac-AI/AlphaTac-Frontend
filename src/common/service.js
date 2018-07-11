import moment from 'moment';
import heros from './heros';
import fetch from './fetch';

export function getQueryString(data) {
  let str = '?';
  Object.keys(data).forEach((key, i) => {
    if (i !== 0) {
      str += '&';
    }
    str += `${key}=${data[key]}`;
  });
  return str;
}

export function getJson(url, options = {}) {
  const { method = 'GET', data = {}, ...others } = options;
  if (!others.headers) {
    others.headers = new window.Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
  }
  if (method === 'GET') {
    url = `${url}${getQueryString(data)}`;
  } else if (method === 'POST') {
    others.body = JSON.stringify(data);
  }
  return fetch(url, { method, ...others }).then((resp) => {
    const res = resp.json();
    if (res.result && res.result !== 'success') {
      return Promise.reject(res);
    }
    return res;
  }).catch(e => {
    throw e;
  });
}

export function getLives() {
  return getJson('https://api.opendota.com/api/live').then(data => {
    data.forEach(item => {
      item.activate_time_str = moment(item.activate_time).format('yyyy-MM-DD hh:mm:ss');
    });
    return data;
  });
}

export function getMatches() {
  // publicMatches
  return getJson('https://api.opendota.com/api/proMatches').then(data => {
    data.forEach(item => {
      item.start_time_str = moment(item.start_time * 1000).format('YYYY-MM-DD hh:mm:ss');
    });
    return data;
  });
}

export function getHeroAvatar(id) {
  id = +id;
  const hero = heros.find(h => h.id === id);
  const { localized_name: name } = hero;
  const arr = name.indexOf('-') > -1 ? name.split('-') : name.split(' ');
  return `https://api.opendota.com/apps/dota2/images/heroes/${arr.map(n => n.toLowerCase()).join('')}_full.png?`;
}

export function queryWinner(data) {
  // return Promise.resolve({
  //   "msg": "",
  //   "result": "success",
  //   "win_probability": "0.8773",
  //   "winner": "Dire"
  // });
  return getJson('http://123.207.61.41:9527/api/v1/query_winner', { data, mode: 'cors' });
}
