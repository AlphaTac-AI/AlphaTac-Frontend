import heros from '../../heros';
import teams from '../../teams';

function filterArr(arr, condition, max) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const keep = condition(arr[i]) && res.length < max;
    if (keep) {
      res.push(arr[i]);
    }
    if (res.length > max) break;
  }
  return res;
}

export function queryHeros(name) {
  if (!name) return [];
  name = name.toLowerCase();
  return filterArr(heros, h => h.localized_name.toLowerCase().indexOf(name) !== -1, 5)
    .map(h => ({ label: h.localized_name, value: h.id }));
}

export function queryTeams(name) {
  if (!name) return [];
  name = name.toLowerCase();
  return filterArr(teams, h => h.name.toLowerCase().indexOf(name) !== -1, 5)
    .map(h => ({ label: h.name, value: h.team_id }));
}
