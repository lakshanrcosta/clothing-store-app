import { Outlet } from 'react-router-dom';
import CategoryContainer from '../../components/category-container/category-container.component';

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoryContainer />
    </div>
  );
};

export default Home;
