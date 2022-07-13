import React from 'react'
import { Button } from '@chakra-ui/button'

const LoginButton = (props) => {
  const {children, onClick, loading, disabled} = props;
  return (
    <Button 
    onClick={onClick} 
    bg="teal.400" 
    _hover={{opacity: 0.8}} 
    isLoading= {loading}
    disabled={disabled}
    color="white">{children}</Button>
  )
}

export default LoginButton
