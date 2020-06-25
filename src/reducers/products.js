var inittialState = [
    {
        id: 1,
        name: "Iphone 6",
        price: 300,
        status: true
    },
    {
        id: 2,
        name: "Sam Sung",
        price: 400,
        status: false
    },
    {
        id: 3,
        name: "Oppo",
        price: 500,
        status: true
    }
];

const products = (state  = inittialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default products;