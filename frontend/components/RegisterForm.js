import React from 'react';
import './RegisterForm.css';
import {useForm, appendErrors } from 'react-hook-form';

export default function RegisterForm() {
    const {register, handleSubmit, errors, getValues } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form className = "RegisterForm" onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label className = "text-center">Enter a username</label>
                    <input
                    className = "form-control"
                    type = "text"
                    placeholder = "username"
                    name = "username"
                    ref = {register({
                        required: {
                            value: true,
                            message: "Username is required."
                        },
                        minLength: {
                            value: 3,
                            message: "Username should be more than 3 characters"
                        }
                        })}>
                    </input>
                </div>

                <div>
                    <label className = "text-center">Password</label>
                    <input
                    class = "form-control"
                    type = "password"
                    name = "password"
                    placeholder = "••••••••"
                    ref = {register({
                        required: {
                            value: true,
                            message: "Password is required!"
                        },
                        minLength: {
                            value: 6,
                            message: "Password must at least be 6 characters"
                        }
                        })}>
                    </input>
                </div>

                <div>
                    <label className = "text-center">Confirm Password</label>
                    <input
                    name = "passwordConfirmation"
                    class = "form-control"
                    type = "password"
                    placeholder = "re-type password"
                    ref = {register({
                        required: "Please confirm password",
                        validate: {
                            matchespreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || "Password should match."
                            },
                        },
                    })}>
                    </input>
                </div>
                <br></br>
                <button type = "submit" className = "btn-sm btn-dark btn-block">
                    Submit
                </button>

                <div className = "error-containers">
                    <p>{errors.username && errors.username.message}</p>
                    <p>{errors.passwordConfirmation && errors.passwordConfirmation.message}</p>
                    <p>{errors.password && errors.password.message}</p>
                </div>
            </form>
        </div>
    );
}