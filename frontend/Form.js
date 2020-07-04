import React, { Component } from 'react'

import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';



class Form extends Component {

	constructor(props) {

		super(props)



		this.state = {

			
			total_price: '',

            suggested_price: '2.05',

			fuelquote: '',

			del_Date: ''
            

		}
		

		this.handleDateChange = this.handleDateChange.bind(this);
	


	}


	handleDateChange(date) {
		this.setState({
		  del_Date: date
		})
	  }


	handleFuelChange = event => {

		this.setState({

			fuelquote: event.target.value,

			

		})

	}


	handleSubmit = event => {

		if(isNaN(this.state.fuelquote) || this.state.fuelquote < 0){
			alert('Error! Please input valid fuel quantity.')
		}
		else{

			console.log(this.state)
			alert('Submission Successful!')
		}

		
		
		event.preventDefault()

	}



	render() {

		const {  suggested_price, fuelquote } = this.state

		return (

			<form onSubmit={this.handleSubmit}>


                <div>
					<label>Name:  </label>
                	<input type="text" value="Saadman Iqbal"></input>
					
                </div>
				
				<div>
					<label>Address:  </label>
                	<input type="text" value="1234 Cullen Blvd Houston TX 77204" style={{width: "370px"}}></input>
                </div>

				<div>

					
				<label>Gallons:  </label>
					<input
						
			
						type="value"
						

						
                        
                        placeholder = "Gallons Requested"

						value={fuelquote}

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
              selected={ this.state.del_Date }
			  onChange={ this.handleDateChange }
			  placeholder = "Enter Date"
			  name="del_Date"
			  
			  dateFormat="MM/dd/yyyy"

			  required
          />

				</div>

                <div>
					<label>Amount Due in dollars:  </label>
                	<input type="text" value={fuelquote*2.05}></input>
                </div>

				<button type="submit">Submit</button>

			</form>

		)

	}

}



export default Form