import { Box, Stack, Typography, styled } from '@mui/material'

export const SwiftSkillWrapper = styled(Stack)(() => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '1cm',
    rowGap: '0.25cm',

    '& div': {
        width: '6cm'
    }
}))
