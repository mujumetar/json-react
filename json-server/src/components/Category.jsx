import React from 'react'

export const Category = ({cats}) => {
  return (
  <div className="container">
    <div className="row">
        {
            cats.map((ele) => (<button onClick={} className='btn btn-outline-primary'>hii
            </button>))
        }
    </div>
  </div>
  )
}
