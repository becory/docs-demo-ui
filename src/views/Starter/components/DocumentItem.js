import {Icon} from "@mui/material";
import {useHistory} from "react-router-dom";
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from "dayjs";

dayjs.extend(relativeTime)

function DocumentItem({id, fileName, date}) {
    const history = useHistory()

    return (
        <div onClick={() => history.push(`/doc/${id}`)}
             className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
            <Icon>article</Icon>
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{dayjs(date).fromNow()}</p>
        </div>
    )
}

export default DocumentItem