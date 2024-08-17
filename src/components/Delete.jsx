import React from 'react'
import Nav from './Nav'

const Delete = () => {
    return (
        <div>
            <Nav />
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="test-centre">
                                    <h5 class="font-monospace">
                                        Delete Subscriber:-
                                    </h5>
                                </div>
                                <br></br>
                                <label htmlFor="" className="form-label">
                                    Subscriber's Name
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete
