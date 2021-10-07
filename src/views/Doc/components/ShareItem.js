import {Icon, MenuItem, Select, Autocomplete, TextField, CircularProgress, Button} from "@mui/material";
import {useEffect, useState} from "react";
import * as React from 'react';
import {getUserList} from "../../../api/user";

const User = ({editable, item, onChangeValue}) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(item.User)
    const [keyword, setKeyword] = useState('')
    const [options, setOptions] = useState([])
    const loading = open && ((keyword) ? keyword.length >= 1 : false);

    const selected = (value) => {
        setValue(value)
        onChangeValue({...item, User: value})
    }

    useEffect(() => {
        // let active = true;
        const getUser = async () => {

            if (!loading) {
                return undefined;
            }

            const res = await getUserList({keyword})
            setOptions(res)


        }

        getUser()
        // return () => {
        //     active = false;
        // };
    }, [loading, keyword]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    // filterOptions={(x)=>fetchUser()}
    if (editable && item.User.id !== -1) {
        return (
            <Autocomplete
                id="id"
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                value={value}
                options={options}
                loading={loading}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={(option) => (option.id) ? `${option.name} (${option.email})` : ''}
                filterOptions={(x) => x}
                onInputChange={(e) => (e) ? setKeyword(e.target.value) : null}
                onChange={(e, value) => selected(value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
        );
    } else {
        if (item.User.id) {
            return `${item.User.name} (${item.User.email})`
        }
        return '>>>Please select a User'
    }
}

const Auth = ({editable, item, onChangeValue}) => {
    const authMap = [{auth: 0, icon: 'not_interested', name: 'Prohibit'}, {auth: 1, icon: 'visibility', name: 'Read'}, {
        auth: 2,
        icon: 'edit',
        name: 'Edit'
    }]
    if (editable) {
        return <Select value={item.auth} onChange={(e) => onChangeValue({...item, auth: e.target.value})}>
            {authMap.map(auth => <MenuItem value={auth.auth} key={auth.auth}><Icon>{auth.icon}</Icon> {auth.name}
            </MenuItem>)}
        </Select>
    } else {
        const findAuth = authMap.find(auth => auth.auth === item.auth)
        return (<span><Icon>{findAuth.icon}</Icon> {findAuth.name}</span>)
    }

}

const RemoveButton = ({index, item, onRemoveItem}) => {
    if (item.User.id !== -1) {
        return <Button color="error" onClick={() => onRemoveItem(index)}><Icon>delete_forever</Icon></Button>
    } else {
        return null
    }
}

function ShareItem({item, index, onChangeItem, onRemoveNullItem, onRemoveItem}) {
    const [itemChange, setItemChange] = useState(item)
    const [editable, setEditable] = useState(false)

    const onChangeValue = async (value) => {
        if (!value.User) {
            value = {...value, User: {id: null}}
        }
        await setItemChange(value)
        await onRemoveNullItem()
        await setEditable(false)
    }

    useEffect(() => {
        onChangeItem(index, itemChange)
    }, [index, itemChange])

    return (
        <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer"
             onClick={() => setEditable(true)}>
            <div className="flex-grow pl-5 pr-10">
                <User editable={editable} item={itemChange} onChangeValue={onChangeValue}/>
            </div>
            <div className="w-36 pr-5 text-sm">
                <Auth editable={editable} item={itemChange} onChangeValue={onChangeValue}/>
            </div>
            <div className="w-24 pr-5 text-sm">
                <RemoveButton index={index} item={itemChange} onRemoveItem={onRemoveItem}/>
            </div>
        </div>
    )
}

export default ShareItem