
import { Table, Progress, Avatar } from 'antd';

const data = [
  {
    key: '1',
    name: 'Tabassum',
    email: 'Tabassum@gmail.com',
    region: 'Asia',
    country: 'Hyderabad',
    volume: '154,074.25',
    amount: '₹892,236.75',
    satisfaction: 90,
    avatar: 'src/assets/p8.avif',
  },
  {
    key: '2',
    name: 'Tarannum',
    email: 'Tarannum@gmail.com',
    region: 'Asia',
    country: 'Chennai',
    volume: '24,044.32',
    amount: '₹344,544.06',
    satisfaction: 80,
    avatar: 'src/assets/p8.avif',
  },
  {
    key: '3',
    name: 'Aaira',
    email: 'aaira@gmail.com',
    region: 'Asia',
    country: 'Bengaluru',
    volume: '91,219.43',
    amount: '₹487,124.47',
    satisfaction: 87,
    avatar: 'src/assets/p8.avif',
  },
   {
    key: '4',
    name: 'Adeeba',
    email: 'adeeba@gmail.com',
    region: 'Asia',
    country: 'Karnataka',
    volume: '154,074.25',
    amount: '₹892,236.75',
    satisfaction: 90,
    avatar:'src/assets/p8.avif',
  },
  {
    key: '5',
    name: 'AbdulMalik',
    email: 'malik@gmail.com',
    region: 'Asia',
    country: 'Chennai',
    volume: '24,044.32',
    amount: '₹344,544.06',
    satisfaction: 80,
    avatar: 'src/assets/p8.avif',
  },
  {
    key: '6',
    name: 'Sarah',
    email: 'sarah@gmail.com',
    region: 'Asia',
    country: 'Tamilnadu',
    volume: '91,219.43',
    amount: '₹487,124.47',
    satisfaction: 87,
    avatar: 'src/assets/p8.avif',
  },
     {
    key: '7',
    name: 'Elenmark',
    email: 'etomare@gmail.com',
    region: 'Asia',
    country: 'Canada',
    volume: '154,074.25',
    amount: '₹892,236.75',
    satisfaction: 90,
    avatar:'src/assets/p8.avif',
  },
  {
    key: '8',
    name: 'Anjum',
    email: 'anjum@gmail.com',
    region: 'Asia',
    country: 'Guntur',
    volume: '24,044.32',
    amount: '₹344,544.06',
    satisfaction: 80,
    avatar: 'src/assets/p8.avif',
  },
  {
    key: '9',
    name: 'Kabir',
    email: 'kabir@gmail.com',
    region: 'Asia',
    country: 'Hyderabad',
    volume: '91,219.43',
    amount: '₹487,124.47',
    satisfaction: 87,
    avatar: 'src/assets/p8.avif',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    responsive: ['xs', 'sm', 'md', 'lg'],
    render: (text, record) => (
      <div className="d-flex align-items-center gap-2">
        <Avatar src={record.avatar} />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    responsive: ['md'],
    render: (text) => <a href={`mailto:₹{text}`}>{text}</a>,
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
    responsive: ['lg'],
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    responsive: ['lg'],
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
    responsive: ['md'],
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    responsive: ['md'],
  },
  {
    title: 'Satisfaction',
    dataIndex: 'satisfaction',
    key: 'satisfaction',
    responsive: ['xs', 'sm', 'md', 'lg'],
    render: (value) => (
      <Progress
        percent={value}
        size="small"
        strokeColor={value > 75 ? 'green' : value > 50 ? 'orange' : 'red'}
        showInfo={false}
      />
    ),
  },
];

const UsersTable= () => {
  return (
    <div className="card shadow-sm p-3 bg-white">
      <h6 className="mb-3 fw-bold">Top Sellers</h6>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }}
        scroll={{ x: true }}
        bordered
        size="middle"
      />
    </div>
  );
};

export default UsersTable;
