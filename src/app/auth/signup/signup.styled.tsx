import { Stack, styled } from "@mui/material";

export const SignUpWrapper = styled(Stack)(() => ({
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f4f4f4',
    form: {
        width: '300px',
        padding: '1rem',
        background: '#fff',
        button: {
            width: 200,
            margin: 'auto'
        }
    }
}));
