import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import DatePicker from 'react-datepicker';

import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {

			firstname: '',
			lastname: '',
			Address1: '',
			Address2: '',
			City: '',
			St: '',
			Zipcode: '',
			del_Date: '',

			suggested_price: '2.05',
			Gallon: '',
			FinalPrice: ''

		};

	}

	componentDidMount() {
		fetch("http://localhost:3001/client_info")
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ firstname: responseJson.first_name });
				this.setState({ lastname: responseJson.last_name });
				this.setState({ Address1: responseJson.address });
				this.setState({ St: responseJson.state });
				this.setState({ Zipcode: responseJson.zip });
			});
	}

	Date_onChange = del_Date => this.setState({ del_Date })

	OnFinalPriceChange = event => {
		this.setState({
			FinalPrice: event.target.value,

		})
	}

	handleFuelChange = event => {

		this.setState({
			Gallon: event.target.value,
		})

	}


	handleSubmit = event => {
		event.preventDefault()
		if (isNaN(this.state.Gallon) || this.state.Gallon < 0) {
			alert('Error! Please input valid fuel quantity.')
		}
		else {
			console.log(this.state)
			alert('Submission Successful!')

			const client = {
				Gallon: this.state.Gallon,
				del_Date: this.state.del_Date
			}

			axios.post('http://localhost:3001/client_info/form_submit',client)
				.then(res => {
					console.log(res);
					console.log(res.data);
				})
			
			//console.log(this.state)
			//alert('Submission Successful!')
			return <Redirect to = "http://localhost:3001/client_info/form_submit" />

		}



		

	}




	render() {
		const { suggested_price, Gallon } = this.state
		return (
			<div>
				<h5>{this.state.firstname}</h5>


				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Name:  </label>
						<input type="text" value={this.state.firstname + " " + this.state.lastname} ></input>

					</div>

					<div>
						<label>Address:  </label>
						<input type="text" value={this.state.Address1 + " " + this.state.St + " " + this.state.Zipcode} style={{ width: "370px" }}></input>
					</div>

					<div>


						<label>Gallons:  </label>
						<input


							type="value"

							placeholder="Gallons Requested"

							value={Gallon}

							onChange={this.handleFuelChange}

							required

						/>

					</div>

					<div>
						<label>Suggested Price/Gallon in dollars:  </label>
						<input type="text" value={suggested_price}></input>
					</div>


					<div>
						<label>Delivery Date: </label>
						<DatePicker
							selected={this.state.del_Date}
							onChange={this.Date_onChange}
							placeholder="Enter Date"
							name="del_Date"

							dateFormat="MM/dd/yyyy"
							value={this.state.del_Date}

							required
						/>

					</div>

					<div>
						<label>Amount Due in dollars:  </label>
						<input type="text" value={Gallon * 2.05}
							onChange={this.onFinalPriceChange}></input>

					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}


}

export default Form