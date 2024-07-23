import{AppBar, Toolbar, styled, Button} from '@mui/material'

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`
const ContainerToolbar = styled(Button)`
    alignSelf: right;
`

const Header= ()=>{
    return(
        <Container position='static'>
            <Toolbar >
                <Button variant="contained">Sign Up</Button>
                <Button variant="outlined">Log In</Button>
            </Toolbar>
        </Container>
    );
}
export default Header;