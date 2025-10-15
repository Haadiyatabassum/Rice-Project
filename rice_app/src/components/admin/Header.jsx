import  { useState, useEffect } from 'react';
import { CiSearch,CiLogout, CiLight,CiDark,CiSettings,CiUser,CiShoppingCart} from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? '#1a202c' : '#f9f9f9';
    document.body.style.color = dark ? '#f9f9f9' : '#1a202c';
  }, [dark]);

  const toggleTheme = () => setDark(!dark);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

return (
<>
  <header className="header" >
   <div className="searchsection">
    <div className="search-box">
     <CiSearch className="search-icon" />
      <input type="text" placeholder="Search with Store Id,E-mail,Keyword" />
  </div>
</div>

 <div className="themesection">
    <button className="theme-toggle" onClick={toggleTheme}> {dark? <CiDark />:<CiLight />}</button>

 <div className="profile" onClick={toggleDropdown}>
  <CgProfile className="profile-icon" />
  <span className="profile-name">Admin</span>
     {dropdownOpen && (
       <ul className="dropdown">
        <li><CiUser /> <a href="#">Profile</a></li>
        <li><CiSettings /> <a href="#">Settings</a></li>
        <li><CiShoppingCart /> <a href="#">Orders</a></li>
        <li><CiLogout /> <a href="#">Logout</a></li>
        </ul>
   )}
   </div>
    </div>
   </header>

  <style>{`
        .header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          flex-wrap: wrap;
          position: sticky;
          z-index: 100;
          height:64px;
          background-color:gold;
  
        }

        .searchsection,
        {
          display: flex;
          align-items: center;
          gap: 20px;
          
        }
        .themesection {
          display: flex;
          gap: 20px;
          
        }

        .search-box {
          position: relative;
          width: 500px;
          align-items: center;
          justify-content:center;
        }

        .search-icon {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          color: #888;
          pointer-events: none;
        }

        .search-box input {
          width: 100%;
          padding: 8px 12px 8px 36px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
          background-color: ${dark ? '#4a5568' : '#fff'};
          color: ${dark ? '#fff' : '#000'};  
        }

        .theme-toggle {
          font-size: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: ${dark ? '#f9f9f9' : '#1a202c'};
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          cursor: pointer;
        }

        .profile-icon {
          font-size: 24px;
        }

        .profile-name {
          font-size: 16px;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 10px;
          background-color: ${dark ? '#1a202c' : '#ffffff'};
          border: 1px solid #ccc;
          border-radius: 6px;
          width: 180px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 8px 0;
          z-index: 1000;
        }

        .dropdown li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          font-size: 15px;
        }

        .dropdown li a {
          text-decoration: none;
          color: ${dark ? '#f9f9f9' : '#1a202c'};
          flex-grow: 1;
        }

        .dropdown li:hover {
          background-color: ${dark ? '#2d3748' : '#f0f0f0'};
        }

        /* Responsive */
        @media (max-width: 768px) {
          .search-box {
            width: 180px;
          }

          .profile-name {
            display: none;
          }

          .header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .left-section,
          .right-section {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .search-box {
            width: 100%;
          }

          .left-section,
          .right-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .header {
            padding: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
