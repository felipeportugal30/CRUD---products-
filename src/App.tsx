import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateProduct from './pages/create/CreateProduct';
import Navbar from './pages/global/Navbar';
import UpdateProduct from './pages/update/UpdateProduct';
import ReadProduct from './pages/read/ReadProduct';
import DeleteProduct from './pages/delete/DeleteProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div
          style={{
            justifyContent: 'center',
            display: 'block',
            marginTop: '40px',
          }}
        >
          <Routes>
            <Route path="/" element={<h1>Welcome to Home Page</h1>} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/update-product" element={<UpdateProduct />} />
            <Route path="/read-product" element={<ReadProduct />} />
            <Route path="/delete-product" element={<DeleteProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
