import { Outlet, Link } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => (
  <div className='header-main'>
    <nav>
      <div className='header-container'>
        <div>
          <img
            alt='logo'
            width='80px'
            height='80px'
            src='https://cdn-icons-png.flaticon.com/512/6114/6114045.png'
          />
        </div>
        <div>
          <Link to='/'>
            <h1>Home</h1>
          </Link>
        </div>
        <div>
          <Link to='/createBlog'>
            <button className='button-create' type='button'>
              Create Post
            </button>
          </Link>
        </div>
      </div>
    </nav>
    <Outlet />
    <div className='footer'>
      <h4>Team project by @React-Pros-3000 Hans, Kata, Viki est. 2023</h4>
    </div>
  </div>
);

export default MainLayout;
