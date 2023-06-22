"use client"
import { useState, useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Input, Stack, InputGroup, InputLeftAddon, Button,
} from '@chakra-ui/react'
import Trashcan from '../../../public/icons8-trash.svg'
import Image from 'next/image'
 
export default function Produto() {
  const [data, setData] = useState([])
  const [refreshFetch, setRefreshFetch] = useState(false)  
  const [updateProduct, setUpdateProduct] = useState([])
  const [nameProduct, setNameProduct] = useState("");
  const [quantityProduct, setQuantityProduct] = useState('');
  const [valueProduct, setValueProduct] = useState('');

 
  useEffect(() => {
    fetch('http://localhost:3333/produto')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [refreshFetch == true])

  function handleSubmit(){
    event.preventDefault()
    if(nameProduct != '' && quantityProduct != '' && valueProduct != ''){
      fetch(`http://localhost:3333/produto`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "nome_produto": nameProduct,
            "quantidade": quantityProduct,
            "valor": valueProduct
          })
      }).then(
        setNameProduct(''),
        setQuantityProduct(''),
        setValueProduct('')
      )
      let newProductId = data[(data.length) - 1].id + 1
      console.log(newProductId)
      let productCreated = {"id": newProductId, "nome_produto": nameProduct, "quantidade": quantityProduct, "valor": valueProduct}
      setData([...data, productCreated])
    }
  }
  function handleDecrement(id, quantidade){
    let quantidadeDecremento = quantidade -= 1
    for(let i = 0; i < data.length; i++){
      if(id == data[i].id){
        let quantidade = (data.filter(e => e.id == id))[0].quantidade --
        setUpdateProduct(quantidade)
        break;
      }
    }
    fetch(`http://localhost:3333/produto`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id": id,
          "quantidade": quantidadeDecremento
        })
     })
  }

  function handleIncrement(id, quantidade){
    let quantidadeIncremento = quantidade += 1
    for(let i = 0; i < data.length; i++){
      if(id == data[i].id){
        let quantidade = (data.filter(e => e.id == id))[0].quantidade ++
        setUpdateProduct(quantidade)
        break;
      }
    }
    fetch(`http://localhost:3333/produto`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id": id,
          "quantidade": quantidadeIncremento
        })
     })
  }

  function handleDelete(id){
    let confirmAction = confirm("Você tem certeza que quer deletar um produto??")
    if(confirmAction){
      fetch(`http://localhost:3333/produto/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    for(let i = 0; i < data.length; i++){
      if(id == data[i].id){
        console.log(data[i].id)
        setData(data.filter(e => e.id !== id))
        break;
      }
    } 
    }
  }
 
  return (
    <>
    <Heading>Tabela de produtos em estoque:</Heading>
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome do Produto</Th>
            <Th isNumeric>Quantidade em estoque</Th>
            <Th isNumeric>Valor (R$)</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
        {data? data.map(e => (
          <Tr key={e.id}>
          <Td>{e.nome_produto}</Td>
          <Td isNumeric>{e.quantidade}</Td>
          <Td isNumeric>{e.valor}</Td>
          <Td><button onClick={() => handleIncrement(e.id, e.quantidade)}>Adicionar</button> - <button onClick={() => handleDecrement(e.id,  e.quantidade)}>Remover</button></Td>
          <Td><Image onClick={() => handleDelete(e.id)} src={Trashcan} width={30} height={30} alt='Lata de lixo'/></Td>
        </Tr>
        )): <p>loading...</p>}
        </Tbody>
      </Table>
    </TableContainer>

    <Heading>Criar novo produto:</Heading>
    <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
        <InputGroup size='sm'>
            <InputLeftAddon children='Produto' />
            <Input type='text' placeholder='Nome do produto' value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)} />
        </InputGroup>

        <InputGroup size='sm'>
            <InputLeftAddon children='Quantidade' />
            <Input type='number' placeholder='Quantidade no estoque' value={quantityProduct} onChange={(e) => setQuantityProduct(e.target.value)} />
        </InputGroup>

        <InputGroup size='sm'>
            <InputLeftAddon children='Valor' />
            <Input type='number' placeholder='Valor em R$' value={valueProduct} onChange={(e) => setValueProduct(e.target.value)} />
        </InputGroup>
       
      </Stack>
      <Button type='submit'>Criar Produto</Button>
      </form>
    </>
  )
}