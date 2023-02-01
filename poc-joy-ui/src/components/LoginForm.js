import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import ModeToggle from '../Theme/LightMode';

export default function MyLoginForm() {
    return (
        <CssVarsProvider>
            <ModeToggle />
            <Sheet sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }} variant="outlined">
                <div>
                    <Typography level="h4">
                        Welcome!
                    </Typography>
                    <Typography level="body2">Sign in to continue.</Typography>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            // html input attribute
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </FormControl>
                    <Button sx={{ mt: 3, mb: 3 /* margin top */ }}>
                        Log in
                    </Button>
                    <Typography
                        endDecorator={<Link href="http://localhost:3000/">Sign up</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: 'center'}}
                    >
                        Don't have an account?
                    </Typography>
                </div>
            </Sheet>
        </CssVarsProvider>
    );
}