import * as React from 'react';
import { useAppSelector } from '../../../store/hooks';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, index, ...other } = props;

    const { section } = useAppSelector((state) => state.app)

    return (
        <div
            role="tabpanel"
            hidden={section !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {section === index && (children)}
        </div>
    );
}

export default TabPanel