const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
})

const initialState = {
    data : [],
    status : STATUSES.IDLE
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers : {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchProducts.pending, (state,action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchProducts.rejected, (state,action) => {
            state.status = STATUSES.ERROR
        })
    }
});


export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;


//thunks
export const fetchProducts = createAsyncThunk( 'products/fetch', async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/");
            const data = await response.json();
            return data;
        }catch(err){
            console.log(err);
        }
})


// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await fetch("https://fakestoreapi.com/products/");
//             const data = await response.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         }catch(err){
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }