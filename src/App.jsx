import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';

import { TITLES, FIELDS } from './constants/constantsModals';

import Confirm from './components/modals/confirm/Confirm';

const App = () => {
    const [options, setOptions] = useState({});

    const handlerClickAdd = useCallback(() => {
        setOptions({
            type: 'add',
            title: TITLES.add.title,
            fields: FIELDS,
        });
    }, []);

    const handlerClickEdit = useCallback(() => {
        setOptions({
            type: 'edit',
            title: TITLES.edit.title,
            fields: FIELDS,
        });
    }, []);

    const handlerClickDelete = useCallback(() => {
        setOptions({
            type: 'delete',
            title: TITLES.delete.title,
            message: TITLES.delete.message,
        });
    }, []);

    return (
        <>
            <Confirm options={options} />
            <Button onClick={handlerClickAdd} color="primary">Add</Button>
            <Button onClick={handlerClickEdit} color="primary">Edit</Button>
            <Button onClick={handlerClickDelete} color="primary">Delete</Button>
        </>
    );
};

App.displayName = 'App';

export default App;
