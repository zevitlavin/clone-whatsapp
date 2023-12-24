import {  useTheme, } from "@mui/material/styles";
import { Box, Button, Divider, IconButton,  Stack, Typography} from "@mui/material";
import { Archive, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Search, SearchIconWrapper,StyledInputBase } from "../../components/Search";
// import StyledInputBase from "../../components/Search/StyledInputBase";
import ChatElement from "../../components/ChatElement";



const Chats = () => {
  const theme = useTheme();
  return (
    <Box sx={{


      backgroundColor: theme.palette.mode === "light" ? `#f8f8ff` : theme.palette.background.paper,

      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      // content: "''",
      position: 'relative',
      width: 320,
      // height: "100vh",
      // left: 0,

      // top: 0,
    }}
    >
      <Stack p={2} spacing={2} sx={{ height: '100vh', }}>

        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>

            <CircleDashed />

          </IconButton>


        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />

            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." 
            inputProps={{ "aria-label": "search" }}
             />


          </Search>



        </Stack>
        <Stack spacing={0}>
          <Stack direction="row" alignItems={"center"} spacing={1.5}>

            <Archive size={25} />
            <Button >Archive


            </Button>
          </Stack>
          <Divider />


        </Stack>

        <Stack
          spacing={1}
          direction="column" sx={{ flexGrow: 0, overflow: "scroll", height: "100%" }}>
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={1.5}>
              <Typography variant="subtitle" sc={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {

                return <ChatElement {...el} />

              })}


            </Stack>
            <Stack spacing={1}>
              <Typography variant="subtitle" sc={{ color: "rgba(22, 28, 36, 1)" }}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {

                return <ChatElement {...el} />

              })}

            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>



    </Box>
  );
};

export default Chats;
