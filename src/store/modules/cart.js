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
            commit('ADD_TO_CART', orderItem);
        } else {

            if(parseInt(orderItem.stock) === parseInt(inCart.quantity)) {
                return;
            }

            commit('INCREMENT_ITEM', orderItem);
        }
    },
    removeFromCart: ({commit}, orderItem) => {
        const cartItem = state.items.find(item => item.id === orderItem.id);
        if(cartItem.quantity > 1) {
            commit('DECREMENT_ITEM', orderItem);
        } else {
            commit('REMOVE_FROM_CART', orderItem);
        }
    },
    clearCart: ({commit}) => {
        commit('CLEAR_CART');
    }
};

const mutations = {
    ADD_TO_CART: (state, {id}) => state.items.unshift({
        id,
        quantity: 1
    }),
    INCREMENT_ITEM: (state, {id}) => {
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity++;
    },
    REMOVE_FROM_CART: (state, {id}) => state.items = state.items.filter(item => item.id != id),
    DECREMENT_ITEM: (state, {id}) => {
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity--;
    },
    CLEAR_CART: (state) => state.items = []
};

export default {
    state,
    getters,
    actions,
    mutations
}