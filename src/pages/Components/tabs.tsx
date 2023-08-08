import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent<Element>, newValue: number) => void;
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
    height: '3px',
  },
});

interface StyledTabProps {
  label: string;
  onClick?: () => void;
}

const StyledTab = styled((props: StyledTabProps) => (<Tab disableRipple {...props} />))(() => ({
  textTransform: 'none',
  color: '#000000', '&.Mui-selected': { color: '#F97316',},
  fontFamily: 'Poppins',
  fontSize: '18px'
}));

interface TabsProps {
  onChange: (value: number) => void;
  value: number;
}

const CustomizedTabs = ({ onChange, value }: TabsProps) => {

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
     onChange(newValue);
   };
  
   return (
     <Box sx={{ width: '100%'}}>
       <Box>
         <StyledTabs
           value={value}
           onChange={handleChange}
         >
           <StyledTab label="Encontrados"/>
           <StyledTab label="Perdidos" />  
         </StyledTabs>
         <Box sx={{ p: 2 }} />
       </Box>
     </Box>
   );
}

export default CustomizedTabs;
