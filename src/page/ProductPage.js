import React from "react";
import {useSearchParams} from "react-router-dom";


const ProductPage = () => {
    let [query, setQuery] = useSearchParams()
        const test = () => {
            query.set('hi', 'jshwang')
            setQuery(query)
    }
    console.log(query.get('aaa'))
    return (
        <div>
            <h1>show all products!!</h1>
            <button onClick={test}>111</button>
        </div>
    )
}

export default ProductPage