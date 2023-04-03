import React, { useState } from "react";

export default function ExpensesModal ({visible, onClose, resultSold}) {
    // const handleOnClose = (e) => {
    //     if(e.target.id === 'clickOutside') onClose();
    // }
    if (!visible) return null;

    const [fees, setFees] = useState({ cashier: 0, rent: 0, elec: 0 });
    const handleItem = (event, setter) => {
        const { name, value } = event.target;
        setter(prevState => ({ ...prevState, [name]: Number(value) }));
    };
    const handleFees = event => handleItem(event, setFees);

    return (
        <div className="fixed bottom-0 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="flex justify-center bg-white bg-opacity-75 w-100 h-1/2 rounded-lg">
                <div className="grid w-full mx-2">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-rose-950 font-bold">Cashier</span>
                        </label>
                        <input name="cashier" value={fees.cashier} onChange={handleFees} type="number" placeholder="Cashier Fee" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-rose-950 font-bold">Rent</span>
                        </label>
                        <input name="rent" value={fees.rent} onChange={handleFees} type="number" placeholder="Rent Fee" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-rose-950 font-bold">Elecricity</span>
                        </label>
                        <input name="elec" value={fees.elec} onChange={handleFees} type="number" placeholder="Electricity Fee" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="stats shadow flex h-full">
                        <div className="stat">
                            <div className="stat-title">Total Amount</div>
                            <div className="stat-value">{(resultSold - fees.cashier - fees.rent - fees.elec).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</div>
                        </div>
                    </div>
                    <div className="mt-2 grid justify-items-end">
                        <button className="btn btn-error" onClick={onClose}>close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}