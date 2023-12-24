import { Box, Stack, } from "@mui/material";
import Chats from "./Chats";
import React from "react";
import Conversation from "../../components/Conversation";
import {useTheme} from '@mui/material/styles';
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
// const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store) => store.app);
  


  return (  
    <Stack direction={"row"} sx={{width : "100"}}>
  <Chats/>
  <Box
   sx={{ 
    height: "100%",
     width: sidebar.open ?  "calc(100vw - 740px)" : "calc(100vw - 420px)",
      backgroundColor: theme.palette.mode === "light" 
      ? "#e6e6fa"
      
      : theme.palette.background.default,
      }} 
      >


<Conversation/>
  </Box>
    {sidebar.open && (() => {
switch (sidebar.type) {
  case "CONTACT":
 return <Contact/>;
 
 case "STARED":
  return <StarredMessages/>;

  case "SHARED":
    return <SharedMessages/>;



  default:
    break;
}

    })()}
  
    </Stack>
  );
};

export default GeneralApp;
