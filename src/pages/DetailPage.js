import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'

const DetailPage = () => {
  let{id} = useParams()
  const [product, setProduct] = useState()
  const getProductDetail = async () => {

    let url = `https://my-json-server.typicode.com/chorongs/shopping/products/${id}`
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
            <img src={process.env.PUBLIC_URL + `/../${product?.img}`} alt={product.title} style={{ borderRadius: '30px' }}/>
          ) : (
            <p>이미지 로드 실패</p>
          )}
        </Col>



        <Col style={{ marginTop: '50px' }}>
          <div  style={{ fontSize: '18px', fontWeight: 'bold' }}>{product?.title}</div>
          <div  style={{ fontSize: '18px', fontWeight: 'bold' }}>{product?.price}</div>

          <Form.Select aria-label="Default select example" style={{ marginTop: '30px' }}>
     <option>사진 선택</option>
      <option value="1">컬러</option>
      <option value="2">흑백</option>
    </Form.Select>
    <Button variant="primary"  style={{ marginTop: '30px' }}>추가하기</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailPage