import axios from 'axios';
import { useState, useEffect } from 'react';
import Title from '../../components/Title';
import LineForm from '../../components/LineForm';
import CategoryForm from '../../components/CategoryForm';
import CategoryEnum from '../../components/CategoryEnum';
import Dashboard from '../../components/DashboardLine';

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ReadProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    id: '',
    title: '',
    category: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://6730dd497aaf2a9aff0f2a92.mockapi.io/api/bolsa/products/',
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (filter.id) {
      filtered = filtered.filter((product) =>
        product.id.toLowerCase().includes(filter.id.toLowerCase()),
      );
    }

    if (filter.title) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(filter.title.toLowerCase()),
      );
    }

    if (filter.category) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(filter.category.toLowerCase()),
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <Title>Read your Products</Title>

        <div>
          <LineForm
            value={filter.id}
            label="Id"
            name="id"
            onChange={handleFilterChange}
            type="text"
          />
          <LineForm
            value={filter.title}
            label="Title"
            name="title"
            onChange={handleFilterChange}
          />
          <LineForm
            value={filter.category}
            label="Category"
            name="category"
            onChange={handleFilterChange}
          />
          <button
            onClick={applyFilter}
            style={{
              cursor: 'pointer',
              padding: '10px 45px',
              border: ' 1px solid black',
              borderRadius: '5px',
              backgroundColor: 'white',
              fontSize: '16px',
              display: 'flex',
            }}
          >
            Apply Filter
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div>
          <h3>Products:</h3>
          <Dashboard product={filteredProducts} />
        </div>
      )}
    </div>
  );
};

export default ReadProducts;
