import React from 'react'
import { Box , Button} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import Hamburger from '../atoms/button/Hamburger'
import MenuDrawer from '../molecules/MenuDrawer'
import { useNavigate } from 'react-router'




const Header = () => {
  const { isOpen, onOpen, onClose}= useDisclosure();
  const navigate= useNavigate();
  const onClickHome = () => {
    navigate("/")
  }
  const onClickTodo = () => {
    navigate("/todo")
  }
  return (
    <div>
      <header>
        <Box bg="teal.400" fontSize="lg" p={{base: 3, md: 5}} color="white" display="flex" alignItems="center" justifyContent="space-between">
          <Box fontSize={{base: "md", md: "lg"}} as="a">
            Todoアプリ
          </Box>
          <Box display={{base: "none", md: "flex"}} flexGrow={2}>
              <Link path={"/"} fontSize="sm" pl={4} as="a" onClick={onClickHome}>
                ログイン画面へ
              </Link>
              <Link path={"/todo"} fontSize="sm" pl={6} as="a" onClick={onClickTodo}>
                Todoアプリ画面へ
              </Link>
          </Box>
          <Hamburger onOpen={onOpen}/>
        </Box>
        <MenuDrawer 
        isOpen={isOpen} 
        onClose={onClose}  
        onClickHome={onClickHome} 
        onClickTodo={onClickTodo}/>
      </header>
    </div>
  )
}

export default Header
