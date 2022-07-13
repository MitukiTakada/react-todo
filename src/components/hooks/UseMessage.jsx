import { useToast } from '@chakra-ui/react'
import React from 'react'

export const UseMessage = () => {
  const toast = useToast();
  const showMessage = (props) => {
    const {title, status} = props
    toast({
      position: "top",
      duration: "2000",
      isClosable: "true",
      title,
      status
    })
  }
  return {showMessage}
}

