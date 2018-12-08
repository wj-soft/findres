import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const selectBoxSize = {
  width: 300
}

@inject('FirstStore')
@observer
class SelectBox extends Component {
  state = {
    sido: '',
    labelWidth: 0,
  };

  componentDidMount() {
    this.props.FirstStore.getArea();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    return (
      <div className="SelectBox">
        <form autoComplete="off">
          <FormControl style={selectBoxSize}>
            <InputLabel>SI / DO</InputLabel>
            <Select
              value={this.state.sido}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="sido"
                />
              }
            >
              {this.props.FirstStore.testApiRes.map((v, i) => {
                return(<MenuItem value={v.code} key={i}>{v.name}</MenuItem>)
              })}
            </Select>
          </FormControl>
        </form>
      </div>
    );
  }
}

// export default SelectBox;
export default withStyles(styles)(SelectBox);
