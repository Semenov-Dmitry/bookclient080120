import React from 'react';
import './App.css';
import CreateBook from './components/CreateBook';
import BookList1 from './components/BookList'

function App() {
  return (
      <div className="">
          <div className="container-fluid">
          <div className="m-5">
        <CreateBook />
          </div>
          <div className="col-sm-12">
              <BookList1 />
          </div>
          </div>
      </div>
  );
}

export default App;
