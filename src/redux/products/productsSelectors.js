export const getProducts = ({ products: { products } }) => products;

export const getErrorByFetch = ({ products: { isError } }) => isError;

export const getLoadingStatus = ({ products: { isLoading } }) => isLoading;