import React from 'react';
import SearchForm from './SearchForm'
import AllergenForm from './AllergenForm'
import DisplayedMenuItems from './DisplayedMenuItems'




class ProfilePage extends React.Component {

    // ------------------------------------------STATE
    state = {
        username: '',
        searchTerm: '',
        userFoodAllergy: [],
        menuItems: []
    }


    // -------------------------------------------FETCHES

    componentDidMount() {
        fetch('http://localhost:3000/profile', {
            headers: {
                Authorization: localStorage.token
            }
        })
            .then(res => res.json())
            .then(profileData => {
                this.setState({ username: profileData.username })
            })
    }




    // --------------------------------------------CALL-BACK-FUNCTIONS
    handleSearchSubmit = (e, searchTerm) => {
        e.preventDefault()
        this.setState({
            searchTerm: searchTerm
        })
    }


    handleAllergySubmit = (e) => {

        const includesAllergen = this.state.userFoodAllergy.includes(e)
        if (includesAllergen) {
            let arr = [...this.state.userFoodAllergy].filter(ele => ele !== e)
            // console.log("arr", arr)
            this.setState({
                userFoodAllergy: arr
            })
        }
  
           else {
           this.setState({
               userFoodAllergy: [...this.state.userFoodAllergy, e]
           })}
       
    }
   








    // ------------------------------------------------------RENDER
    render() {
    
        return (
            <div>
                {
                this.state.username ?
                (`Welcome, ${this.state.username}!`) :
                ('Getting your stuff...')
                }

                <SearchForm handleSearchSubmit={this.handleSearchSubmit} />
                <AllergenForm handleAllergySubmit={this.handleAllergySubmit} />
                <DisplayedMenuItems userAllergy={this.state.userFoodAllergy} searchTerm={this.state.searchTerm} />

            </div>
        );
    }

}

export default ProfilePage