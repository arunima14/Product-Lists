import { useReducer, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    PAGINATE: 'paginate',
}

const PAGE_SIZE = 5;

function reducer(state, action){
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, products: [] }

        case ACTIONS.GET_DATA:
            return { ...state, loading: false, products: action.payload.products }

        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, products: [] }

        case ACTIONS.PAGINATE:
            const { currentPage, products } = action.payload;
            const start = (currentPage - 1) * PAGE_SIZE;
            const end = start + PAGE_SIZE;
            const paginatedProducts = products.slice(start, end);

            return { ...state, currentPage, paginatedProducts };
        
        default:
            return state;
    }
}


const FetchProducts = (params) => {
    const [state, dispatch] = useReducer(reducer, { products: [], loading: true, currentPage: 1, paginatedProducts: [], })

    useEffect(() => {
        const requestCancelToken = axios.CancelToken.source();
        dispatch({ type: ACTIONS.MAKE_REQUEST });
        axios.get(BASE_URL, {
            cancelToken: requestCancelToken.token,
            params: {
                markdown: true,
                ...params
            }

        }).then( res => {
            console.log("res.data.products", res.data.products);
            let products = res.data.products;

            // Filter products based on the search query
            if (params.text) {
            products = products.filter((product) => product.title.toLowerCase().includes(params.text.toLowerCase()));
            }

            // Sort products based on the chosen sort option
            if (params.sortBy === 'price-asc') {
                products.sort((a, b) => a.price - b.price);
            } else if (params.sortBy === 'price-desc') {
                products.sort((a, b) => b.price - a.price);
            }
            
            dispatch({
                type: ACTIONS.PAGINATE,
                payload: { currentPage: params.page, products },
            });
            dispatch({ type:ACTIONS.GET_DATA, payload: { products: products }})
        }).catch(e => {
            if(axios.isCancel(e))
                return  //ignore and return nothing
            dispatch({ type:ACTIONS.ERROR, payload: { error: e }})
        })
    }, [ params])

    return state;
}

export default FetchProducts;