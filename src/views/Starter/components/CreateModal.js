import {useState} from "react";
import {createDoc} from "../../../api/doc";
import {Dialog, DialogActions, DialogContent, DialogTitle, Input} from "@mui/material";
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";


function CreateModal({modalVisible, setModalVisible}) {
    const history = useHistory()
    const [fileName, setFileName] = useState('')

    const createDocument = async () => {
        if (!fileName) return
        const res = await createDoc({name: fileName})
        history.push('/');
        history.replace(`/doc/${res.uuid}`)
        setModalVisible(false)
        setFileName('')
    }

    return (<Dialog fullWidth={true} maxWidth="lg" open={modalVisible}>
        <DialogTitle>
            Create Document
        </DialogTitle>
        <DialogContent>
            <Input
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                type="text"
                fullWidth={true}
                placeholder="Document Name"
                onKeyDown={(e) => e.key === 'enter' && createDocument()}/>
        </DialogContent>
        <DialogActions>
            <Button
                color="primary"
                variant="outlined"
                onClick={() => setModalVisible(false)}
            >
                Cancel
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={createDocument}
            >
                Create
            </Button>
        </DialogActions>
    </Dialog>)
}

export default CreateModal