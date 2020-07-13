import React, { Component } from "react";
//import { Redirect } from "react-router-dom"
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Form extends Component {
	constructor(props) {
		super(props)

		this.onChangeGallon = this.onChangeGallon.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onChangePrice = this.onChangePrice.bind(this);
		this.onSubmit = this.onSubmit.bind(this);


		this.state = {
			name: '',
			Address1: '',
			Address2: '',
			City: '',
			St: '',
			Zipcode: '',
			del_Date: new Date(),
			suggested_price: '2.05',
			Gallon: '',
			FinalPrice: ''
		};



	}

	componentDidMount() {
		axios.get('http://localhost:4000/user')
		.then(response => {
			console.log("hello");
			//const data = response.name;
			this.setState({
				
				name : response.data.name,
				Address1: response.data.address1,
				City: response.data.city,
				St: response.data.state,
				Zipcode: response.data.zip
			})
		})
		.catch((error) => {
			console.log(error);
		})

		//fetch("http://localhost:3001/client_info")
		//	.then(response => response.json())
		//	.then(responseJson => {
		//		this.setState({ firstname: responseJson.first_name });
		//		this.setState({ lastname: responseJson.last_name });
		//		this.setState({ Address1: responseJson.address });
		//		this.setState({ St: responseJson.state });
		//		this.setState({ Zipcode: responseJson.zip });
		//	});

	}


	onChangeGallon(e) {
		this.setState ({ Gallon: e.target.value})
	}

	onChangeDate(del_Date) {
		this.setState ({del_Date: del_Date})
	}

	onChangePrice(e) {
		this.setState ({FinalPrice: (2.05*this.state.Gallon)})
	}



	//Date_onChange = del_Date => this.setState({ del_Date })
	//OnFinalPriceChange = event => {
	//	this.setState({
	//		FinalPrice: event.target.value,
	//	})
	//}



	//handleFuelChange = event => {
	//	this.setState({
	//		Gallon: event.target.value,
	//	})

	//}

	onSubmit(e) {
		e.preventDefault()
		if (isNaN(this.state.Gallon) || this.state.Gallon < 0) {
			alert('Error! Please input valid fuel quantity.')
		}
		else {
			const quote_form = {
				username: this.state.name,
				quoteID: "1",
				//name: this.state.name,
				//address1: this.state.Address1,
				//address2: this.state.Address2,
				//city: this.state.City,
				//state: this.state.St,
				//zip: this.state.Zipcode,
				//date: this.state.del_Date,
				priceperg : this.state.suggested_price,

				gallon: this.state.Gallon,
				price: this.state.FinalPrice
				
			}

			console.log(quote_form);

			axios.post('http://localhost:4000/fuel_quote/add', quote_form)
			.then(res => console.log(res.data));

			window.location = '/';

			//console.log(this.state)
			alert('Submission Successful!')
			//const client = {
			//	Gallon: this.state.Gallon,
			//	del_Date: this.state.del_Date
			//}
			//axios.post('http://localhost:3001/client_info/form_submit',client)
			//	.then(res => {
			//		console.log(res);
			//		console.log(res.data);
			//	})
			//console.log(this.state)
			//alert('Submission Successful!')
			//return <Redirect to = "http://localhost:3001/client_info/form_submit" />
		}


	}


	render() {
		//var { suggested_price, Gallon } = this.state
		return (
			<div>
				
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Name:  </label>
						<input type = "text"
						required 
						//className = "form-group"
						value={this.state.name} >	
						</input>

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
							value={this.state.Gallon}
							onChange={this.onChangeGallon}
							required
						/>
					</div>

					<div>
						<label>Suggested Price/Gallon in dollars:  </label>
						<input type="text" value={this.state.suggested_price}></input>
					</div>

					<div>
						<label>Delivery Date: </label>
						<DatePicker
							selected={this.state.del_Date}
							onChange={this.onChangeDate}
							placeholder="Enter Date"
							name="del_Date"
							dateFormat="MM/dd/yyyy"
							//value={//this.state.del_Date}

							required
						/>
					</div>
					<div>
						<label>Amount Due in dollars:  </label>
						<input type="text" value={(this.state.Gallon) * 2.05}
							onChange={this.onChangePrice}></input>
					</div>

					<div className = "form=group">
					<input type="submit" className = "btn btn-primary" value = "Submit"/>
					</div>
				</form>
			</div>
		)
	}
}

export default Form