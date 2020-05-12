const state = {
    items: [
        // {id, price, quantity}
    ]
};

const getters = {
    cartItems: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const item = rootState.products.medicines.find(medicine => medicine.id === id)
            return {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity
            }
        });
    },
    cartTotal: (state, getters) => {
        return getters.cartItems.reduce((total, medicine) => {
            return total + medicine.price * medicine.quantity;
        }, 0);
    }
};

const actions = {
    addToCart: ({state, commit}, orderItem) => {
        if(orderItem.stock < 1) {
            return;
        }

        const inCart = state.items.find(item => item.id === orderItem.id);
        if(!inCart) {
            commit('addToCart', orderItem);
        } else {

            if(parseInt(orderItem.stock) === parseInt(inCart.quantity)) {
                return;
            }

            commit('incrementItem', orderItem);
        }
    },
    removeFromCart: ({commit}, orderItem) => {
        const cartItem = state.items.find(item => item.id === orderItem.id);
        if(cartItem.quantity > 1) {
            commit('decrementItem', orderItem);
        } else {
            commit('removeFromCart', orderItem);
        }
    },
    clearCart: ({commit}) => {
        commit('clearCart');
    }
};

const mutations = {
    addToCart: (state, {id}) => state.items.unshift({
        id,
        quantity: 1
    }),
    incrementItem: (state, {id}) => {
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity++;
    },
    removeFromCart: (state, {id}) => state.items = state.items.filter(item => item.id != id),
    decrementItem: (state, {id}) => {
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity--;
    },
    clearCart: (state) => state.items = []
};

export default {
    state,
    getters,
    actions,
    mutations
}