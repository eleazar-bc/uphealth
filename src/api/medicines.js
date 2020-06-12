const medicines = [
    {
        id: 1,
        name: 'amoxicillin',
        brand: 'generic',
        dosage: '500mg',
        type: 'capsule',
        price: 25,
        stock: 100
    },
    {
        id: 2,
        name: 'potencee',
        brand: 'branded',
        dosage: '500mg',
        type: '',
        price: 10,
        stock: 9
    },
    {
        id: 3,
        name: 'decolgen forte',
        brand: 'branded',
        dosage: '',
        type: '',
        price: 68,
        stock: 0
    },
    {
        id: 4,
        name: 'omeprazole',
        brand: 'generic',
        dosage: '20mg',
        type: '',
        price: 24,
        stock: 5
    },
    {
        id: 5,
        name: 'paracetamol',
        brand: 'generic',
        dosage: '500mg',
        type: 'tab',
        price: 8,
        stock: 13
    },
    {
        id: 6,
        name: 'losartan',
        brand: 'generic',
        dosage: '500mg',
        type: '',
        price: 13,
        stock: 15
    },
    {
        id: 7,
        name: 'amoxicillin',
        brand: 'generic',
        dosage: '500mg',
        type: 'capsule',
        price: 25,
        stock: 100
    },
    {
        id: 8,
        name: 'potencee',
        brand: 'branded',
        dosage: '500mg',
        type: '',
        price: 10,
        stock: 9
    },
    {
        id: 9,
        name: 'decolgen forte',
        brand: 'branded',
        dosage: '',
        type: '',
        price: 68,
        stock: 0
    },
    {
        id: 10,
        name: 'omeprazole',
        brand: 'generic',
        dosage: '20mg',
        type: '',
        price: 24,
        stock: 5
    },
    {
        id: 11,
        name: 'paracetamol',
        brand: 'generic',
        dosage: '500mg',
        type: 'tab',
        price: 8,
        stock: 13
    },
    {
        id: 12,
        name: 'losartan',
        brand: 'generic',
        dosage: '500mg',
        type: '',
        price: 13,
        stock: 15
    }
];

export default {
    getAllMedicines: cb => {
        return cb(medicines);
    }
};
