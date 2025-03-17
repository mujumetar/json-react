import React from 'react'

function display({ data }) {
    return (
        <>
            <div className="container">
                <div className="row g-5">
                    {
                        data.map((ele) => (
                            <div className="col-lg-3 col-6">
                                <div class="card">
                                    <img src={ele.images} class="card-img-top" alt={ele.title} title={ele.title} />
                                        <div class="card-body">
                                            <h5 class="card-title text-truncate">{ele.title}</h5>
                                            <p class="card-text text-truncate">{ele.description}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{ele.category.name}</li>
                                           
                                        </ul>
                                        <div class="card-body">
                                           <button className='btn btn-danger fw-bold'>🛒 $ {ele.price}</button>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default display