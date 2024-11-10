import { Link } from 'react-router-dom';
import { deflate } from 'zlib';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'block',
        width: '100%',
        padding: '0',
        alignItems: 'center',
        borderBottom: '1px solid black',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          margin: '20px 40px',
        }}
      >
        <div>
          <h1>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Products Management
            </Link>
          </h1>
        </div>
        <div style={{ display: 'flex', width: '100%', alignItems: 'end' }}>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              padding: 0,
              margin: 0,
            }}
          >
            <li>
              <Link
                to="/create-product"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '22px',
                }}
              >
                <h4>Create</h4>
              </Link>
            </li>
            <li>
              <Link
                to="/update-product"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '22px',
                }}
              >
                <h4>Update</h4>
              </Link>
            </li>
            <li>
              <Link
                to="/read-product"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '22px',
                }}
              >
                <h4>Read</h4>
              </Link>
            </li>
            <li>
              <Link
                to="/delete-product"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  fontSize: '22px',
                }}
              >
                <h4>Delete</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
