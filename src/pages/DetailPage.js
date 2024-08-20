import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'

const DetailPage = () => {
  let{id} = useParams()
  const [product, setProduct] = useState()
  const getProductDetail = async () => {

    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail()
  }, [])
  
  return (
    <Container>
      <Row>
        <Col className='product-img'>
        {product ? (
            <img src={process.env.PUBLIC_URL + `/../${product?.img}`} alt={product.title} />
          ) : (
            <p>이미지 로드 실패</p>
          )}
        </Col>



        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailPage