import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute } from './SidebarElements';

const Sidebar =({isOpen, toggle}) =>{
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon toggle={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="explore" onClick={toggle}>
                    Explore
                </SidebarLink>
                <SidebarLink to="about us" onClick={toggle}>
                    About Us
                </SidebarLink>
                <SidebarLink to="sign up" onClick={toggle}>
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="sign in">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;