import React from 'react'

import {HamburgerIcon} from "@chakra-ui/icons"

const Hamburger = (props) => {
  const {onOpen} = props;
  return (
    <HamburgerIcon 
    _hover={{cursor: "pointer"}} 
    aria-label="メニューボタン" 
    display={{base: "block" , md: "none"}} 
    onClick={onOpen}/>
  )
}

export default Hamburger
