import React from 'react';

class SearchForm extends React.Component {
    state = {
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
       
        
        return (
            <form onSubmit={(e) => this.props.handleSearchSubmit(e, this.state.searchTerm)}>
                <input
                    type="text"
                    placeholder="Search"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
        )
    }
}
export default SearchForm