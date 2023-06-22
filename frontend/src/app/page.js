"use client"
import { ChakraProvider } from '@chakra-ui/react'
import PaginaInicial from "@/app/components/paginaInicial"

export default function Home() {
  return (
    <ChakraProvider>
      <PaginaInicial />
    </ChakraProvider>
  )
}
