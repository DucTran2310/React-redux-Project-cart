var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://bom.to/u6iHiqzm28pvLP',
        description: 'Mẫu mã đẹp mắt',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy A10',
        image: 'https://bom.to/OfAFXD9PxsPzpu',
        description: 'Kiểu dáng bắt mắt',
        price: 700,
        inventory: 12,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo A7',
        image: 'http://p-vn.ipricegroup.com/uploaded_15e9cc206a4ad5e247f4391b80bdc9a8.jpg',
        description: 'Hàng Trung quốc ',
        price: 300,
        inventory: 20,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];//copy state cu tra ve state moi
    }
}

export default products;