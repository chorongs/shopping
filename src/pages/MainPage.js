import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const MainPage = () => {

  const [productlist, setProductList] = useState([]); 
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get('q') || "";
    let url = `https://my-json-server.typicode.com/chorongs/shopping/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(()=>{
    getProducts()
  }, [query])
  

  return (
    <div>
      <Container>
        <Row>
        {productlist.map(menu=><Col lg={3}><ProductCard item={menu}/></Col>)}
        </Row>
      </Container>

    </div>
  )
}

export default MainPage