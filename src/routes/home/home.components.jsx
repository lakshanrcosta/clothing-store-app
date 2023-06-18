import { Outlet } from 'react-router-dom';
import CategoryContainer from '../../components/category-menu/category-menu.component';

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoryContainer />
    </div>
  );
};

export default Home;
