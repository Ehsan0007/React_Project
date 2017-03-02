import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Invite extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.props.onGetInvite();
  }

  render() {
    <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
    const { host, agenda, guest_count, guests } = this.props.invite;
    return (
      <div >
       
        <div className="well">
          <h1>Meeting invite</h1> 
          
        </div>

        <div className="bg-warning meeting-summary">
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Host:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {host}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Agenda:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {agenda}
            </div>
          </div>
        </div>
        <div className="bg-info meeting-form">
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Name:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                <input
                  type="text"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.onAddToInvite(this.state.name)}
                >
                  I am coming!
                </button>
              </div>
            </div>
        </div>
        <div className="meeting-list">
          <h2>Guests</h2>
          {guests && guests.length > 0 ? (
            <ul>
              {guests.map((guest, index) => {
                return (
                  <li key={index}>
                    {guest.name}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
