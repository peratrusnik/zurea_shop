import {useEffect, useState} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {GetAllProducts, SearchProducts} from "../../services/product.service";
import ProductListItemComponent from "./components/ProductListItem.Component";

const ProductListComponent = () => {
    const [productList, setProductList] = useState([])
    const [errMsg, setErrMsg] = useState()

    const params = useParams()
    // const [queryParams] = useSearchParams()  // query params searching

    useEffect(() => {
        // console.log('params....', queryParams.get("test"));   // query seraching
        console.log('params....', params.searchParams);
        setProductList([])
        setErrMsg('')
        if (!params.searchParams) {
            GetAllProducts()
            .then(data => {
                // console.log(data);
                setProductList(data.data)
            })
            .catch(error => {
                console.log(error);
                setErrMsg(error.message)
            })
        } else {
            SearchProducts(params.searchParams.replaceAll('-', ' '))
            .then(response => {
                console.log(response);
                if (response.status === 209) {
                    return setErrMsg(`No products for keywords: ${params.searchParams.replaceAll('-', ' ')}`)
                }
                setProductList(response.data)
            })
            .catch(error => {
                console.log(error);
            })
        }
        
    }, [params])



    const renderProductListView = () => {
        if (productList.length) {
            return productList.map((item, index) => {
                return <ProductListItemComponent product={item} key={index} />
            })
        }
        return <h2>No products.</h2>

    }
    return (
        <>
            <h2>list</h2>
            {errMsg ? <p>{errMsg}</p> : null}
            {renderProductListView()}
        </>
    )
}

export default ProductListComponent