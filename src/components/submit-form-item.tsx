import InvoiceForm from './invoice-form';
import SubmittedFilesList from './submitted-files-list';

const SubmitFormItem: React.FC = () => {
    return (
        <div className='columns'>
            <InvoiceForm />
            <SubmittedFilesList />
        </div>
    );
};

export default SubmitFormItem;
