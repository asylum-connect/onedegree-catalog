import React from 'react';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

import AsylumConnectButton from '../AsylumConnectButton';
import SearchBar from './SearchBar';
import ResourceListItem from '../ResourceListItem';
import SearchStatusHandler from './SearchStatusHandler';

const styles = theme => ({
  formRow: {
    marginBottom: '2.5rem'
  },
});

class SearchResultsContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    //this.props.clearSearchStatus();
    //this.props.fetchSearchResults();
  }

  componentDidMount() {
    this.doSearch();
    window.addEventListener('popstate', this.doSearch.bind(this));
  }

  doSearch() {
    this.props.clearSearchStatus();
    this.props.fetchSearchResults();
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchStatus === "redirect"  && prevProps.searchStatus === null) {
      this.doSearch()
    }
  }

  render() {
    const { formRow } = this.props.classes;
    return (
      <div>
        <SearchStatusHandler {...this.props} />
        <SearchBar {...this.props} classes={null} />
        <Grid container spacing={0}>
          <Grid item xs={12} className={formRow}>
            <AsylumConnectButton variant="secondary" onClick={this.props.handleSearchButtonClick} >
              Search
            </AsylumConnectButton>
          </Grid>
        </Grid>
        { this.props.searching ?
            <Grid container spacing={0}>
              <Grid item xs={12} style={{textAlign: "center"}}>
                <CircularProgress />
              </Grid>
            </Grid>
          :
            this.props.searchResults.map((organization) => {
              return <ResourceListItem resource={organization} key={organization.id} />
            })
        }
      </div>);
  }
    
}


export default withStyles(styles)(SearchResultsContainer);