export interface Submit {
    id: string;
    name: string;
    url: string;
    content: MindeeRes;
}

export interface MindeeRes {
    document: {
        id?: string;
        inference: {
            extras?: {};
            finished_at?: string;
            is_rotation_applied?: boolean;
            pages?: [];
            prediction: {
                company_registration: [
                    {
                        confidence?: number;
                        page_id?: number;
                        polygon?: [];
                        type?: string;
                        value?: string;
                    }
                ];
                customer: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: string;
                };
                customer_address: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: string;
                };
                customer_company_registration: [
                    {
                        confidence?: number;
                        page_id?: number;
                        polygon?: [];
                        type?: string;
                        value?: string;
                    }
                ];
                date: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: string;
                };
                document_type: {
                    value?: string;
                };
                due_date: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    raw?: string;
                    value?: string;
                };
                invoice_number: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: string;
                };
                locale: {
                    confidence?: number;
                    currency?: string;
                    language?: string | null;
                };
                payment_details: [
                    {
                        account_number?: string | null;
                        confidence?: number;
                        iban?: string | null;
                        page_id?: number;
                        polygon: [];
                        routing_number?: string | null;
                        swift?: string | null;
                    }
                ];
                supplier: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: string;
                };
                supplier_address: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: string;
                };
                taxes: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    rate?: number;
                    value?: number;
                };
                total_excl: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: number;
                };
                total_incl: {
                    confidence?: number;
                    page_id?: number;
                    polygon?: [];
                    value?: number;
                };
            };
            processing_time?: number;
            product: string[];
            started_at?: string;
        };
        n_pages?: number;
        name?: string;
    };
}

