import React from 'react'

const Product = ({ product: {id, foto, name}, setSelectedProduct }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={foto} alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <p>{name}</p>
                    <button className="button is-primary" onClick={() => {
                        setSelectedProduct(id);
                        }}>
                        show comments
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;