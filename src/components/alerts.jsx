
import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
// import CloseIcon from '@mui/icons-material/CloseIcon';

export const Error = (props) => {


  return (
    <>
      <Alert severity="error" onClose={props.func}>{props.children}</Alert>
    </>
  );
}

export const Success = () => {
  return (
    <>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
    </>
  );
}




export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              {/* <CloseIcon fontSize="inherit" /> */}
              x
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Saved successfully!
        </Alert>
      </Collapse>

      {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
      
      </Button> */}

    </Box>
  );
}