// {"api_request": {
//     "error": {},
//     "resources": ["document"],
//     "status": "success",
//     "status_code": 201,
//     "url": "https://api.mindee.net/v1/products/mindee/invoices/v3/predict"
// },
//     "document": {
//         "id": "9e6fe29f-f035-45a3-9c1c-3d39fc821f12",
//         "inference": {
//             "extras": {},
//             "finished_at": "2022-11-24T16:59:10.693124",
//             "is_rotation_applied": true,
//             "pages": [{
//                 "extras": {},
//                 "id": 0,
//                 "orientation": {"value": 0},
//                 "prediction": {
//                     "company_registration": [{
//                         "confidence": 1.0,
//                         "polygon": [[0.802, 0.911], [0.905, 0.911], [0.905, 0.919], [0.802, 0.919]],
//                         "type": "VAT NUMBER",
//                         "value": "SE556680874601"
//                     }],
//                     "customer": {
//                         "confidence": 1.0,
//                         "polygon": [[0.718, 0.149], [0.871, 0.149], [0.871, 0.171], [0.718, 0.171]],
//                         "value": "FKIT AB ATTN: FREDRIK JONSSON"
//                     },
//                     "customer_address": {
//                         "confidence": 1.0,
//                         "polygon": [[0.718, 0.176], [0.826, 0.176], [0.826, 0.211], [0.718, 0.211]],
//                         "value": "Karl XI:s v\u00e4g 27 30294 Halmstad Sweden"
//                     },
//                     "customer_company_registration": [],
//                     "date": {
//                         "confidence": 1.0,
//                         "polygon": [[0.207, 0.177], [0.281, 0.177], [0.281, 0.185], [0.207, 0.185]],
//                         "value": "2022-11-11"
//                     },
//                     "document_type": {
//                         "value": "INVOICE"
//                     },
//                     "due_date": {
//                         "confidence": 1.0,
//                         "polygon": [[0.207, 0.194], [0.281, 0.194], [0.281, 0.201], [0.207, 0.201]],
//                         "raw": "2022-12-11",
//                         "value": "2022-12-11"
//                     },
//                     "invoice_number": {
//                         "confidence": 1.0,
//                         "polygon": [[0.207, 0.143], [0.256, 0.143], [0.256, 0.151], [0.207, 0.151]],
//                         "value": "463735"
//                     },
//                     "locale": {
//                         "confidence": 0.9,
//                         "currency": "SEK",
//                         "language": null
//                     },
//                     "orientation": {
//                         "confidence": 0.99,
//                         "degrees": 0
//                     },
//                     "payment_details": [{
//                         "account_number": null,
//                         "confidence": 1.0,
//                         "iban": "SE0750000000051501199250",
//                         "polygon": [[0.495, 0.9], [0.696, 0.9], [0.696, 0.919], [0.495, 0.919]],
//                         "routing_number": null,
//                         "swift": "ESSESESS"
//                     }],
//                     "supplier": {
//                         "confidence": 0.12,
//                         "polygon": [[0.047, 0.038], [0.288, 0.038], [0.288, 0.093], [0.047, 0.093]],
//                         "value": "ODERLOND H S T IN G S E RVI CE S"
//                     },
//                     "supplier_address": {
//                         "confidence": 1.0,
//                         "polygon": [[0.086, 0.9], [0.183, 0.9], [0.183, 0.92], [0.086, 0.92]],
//                         "value": "Kungsgatan 56 411 08 G\u00f6teborg"
//                     },
//                     "taxes": [{
//                         "confidence": 1.0,
//                         "polygon": [[0.746, 0.389], [0.899, 0.389], [0.899, 0.398], [0.746, 0.398]],
//                         "rate": 25.0,
//                         "value": 42.25
//                     }],
//                     "total_excl": {
//                         "confidence": 1.0,
//                         "polygon": [[0.835, 0.368], [0.899, 0.368], [0.899, 0.377], [0.835, 0.377]],
//                         "value": 169.0
//                     },
//                     "total_incl": {
//                         "confidence": 1.0,
//                         "polygon": [[0.818, 0.448], [0.905, 0.448], [0.905, 0.459], [0.818, 0.459]],
//                         "value": 211.25
//                     }
//                 }
//             }],
//             "prediction": {
//                 "company_registration": [{
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.802, 0.911], [0.905, 0.911], [0.905, 0.919], [0.802, 0.919]],
//                     "type": "VAT NUMBER", "value": "SE556680874601"
//                 }],
//                 "customer": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.718, 0.149], [0.871, 0.149], [0.871, 0.171], [0.718, 0.171]],
//                     "value": "FKIT AB ATTN: FREDRIK JONSSON"
//                 },
//                 "customer_address": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.718, 0.176], [0.826, 0.176], [0.826, 0.211], [0.718, 0.211]],
//                     "value": "Karl XI:s v\u00e4g 27 30294 Halmstad Sweden"
//                 },
//                 "customer_company_registration": [],
//                 "date": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.207, 0.177], [0.281, 0.177], [0.281, 0.185], [0.207, 0.185]],
//                     "value": "2022-11-11"
//                 },
//                 "document_type": {
//                     "value": "INVOICE"
//                 },
//                 "due_date": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.207, 0.194], [0.281, 0.194], [0.281, 0.201], [0.207, 0.201]],
//                     "raw": "2022-12-11",
//                     "value": "2022-12-11"
//                 },
//                 "invoice_number": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.207, 0.143], [0.256, 0.143], [0.256, 0.151], [0.207, 0.151]],
//                     "value": "463735"
//                 },
//                 "locale": {
//                     "confidence": 0.9,
//                     "currency": "SEK",
//                     "language": null
//                 },
//                 "payment_details": [{
//                     "account_number": null,
//                     "confidence": 1.0,
//                     "iban": "SE0750000000051501199250",
//                     "page_id": 0,
//                     "polygon": [[0.495, 0.9], [0.696, 0.9], [0.696, 0.919], [0.495, 0.919]],
//                     "routing_number": null,
//                     "swift": "ESSESESS"
//                 }],
//                 "supplier": {
//                     "confidence": 0.12,
//                     "page_id": 0,
//                     "polygon": [[0.047, 0.038], [0.288, 0.038], [0.288, 0.093], [0.047, 0.093]],
//                     "value": "ODERLOND H S T IN G S E RVI CE S"
//                 },
//                 "supplier_address": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.086, 0.9], [0.183, 0.9], [0.183, 0.92], [0.086, 0.92]],
//                     "value": "Kungsgatan 56 411 08 G\u00f6teborg"
//                 },
//                 "taxes": [{
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.746, 0.389], [0.899, 0.389], [0.899, 0.398], [0.746, 0.398]],
//                     "rate": 25.0,
//                     "value": 42.25
//                 }],
//                 "total_excl": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.835, 0.368], [0.899, 0.368], [0.899, 0.377], [0.835, 0.377]],
//                     "value": 169.0
//                 },
//                 "total_incl": {
//                     "confidence": 1.0,
//                     "page_id": 0,
//                     "polygon": [[0.818, 0.448], [0.905, 0.448], [0.905, 0.459], [0.818, 0.459]],
//                     "value": 211.25
//                 }
//             },
//             "processing_time": 1.959,
//             "product": {
// "features": [
//     "locale",
//     "invoice_number",
//     "date",
//     "due_date",
//     "total_excl",
//     "total_incl",
//     "taxes",
//     "payment_details",
//     "supplier",
//     "company_registration",
//     "supplier_address",
//     "customer",
//     "customer_company_registration",
//     "customer_address",
//     "document_type",
//     "orientation"
// ],
//                 "name": "mindee/invoices",
//                 "type": "standard",
//                 "version": "3.2"
//             },
//             "started_at": "2022-11-24T16:59:08.733952"
//         },
//         "n_pages": 1,
//         "name": "463735.pdf"
//     }
// }
