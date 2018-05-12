import React, { Component } from 'react';
import AutoComplet from '../../components/AutoComplet';
import { queryWinner } from '../../service';
import { queryHeros, queryTeams } from './service'
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

import './index.css';

export default class App extends Component {
  state = {
    radiant_team_id: '',
    radiant_hero_1: '',
    radiant_hero_2: '',
    radiant_hero_3: '',
    radiant_hero_4: '',
    radiant_hero_5: '',
    dire_team_id: '',
    dire_hero_1: '',
    dire_hero_2: '',
    dire_hero_3: '',
    dire_hero_4: '',
    dire_hero_5: '',
  }

  validate() {
    const form = this.state;
    let valid = true;
    Object.keys(form).forEach(key => {
      if (!form[key]) valid = false;
    });
    return valid;
  }

  handlePredict = () => {
    const data = { ...this.state, start_time: Date.now() };
    queryWinner(data).then(res => {
      console.log(res);
    });
  }

  handleChange = (type) => (item) => {
    this.setState({ [type]: item.value });
  }

  renderHeros(type) {
    return (
      <div>
        <FormControl>
          <AutoComplet onChange={this.handleChange(`${type}_hero_1`)} getSuggestions={queryHeros} placeholder="请输入英雄名称" label="英雄" />
        </FormControl>
        <FormControl>
          <AutoComplet onChange={this.handleChange(`${type}_hero_2`)} getSuggestions={queryHeros} placeholder="请输入英雄名称" label="英雄" />
        </FormControl>
        <FormControl>
          <AutoComplet onChange={this.handleChange(`${type}_hero_3`)} getSuggestions={queryHeros} placeholder="请输入英雄名称" label="英雄" />
        </FormControl>
        <FormControl>
          <AutoComplet onChange={this.handleChange(`${type}_hero_4`)} getSuggestions={queryHeros} placeholder="请输入英雄名称" label="英雄" />
        </FormControl>
        <FormControl>
          <AutoComplet onChange={this.handleChange(`${type}_hero_5`)} getSuggestions={queryHeros} placeholder="请输入英雄名称" label="英雄" />
        </FormControl>
      </div>
    )
  }

  render() {
    console.log(this.state, this.props);
    return (
      <div className="index">
        <FormControl>
          <AutoComplet onChange={this.handleChange('radiant_team_id')} getSuggestions={queryTeams} placeholder="请输入战队名称" label="天辉" />
        </FormControl>
        {this.renderHeros('radiant')}
        <FormControl>
          <AutoComplet onChange={this.handleChange('dire_team_id')} getSuggestions={queryTeams} placeholder="请输入战队名称" label="夜魇" />
        </FormControl>
        {this.renderHeros('dire')}
        <div className="btn-contianer">
          <Button disabled={!this.validate()} variant="raised" color="primary" onClick={this.handlePredict}>
            预测
          </Button>
        </div>
      </div>
    );
  }
}
