import React from 'react'
import styled from 'styled-components'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

function EmailsView() {
    return (
        <Wrapper>
            <TopWrapper>
                <IconButton>
                   <CheckBoxOutlineBlankIcon />
                </IconButton>
    
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </TopWrapper>

            <EmailsContainer>

            </EmailsContainer>
        </Wrapper>
    )
}

export default EmailsView

const Wrapper = styled.div``

const TopWrapper = styled.div`
    padding-left: 20px;
    height: 48px;
    place-items: center;
    align-items: center;
`

const EmailsContainer = styled.div``
