import { Container, Heading, Text, Button, Link } from '@chakra-ui/react'

export default function PaginaInicial() {
  return (

      <Container m='50px auto' textAlign='center'>
        <Heading m='50px auto'>Tela Inicial</Heading>
        <Text m='50px auto'>Bem vindo! Clique no Link para acessar a página de produtos!</Text>
        <Link href='../produto'>
        <Button colorScheme='blue' variant='outline' m='0px auto'>Acessar produtos</Button>
        </Link>
      </Container>

  )
}
