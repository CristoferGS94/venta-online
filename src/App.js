import './App.css';
import CategoryList from './components/category-list/category-list';

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hat",
      backgroundImage: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "Jackets",
      backgroundImage: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "Sneakers",
      backgroundImage: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "Womens",
      backgroundImage: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "Mens",
      backgroundImage: "https://i.ibb.co/R70vBrQ/men.png"
    }]

  return (
    <CategoryList
    categories= {categories}
    />
  );
};

export default App;
