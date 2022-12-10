import { Route, Routes } from 'react-router-dom';

import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import PortfolioTemplate from './components/templates/PortfolioTemplate';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioTemplate />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
