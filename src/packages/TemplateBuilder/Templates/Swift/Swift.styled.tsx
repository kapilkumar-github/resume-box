import { Box, Stack, Typography, styled } from '@mui/material'
export const SwiftTemplateWrapper = styled(Box)(() => ({
    padding: '0.25cm 0.50cm'
}))

export const SwiftSectionWrapper = styled(Stack)(() => ({
    paddingTop: '0.15cm',
    marginTop: '0.5cm',
    borderTop: '0.05cm solid #000',
    flexDirection: 'row',
    alignItems: 'start'
}))

export const SwiftSectionLabels = styled(Typography)(() => ({
    fontSize: '0.35cm',
    width: '5.5cm',
    textTransform: 'uppercase',
    letterSpacing: '0.025cm',
    marginTop: "0.07cm",
    fontWeight: 'bold'
}))
export const SwiftSectionContent = styled(Box)(() => ({
    marginTop: '0.05cm',
    width: 'calc(100% - 5.5cm)'
}))