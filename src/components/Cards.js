import data from '../data'
import React from 'react';
function Cards() {
    
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(items => {
                        let badgeText
                        if(items.isSold){
                            badgeText='Sold out'
                        }
                        else if(items.location){
                            badgeText='ONLINE'
                        }
                        return (
                            <div className='col-md-3 card-section'>
                                <div className="card">
                                    <img className="card-img-top" src={require(`../images/${items.imageName}.jpg`)} alt='card-img-top' />
                                    {badgeText  && <h6 className='status'>{badgeText}</h6>}
                                    <div className="card-body" style={{marginTop: items.isSold ? '0px' : '30px'}}>
                                    
                                        <h5 className="card-title"><i class="fa fa-star" style={{ color: 'orange' }} aria-hidden="true"></i>({items.rating})</h5>
                                        <b>From ${items.rate} / Person</b>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div>

    )
}

export default Cards;
