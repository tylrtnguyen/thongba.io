import React, { useEffect, useRef } from 'react';
import sr from '@utils/sr';
import srConfig from '@config';
import { 
    StyledContainer,
    StyledTabButton,
    StyledTabList,
    StyledTabs
} from './styles'

const Portfolio = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([])

    const revealContainer = useRef(null);
    useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

    const focusTab = () => {
        if(tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus();
        } else {
            if (tabFocus >= tabs.current.length) {
                setTabFocus(0)
            }
            if (tabFocus < 0) {
                setTabFocus(tabs.current.length - 1);
            }
        }
    }

    const onKeyPressed = e => {
        if (e.keyCode === 38 || e.keyCode === 40) {
            
        }
    }
    
    return (
        <StyledContainer id="portfolio" ref={revealContainer}>
            <StyledTabs>
                <StyledTabList role="tablist" aria-label="Project topic tabs">

                </StyledTabList>
            </StyledTabs>
        </StyledContainer>
    )
}