import React, { useState, useCallback } from 'react';

import Home from './pages/Home';
import Confirm from './components/modals/confirm/Confirm';

import { TITLES, FIELDS } from './constants/constantsModals';

const App = () => {
    const [options, setOptions] = useState({});

    const handlerClickAdd = useCallback(() => {
        setOptions({
            type: 'add',
            title: TITLES.add.title,
            fields: FIELDS,
        });
    }, []);

    // const handlerClickEdit = useCallback(() => {
    //     setOptions({
    //         type: 'edit',
    //         title: TITLES.edit.title,
    //         fields: FIELDS,
    //     });
    // }, []);

    // const handlerClickDelete = useCallback(() => {
    //     setOptions({
    //         type: 'delete',
    //         title: TITLES.delete.title,
    //         message: TITLES.delete.message,
    //     });
    // }, []);

    // <>
    // <Confirm options={options} />
    // <Button onClick={handlerClickAdd} color="primary">Add</Button>
    // <Button onClick={handlerClickEdit} color="primary">Edit</Button>
    // <Button onClick={handlerClickDelete} color="primary">Delete</Button>
    // </>

    return (
        <>
            <Confirm options={options} />
            <Home handlerClickAdd={handlerClickAdd} />
        </>
    );
};

App.displayName = 'App';

export default App;
