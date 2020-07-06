import React, { Component } from 'react'
import './LoginForm.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import  HomePage  from './HomePage';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
export default function LoginForm() {
    const history = useHistory();
    const {register, errors} = useForm();
    return (
        <Router>
            <div>
                <form className = "LoginForm" onSubmit = {(e) => login(e)}>
                    <div>
                        <label className = "text-center">Username</label>
                        <input
                        className = "form-control username"
                        type = "text"
                        id = "username"
                        placeholder = "username"
                        name = "username"
                        ref = {register({
                            required: {
                                value: true,
                                message: "Username is required!"
                        }})}>
                        </input>
                    </div>

                    <div>
                        <label className = "text-center">Password</label>
                        <input
                        className = "form-control"
                        id = "password"
                        type = "password"
                        name = "password"
                        placeholder = "••••••••"
                        ref = {register({
                            required: {
                                value: true,
                                message: "Password is required!"
                            }})}>
                        </input>
                    </div>
                    <br></br>
                    <button type = "submit" className = "btn-sm btn-dark btn-block">
                        Login
                    </button>

                    <div className = "error-containers">
                        <p>{errors.username && errors.username.message}</p>
                        <p>{errors.password && errors.password.message}</p>
                    </div>
                </form>
            </div>

            <Route path = "/Register" exact component = {HomePage}></Route>
        </Router>
    );
}

function login(e) {
    e.preventDefault();
    let request = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    
    axios.post('http://localhost:3000/login', request)
    .then(resp => {
        if(resp.data && request.username === "admin") {
            this.history.push({
                pathname: "/admin",
            });
        } else if(resp.data) { 
            this.history.push({
                pathname: "/dashboard",
            });
        }
    })
    .catch(err => {
        console.log(err);
    })
};
