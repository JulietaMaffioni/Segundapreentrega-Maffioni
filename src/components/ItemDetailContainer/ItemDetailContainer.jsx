import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const getProduct = async () => {
    const response = await fetch('/products.json');
    const products = await response.json();
    const filteredProduct = products.find(product => product.id === Number(id)); 

    setDetail(filteredProduct);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <ItemDetail detail={detail} />
  );
}

export default ItemDetailContainer;
