import React from 'react';

import detectPrint from "react-detect-print";

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import withWidth from '../withWidth';
import breakpoints from '../../theme/breakpoints';
import fetchUserLists from '../../helpers/fetchUserLists';
import AsylumConnectButton from '../AsylumConnectButton';
import Loading from '../Loading';
import AsylumConnectMap from '../AsylumConnectMap';
import SearchBar from './SearchBar';
import SearchRefinementControls from './SearchRefinementControls';
import ResourceListItem from '../resource/ResourceListItem';
import {mobilePadding} from '../../theme/sharedClasses';

const styles = theme => ({
  formRow: {
    marginBottom: '2.5rem'
  },
  container: {
    minHeight: '500px',
    paddingTop: '60px',
    paddingBottom: '60px'
  },
  tabContainer: {
    backgroundColor: theme.palette.primary[500],
    justifyContent: 'space-evenly'
  },
  [theme.breakpoints.up('sm')]: {
    filterContainer: {
      marginTop: "-0.8rem"
    }
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      paddingTop: '0px',
      paddingBottom: '0px'
    },
    containerSearchForm: Object.assign(mobilePadding(theme), { 
      backgroundColor: theme.palette.primary[500],
      paddingTop: "20px",
      paddingBottom: "20px"
    }),
    containerSearchResults: Object.assign(mobilePadding(theme), { 
      backgroundColor: theme.palette.common.white
    }),
    formRow: {
      marginBottom: '0'
    }
  }
});

const ResultsContainer = (props) => {
  const { containerSearchResults, searching, searchResults } = props;
  return (
    <div className={containerSearchResults}>
      {searchResults.map((organization) => {
        return (
          <ResourceListItem key = {organization.id} resource={organization} {...props} />
        )
      })}
      { searching ? <Loading /> : null }
    </div>
  );
}
class SearchResultsContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    //this.props.clearSearchStatus();
    //this.props.fetchSearchResults();

    this.state = { tab: 0 };

    this.handleSwipeChange = this.handleSwipeChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidMount() {
    this.doSearch();
    window.addEventListener('popstate', this.doSearch.bind(this));
    console.log('add scroll?')
    window.addEventListener('scroll', this.addPage.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.doSearch.bind(this));
    console.log('remove scroll?')
    window.removeEventListener('scroll', this.addPage.bind(this));
  }

  doSearch(ev) {
    this.props.clearSearchStatus();
    this.props.fetchSearchResults();
  }

  addPage(ev) { console.log(ev);
    let searchContainer = document.querySelectorAll('.container--search'); 
    console.log(searchContainer, window.innerHeight + window.scrollY, searchContainer[0].offsetTop + searchContainer[0].offsetHeight)
    if (searchContainer.length && (window.innerHeight + window.scrollY) >= (searchContainer[0].offsetTop + searchContainer[0].offsetHeight)) {
        console.log('addPage should fetch results');
        this.props.fetchNextSearchResultsPage();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchStatus === "refresh"  && prevProps.searchStatus === null) {
      this.doSearch()
    }
  }

  handleTabChange(event, value) {
    this.setState({
      tab: value
    });
  }

  handleSwipeChange(index, indexLatest) {
    this.setState({
      tab: index
    });
  }

  render() {
    const { 
      tabContainer,
      container, 
      formRow, 
      containerSearchForm, 
      containerSearchResults,
      filterContainer
      } = this.props.classes;
    const searchResultsProps = {
      containerSearchResults: containerSearchResults,
      handleListAddFavorite: this.props.handleListAddFavorite,
      handleListRemoveFavorite: this.props.handleListRemoveFavorite,
      handleListNew: this.props.handleListNew,
      handleMessageNew: this.props.handleMessageNew,
      handleRequestOpen: this.props.handleRequestOpen,
      lists: this.props.lists,
      session: this.props.session,
      searchResults: this.props.searchResults,
      searching: this.props.searching,
      user: this.props.user
    };
    const isMobile = this.props.width < breakpoints['sm'];
    console.log(this.props.printing);
    return (
      <Grid container alignItems='flex-start' justify={this.props.width >= breakpoints['xl'] ? 'flex-start' : 'center'} spacing={0} className={container}>
        <Grid item md={11} lg={11} xs={12}>
        <div className={containerSearchForm}>
          <SearchBar {...this.props} classes={null} />
          <Grid container spacing={0}>
            <Grid item xs={12} md={3} className={formRow}>
              <AsylumConnectButton variant="secondary" onClick={this.props.handleSearchButtonClick} >
                Search
              </AsylumConnectButton>
            </Grid>
            <Grid item xs={12} md={9} className={filterContainer}>
              <SearchRefinementControls 
                clearSearchFilters={this.props.clearSearchFilters}
                handleFilterSelect={this.props.handleFilterSelect} 
                handleSortSelect={this.props.handleSortSelect} 
                selectedFilters={this.props.selectedFilters} 
                selectedSort={this.props.selectedSort}  />
            </Grid>
          </Grid>
        </div>
        {isMobile ? 
          <div>
            <Tabs
              value={this.state.tab}
              onChange={this.handleTabChange}
              indicatorColor="white"
              textColor="white"
              centered
              classes={{
                flexContainer: tabContainer
              }}
            >
              <Tab label="List" />
              <Tab label="Map" />
            </Tabs>
            <SwipeableViews
              index={this.state.tab}
              onChangeIndex={this.handleSwipeChange}
            >
              <ResultsContainer {...searchResultsProps}/>
              <div>
                <AsylumConnectMap
                  resources={this.props.mapResources}
                  loadingElement={<div style={{ width:"100%", height: window.innerHeight-91+"px" }} />}
                  containerElement={<div style={{ width:"100%",height: window.innerHeight-91+"px" }} />}
                  mapElement={<div style={{ width:"100%",height: window.innerHeight-91+"px" }} />} 
                />
              </div>
            </SwipeableViews>
          </div>
          : <ResultsContainer {...searchResultsProps} /> 
          }
        </Grid>
      </Grid>
    );
  }
    
}


export default detectPrint(withWidth(withStyles(styles)(SearchResultsContainer)));
