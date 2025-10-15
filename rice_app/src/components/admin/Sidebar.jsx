
import {FaHome,FaBox,FaShoppingCart,FaUser,FaCreditCard} from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h2>RiceMart</h2>
        <ul >
          <li><a href="#" className="active"> <FaHome className="icon"/>Home</a>
          </li>
          
          <li><a href="#">  <FaBox className="icon"/>Products</a>
          </li>

          <li><a href="#"><FaShoppingCart className="icon"/>Orders</a>
          </li>

          <li><a href="#"><FaUser className="icon"/>Users</a>
          </li>

          <li><a href="#"><FaCreditCard className="icon"/>Billings</a>
          </li>
        </ul>
      </div>

      <style>
        {`
          .sidebar {
            width: 220px;
            height: 100vh;
            background-color: #111212ff;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 20px;
          }

          .sidebar h2 {
            text-align: center;
            margin-bottom: 40px;
            font-size: 22px;
            font-weight:bold;
            letter-spacing:1px;
            color:gold;
          }

          .sidebar ul {
            list-style: none;
            padding: 0;
            margin:0;
          }

          .sidebar ul li {
            margin: 10px 0;
          }

          .sidebar ul li a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items:center;
            gap:12px;
            padding: 12px 20px ;
            font-size:16px;
            border-radius: 8px;
            transition: background 0.3s ease;
          }

          .sidebar ul li a:hover{
          background:gold;
          color:white;
          }

          
          .sidebar ul li a:active{
          background:green;
          color:white;
          }
            .icon{
            font-size:18px;
            min-width:20px;
            text-align:center;
            }

        
        `}
      </style>
    </>
  );
};

export default Sidebar;
