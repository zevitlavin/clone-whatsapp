import React from 'react'
import { Box, Stack, Typography, IconButton} from '@mui/material'
import { useTheme } from '@emotion/react'
import { useDispatch } from 'react-redux';
import { updateSidebarType } from '../redux/slices/app';
import { CaretLeft } from 'phosphor-react';
import Message from './Conversation/Message';


const StarredMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
 


    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100vh" }}>
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                }}>
                    <Stack sx={{ height: "100%", p: 2 }
                    } direction={"row"}
                        alignItems={"center"}
                        spacing={3} >

                        <IconButton
                            onClick={() => {
                                dispatch(updateSidebarType("CONTACT"));

                            }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">Starred Messagess</Typography>

                    </Stack>
                </Box>
                

                {/* body */}
                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGlow: 1,
                        overflow: "scroll"

                    }}
                    p={3}
                    spacing={3}
                >
<Message/>
            


                </Stack>
            </Stack>
        </Box>
    )
}

export default StarredMessages
