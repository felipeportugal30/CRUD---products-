type DashboardProps = {
  product: Product[];
};

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Dashboard = ({ product }: DashboardProps) => {
  return (
    <div style={{ border: '1px solid black', borderRadius: '7px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Category</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Image Url</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {p.id}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {p.title}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {p.category}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                ${p.price.toFixed(2)}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {p.description}
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                {p.image}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
