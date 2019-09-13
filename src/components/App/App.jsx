import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import fetchItem from '../../actions/itemActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ok: false,
    };
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  clickHandler = () => {
    const { state } = this;
    const { ok } = state;

    this.setState({
      ...state,
      ok: !ok,
    });
  };

  render() {
    const { props, state } = this;
    const { item } = props;
    const { ok } = state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <p>
            <code>{item.ok.toString()}</code>
          </p>
          <button type="button" onClick={this.clickHandler}>
            <code>
              {ok.toString()}
            </code>
          </button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ item }) => ({
  item,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
