import React from 'react'
import { useState } from 'react';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
  import { login } from '../../features/slices/loginSlice';
  import { useDispatch } from 'react-redux';


export function Login(){

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen((cur) => !cur);
      dispatch(login(value))
    }

    const initialState ={
        name:"",
        password: "",
    }
    const [value,setValue] = useState(initialState);

    const onChange = (event)=>{
        const { name , value } = event.target;
        setValue({
            ...value,
            [name]:value,
        })
    }

  return (
    <>
        <Button 
            variant='outlined'
            ripple={true}
            className='hover:100 duration-300 ease-in-out hover:scale-90'
        onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input 
                label="Email" 
                size="lg" 
                type='text'
                name='name'
                value={value.name}
                onChange={onChange}
                />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input 
                label="Password" 
                size="lg" 
                type='text'
                name='password'
                value={value.password}
                onChange={onChange}
                />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" 
            onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}

