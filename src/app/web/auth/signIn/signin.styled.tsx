import { Box, Stack, styled } from "@mui/material";

export const SignInWrapper = styled(Stack)(() => ({
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    background: '#f4f4f4',
    flexDirection: 'row',
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

export const SignInActionBox = styled(Box)(() => ({
    padding: '1rem'
}))

export const SignInContentBox = styled(Box)(() => ({
    flex: 1
}))