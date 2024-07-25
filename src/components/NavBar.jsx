import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser, selectToken, clearUser } from '../features/user/userSlice';
import '../styles/NavBar.scss';
import logo from '../assets/img/argentBankLogo.png';
import personIcon from '../assets/img/la-personne.png';
import logoutIcon from '../assets/img/logout.png';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(clearUser());
    navigate('/'); // Rediriger vers la page d'accueil après la déconnexion
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div className="Icone">
        {user && token ? (
          <>
            <span className="main-nav-item">
              <img src={personIcon} alt="User Icon" className="nav-icon" />
              {`${user.firstName}`}
            </span>
            <button className="main-nav-item" onClick={handleSignOut}>
              <img src={logoutIcon} alt="Logout Icon" className="nav-icon" />
              Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
