import { useContext } from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import DataContext from '../../../hooks/datacontext';

const Header = ({ title }) => {
  const { width } = useContext(DataContext);

  return (
    <header className="Header">
      {/* Left side: title */}
      <h1>{title}</h1>

      {/* Right side: icon */}
      <div className="device-icon">
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </div>
    </header>
  );
};

export default Header;
