import React from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update'; 

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import SuggestInfo from './SuggestInfo';
import SuggestHour from './SuggestHour';
import SuggestAdditional from './SuggestAdditional';

import AsylumConnectButton from '../AsylumConnectButton';

import 'whatwg-fetch';
import config from '../../config/config.js';

const styles = theme => ({
  root: {
    padding: '0 10% 10% 10%'
  },
  formType: {
    margin: '5% 0 5% 0'
  },
  extraMargin: {
    margin: '20px 0 20px 0'
  },
  settingsTypeFont: {
    marginRight: '20px',
    lineHeight: '1.6',
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "\"Open Sans\", sans-serif",
    color: theme.palette.common.lightBlack,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer'
  },
});

const defaultSchedule = {
  monday_start: '',  monday_end: '',
  tuesday_start: '',  tuesday_end: '',
  wednesday_start: '',  wednesday_end: '',
  thursday_start: '',  thursday_end: '',
  friday_start: '',  friday_end: '',
  saturday_start: '',  saturday_end: '',
  sunday_start: '',  sunday_end: '',
  notes:''
}

const defaultResource = {
  "name": "",
  "website": "",
  "region": "",
  "description": "",
  "tags": [],
  "emails":[
    {
      "title": "",
      "first_name": "",
      "last_name": "",
      "email": "",
    }
  ],
  "properties": [
      {
          "name": "approval-asylumconnect",
          "value": "false"
      },
  ],
  "locations": [
      {
          "name": "",
          "address": "",
          "unit": "",
          "city": "",
          "state": "",
          "zip_code": "",
          "is_primary": true,
          "phones": [
              {
                  "digits": "",
                  "phone_type": "Office",
                  "is_primary": true
              }
          ],
          "schedule": {
              "monday_start": "",
              "monday_end": "",
              "tuesday_start": "",
              "tuesday_end": "",
              "wednesday_start": "",
              "wednesday_end": "",
              "thursday_start": "",
              "thursday_end": "",
              "friday_start": "",
              "friday_end": "",
              "saturday_start": "",
              "saturday_end": "",
              "sunday_start": "",
              "sunday_end": "",
              "notes": ""
          }
      }
  ],
  "phones": [
      {
          "digits": "",
          "phone_type": "Office",
          "is_primary": true
      }
  ]
}

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:null,
      affiliation: null,
      isSent:false,
      selectedDays: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      resourceData: defaultResource,
      nonEngServices: [],
      address: '',
      features: [
        { label: 'Has A Confidentiality Policy', name: 'has-a-confidentiality-policy', value: false },
        { label: 'Cost Free', name: 'cost-free', value: false },
      ],
      requirements: [
        {label: 'Photo ID not required', name: 'not-req-photo-id', value: false}, 
        {label: 'Proof of income not required', name: 'not-req-proof-of-income', value: false}, 
        {label: 'Proof of age not required', name: 'not-req-proof-of-age', value: false}, 
        {label: 'Medical insurance not required', name: 'not-req-medical-insurance', value: false}, 
        {label: 'Proof of residence not required', name: 'not-req-proof-of-residence', value: false}, 
        {label: 'A referral not required', name: 'not-req-referral', value: false}
      ],
      tags:[],
      emails:[]
    }
    this.handleChangeGeneralInfo = this.handleChangeGeneralInfo.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleSelectAddress = this.handleSelectAddress.bind(this)
    this.handleSelectNonEngServices = this.handleSelectNonEngServices.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDaySelect = this.handleDaySelect.bind(this)
    this.handleChangeSchedule = this.handleChangeSchedule.bind(this)
    this.handleRequirementSelect = this.handleRequirementSelect.bind(this)
    this.handleFeatureSelect = this.handleFeatureSelect.bind(this)
    this.handleTagSelect = this.handleTagSelect.bind(this);
    this.submitResource = this.submitResource.bind(this)
  }
  componentDidMount(){
    const jwt = localStorage.getItem('jwt')
    const { handleMessageNew } = this.props
    // detect if user is authorized
    if (jwt) {
      const apiDomain = config[process.env.OD_API_ENV].odas;
      const url = `${apiDomain}api/user`;    
      const options = {
        method: 'GET',
        headers: {
          Authorization: jwt,
          'Content-Type': 'application/json',
          OneDegreeSource: 'asylumconnect',
        }
      };
      fetch(url, options)
        .then(response => {
          if (response.status === 200) {
            response.json().then(({user}) => {
              // user is authorized              
              this.setState({user: user, affiliation: user.affiliation})
            });
          } else {
            handleMessageNew('Your email or password is incorrect.');
          }
        })
        .catch(error => {
          handleMessageNew('Oops! Something went wrong.');
        });
    } else {
      // if user not sign in, redirect asking to sign in
      this.setState({user:null})
    }
  }
  handleChangeGeneralInfo(name, value){
    const { resourceData } = this.state;
    let updatedResourceData;
    updatedResourceData = update(resourceData, {$merge:{[name]: value}})
    this.setState({ resourceData: updatedResourceData })
  }
  handleChangePhone(name, value){
    const { resourceData } = this.state;
    let updatedResourceData1, updatedResourceData2;
    updatedResourceData1 = update(resourceData,{phones: {0: {$merge:{[name]: value}}}})
    updatedResourceData2 = update(updatedResourceData1,{locations: { 0: {phones: {0: {$merge:{[name]: value}}}}}})
    this.setState({ resourceData: updatedResourceData2 })
  }
  handleChangeEmail(name, value){
    const { resourceData } = this.state;

    // Update current list of email
    let emailList = value.split(',')
    if (emailList.length > 1) {
      for (let i=0;i<emailList.length;i++){
        emailList[i]=emailList[i].trim()
      }
    } else {
      emailList[0] = value
    }
    this.setState({emails: emailList})
  }
  handleSelectAddress(address){
    const { resourceData } = this.state;
    let updatedResourceData;
    this.setState({address})
    const locationItems = address.split(',')
    const stateZipcode = locationItems[2] ? locationItems[2].trim().split(' '): ''
    if (stateZipcode.length > 1) {
      locationItems[4] = stateZipcode[0]
      locationItems[5] = stateZipcode[1]
    } else {
      locationItems[4] = stateZipcode[0]
      locationItems[5] = ''
    }
    updatedResourceData = update(resourceData, 
      {locations : 
        { 0: 
          {
            address: {$set: locationItems[0] ? locationItems[0].trim(): ''},
            city: {$set: locationItems[1] ? locationItems[1].trim(): ''},
            state: {$set: locationItems[4]},
            zip_code: {$set: locationItems[5]}
          },
        }
      }
    )
    this.setState({resourceData: updatedResourceData})
  }
  handleSelectNonEngServices(action, nonEngService, index){
    const { resourceData, nonEngServices } = this.state
    let updatedNonEngServices, requestService, updatedResourceData;
     
    if (action=='add'){
      // Add selected service to nonEngServices state
      updatedNonEngServices = update(nonEngServices, {$push: [nonEngService]})
      // Add selected service to request resource Data
      requestService = {'name':'lang-' + nonEngService.split(' ').join('-'), 'value': 'true'}
      updatedResourceData = update(resourceData, {properties: {$push:[requestService]}})
    } else {
      // Remove selected service from nonEngServices
      updatedNonEngServices = update(nonEngServices, {$splice: [[index,1]]})      
      // Remove select service from request resourceData
      requestService = 'lang-' + nonEngService.split(' ').join('-')
      // Find index of the select service in resourceData.properties array
      let indexResource = resourceData.properties.findIndex(p => p.name == requestService)
      if (indexResource >= 0) {
        updatedResourceData = update(resourceData, {properties: {$splice: [[indexResource,1]]}})
      }      
    }
    this.setState({nonEngServices: updatedNonEngServices, resourceData: updatedResourceData})
    
    
  }
  handleDaySelect(select, value, startValue, endValue) {
    const { selectedDays } = this.state;
    let updatedSelectedDays;
    if (select === 'select') {
      updatedSelectedDays = update(selectedDays,{$merge:{[value]: !selectedDays[value]}})
    } else {
      updatedSelectedDays = update(selectedDays,{$merge:{[value.split('_')[0]]: true}})
    }
    this.setState({ selectedDays: updatedSelectedDays})
  }
  handleChangeSchedule (name, value) {
    const { resourceData, selectedDays } = this.state;
    let updatedResourceData = update(resourceData, {locations: { 0: {schedule: {$merge: { [name]:value }}}}})
    this.setState({ resourceData: updatedResourceData})
  }
  handleFeatureSelect(event, checked){
    const { value } = event.target
    const { features, resourceData } = this.state

    // update current status of a feature
    let index = features.findIndex((f) => f.name === value )
    let updatedFeatures = update(features, {[index]: {$merge: {value: checked}}})
    this.setState({features: updatedFeatures})

    // add/remove feature to/from resourceData
    let updatedResourceData;    
    if (checked) {
      let updatedFeature = { [value]: checked.toString() }
      updatedResourceData = update(resourceData, {properties: {$push: [updatedFeature]}})
    } else {
      let indexResource = resourceData.properties.findIndex(p => Object.keys(p)[0] == value)
      if (indexResource >= 0) {
        updatedResourceData = update(resourceData, {properties: {$splice: [[1, indexResource]]}})
      }      
    }
    this.setState({resourceData: updatedResourceData})
  }
  handleRequirementSelect(event, checked){
    const { value } = event.target
    const { requirements, resourceData } = this.state

    // update current status of a requirement
    const index = requirements.findIndex((f) => f.name === value )
    let updatedRequirements = update(requirements, {[index]: {$merge: {value: checked}}})
    this.setState({requirements: updatedRequirements})

    // add/remove feature to/from resourceData
    let updatedResourceData;    
    if (checked) {
      let updatedRequirement = { [value]: checked.toString() }
      updatedResourceData = update(resourceData, {properties: {$push: [updatedRequirement]}})
    } else {
      let indexResource = resourceData.properties.findIndex(p => Object.keys(p)[0] == value)
      if (indexResource >= 0) {
        updatedResourceData = update(resourceData, {properties: {$splice: [[1, indexResource]]}})
      }      
    }
    this.setState({resourceData: updatedResourceData})
  }
  handleTagSelect(event, checked) {
    var index;
    const target = event.target;
    const { resourceData } = this.state;
    var selectedResourceTypes = this.state.tags.slice();
    
    if(checked && selectedResourceTypes.indexOf(target.value) < 0) {
      selectedResourceTypes.push(target.value)
      this.setState({
        tags: selectedResourceTypes
      });
    } else if(!checked && (index = selectedResourceTypes.indexOf(target.value)) >= 0) {
      selectedResourceTypes.splice(index, 1)
      this.setState({
        tags: selectedResourceTypes
      });
    }

    let updatedResourceData = update(resourceData, {tags: {$set: selectedResourceTypes}})
    this.setState({resourceData: updatedResourceData})
  }
  handleClick(){
    const {resourceData, selectedDays, features, requirements, tags} = this.state;
    // Update/reformat resourceData 
    let updatedResourceData1, updatedEmailList, updatedResourceData2;
    // 1: Remove unselected time in schedule object
    let { schedule } = resourceData.locations[0]    
    for (let timeKey in schedule ) {
      let day = timeKey.split('_')[0]
      if (!selectedDays[day]){
        schedule = update(schedule,{$merge:{[timeKey]: ''}})
      }
    }
    updatedResourceData1 = update(resourceData, {locations: { 0: {schedule: {$merge: schedule} }}})

    // 2: Update current email list
    updatedEmailList = this.state.emails.map(e => {return {title:'', first_name:'', last_name:'',email:e}})
    updatedResourceData2 = update(updatedResourceData1, {emails: {$set: updatedEmailList}})
    this.setState({resourceData: updatedResourceData2})

    this.submitResource(updatedResourceData2)
  }
  submitResource(data){
    const {user, handleMessageNew} = this.props;
    const client_user_id = user ? user.id : 0
    const payload = {
      "api_key": config[process.env.OD_API_ENV].odApiKey,
      "submission": {
        "resource_id": 0,
        "resource_type": "Organization",
        "client_user_id": client_user_id,
        "content": JSON.stringify(data),
        "submitter_type": "PublicForm"
      }
    }
    fetch(window.location.origin+'/api/submissions', 
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.status === 200) {
        this.setState({isSent: true})
        handleMessageNew('Your information has been submitted for reviewing.');
      } else {
        handleMessageNew('Oops! Something went wrong.');
      }
    })
  }

  render() {
    const { classes } = this.props;
    const { user, selectedDays, isSent, resourceData, nonEngServices, address, features, requirements, tags, emails } = this.state;
    const { name, website, locations, description, phones, properties } = resourceData;
    return (
      <div className={classes.root}>
      {user? (
        <div>
          <Typography type="display2" className={classes.formType}>Suggest New Resource</Typography>
          <Typography type='body1'>
            Thank you for your interest in contributing to the AsylumConnect resource catalog! Use this form to suggest a resource you think should be included. It's ok if you do not have all of the information the form asks for - just fill in what you know, and we'll do the rest! We appreciate your submission and thank you for helping to connect asylum seekers to helpful services. All suggested resources are subject to review by AsylumConnect staff before being published.
          </Typography>
          <SuggestInfo 
            digits={phones[0].digits}
            description={description}
            address={address}
            website={website}
            name={name}
            emails={emails}
            nonEngServices={nonEngServices}
            handleChangeGeneralInfo={this.handleChangeGeneralInfo}
            handleChangePhone={this.handleChangePhone}
            handleChangeEmail={this.handleChangeEmail}
            handleSelectAddress={this.handleSelectAddress}
            handleSelectNonEngServices={this.handleSelectNonEngServices}/>

          <SuggestHour 
            schedule={defaultSchedule}
            selectedDays={selectedDays}
            handleChange={this.handleChangeSchedule}
            handleDaySelect={this.handleDaySelect}
            />

          <SuggestAdditional
            handleRequirementSelect={this.handleRequirementSelect}
            selectedRequirements={requirements}
            handleFeatureSelect={this.handleFeatureSelect}
            selectedFeatures={features}
            handleTagSelect={this.handleTagSelect}
            selectedTags={tags}
          />
        
        {!isSent  ? (
          <div>
            <AsylumConnectButton variant='primary' onClick={this.handleClick}>suggest resource</AsylumConnectButton>
            <Typography type='body1' className={classes.extraMargin}>All organization changes are subject to review by AsylumConnect before publication</Typography>
          </div>
        ):(
          <div className={classes.settingsTypeFont}>
            <span>Thank you for your request! All changes will be review by the AsylumConnect team and verification permitting, published as soon as possible. Question? Please email <a href="mailto:catalog@asylumconnect.org" className={classes.boldFont}>catalog@asylumconnect.org</a>.</span>
          </div>
        )}
        </div>
      ):('')}        
      </div>
    )
  }
}

Suggestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Suggestion);