
function CartLine ({ prod }) {

    return (
        <article>
            {prod.name} x {prod.qty}
            <button className='cart-page-delete-product'>
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.03406 18.6357C2.48406 18.6357 2.01322 18.4399 1.62156 18.0482C1.22989 17.6566 1.03406 17.1857 1.03406 16.6357V3.63574H0.0340576V1.63574H5.03406V0.635742H11.0341V1.63574H16.0341V3.63574H15.0341V16.6357C15.0341 17.1857 14.8382 17.6566 14.4466 18.0482C14.0549 18.4399 13.5841 18.6357 13.0341 18.6357H3.03406ZM13.0341 3.63574H3.03406V16.6357H13.0341V3.63574ZM5.03406 14.6357H7.03406V5.63574H5.03406V14.6357ZM9.03406 14.6357H11.0341V5.63574H9.03406V14.6357Z" fill="#B50000"/>
                </svg>
            </button>
        </article>
    )
}

export default CartLine
