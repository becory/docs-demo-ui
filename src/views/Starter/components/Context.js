import {Button, Icon} from '@mui/material'
import {useState} from "react";
import DocumentItem from "./DocumentItem";
import CreateModal from "./CreateModal"

function Context ({fileList}) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div>
            <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <section className="bg-gray-200 px-10">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between py-6">
                        <Button color="primary" variant="contained" onClick={() => setModalVisible(true)} startIcon={<Icon>create</Icon>}>
                            new document
                        </Button>
                    </div>
                </div>
            </section>
            <section className="bg-white px-10 md:px-0">
                <div className="max-w-3xl mx-auto py-8">
                    <div className="flex items-center justify-between pb-5 text-sm text-gray-700">
                        <h2 className="font-medium flex-grow">My Documents</h2>
                        <p className="mr-12">Last Updated</p>
                        <Icon size="3xl" color="inherit">people</Icon>
                    </div>
                    {(fileList.length>0)? fileList.map((doc) => (
                        <DocumentItem
                            key={doc.uuid}
                            id={doc.uuid}
                            fileName={doc.name}
                            date={doc.updatedAt}
                        />
                    )):
                        <div className="w-full flex bg-gray-100 border border-gray-400 border-solid rounded-lg items-center justify-center text-3xl" style={{height:"30vh"}}>Empty</div>}
                </div>
            </section>
        </div>
    )
}
export default Context