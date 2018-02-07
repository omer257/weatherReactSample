import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: '',comment: ''
        }
    }

    handleSubmit(event){
      event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)
      this.props.addComment(this.state,this.props.index)
      this.setState({user: '',comment: ''})
    }

    render() {
        return (
            <form action="#" id="getCommentForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="user"
                        placeholder="Enter user"
                        required
                        value={this.state.user}
                        onChange={(event) => this.setState({user: event.target.value})}/>
                    <input
                        type="text"
                        className="form-control"
                        id="comment"
                        placeholder="Enter comment"
                        required
                        value={this.state.comment}
                        onChange={(event) => this.setState({comment: event.target.value})}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        );
    }
}
export default SearchForm;