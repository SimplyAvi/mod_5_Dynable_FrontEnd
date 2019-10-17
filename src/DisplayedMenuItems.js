import React from 'react';
import { Icon, List, Label } from 'semantic-ui-react'

class DisplayedMenuItems extends React.Component {
    state = {
        menuItems: [],
        copyMenuItem: []
    }
    
    componentDidMount() {
        fetch('https://data.cityofnewyork.us/resource/qgc5-ecnb.json')
            .then(res => res.json())
            .then(data => this.setState({
                menuItems: data,
                copyMenuItem: data
            })    
        )
    }

    
    filteredResults = () => {

        console.log(this.allergenFiltered)
        let renderMenuItems = []
        if (this.state.menuItems.length) {     
            // console.log(this.state.menuItems)
            if (this.props.searchTerm) {
                // debugger
                console.log('im being fired', this.props.userAllergy)
                // debugger
                renderMenuItems = this.state.menuItems.filter(menuItem => {
                    // console.log(menuItem.item_description)
                    return menuItem.item_name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
                })
            }
            return <ul> {renderMenuItems.map(menu => <Label.Detail> {menu.item_name}</Label.Detail>)}</ul>
        }
    }
    
    allergenFiltered = () => {
        let menuList
        //  console.log(this.props.userAllergy)
        menuList = this.state.menuItems.filter(foodName => {
             
            //  console.log(foodName.item_description.toLowerCase())
            //  console.log(this.props.userAllergy)
            return !foodName.item_description.toLowerCase().includes(this.props.userAllergy)
        })
        console.log('menu items len',this.state.menuItems.length)
        console.log('menulist len',menuList.length)
        return menuList
     }
    
    
    render() {
        
        console.log("userAllergy",this.props.userAllergy);
        this.allergenFiltered()
    
        // console.log(this.allergenFiltered().length)


        return (
            
        
            < div >
                {this.filteredResults()} 
            </div >
        
        )
    }  
}

export default DisplayedMenuItems






