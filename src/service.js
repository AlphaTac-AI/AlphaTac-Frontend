import moment from 'moment';
import heros from './heros';

export function getJson(url) {
  return fetch(url).then((res) => res.json());
}

export function getLives() {
  return getJson('https://api.opendota.com/api/live').then(data => {
    data.forEach(item => item.activate_time_str = moment(item.activate_time).format('yyyy-MM-DD hh:mm:ss'));
    return data;
  }).catch(function (e) {
    console.log("Oops, error", e);
  });
}

export function getMatches() {
  // publicMatches
  return getJson('https://api.opendota.com/api/proMatches').then(data => {
    data.forEach(item => {
      item.start_time_str = moment(item.start_time).format('YYYY-MM-DD hh:mm:ss');
      // item.dire_team_heros = item.dire_team.split(',').map(heroId => getHeroAvatar(heroId));
      // item.radiant_team_heros = item.radiant_team.split(',').map(heroId => getHeroAvatar(heroId));
    });
    return data;
  }).catch(function (e) {
    console.log("Oops, error", e);
  });
}

export function getHeroAvatar(id) {
  id = +id;
  const hero = heros.find(h => h.id === id);
  const { localized_name: name } = hero;
  const arr = name.indexOf('-') > -1 ? name.split('-') : name.split(' ');
  return `https://api.opendota.com/apps/dota2/images/heroes/${arr.map(n => n.toLowerCase()).join('')}_full.png?`;
}