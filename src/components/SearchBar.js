import React from 'react';


class SearchBar extends React.Component{
    state={ term: ''};  //from this.state

    onFormSubmit = event => {
        event.preventDefault();     //prevents page loading upon entering a search

        this.props.onSubmit(this.state.term)

        //console.log(this.state.term)    //binded by the arrow function in this function and submitted to the form tag

    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}         //receives string from the search bar
                            onChange={e=>this.setState({term: e.target.value})}   //called for the new value; refactored onInputChange event handler; e is for events
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;