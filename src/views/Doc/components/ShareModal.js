import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Icon} from "@mui/material";
import ShareItem from "./ShareItem";
import * as React from "react";
import {patchDocAuth} from "../../../api/doc";

function shareModal({modalVisible, setModalVisible, doc, setDoc, getDocInfo}) {
    const saveShare = async () => {
        setModalVisible(false)
        await patchDocAuth(doc.uuid, {docAuths: doc.DocAuths})
        await getDocInfo()
    }

    const cancelShare = async () => {
        setModalVisible(false)
        await getDocInfo()
    }

    const removeNullShare = () => {
        let result = doc.DocAuths
        result = result.filter(auth => (auth.User && auth.User.id) ? !!auth.User.id : !!auth.User || auth.User !== {})
        setDoc(prevStates => ({...prevStates, DocAuths: result}))
    }

    const changeShare = (index, value) => {
        let result = doc.DocAuths
        result[index] = value
        setDoc(prevStates => ({...prevStates, DocAuths: result}))
    }

    const removeShare = (index) => {
        let result = doc.DocAuths
        result.splice(index, 1)
        setDoc(prevStates => ({...prevStates, DocAuths: result}))
    }

    const onAddAuth = () => {
        const result = doc.DocAuths
        result.push({id: -result.length, User: {id: null}, auth: 0})
        setDoc(prevState => ({...prevState, DocAuths: result}))
    }
    return <Dialog size="lg" fullWidth={true} open={modalVisible}>
        <DialogTitle>
            Share
        </DialogTitle>
        <DialogContent>
            <div className="w-full">
                <div className="flex items-center p-4 rounded-lg text-gray-700 text-sm cursor-pointer">
                    <p className="flex-grow pl-5 pr-10">User</p>
                    <p className="w-36 pr-5 text-sm">Auth</p>
                    <p className="w-24 pr-5 text-sm"><Icon>action</Icon></p>
                </div>
                {(doc) ? doc.DocAuths.map((auth, Index) =>
                    <ShareItem
                        item={auth}
                        index={Index}
                        onChangeItem={changeShare}
                        onRemoveItem={removeShare}
                        onRemoveNullItem={removeNullShare}
                        key={auth.id}/>) : null}
                <Button onClick={() => onAddAuth()} startIcon={<Icon>add</Icon>}>Add Share</Button>
            </div>
        </DialogContent>
        <DialogActions>
            <Button
                color="primary"
                variant="link"
                onClick={cancelShare}
            >
                Cancel
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={saveShare}
            >
                Save
            </Button>
        </DialogActions>
    </Dialog>
}

export default shareModal;