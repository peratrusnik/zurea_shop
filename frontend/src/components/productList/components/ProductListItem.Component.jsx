import {useEffect} from "react";


const ProductListItemComponent = (props) => {
    const {product} = props

    useEffect(() => {
        // console.log(product);
    }, [product])
    return (
        <>
            <h1>Name: {product.title}</h1>
            <h2>Desc: {product.description}</h2>
            <h3>Price: {product.price}</h3>
        </>
    )
}

export default ProductListItemComponent