import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import {Button} from "@chakra-ui/react"


const MenuDrawer = (props) => {
  const {onClose, isOpen, onClickHome, onClickTodo} = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody p={0} bg="gray.100">
                <Button w="100%" onClick={onClickHome}>ログイン</Button>
                <Button w="100%" onClick={onClickTodo}>Todoアプリ</Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
    </Drawer>
  )
}

export default MenuDrawer
