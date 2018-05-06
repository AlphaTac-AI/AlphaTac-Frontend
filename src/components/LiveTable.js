import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { TEXT } from '../constants';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function LiveTable(props) {
  const { classes, data } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>比赛</TableCell>
            <TableCell>平均分数</TableCell>
            <TableCell>开始时间</TableCell>
            <TableCell>{TEXT.radiant}</TableCell>
            {/* <TableCell>天辉英雄</TableCell> */}
            <TableCell>{TEXT.dire}</TableCell>
            {/* <TableCell>夜魇英雄</TableCell> */}
            <TableCell>胜利方</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.match_id}>
                <TableCell>{n.league_name}</TableCell>
                <TableCell>{n.average_mmr}</TableCell>
                <TableCell>{n.start_time_str}</TableCell>
                <TableCell>{n.radiant_name}</TableCell>
                {/* <TableCell>{n.radiant_team_heros.map((avatar => <img className="avatar" src={avatar} />))}</TableCell> */}
                <TableCell>{n.dire_name}</TableCell>
                {/* <TableCell>{n.dire_team_heros.map((avatar => <img className="avatar" src={avatar} />))}</TableCell> */}
                <TableCell>{n.radiant_win ? TEXT.radiant : TEXT.dire}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

LiveTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LiveTable);