import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SlideData() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [page]);

  const next = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.id} {user.name}
          </h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>
            Address: {user.address.street}, {user.address.suite}, {user.address.city}
          </p>
        </div>
      ))}
      <div>
        <input type="button" value="prev" className='btn btn-primary '  onClick={prev} />
        <input type="button" value="next" className='btn btn-danger'  onClick={next} />
      </div>
    </>
  );
}
