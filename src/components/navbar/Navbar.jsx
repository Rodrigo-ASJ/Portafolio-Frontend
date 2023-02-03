import React from 'react'
import { AppBar,Toolbar,Button, Container, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
        <AppBar position='f'>
            <Toolbar>
                <IconButton edge="start" color="inherit" arial-label="menu" />
                <Button color="inherit" component={Link} to='/'>
                   Home
                </Button>
                <Button color="inherit" component={Link} to='/create'>
                    Create
                </Button>
                <Button color="inherit" component={Link} to='/'>
                    Login
                </Button>

            </Toolbar>
        </AppBar>
    </Container>
  )
}

export default Navbar