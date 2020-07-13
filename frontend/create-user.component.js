import React, { Component } from "react";
import Axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserFirstname = this.onChangeUserFirstname.bind(this);
    this.onChangeUserLastname = this.onChangeUserLastname.bind(this);
    this.onChangeUserAddy1 = this.onChangeUserAddy1.bind(this);
    this.onChangeUserAddy2 = this.onChangeUserAddy2.bind(this);
    this.onChangeUserCity = this.onChangeUserCity.bind(this);
    this.onChangeUserZipcode = this.onChangeUserZipcode.bind(this);
    this.onChangeUserState = this.onChangeUserState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user_firstname: "",
      user_lastname: "",
      user_addy1: "",
      user_addy2: "",
      user_city: "",
      user_zipcode: "",
      user_state: "",
    };
  }

  onChangeUserFirstname(e) {
    this.setState({
      user_firstname: e.target.value,
    });
  }

  onChangeUserLastname(e) {
    this.setState({
      user_lastname: e.target.value,
    });
  }

  onChangeUserAddy1(e) {
    this.setState({
      user_addy1: e.target.value,
    });
  }

  onChangeUserAddy2(e) {
    this.setState({
      user_addy2: e.target.value,
    });
  }

  onChangeUserCity(e) {
    this.setState({
      user_city: e.target.value,
    });
  }

  onChangeUserZipcode(e) {
    this.setState({
      user_zipcode: e.target.value,
    });
  }

  onChangeUserState(e) {
    this.setState({
      user_state: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`User first name: ${this.state.user_firstname}`);
    console.log(`User State: ${this.state.user_state}`);

    const newUser = {
      user_firstname: this.state.user_firstname,
      user_lastname: this.state.user_lastname,
      user_addy1: this.state.user_addy1,
      user_addy2: this.state.user_addy2,
      user_city: this.state.user_city,
      user_zipcode: this.state.user_zipcode,
      user_state: this.state.user_state,
    };

    Axios.post("http://localhost:4000/user/add", newUser).then((res) =>
      console.log(res.data)
    );

    this.setState({
      user_firstname: "",
      user_lastname: "",
      user_addy1: "",
      user_addy2: "",
      user_city: "",
      user_zipcode: "",
      user_state: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First name:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_firstname}
              onChange={this.onChangeUserFirstname}
            />
          </div>
          <div className="form-group">
            <label>Last name:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_lastname}
              onChange={this.onChangeUserLastname}
            />
          </div>
          <div className="form-group">
            <label>Address 1:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_addy1}
              onChange={this.onChangeUserAddy1}
            />
          </div>
          <div className="form-group">
            <label>Address 2:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_addy2}
              onChange={this.onChangeUserAddy2}
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_city}
              onChange={this.onChangeUserCity}
            />
          </div>
          <div className="form-group">
            <label>Zipcode:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_zipcode}
              onChange={this.onChangeUserZipcode}
            />
          </div>
          <div className="form-group">
            <label>
              State:
              <select
                value={this.state.value}
                onChange={this.onChangeUserState}
              >
                <option value="Alabama - AL">Alabama - AL</option>
                <option value="Alaska - AK">Alaska - AK</option>
                <option value="Arizona - AZ">Arizona - AZ</option>
                <option value="Arkansas - AR">Arkansas - AR</option>
                <option value="California - CA">California - CA</option>
                <option value="Colorado - CO">Colorado - CO</option>
                <option value="Connecticut - CT">Connecticut - CT</option>
                <option value="Delaware - DE">Delaware - DE</option>
                <option value="Florida - FL">Florida - FL</option>
                <option value="Georgia - GA">Georgia - GA</option>
                <option value="Hawaii - HI">Hawaii - HI</option>
                <option value="Idaho - ID">Idaho - ID</option>
                <option value="Illinois - IL">Illinois - IL</option>
                <option value="Indiana - IN">Indiana - IN</option>
                <option value="Iowa - IA">Iowa - IA</option>
                <option value="Kansas - KS">Kansas - KS</option>
                <option value="Kentucky - KY">Kentucky - KY</option>
                <option value="Louisiana - LA">Louisiana - LA</option>
                <option value="Maine - ME">Maine - ME</option>
                <option value="Maryland - MD">Maryland - MD</option>
                <option value="Massachusetts - MA">Massachusetts - MA</option>
                <option value="Michigan - MI">Michigan - MI</option>
                <option value="Minnesota - MN">Minnesota - MN</option>
                <option value="Mississippi - MS">Mississippi - MS</option>
                <option value="Missouri - MO">Missouri - MO</option>
                <option value="Montana - MT">Montana - MT</option>
                <option value="Nebraska - NE">Nebraska - NE</option>
                <option value="Nevada - NV">Nevada - NV</option>
                <option value="New Hampshire - NH">New Hampshire - NH</option>
                <option value="New Jersey - NJ">New Jersey - NJ</option>
                <option value="New Mexico - NM">New Mexico - NM</option>
                <option value="New York - NY">New York - NY</option>
                <option value="North Carolina - NC">North Carolina - NC</option>
                <option value="North Dakota - ND">North Dakota - ND</option>
                <option value="Ohio - OH">Ohio - OH</option>
                <option value="Oklahoma - OK">Oklahoma - OK</option>
                <option value="Oregon - OR">Oregon - OR</option>
                <option value="Pennsylvania - PA">Pennsylvania - PA</option>
                <option value="Rhode Island - RI">Rhode Island - RI</option>
                <option value="South Carolina - SC">South Carolina - SC</option>
                <option value="South Dakota - SD">South Dakota - SD</option>
                <option value="Tennessee - TN">Tennessee - TN</option>
                <option value="Texas - TX">Texas - TX</option>
                <option value="Utah - UT">Utah - UT</option>
                <option value="Vermont - VT">Vermont - VT</option>
                <option value="Virginia - VA">Virginia - VA</option>
                <option value="Washington - WA">Washington - WA</option>
                <option value="West Virginia - WV">West Virginia - WV</option>
                <option value="Wisconsin - WI">Wisconsin - WI</option>
                <option value="Wyoming - WY">Wyoming - WY</option>
                type="submit" value={this.state.user_state}
                onChange={this.onChangeUserState}
              </select>
            </label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Save User Info"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
