import React, { Component } from 'react';
import Application from '../Application';
import { connect } from 'react-redux';
import { getJobsApplications } from '../../actions/getJobsApplications';

const mapStateToProps = (state) => {
  if (state.applications.length > 0) {
    //filter initial applications array into two halves - one with application date and one without
    //then we switch the two halves, so applications with date come first
    const no_date_applied = state.applications.filter(application => !application.date_applied);
    const with_date_applied = state.applications.filter(application => application.date_applied);
    const newState = with_date_applied.concat(no_date_applied);
    return {applications: newState};
  }
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getJobsApplications: () => dispatch(getJobsApplications()),
})

class ApplictionsDashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      applications: []
    }
  }

  async componentDidMount () {
    await this.props.getJobsApplications();
    console.log(this.props);
    this.setState({applications: this.props.applications});
  }
  render() {
    const rand = require("random-key");
    return (
      <div className='applications-dashboard-container'>
        {
          this.state.applications.map(application => {
            return <Application key={rand.generate(10)} application={application} />;
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplictionsDashboard);