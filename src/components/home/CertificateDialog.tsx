import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close"
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    image: string | null;
}

export default function CertificateDialog(props: DialogProps) {
    const { open, handleClose, image } = props;

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            PaperProps={{
                style: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
            }}
        >
          <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundImage: `url('${image}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: { xs: "100%", sm: "85%", md: "32%" },
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "start",
                }}
            >
                <IconButton sx={{ m: 2 }} onClick={handleClose}>
                    <CloseIcon fontSize="large" color="info" />
                </IconButton>
            </Box>
      </Dialog>
    )
}