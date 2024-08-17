import React from 'react'
import Nav from './Nav'

const ViewALl = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="test-centre">
                            <h5 class="font-monospace">
                                View All:-
                            </h5>
                        </div>
                        <br></br>
                        <table class="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Sl No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Email-id</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Arya Nair</td>
                                    <td>9876543210</td>
                                    <td>arya.nair@example.com</td>
                                    <td>Thiruvananthapuram</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Rahul Menon</td>
                                    <td>9823456789</td>
                                    <td>rahul.menon@example.com	</td>
                                    <td>Ernakulam</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Kavya Suresh	</td>
                                    <td>9845123456</td>
                                    <td>kavya.suresh@example.com</td>
                                    <td>Kozhikode</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Vinod Kumar	</td>
                                    <td>9865432109</td>
                                    <td>vinod.kumar@example.com</td>
                                    <td>Alappuzha</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Anjali Thomas	</td>
                                    <td>9865432109</td>
                                    <td>9865432109</td>
                                    <td>Thrissur</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Suresh Babu	</td>
                                    <td>9845678901</td>
                                    <td>suresh.babu@example.com	</td>
                                    <td>Kannur</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Lakshmi Pillai	</td>
                                    <td>9834567890</td>
                                    <td>lakshmi.pillai@example.com	</td>
                                    <td>Kottayam</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Manoj Nambiar	</td>
                                    <td>9823456701</td>
                                    <td>manoj.nambiar@example.com	</td>
                                    <td>Palakkad</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Priya Varghese	</td>
                                    <td>9876540123</td>
                                    <td>priya.varghese@example.com	</td>
                                    <td>Kollam</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Ramesh Iyer	</td>
                                    <td>9845012345</td>
                                    <td>ramesh.iyer@example.com	</td>
                                    <td>Pathanamthitta</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewALl
