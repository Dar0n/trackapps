import React, { Component } from 'react';
import Application from '../Application';
import { connect } from 'react-redux';
import { getJobsApplications } from '../../actions/getJobsApplications';

const mapStateToProps = (state) => {
  if (state.applications.length > 0) {
    return {applications: state.applications};
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