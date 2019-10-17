import React from 'react';


class SignupPage extends React.Component {


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
        fetch('http://localhost:3000/signup', {
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
        console.log(this.state.username)
        return (

            <form onSubmit={this.handleSubmit}>

                <input placeholder="Username" type="text" name="username" onChange={this.handleChange} value={this.state.username} />

                <input placeholder="Password" type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                <input type="submit" />

            </form>
            
        )
    }

}

export default SignupPage