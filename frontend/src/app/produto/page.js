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
  Heading
} from '@chakra-ui/react'
import CriarProduto from '@/components/criarProduto'
 
export default function Produto() {
  const [data, setData] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:3333/produto')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  function handleClick(id){
    alert(`click ${id}`)
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
        {data.map(e => (
          <Tr>
          <Td>{e.nome_produto}</Td>
          <Td isNumeric>{e.quantidade}</Td>
          <Td isNumeric>{e.valor}</Td>
          <Td><button onClick={() => handleClick(e.id)}>Adicionar</button> - <button onClick={() => handleClick(e.id)}>Remover</button></Td>
        </Tr>
        ))}
        </Tbody>
      </Table>
    </TableContainer>
    <CriarProduto/>
    </>
  )
}