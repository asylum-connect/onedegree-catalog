import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';

import AsylumConnectButton from './AsylumConnectButton';
import ErrorMessage from './ErrorMessage';
import SearchBar from './SearchBar';

const styles = theme => ({
  formRow: {
    marginBottom: '2.5rem'
  },
});

class SearchForm extends React.Component {
  render() {
    const { formRow } = this.props.classes;

    const searchStatus = () => {
      switch(this.props.searchStatus) {
        case 'redirect':
          var resourceTypes = (this.props.selectedResources.length ? this.props.selectedResources.join(',') : 'any');
          return (<Redirect to={`/search/${encodeURIComponent(this.props.nearLatLng.lat + ',' + this.props.nearLatLng.lng)}/${encodeURIComponent(resourceTypes)}/all/default`} push={true} />);
        break;
        case 'error':
          var errors = (this.props.errorMessage.length ? [this.props.errorMessage] : []);
          return errors.map(function(name, index){
            return <ErrorMessage key={ Date.now() } message={ name } />;
          })
        break;
        default:
          return null;
        break;
      } 
    }

    return (
      <div>
        {searchStatus()}
        <SearchBar {...this.props} classes={null} />
        <Grid container spacing={0}>
          <Grid item xs={12} className={formRow}>
            {/*<FormControlLabel
              control={
                <Checkbox
                  value="checkedA"
                />
              }
            label="Include remote resources"
            className={formRow}
            />*/}
          </Grid>
          <Grid item xs={12}>
            <AsylumConnectButton variant="secondary" onClick={this.props.handleSearchButtonClick} >
              Search
            </AsylumConnectButton>
          </Grid>
        </Grid>
        
      </div>
    );
  }
};

export default withStyles(styles)(SearchForm);
