import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Perdidos from '../perdidos';
import Encontrados from '../encontrados';
import { Router, useRouter } from 'next/router';



interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className=" max-w-[110px] bg-orange-400 w-full" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  
});

interface StyledTabProps {
  label: string;
  onClick?: () => void;
}

const StyledTab = styled((props: StyledTabProps) => (<Tab disableRipple {...props} />))(({ theme }:{theme:any}) => ({
  textTransform: 'none',
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: '#000000', '&.Mui-selected': { color: '#000000',},
  
}));




export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%'}}>
        <Box>
          <StyledTabs
            value={value}
            onChange={handleChange}
          >
            <StyledTab label="Perdidos" />
            <StyledTab label="Encontrados" />
            
          </StyledTabs>
          <Box sx={{ p: 3 }} />
        </Box>
      </Box>
    );
  }