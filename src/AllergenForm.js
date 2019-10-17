import React from 'react';

class AllergenForm extends React.Component{

    state = {
        allergens: [],
        userAllergens: [],
        clicked: false
    }


    componentDidMount() {
        fetch("http://localhost:3000/avoids")
            .then(res => res.json())
            .then(data => this.setState({
                allergens: data
            }))
    }

    handleClick = (foodItem) => {
        return this.props.handleAllergySubmit(foodItem.target.innerText)
        
    }

    render() {

        
        const allergyDisp = this.state.allergens.map((food, index) => {
           return <>
                <div
                    key={index}
                   onClick={e => this.handleClick(e)}>
                   {food.allergy}
               </div>
            </>
        }) 

        return (
            this.state.allergens[0] ?<ul>  <form onSubmit={(e) => this.props.handleAllergySubmit(e, this.state.userAllergens)}  >
                 {allergyDisp} 
            </form>  </ul>: null
            )
    }
}


export default  AllergenForm