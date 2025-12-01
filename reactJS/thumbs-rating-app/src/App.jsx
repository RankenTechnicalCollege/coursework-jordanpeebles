import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import ThumbsRating from './components/ThumbsRating';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Product />
        <ThumbsRating />
      </main>
      <Footer />
    </div>
  );
};

export default App;
