import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button,
  } from "@chakra-ui/react";
  
  export function Contato() {
    return (
      // <h1>Contato</h1>
  
      // <h1>{props.nomePagina}</h1>
  
      <Box>
        <Flex>
          <Center
            w="100%"
            bg="white"
            top={100}
            borderRadius={5}
            p="2"
            boxShadow={"0 1px 2px #ccc"}
          >
            <FormControl>
  
              <HStack>
                <Box>
                  <FormLabel>Nome Completo</FormLabel>
                  <Input id='nome' placeholder='Nome Completo' />
                  
                </Box>
                <Box>
                  <FormLabel>CPF</FormLabel>
                  <Input id='cpf' type="number" placeholder='CPF' />  
                </Box>
                </HStack>
  
              <HStack>
                <Box>
                  <FormLabel>Data Nascimento</FormLabel>
                  <Input id='nasc' type='number' placeholder='Data de Nascimento' />
                </Box>
                <Box>
                  <FormLabel>Nome da Mãe</FormLabel>
                  <Input id='mae' placeholder='Nome da Mãe' />
                </Box>
              </HStack>
  
              <HStack>
                <Box>
                  <FormLabel>E-mail</FormLabel>
                  <Input id='email' placeholder='E-mail' />
                </Box>
                <Box>
                  <FormLabel>Telefone|Celular</FormLabel>
                  <Input id='tel' type="number" placeholder='Telefone' />
                </Box>
              </HStack>
  
              <HStack>
                <Box>
                  <FormLabel>Logradouro|Bairro</FormLabel>
                  <Input id='endereco' placeholder='Logradouro|Bairro' />
                </Box>
                <Box>
                  <FormLabel>Cidade|Estado|País</FormLabel>
                  <Input id='cidade' placeholder='Cidade|Estado|País' />
                </Box>
              </HStack>
  
              <HStack>
                <Box>
                  <FormLabel>Sexo</FormLabel>
                  <RadioGroup>
                  <HStack>
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>
              <HStack>
                <Button>
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    );
  }
  