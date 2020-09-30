import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [books, setBook] = useState([{}]);

  useEffect(() => {

    setInterval(() => {
      fetch("/api/books")
        .then(res => res.json())
        .then(data => {
          setBook(data)
        })
    }, 3000)

  }, [])

  const addBook = () => {
    const title = prompt("Enter Book Title")
    const Author = prompt("Enter Author Name")


    if (!title || !Author)
      return false;

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ title, Author })
    }).then(res => res.json())
      .then(data => console.log(data))


  }

  if (!books.length)
    return <h2>Loading</h2>

  return (
    <div className="App">
      <h2>Available Books</h2>
      <table border="1">

        <thead>
          <tr>
            <th>
              Title
          </th>
            <th>
              Author
          </th>
          </tr>
        </thead>
        <tbody>
          {books.map((bkObj, ind) => {
            return (

              <tr key={ind}>
                <td>{bkObj.title}</td>
                <td>{bkObj.Author} </td>
              </tr>

            )
          })}
        </tbody>
      </table>
      <button onClick={addBook}> Add Book</button>
    </div>
  );
}

export default App;
