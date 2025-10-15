
import { LineChart, Line,BarChart,Bar,XAxis, YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";

const data = [
  { day: "Tue", revenue: 1000, orders: 40, customers: 25 },
  { day: "Wed", revenue: 950, orders: 35, customers: 18 },
  { day: "Thu", revenue: 900, orders: 36, customers: 17 },
  { day: "Fri", revenue: 960, orders: 37, customers: 22 },
  { day: "Sat", revenue: 1100, orders: 45, customers: 19 },
  { day: "Sun", revenue: 1050, orders: 42, customers: 20 },
  { day: "Mon", revenue: 1070, orders: 38, customers: 26 },
];

const ProductList = () => {
return (
<div className="container my-4">
<div className="row g-4">
 {/* Daily Revenue */}
 <div className="col-md-4">
 <div className="card h-100 shadow-sm">
 <div className="card-body">
 <div className="d-flex justify-content-between align-items-center mb-2">
 <h6 className="card-title mb-0 fw-bold"> $ Daily Revenue</h6>
<span className="text-success fw-bold">$80.00 ↑</span>
</div>
  <ResponsiveContainer width="100%" height={200}>
   <LineChart data={data}>
   <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="day" />
    <YAxis />
     <Tooltip />
     <Line type="monotone" dataKey="revenue" stroke="#78baecff" strokeWidth={2} dot={false} />
  </LineChart>
</ResponsiveContainer>
 </div>
 </div>
</div>

 {/* Daily Orders */}
<div className="col-md-4">
  <div className="card h-100 shadow-sm">
    <div className="card-body">
    <div className="d-flex justify-content-between align-items-center mb-2">
     <h6 className="card-title mb-0 fw-bold"> $ Daily Orders</h6>
   <span className="text-success fw-bold">150 ↑</span>
  </div>
<ResponsiveContainer width="100%" height={200}>
<BarChart data={data}>
 <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="day" />
  <YAxis />
   <Tooltip />
    <Bar dataKey="orders" fill="#78baecff" radius={[6, 6, 0, 0]} />
      </BarChart>
     </ResponsiveContainer>
   </div>
 </div>
 </div>

 {/* New Customers */}
<div className="col-md-4">
  <div className="card h-100 shadow-sm">
    <div className="card-body">
       <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="card-title mb-0  fw-bold"> $ New Customers</h6>
         <span className="text-success fw-bold">11,000.00% ↑</span>
</div>
  <ResponsiveContainer width="100%" height={200}>
   <BarChart data={data}>
     <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="day" />
      <YAxis />
    <Tooltip />
  <Bar dataKey="customers" fill="#78baecff" radius={[6, 6, 0, 0]} />
  </BarChart>
  </ResponsiveContainer>
</div>
</div>
 </div>
 </div>
 </div>
  );
};

export default ProductList;
