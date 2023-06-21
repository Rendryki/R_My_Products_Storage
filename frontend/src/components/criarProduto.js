import { Input, Stack, InputGroup, InputLeftAddon, Heading } from '@chakra-ui/react'

export default function CriarProduto(){
    return(
        <>
        <Heading>Criar novo produto:</Heading>
        <Stack spacing={4}>
        <InputGroup size='sm'>
            <InputLeftAddon children='Produto' />
            <Input type='tel' placeholder='Nome do produto' />
        </InputGroup>
      
        <InputGroup size='sm'>
            <InputLeftAddon children='Quantidade' />
            <Input placeholder='Quantidade no estoque' />
        </InputGroup>

        <InputGroup size='sm'>
            <InputLeftAddon children='Valor' />
            <Input placeholder='Valor do Produto' />
        </InputGroup>
      </Stack>
      </>
    )
}