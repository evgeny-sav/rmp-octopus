import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import fetchItem from '../../actions/itemActions';

class App extends Component {

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { item } = this.props;
    return(
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <p>{item.ok.toString()}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({item}) => ({
  item
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
