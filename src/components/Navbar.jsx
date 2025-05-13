import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import myPic from "../assets/my-pic.jpg"; // adjust the path if needed


const VerticalNavbar = () => {
  const location = useLocation();
  const navItems = ["Home", "About", "Education", "Projects", "Contact"];

  return (
    <>
      {/* Vertical Navbar */}
      <nav className="vertical-navbar">
        <div className="profile-section">
          <img
            src={myPic} // Replace with your image path
            alt="Profile"
            className="profile-pic"
          />
          <div className="navbar-brand">Kavin</div>
        </div>

        <div className="navbar-links">
          {navItems.map((page) => {
            const path = `/${page.toLowerCase()}`;
            const isActive =
              location.pathname === path || (path === "/home" && location.pathname === "/");

            return (
              <Link
                key={page}
                to={path === "/home" ? "/" : path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {page}
              </Link>
            );
          })}
        </div>
      </nav>

      <style>{`
        .vertical-navbar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 250px;
          background: #111;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 40px;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
          z-index: 999;
        }

        .profile-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 30px;
        }

        .profile-pic {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid #facc15;
        }

        .navbar-brand {
          font-size: 22px;
          font-weight: bold;
          color: #facc15;
        }

        .navbar-links {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #facc15;
          transform: scale(1.05);
        }

        .nav-link.active {
          color: #facc15;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 8px;
          background-color: #facc15;
          border-radius: 50%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .vertical-navbar {
            width: 100%;
            height: auto;
            flex-direction: row;
            justify-content: space-around;
            padding: 10px 0;
          }

          .profile-section {
            flex-direction: row;
            align-items: center;
            gap: 10px;
          }

          .profile-pic {
            width: 40px;
            height: 40px;
          }

          .navbar-links {
            flex-direction: row;
            gap: 15px;
          }

          .nav-link {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default VerticalNavbar;
