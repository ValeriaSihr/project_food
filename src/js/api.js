import axios from 'axios';
const getProducts = async () => {
  const { data } = await axios.get(
    'https://food-boutique.b.goit.study/api/products'
  );
  console.log(data);
};
getProducts();
