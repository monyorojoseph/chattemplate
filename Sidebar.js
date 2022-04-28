import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-md-2 bg-secondary px-0">
        <h6 className='text-center border-bottom border-2 py-2 text-light fw-bold'>Friends</h6>
        <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action fw-bold text-light bg-secondary">Loice Anne</a>
            <a href="#" className="list-group-item list-group-item-action fw-bold text-light bg-secondary">Mackle Moore</a>
            <a href="#" className="list-group-item list-group-item-action fw-bold text-light bg-secondary">Nick Kweyu</a>
            <a href="#" className="list-group-item list-group-item-action fw-bold text-light bg-secondary">Irene</a>
        </div>
    </div>
  )
}

export default Sidebar