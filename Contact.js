import React from 'react'
import {
  Avatar, Box, Button, Divider, IconButton, Stack, Typography, Dialog,

  DialogTitle, DialogContent, DialogContentText, DialogActions, Slide
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { toggleSidebar, updateSidebarType } from '../redux/slices/app';
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import { faker } from "@faker-js/faker"
import AntSwitch from "./AntSwitch";
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block This contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure want to Block this Content?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  )
};
const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle> Delete Chat  </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure want to Delete  this chat?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleClose}>Yes</Button>
      </DialogActions>
    </Dialog>
  )
};


const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);

  }
  const handleCloseDelete = () => {
    setOpenDelete(false);

  }

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100vh" }}>


        <Box sx={{
          boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
        }}>
          <Stack sx={{ height: "100%", p: 2 }
          } direction={"row"} alignItems={"center"} justifyContent={"space-between"} spacing={3} >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleSidebar());

              }}>
              <X />
            </IconButton>
          </Stack>
        </Box>


        {/* Body */}
        <Stack sx={{ height: "1005", position: "relative", flexGrow: 1, overflow: "scroll" }} p={3} spacing={3}>
          <Stack alignItems={"center"} direction="row" spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
            <Stack spacing={.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {"7518180760"}

              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems={"center"} justifyContent="space-evenly"

          >
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article"> About</Typography>
            <Typography variant="body2"> EveryThing is possible </Typography>
          </Stack>
          <Divider />
          <Stack direction="row" alignItems={"center"} justifyContent="space-between">
            <Typography variant="subtitle2">Media, Link & Docs </Typography>
            <Button onClick={() => {
              dispatch(updateSidebarType("SHARED"))
            }} endIcon={<CaretRight />}>
              15

            </Button>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.animals()} alt={faker.name.fullName} />
              </Box>

            ))}
          </Stack>
          <Divider />
          <Stack direction="row" alignItems="center" justifyContent="space-between">

            <Stack direction={"row"} alignItems="center" spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">
                Starred Messages
              </Typography>
            </Stack>
            <IconButton onClick={() => {
              dispatch(updateSidebarType("STARED"));
            }}>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />

          <Stack direction="row" alignItems="center" justifyContent="space-between">

            <Stack direction={"row"} alignItems="center" spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">
                Mute Notifications
              </Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography> 1 Group in common</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2"> Alvinzevit</Typography>
              <Typography variant="caption"> tiger, lion, monkey</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button onClick={() => {

              setOpenBlock(true);
            }} startIcon={<Prohibit />} fullWidth variant="outlined">
              Block
            </Button>
            <Button onClick={() => {

              setOpenDelete(true);
            }} startIcon={<Trash />} fullWidth variant="outlined">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
      )}

    </Box>
  );
};

export default Contact;
