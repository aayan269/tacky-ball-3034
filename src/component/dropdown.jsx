import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Box,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'


export default function Dropdown(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
            border={0}
            bgColor={"white"}
            h={30} w={100}
            style={{fontWeight:"400",fontSize:"19px"}}
                onMouseEnter={onOpen}
                onMouseLeave={onClose} >
                More... {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} >
                <MenuItem bgColor={"white"} w={150} h={30} border={0}>General</MenuItem>
                <MenuItem bgColor={"white"} w={150} h={30} border={0}>Others..</MenuItem>
            </MenuList>
        </Menu>
    )
}