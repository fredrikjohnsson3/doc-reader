import { Submit } from '../state';

interface PreviewItemProps {
    doc: Submit;
}

const PreviewItem: React.FC<PreviewItemProps> = ({ doc }) => {
    const docType = 'application/pdf'; // insert if (doc.type == ...) logic
    const docPath = doc.url;
    const readData = doc.content.document.inference.prediction;
    const cleanData = JSON.parse(JSON.stringify(readData));
    const dataArray: any[] = [];

    Object.keys(cleanData).forEach((key) => {
        const keyName = key;
        const logData = () => {
            if (cleanData[key].length && key === 'company_registration') {
                const nest = cleanData[key];
                Object.keys(nest).forEach((key) => {
                    dataArray.push([
                        'company_registration',
                        nest[key].value || 'missing',
                    ]);
                });
            } else if (cleanData[key].length && key === 'payment_details') {
                const nest = cleanData[key];
                Object.keys(nest).forEach((key) => {
                    dataArray.push(['SWIFT', nest[key].swift || 'missing']);
                    dataArray.push(['IBAN', nest[key].iban || 'missing']);
                });
            } else if (cleanData[key].length && key === 'taxes') {
                const nest = cleanData[key];
                Object.keys(nest).forEach((key) => {
                    dataArray.push(['moms %', nest[key].rate || 'missing']);
                    dataArray.push(['moms sek', nest[key].value || 'missing']);
                });
            } else if (key === 'locale') {
                dataArray.push([
                    'currency',
                    cleanData[key].currency || 'missing',
                ]);
                dataArray.push([
                    'language',
                    cleanData[key].language || 'missing',
                ]);
            } else {
                dataArray.push([keyName, cleanData[key].value || 'missing']);
            }
        };
        logData();
    });
    const output = dataArray.map((data) => (
        <tr key={data[0]}>
            <td>{data[0]}</td>
            <td>{data[1]}</td>
        </tr>
    ));

    const iframeDoc = `
        <html>
            <body>
                <object data=${docPath} type=${docType}>
                    <div>No online PDF viewer installed</div>
                </object>
            </body>
        </html>
    `;
    return (
        <>
            <tr>
                <td>
                    <iframe title={doc.id} srcDoc={iframeDoc} />
                </td>
                <td></td>
            </tr>
            {output}
        </>
    );
};

export default PreviewItem;

// Try this in the future, might be more useful / easier
// <object data='your_url_to_pdf' type='application/pdf'>
//     <iframe src='https://docs.google.com/viewer?url=your_url_to_pdf&embedded=true'></iframe>
// </object>;
