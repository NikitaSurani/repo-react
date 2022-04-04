import React from 'react'
import bg from '../image/tmc2.jpg'

const TermsandCondition = () => {
    return (
        <div>
            <div className="container-fluid tncmain">
                <div className="row">
                    <div className="col-md-5 col-12 mt-5 tncimg">
                        <img src={bg} alt="Terms A nd Conditions" style={{ height: "550px", width: "400px" }} />
                    </div>
                    <div className="col-md-7 col-12 mt-5">
                        <h3 className='text-left'>Delivery time and default :</h3>
                        <ul>
                            <li className="text-left mt-4">
                                The binding nature of service and delivery dates and deadlines (hereinafter: "delivery deadline") requires the customer to provide us with documents and other required information promptly, and not to delay its cooperation or other material contractual duties, in particular, its payment obligations.
                            </li>
                            <li className="text-left mt-3">
                                In the case of labor disputes, and in the event of unforeseen hindrances, which are outside the supplier's sphere of influence, or if there are hindrances for which another manufacturing plant is responsible, the delivery deadline shall be extended appropriately. This shall also apply if the hindrances arise during a pre-existing delay.
                            </li>
                        </ul>
                        <h3 className='text-left mt-2'> Transfer of risk :</h3>
                        <ul>
                            <li className="text-left mt-4">
                                Risk shall transfer to the customer with transfer of the delivery item to the haulage contractor, carrier, or collector, or if transported by us, not later than upon departing our stores or the manufacturing plant, however. Insofar as acceptance is agreed and a fixed acceptance date has not been agreed, the customer shall accept the delivery item within eight days of notification of completion.
                            </li>
                            <li className="text-left mt-3">
                                If the customer has placed a call order, it must correctly call the delivery item - if ordering several delivery items, all of them - within 12 months from the date of the order, unless agreed otherwise by the contractual partners.
                            </li>
                        </ul>
                        <h3 className="text-left m-2">Prices and terms of payment :</h3>
                        <ul>
                            <li className="text-left mt-4">
                                The prices stated by us are ex works plus sales tax at the statutory amount applicable at the time of delivery, and without packaging. The packaging shall be charged separately.
                            </li>
                            <li className="text-left mt-3">
                                We reserve the right to demand submission by a customer of an irrevocable and unlimited bank surety for the amount of the contractual price upon acceptance of the order
                            </li>
                            <li className="text-left mt-3">
                                In the case of change requests from the customer after conclusion of the contract, we reserve the right to adjust the prices correspondingly, as well as the delivery deadlines already agreed.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TermsandCondition