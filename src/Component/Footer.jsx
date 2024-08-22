import { Link } from "react-router-dom";
import {
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '40px 20px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const sectionStyle = {
    flex: '1 1 200px',
    margin: '0 20px 20px 0',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const copyrightStyle = {
    width: '100%',
    textAlign: 'center',
    fontSize: '0.8em',
    color: 'grey',
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #333',
  };

  return (
    <footer style={footerStyle}>
      <div style={{...sectionStyle, marginTop: '40px'}}>
        <h2>
          <span style={{ color: 'orange' }}>Apna</span>
          <span style={{ color: 'green' }}>Journey</span>
        </h2>
      </div>

      <div style={sectionStyle}>
        <h4>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/home" style={linkStyle}>Home</Link></li>
          <li><Link to="/insert" style={linkStyle}>Profile</Link></li>
          <li><Link to="/" style={linkStyle}>Dashboard</Link></li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h4>Support</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* <li>ApnaJourney02@gmail.com</li>
          <li>+91 7371083339</li> */}
        </ul>
      </div>

      <div style={sectionStyle}>
        <h4>Follow Us</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/" style={linkStyle}>
              <FaSquareXTwitter /> Twitter (X)
            </Link>
          </li>
          <li>
            <Link to="/" style={linkStyle}>
              <FaLinkedin /> LinkedIn
            </Link>
          </li>
        </ul>
      </div>

      <div style={copyrightStyle}>
        © CopyRight 2024. All Rights Reserved By ApnaJourney
      </div>
    </footer>
  );
};

export default Footer;
