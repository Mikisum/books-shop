import React from 'react'
import { connect } from 'react-redux';
import { changeSearchWord } from '../../actions'

class SearchForm extends React.Component {
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Ищем ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { searchWord, changeSearchWord } = this.props
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search book" 
          value={searchWord} 
          onChange={e => changeSearchWord(e.target.value)}/>
        <button className="btn btn-outline-secondary" type="button">Clear</button>
        <button className="btn btn-outline-secondary" type="button">Search</button>
      </form>
    )
  } 
}

const mapStateToProps = ({ bookList: { searchWord } }) => {
  return { searchWord }
}

const mapDispatchToProps = {
  changeSearchWord: changeSearchWord
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)