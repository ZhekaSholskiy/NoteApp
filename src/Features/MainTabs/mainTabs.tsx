import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {SyntheticEvent, useState} from "react";
import {Link} from "react-router-dom";

export const MainTabs = () => {
    const [chosenPage, setChosenPage] = useState<string>('editor');

    const onHandleTabsClick = (event: SyntheticEvent<Element, Event>, value: string) => {
        setChosenPage(value);
    }

    return <Box sx={{ width: '100%' }}>
        <Tabs
            value={chosenPage}
            onChange={onHandleTabsClick}
            aria-label="wrapped label tabs example"
        >
            <Tab value="editor" label="Редактор" component={Link} to={'/editor'}/>
            <Tab value="idea" label="Пространство идей" component={Link} to={'/idea'}/>
        </Tabs>
    </Box>
}