export const getLabels = () => {
    const labels = [
        {
            value: 'name',
            placeholder: 'Product Name',
            type: 'text'
        },
        {
            value: 'brand',
            placeholder: 'Brand (Generic / Branded)',
            type: 'text'
        },
        {
            value: 'dosage',
            placeholder: 'Dosage',
            type: 'text'
        },
        {
            value: 'type',
            placeholder: 'Type (Capsule / Tablet)',
            type: 'text'
        },
        {
            value: 'stock',
            placeholder: 'Stock Available',
            type: 'number'
        },
        {
            value: 'price',
            placeholder: 'Price',
            type: 'number'
        }
    ];

    return labels;
};

export const getInputOptions = (details) => {
    const options = [
        {
            label: "name",
            value: details.name,
            titleStyle: true,
            class: "item-title-container",
            type: 'text'
        },
        {
            label: "brand",
            value: details.brand,
            class: "input-group",
            type: 'text'
        },
        {
            label: "dosage",
            value: details.dosage,
            class: "input-group",
            type: 'text'
        },
        {
            label: "type",
            value: details.type,
            class: "input-group",
            type: 'text'
        },
        {
            label: "stock",
            value: details.stock,
            class: "input-group",
            type: 'number'
        },
        {
            label: "price",
            value: details.price,
            class: "input-group",
            type: 'number'
        }
    ];

    return options;
}