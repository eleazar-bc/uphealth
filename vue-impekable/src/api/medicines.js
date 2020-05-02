const medicines = [
    {
        id: 1,
        name: 'Ibuprofen',
        description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
        inventory: 320,
        color: 'green',
        price: 50
    }, {
        id: 4,
        name: 'Bio Flu',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        inventory: 0,
        color: 'red',
        price: 29
    }, {
        id: 2,
        name: 'Biogesic',
        description: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        inventory: 17,
        color: 'orange',
        price: 192
    }, {
        id: 3,
        name: 'Antihistamine',
        description: 'Sample medicine description',
        inventory: 9,
        color: 'orange',
        price: 192
    },
    {
        id: 5,
        name: 'Zyrtec',
        description: 'Sample medicine description',
        inventory: 6,
        color: 'orange',
        price: 25
    },
    {
        id: 6,
        name: 'Lozartan',
        description: 'Sample medicine description',
        inventory: 10,
        color: 'orange',
        price: 65
    }
];

export default {
    getMedicines: (cb) => {
        return cb(medicines);
    }
}