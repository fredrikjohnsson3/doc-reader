import { useEffect, useRef, useState } from 'react';
import { Submit } from '../state';
import PreviewItem from './preview-item';

interface SubmittedFilesProps {
    submit: Submit;
}

const SubmittedFilesItem: React.FC<SubmittedFilesProps> = ({ submit }) => {
    const [isExpanded, setisExpanded] = useState(false);
    const trRef = useRef<HTMLTableRowElement | null>(null);

    if (isExpanded) {
        return (
            <>
                <tr
                    id={submit.id}
                    className='is-selected'
                    ref={trRef}
                    onClick={() => setisExpanded(false)}
                >
                    <td>{submit.id}</td>
                    <td>{submit.name}</td>
                </tr>
                <PreviewItem doc={submit} />
            </>
        );
    }
    return (
        <tr id={submit.id} ref={trRef} onClick={() => setisExpanded(true)}>
            <td>{submit.id}</td>
            <td>{submit.name}</td>
        </tr>
    );
};

export default SubmittedFilesItem;
