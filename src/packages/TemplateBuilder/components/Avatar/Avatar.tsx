import React from 'react'
import { useAppSelector } from "@/redux/hooks";
import { AvatarContainer } from './Avatar.styled';

const Avatar = () => {
    const { resumeData } = useAppSelector(store => store.ResumeReducer);

    // Render Image
    return <AvatarContainer>
        <img src={resumeData.avatar} alt={resumeData.name + "'s Avatar"} loading='lazy' />
    </AvatarContainer>
}

export default Avatar