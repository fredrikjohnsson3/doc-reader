import { useAppSelector } from '../hooks';
import SubmittedFilesItem from './submitted-files-item';

const SubmittedFilesList: React.FC = () => {
    const files = useAppSelector(({ submits: { order, data } }) => {
        return order.map((id) => {
            return data[id];
        });
    });
    const renderedFiles = files.map((file) => (
        <SubmittedFilesItem key={file.id} submit={file} />
    ));
    return (
        <div className='column'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Filename</th>
                    </tr>
                </thead>
                <tbody>{renderedFiles}</tbody>
            </table>
        </div>
    );
};

export default SubmittedFilesList;
