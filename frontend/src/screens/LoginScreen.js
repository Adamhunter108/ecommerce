import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { styled } from '@mui/material/styles';


function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (event) => {
        event.preventDefault()
        // console.log('Submitted')
        dispatch(login(email, password))
    }

    // this is how you make custom styled textfields with MUI
    // const CssTextField = styled(TextField)({
    //     '& label.Mui-focused': {
    //       color: 'green',
    //     },
    //     '& .MuiInput-underline:after': {
    //       borderBottomColor: 'green',
    //     },
    //     '& .MuiOutlinedInput-root': {
    //       '& fieldset': {
    //         borderColor: 'red',
    //       },
    //       '&:hover fieldset': {
    //         borderColor: 'yellow',
    //       },
    //       '&.Mui-focused fieldset': {
    //         borderColor: 'green',
    //       },
    //     },
    //   });


    // when the below TextField styles are used the forms break... why?

      const EmailTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      });


      const PasswordTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      });




    return (
        <Card 
            className="text-center"
            >
        <FormContainer>
        <Card.Header as="h3"><i class="fas fa-user-circle"></i> Sign In</Card.Header>
        <br />

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

            <Form onSubmit={submitHandler}>

        {/* playing with MUI inputs */}
            <TextField
                sx={{ input: { color: 'white', borderColor: 'white' } }}
                id="email" 
                label="Email" 
                variant="outlined" 
                color="info"
                fullWidth
                // InputProps={{
                //     startAdornment: (
                //       <InputAdornment position="start">
                //         <AccountCircle />
                //       </InputAdornment>
                //     ),
                //   }}
                onChange={(event) => setEmail(event.target.value)} />
            <br /><br />

            <TextField
                sx={{ input: { color: 'white' } }}
                id="password"
                type='password' 
                label="Password" 
                variant="outlined" 
                color="secondary"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    ),
                  }}
                onChange={(event) => setPassword(event.target.value)} />


                {/* <Form.Group controlId='email'>
                    <Form.Label><i class="fas fa-envelope"></i> Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    >
                    </Form.Control>
                </Form.Group> */}
                <br />

                {/* <Form.Group controlId='password'>
                    <Form.Label><i class="fas fa-key"></i> Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    >
                    </Form.Control>
                </Form.Group> */}
                <br />

                <Button type='submit' variant='dark'>Sign in</Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    New customer? <Link
                    to={redirect ? `/register?redirect=${redirect}` : '/register'}
                    >Create an account</Link>
                </Col>
            </Row>

        </FormContainer>
        </Card>
    )
}

export default LoginScreen
