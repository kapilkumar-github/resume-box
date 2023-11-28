
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const AvatarContainer = styled(Box)(() => ({

    '& > img': {
        aspectRatio: 1,
        width: '100%',
    }
}));
