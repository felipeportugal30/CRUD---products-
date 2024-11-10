import axios from 'axios';
import { useState } from 'react';
import Title from '../../components/Title';
import LineForm from '../../components/LineForm';
import CategoryForm from '../../components/CategoryForm';
import Button from '../../components/Button';
import CategoryEnum from '../../components/CategoryEnum';

const UpdateProduct = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState<CategoryEnum | null>(null);
  const [stock, setStock] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [productFound, setProductFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleIdExist = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https://6730dd497aaf2a9aff0f2a92.mockapi.io/api/bolsa/products/${id}`,
      );
      console.log('Resposta da API:', response);
      if (response.status === 200 && response.data) {
        console.log('Product exists: ', response.data);
        setProductFound(true);
        setTitle(response.data.title);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setImage(response.data.image);
        setStock(response.data.stock);
      }
    } catch (error) {
      console.error(error);
      setProductFound(false);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const stockNumber = stock ? parseInt(stock) : null;
    const priceNumber = price ? parseFloat(price) : null;

    if (priceNumber === null || isNaN(priceNumber)) {
      setError('Price is invalid, please provide a valid number');
      return;
    }
    setError(null);

    if (category == null) {
      setError('Please, select a valid category!');
      console.error(error);
      return;
    }
    setError(null);

    if (stockNumber === null || isNaN(stockNumber)) {
      setError('Stock is invalid, please provide a valid number');
      console.error(error);
      return;
    }
    setError(null);

    try {
      const response = await axios.put(
        `https://6730dd497aaf2a9aff0f2a92.mockapi.io/api/bolsa/products/${id}`,
        {
          title,
          price: priceNumber,
          description,
          image,
          category,
          stock: stockNumber,
        },
      );

      if (response.status === 200 || response.status === 201) {
        console.log('Product updated successfully!');
        setSuccessMessage('Product update successfully!');
        clearFields();
      } else {
        console.error('Error in product update!');
      }
    } catch (error) {
      console.error('Request error: ', error);
    }
  };

  const clearFields = () => {
    setTitle('');
    setPrice('');
    setDescription('');
    setImage('');
    setCategory(null);
    setStock('');
  };

  return (
    <div style={{ margin: '0px auto', width: 'max-content' }}>
      <Title>Update a product</Title>
      <div id="main">
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
            {error && (
              <div style={{ marginTop: '20px', color: 'red' }}>
                <p>{error}</p>
              </div>
            )}
          </form>
        )}

        {productFound && !loading && (
          <form
            onSubmit={handleUpdateSubmit}
            style={{ margin: '10px 0px 50px 0px' }}
          >
            <LineForm
              value={title}
              label="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <LineForm
              value={price}
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <LineForm
              value={description}
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <LineForm
              value={image}
              label="Image Url"
              onChange={(e) => setImage(e.target.value)}
            />
            <CategoryForm
              onChange={(e) =>
                setCategory(e.target.value as CategoryEnum | null)
              }
              value={category}
            />
            <LineForm
              value={stock}
              label="Stock"
              onChange={(e) => setStock(e.target.value)}
            />
            <Button type="submit">Submit</Button>
            {successMessage && (
              <div style={{ marginTop: '20px', color: 'green' }}>
                <p>{successMessage}</p>
              </div>
            )}
            {error && (
              <div style={{ marginTop: '20px', color: 'red' }}>
                <p>{error}</p>
              </div>
            )}
          </form>
        )}

        {error && !loading && (
          <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
        )}

        {loading && (
          <div style={{ marginTop: '10px' }}>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateProduct;
