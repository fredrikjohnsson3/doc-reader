import React, { FormEvent, useRef, useState } from 'react';
import axios from 'axios';
import { useActions } from '../hooks';
import { MindeeRes } from '../state';

const InvoiceForm: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [fileName, setFileName] = useState('');
    const formData = new FormData();
    let resData: MindeeRes;

    const { submitFileAction } = useActions();

    const handleChange = (e: any) => {
        if (!inputRef.current?.files) {
            return;
        } else {
            setFileName(inputRef.current?.files[0].name);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!inputRef.current?.files) {
            throw Error;
        } else {
            const fetchData = async () => {
                if (inputRef.current?.files) {
                    await formData.append(
                        'document',
                        inputRef.current.files[0],
                        inputRef.current.files[0].name
                    );
                }

                await axios
                    .post(
                        'https://api.mindee.net/v1/products/mindee/invoices/v3/predict',
                        formData,
                        {
                            headers: {
                                authorization:
                                    'Token 1086a2224e1219329d1ac30f75140d46',
                            },
                        }
                    )
                    .then((r) => {
                        resData = r.data;
                        if (inputRef.current?.files) {
                            submitFileAction(
                                inputRef.current.files[0],
                                resData
                            );
                        }
                        setFileName('');
                        if (formRef.current?.target) {
                            formRef.current.reset();
                        }
                    })
                    .catch(console.error);
            };
            fetchData();
        }
    };

    return (
        <div className='column'>
            <form
                className='form'
                ref={formRef}
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className='file is-info is-boxed'>
                    <label className='file-label'>
                        <input
                            className='file-input'
                            required={true}
                            accept='jpg, jpeg, png, pdf'
                            type='file'
                            ref={inputRef}
                            name='invoice-file'
                            onChange={(e) => handleChange(e)}
                        />
                        <span className='file-cta'>
                            <span className='file-icon'>
                                <i className='fa fa-upload'></i>
                            </span>
                            <span className='file-label'>
                                {fileName || 'Select file...'}
                            </span>
                        </span>
                    </label>
                </div>
                <div className='field'>
                    <div className='control'>
                        <button
                            className='button is-info is-outlined'
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InvoiceForm;
