import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';



class LoginPage extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
             [event.target.name]: event.target.value
           }) 
        // console.log(event)
        }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.token = data.token
                    this.props.redirect('profile')
                }
            })

    }


    
    render() {
    // console.log(this.state.username)
        console.log(this.props)
        return (
            
           
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Username" type="text" name="username" onChange={this.handleChange} value={this.state.username}  />
                <input placeholder="Password"  type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                <input type="submit" />
                <button onClick={() => this.props.handleButtonClick('signup')} > Sign up! </button >
            </form>
        )
    }

}

export default LoginPage