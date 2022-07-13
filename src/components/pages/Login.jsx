import { Flex , Box, Heading, Divider, Button, Input, Stack} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import LoginButton from '../atoms/button/LoginButton'
import UseAuth from '../hooks/UseAuth'

const Login = () => {;
  const [password, setPassword] = useState("");
  const onChangePass = (e) => {
    setPassword(e.target.value);
  }
  const {login, loading} = UseAuth();
  const onClickLogin = () => {
    login(password);
  }
  return (
      <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">Todoアプリ</Heading>
        <Divider my={4}/>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="パスワードを入力" onChange={onChangePass} value={password}/>
          <LoginButton onClick={onClickLogin} children="ログイン" loading={loading} disabled={password=== ""} />
        </Stack>
      </Box>
    </Flex>
  )
}

export default Login
