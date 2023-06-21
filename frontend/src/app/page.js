"use client"
import Link from "next/link"
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
       <h1>Tela Inicial</h1>
      <Link href='/produto'>Acessar produtos</Link>
    </ChakraProvider>
  )
}
