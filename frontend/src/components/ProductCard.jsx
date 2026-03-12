


export const ProductCard = ({ product }) => {
    return (
        <>
            <div className="card">
                {product.bridge && (
                    <span className="card_badge">{product.badge}</span>
                )}
                <div className="card_visual">
                    <span className="card_emoji">{product.emoji}</span>
                </div>
                <div className="card_info">
                    <p className="card_category">{product.category}</p>
                    <h3 className="card_name">{product.name}</h3>
                    <p className="card_description">{product.description}</p>
                    <div className="card_rating-row">
                        <span className="card_stars">
                            {'/u2850'}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}