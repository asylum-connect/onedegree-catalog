import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

import RedirectWithParams from '../helpers/RedirectWithParams';
import MapContainer from './MapContainer';
import PageContainer from './PageContainer';
require('./AsylumConnectCatalog.scss');
import Announcement from './Announcement';
import { AsylumConnectDialog } from './dialog';
import Header from './Header'
import Footer from './Footer';
import {
  AccountMobile,
  LoginDialog,
} from './account';
import {
  DisclaimerDialog,
  PrivacyDialog,
  PrivacyMobile
} from './privacy';
import AsylumConnectButton from './AsylumConnectButton.js';
import withSession from './withSession';
import withWidth from './withWidth';
import Message from './Message';

import breakpoints from '../theme/breakpoints';

const styles = (theme) => ({
  [theme.breakpoints.down('sm')]: {
    navPadding: {
      paddingBottom: "91px"
    }
  }
});

class AsylumConnectCatalog extends React.Component { 
  constructor(props, context) {
    super(props, context);

    this.state = {
      dialog: 'none',
      message: '',
      messageOpen: false,
    };

    this.handleRequestOpen = this.handleRequestOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleMessageNew = this.handleMessageNew.bind(this);
    this.handleMessageClose = this.handleMessageClose.bind(this);
  }

  handleMessageNew(message) {
    this.setState({message, messageOpen: true});
  }

  handleMessageClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({messageOpen: false});
  }

  handleRequestOpen(dialog) {
    this.setState({dialog});
  }

  handleRequestClose() {
    this.setState({dialog: 'none'});
  }

  render() {
    const {dialog, message, messageOpen} = this.state;
    const {
      handleListAddFavorite,
      handleListRemoveFavorite,
      handleListNew,
      handleLogIn,
      handleLogOut,
      lists,
      session,
      user,
      location,
      history,
      match
    } = this.props;
    const isMobile = this.props.width < breakpoints['sm'];
    const {handleMessageNew, handleRequestClose, handleRequestOpen} = this;
    return (
        <div>
          <Header
            handleLogOut={handleLogOut}
            handleRequestOpen={handleRequestOpen}
            session={session}
            user={user}
            location={location}
            history={history}
            match={match}
          />
        {isMobile ? (
          <div>
            {['disclaimer', 'privacy'].includes(dialog) && (
              <PrivacyMobile
                tab={dialog === 'privacy' ? 0 : 1}
                handleRequestOpen={handleRequestOpen}
              />
            )}
            {['forgot', 'login', 'signup'].includes(dialog) && (
              <AccountMobile
                dialog={dialog}
                tab={dialog === 'signup' ? 1 : 0}
                handleLogIn={handleLogIn}
                handleMessageNew={handleMessageNew}
                handleRequestClose={handleRequestClose}
                handleRequestOpen={handleRequestOpen}
              />
            )}
          </div>
        ) : (
          <div>
            <Announcement handleRequestOpen={handleRequestOpen} />
            <AsylumConnectDialog
              dialog={dialog}
              handleListAddFavorite={handleListAddFavorite}
              handleListNew={handleListNew}
              handleLogIn={handleLogIn}
              handleLogOut={handleLogOut}
              handleMessageNew={handleMessageNew}
              handleRequestClose={handleRequestClose}
              handleRequestOpen={handleRequestOpen}
              session={session}
              user={user}
            />
          </div>
        )}
        { (isMobile && !['disclaimer', 'privacy', 'forgot', 'login', 'signup'].includes(dialog)) || !isMobile ?
          <div className={"content "+this.props.classes.navPadding} >
            <Switch>
              <Route path="/resource/:id" render={(props) => (
                <MapContainer
                  {...props}
                  handleListAddFavorite={handleListAddFavorite}
                  handleListRemoveFavorite={handleListRemoveFavorite}
                  handleListNew={handleListNew}
                  handleLogOut={handleLogOut}
                  handleMessageNew={handleMessageNew}
                  handleRequestOpen={handleRequestOpen}
                  lists={lists}
                  session={session}
                  user={user}
                />)}
              />
            <Route exact path="/" render={(props) => (
              <MapContainer
                {...props}
                handleListAddFavorite={handleListAddFavorite}
                handleListRemoveFavorite={handleListRemoveFavorite}
                handleListNew={handleListNew}
                handleLogOut={handleLogOut}
                handleMessageNew={handleMessageNew}
                handleRequestOpen={handleRequestOpen}
                lists={lists}
                session={session}
                user={user}
              />)}
            />
          <Route
            path="/search/:near/:for/:filter/:sort"
            render={(props) => (
              <MapContainer
                {...props}
                handleListAddFavorite={handleListAddFavorite}
                handleListRemoveFavorite={handleListRemoveFavorite}
                handleListNew={handleListNew}
                handleLogOut={handleLogOut}
                handleMessageNew={handleMessageNew}
                handleRequestOpen={handleRequestOpen}
                lists={lists}
                session={session}
                user={user}
              />)}
            />
              <RedirectWithParams from={"/search/:near/:for/:filter"} to={"/search/:near/:for/:filter/default"} />
              <RedirectWithParams from={"/search/:near/:for"} to={"/search/:near/:for/all/default"} />
              <Redirect from="/search" to="/"/>
              <Redirect from="/resource" to="/"/>
              <Route render={(props) => (
                <PageContainer
                    {...this.state}
                    {...this.props}
                    {...props}
                    handleMessageNew={handleMessageNew}
                    handleRequestOpen={handleRequestOpen}
                  />
                )}
              />
            </Switch>
          </div>
        : null }
        { isMobile ? null : <Footer /> }
        <Message
          handleMessageClose={this.handleMessageClose}
          message={message}
          open={messageOpen}
        />
      </div>
    );
  }
};

AsylumConnectDialog.defaultProps = {
  session: null,
  user: null,
};

AsylumConnectCatalog.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  session: PropTypes.string,
  user: PropTypes.number,
  width: PropTypes.number.isRequired,
};

export default withSession(withWidth(withStyles(styles)(AsylumConnectCatalog)));
