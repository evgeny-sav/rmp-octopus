import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import fetchItem from '../../actions/itemActions';

function App({item, dispatch}) {
  useEffect(() => {
    dispatch(fetchItem());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>{item.ok.toString()}</p>
      </header>
    </div>
  );
}

const mapStateToProps = ({item}) => ({
  item
});

export default connect(mapStateToProps)(App);
