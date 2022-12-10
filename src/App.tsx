import { Route, Routes } from 'react-router-dom';

import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import PortfolioPage from './components/pages/PortfolioPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
