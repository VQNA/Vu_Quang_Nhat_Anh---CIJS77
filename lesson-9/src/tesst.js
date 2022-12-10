import {useParams} from 'react-router-dom'

const ProductDetail = () => {
    const paras = useParams()

    return(
<div className = 'product-details'>
    <h3>Product: {paras.product}</h3>
</div>

    )

}