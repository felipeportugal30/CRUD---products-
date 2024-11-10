import { useState } from 'react';
import Title from '../../components/Title';
import CategoryEnum from '../../components/CategoryEnum';
import axios from 'axios';
import LineForm from '../../components/LineForm';
import Button from '../../components/Button';
import Dashboard from '../../components/DashboardLine';

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const DeleteProduct = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [id, setId] = useState('');
  const [productFound, setProductFound] = useState<true | false | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIdExist = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https://6730dd497aaf2a9aff0f2a92.mockapi.io/api/bolsa/products/${id}`,
      );
      console.log('Resposta da API:', response);
      if (
        response.status === 200 ||
        (response.status === 201 && response.data)
      ) {
        setProductFound(true);
        console.log('Sucess');
        setProduct(response.data);
      }
    } catch (error) {
      console.error(error);
      setProductFound(false);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setError(null);

    try {
      const response = await axios.delete(
        `https://6730dd497aaf2a9aff0f2a92.mockapi.io/api/bolsa/products/${id}`,
      );
      if (response.status === 200 || response.status === 204) {
        setSuccessMessage('Product deleted successfully!');
        setProduct(null);
        setProductFound(false);
      } else {
        setError('Error! The product was not deleted.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Error deleting product.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ justifyContent: 'center', display: 'grid' }}>
      <Title>Delete your Products</Title>
      <div>
        {!productFound && !loading && (
          <form
            onSubmit={handleIdExist}
            style={{ margin: '10px 0px 50px 0px' }}
          >
            <LineForm
              value={id}
              label="Product id"
              onChange={(e) => setId(e.target.value)}
            />
            <Button type="submit">Next</Button>
            {productFound == false && (
              <p style={{ color: 'red' }}>Product was not found!</p>
            )}
          </form>
        )}
        {productFound &&
          !loading &&
          product &&
          (loading ? (
            <p>Loading products...</p>
          ) : (
            <div>
              <h3>Products:</h3>
              <Dashboard product={[product]} />
              <br />
              <br />
              <Button type="submit" onClick={handleDeleteProduct}>
                Delete
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DeleteProduct;
