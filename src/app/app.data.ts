import { IPlan, IPlanRange } from "./interfaces";

export const pricingRange: IPlanRange[] = [
    { min: 100, max: 200 },
    { min: 200, max: 300 },
    { min: 300, max: 400 },
    { min: 400, max: 500 },
    { min: -1, max: 500 }
];


export const priceAttributesTable: Array<IPlan[]> = [
    [
        {
            leadsPerMonth: 20,
            pricePerTransfer: 69,
            platformPrice: 299
        },
        {
            leadsPerMonth: 40,
            pricePerTransfer: 67,
            platformPrice: 599
        },
        {
            leadsPerMonth: 60,
            pricePerTransfer: 65,
            platformPrice: 699
        },
        {
            leadsPerMonth: 80,
            pricePerTransfer: 63,
            platformPrice: 799
        }
    ],
    [
        {
            leadsPerMonth: 20,
            pricePerTransfer: 79,
            platformPrice: 299
        },
        {
            leadsPerMonth: 40,
            pricePerTransfer: 77,
            platformPrice: 599
        },
        {
            leadsPerMonth: 60,
            pricePerTransfer: 74,
            platformPrice: 699
        },
        {
            leadsPerMonth: 80,
            pricePerTransfer: 72,
            platformPrice: 799
        }
    ],
    [
        {
            leadsPerMonth: 20,
            pricePerTransfer: 99,
            platformPrice: 299
        },
        {
            leadsPerMonth: 40,
            pricePerTransfer: 96,
            platformPrice: 599
        },
        {
            leadsPerMonth: 60,
            pricePerTransfer: 93,
            platformPrice: 699
        },
        {
            leadsPerMonth: 80,
            pricePerTransfer: 90,
            platformPrice: 799
        }
    ],
    [
        {
            leadsPerMonth: 20,
            pricePerTransfer: 109,
            platformPrice: 299
        },
        {
            leadsPerMonth: 40,
            pricePerTransfer: 106,
            platformPrice: 599
        },
        {
            leadsPerMonth: 60,
            pricePerTransfer: 102,
            platformPrice: 699
        },
        {
            leadsPerMonth: 80,
            pricePerTransfer: 99,
            platformPrice: 799
        }
    ],
    [
        {
            leadsPerMonth: 20,
            pricePerTransfer: 129,
            platformPrice: 299
        },
        {
            leadsPerMonth: 40,
            pricePerTransfer: 125,
            platformPrice: 599
        },
        {
            leadsPerMonth: 60,
            pricePerTransfer: 121,
            platformPrice: 699
        },
        {
            leadsPerMonth: 80,
            pricePerTransfer: 117,
            platformPrice: 799
        }
    ]
]