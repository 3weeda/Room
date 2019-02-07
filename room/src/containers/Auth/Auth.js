import React, { Component } from 'react';
import classes from './Auth.css';
import Modal from '../../UI/Modal/Modal';
import Spinner from '../../UI/Spinner/Spinner';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { checkValidity } from '../../Shared/CheckValidity'

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
    }

    changeInputHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({ controls: updatedControls })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }


    render() {
        //convert state object to an array to Loop through
        const controlsArray = [];
        for (let key in this.state.controls) {
            controlsArray.push({
                id: key,//keys: email/ password
                config: this.state.controls[key]//values: elType, elConfig, Value, Valid, touched
            })
        }
        let form = controlsArray.map(element => (
            <Input
                key={element.id}
                elementType={element.config.elementType}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                invalid={!element.config.valid}
                shouldValidate={element.config.validation}
                touched={element.config.touched}
                changed={(event) => this.changeInputHandler(event, element.id)}
            />
        ));

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        let button = 'Sign up'
        if (!this.props.isSignup) {
            button = 'Log in'
        }

        return (
            <div className={classes.Auth}>
                <Modal 
                visible={this.props.modalVisible} 
                closeModal={this.props.closeModal}
                nightMode={this.props.nightMode}
                >
                    {errorMessage}
                    <form onSubmit={this.submitHandler}>
                        {form}
                        <Button btnType={this.props.nightMode ? "SquareNightMode" : "Square"}>
                        {button}</Button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Auth;