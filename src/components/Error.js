import {Alert, Snackbar} from "@mui/material";

function Error ({open, setOpen, error}) {
    return <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={open}
        onClose={setOpen}
    >
        <Alert onClose={()=>setOpen(false)} severity="error" sx={{width: '100%'}}>
            {(error&&error.name)? error.name: error}
        </Alert>
    </Snackbar>
}

export default Error