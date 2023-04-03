import React, { useState } from "react";
import ExpensesModal from "./modal/ExpensesModal";


export default function PriceList() {
  const [showExpensesModal, setShowExpensesModal] = useState(false);

  const handleOnClose = () => setShowExpensesModal(false)

  const [lolly, setLolly] = useState({ qty: 0, sold: 0 });
  const [buko, setBuko] = useState({ qty: 0, sold: 0 });
  const [special, setSpecial] = useState({ qty: 0, sold: 0 });
  const [cone, setCone] = useState({ qty: 0, sold: 0 });
  const [scup, setScup] = useState({ qty: 0, sold: 0 });
  const [mcup, setMcup] = useState({ qty: 0, sold: 0 });
  const [bcup, setBcup] = useState({ qty: 0, sold: 0 });
  const [pint, setPint] = useState({ qty: 0, sold: 0 });
  const [liter, setLiter] = useState({ qty: 0, sold: 0 });
  const [os, setOs] = useState({ qty: 0, sold: 0 });
  const [half, setHalf] = useState({ qty: 0, sold: 0 });
  const [ts, setTs] = useState({ qty: 0, sold: 0 });
  const [result, setResult] = useState({ sold: 0, qty: 0 });
  const [totalCount, setTotalCount] = useState({ sold: 0, qty: 0 });

  const icecream = {
    lolly: { o: 10, d: 7.18 },
    buko: { o: 13, d: 10 },
    special: { o: 20, d: 15.60 },
    cone: { o: 30, d: 24.38 },
    scup: { o: 16, d: 12.92 },
    mcup: { o: 23, d: 18.17 },
    bcup: { o: 30, d: 23.73 },
    pint: { o: 75, d: 63 },
    liter: { o: 148, d: 122 },
    os: { o: 255, d: 215 },
    half: { o: 255, d: 215 },
    ts: { o: 468, d: 387 }
};

const handleItem = (event, setter) => {
  const { name, value } = event.target;
  setter(prevState => ({ ...prevState, [name]: Number(value) }));
};

const handleLolly = event => handleItem(event, setLolly);
const handleBuko = event => handleItem(event, setBuko);
const handleSpecial = event => handleItem(event, setSpecial);
const handleCone = event => handleItem(event, setCone);
const handleScup = event => handleItem(event, setScup);
const handleMcup = event => handleItem(event, setMcup);
const handleBcup = event => handleItem(event, setBcup);
const handlePint = event => handleItem(event, setPint);
const handleLiter = event => handleItem(event, setLiter);
const handleOs = event => handleItem(event, setOs);
const handleHalf = event => handleItem(event, setHalf);
const handleTs = event => handleItem(event, setTs);


const computeSoldQty = () => {
  let sold = 0;
  let tsold = 0;

  if (lolly.sold > 0) {
      sold += lolly.sold * icecream.lolly.o;
      tsold += lolly.sold;
  }
  if (buko.sold > 0) {
      sold += buko.sold * icecream.buko.o;
      tsold += buko.sold;
  }
  if (special.sold > 0) {
      sold += special.sold * icecream.special.o;
      tsold += special.sold;
  }
  if (cone.sold > 0) {
      sold += cone.sold * icecream.cone.o;
      tsold += cone.sold;
  }
  if (scup.sold > 0) {
      sold += scup.sold * icecream.scup.o;
      tsold += scup.sold;
  }
  if (mcup.sold > 0) {
      sold += mcup.sold * icecream.mcup.o;
      tsold += mcup.sold;
  }
  if (bcup.sold > 0) {
      sold += bcup.sold * icecream.bcup.o;
      tsold += bcup.sold;
  }
  if (pint.sold > 0) {
      sold += pint.sold * icecream.pint.o;
      tsold += pint.sold;
  }
  if (liter.sold > 0) {
      sold += liter.sold * icecream.liter.o;
      tsold += liter.sold;
  }
  if (os.sold > 0) {
      sold += os.sold * icecream.os.o;
      tsold += os.sold;
  }
  if (half.sold > 0) {
      sold += half.sold * icecream.half.o;
      tsold += half.sold;
  }
  if (ts.sold > 0) {
      sold += ts.sold * icecream.ts.o;
      tsold += ts.sold;
  }

  setResult({ sold });
  setTotalCount ({ tsold });
};

const btnCompute = () => {
  computeSoldQty();
};

const btnClear = () => {
  setLolly({sold: 0});
  setBuko({sold: 0});
  setSpecial({sold: 0});
  setCone({sold: 0});
  setScup({sold: 0});
  setMcup({sold: 0});
  setBcup({sold: 0});
  setPint({sold: 0});
  setLiter({sold: 0});
  setOs({sold: 0});
  setHalf({sold: 0});
  setTs({sold: 0});
  setResult({sold: 0});
  setTotalCount({sold: 0});
};
    return (
      <div className="container">
        <table className="table-fixed container table-zebra text-center">
          <caption className="caption-top">
            <div className="text-lg font-semibold">
            EVERYDAY SALE'S
            </div>
            TEAM PILA'S ICE CREAM
          </caption>
        <thead>
          <tr className="border border-slate-700">
            <th className="border border-slate-700 w-1/4">Product Name</th>
            <th className="border border-slate-700">
                Date<hr /><input className="w-full" type="date" />
            </th>
            <th className="border border-slate-700 w-1/4">Total Per Product</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td className="border border-slate-700">ICE LOLLY</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={lolly.sold} onChange={handleLolly} /></td>
            <td className="border border-slate-700"><h5>{(lolly.sold * icecream.lolly.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">ICE BUKO</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={buko.sold} onChange={handleBuko} /></td>
            <td className="border border-slate-700"><h5>{(buko.sold * icecream.buko.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">SPECIAL STICK</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={special.sold} onChange={handleSpecial} /></td>
            <td className="border border-slate-700"><h5>{(special.sold * icecream.special.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">CONE</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={cone.sold} onChange={handleCone} /></td>
            <td className="border border-slate-700"><h5>{(cone.sold * icecream.cone.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">SMALL CUP</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={scup.sold} onChange={handleScup} /></td>
            <td className="border border-slate-700"><h5>{(scup.sold * icecream.scup.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">MEDIUM CUP</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={mcup.sold} onChange={handleMcup} /></td>
            <td className="border border-slate-700"><h5>{(mcup.sold * icecream.mcup.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">BIG CUP</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={bcup.sold} onChange={handleBcup} /></td>
            <td className="border border-slate-700"><h5>{(bcup.sold * icecream.bcup.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">PINT</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={pint.sold} onChange={handlePint} /></td>
            <td className="border border-slate-700"><h5>{(pint.sold * icecream.pint.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">1.0 LITER</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={liter.sold} onChange={handleLiter} /></td>
            <td className="border border-slate-700"><h5>{(liter.sold * icecream.liter.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">1.7 LITERS</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={os.sold} onChange={handleOs} /></td>
            <td className="border border-slate-700"><h5>{(os.sold * icecream.os.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">HALF GALLON</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={half.sold} onChange={handleHalf} /></td>
            <td className="border border-slate-700"><h5>{(half.sold * icecream.half.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
          <tr>
            <td className="border border-slate-700">3.6 LITERS</td>
            <td className="border border-slate-700"><input className="input w-full" type="number" name="sold" value={ts.sold} onChange={handleTs} /></td>
            <td className="border border-slate-700"><h5>{(ts.sold * icecream.ts.o).toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              })}</h5></td>
          </tr>
        </tbody>
        <tfoot>
            <tr className="border border-slate-400 border-double h-12 bg-slate-700 font-bold">
                <td className="border border-slate-700">
                  TOTAL:
                </td>
                <td className="border border-slate-700">
                  <>
                  {totalCount.tsold > 0 ? (
                    <div className="indicator">
                    <span className="indicator-item indicator-top indicator-end badge badge-primary">sold</span>
                    <div className="grid place-items-center mr-5"><h5>{totalCount.tsold}</h5></div>
                    </div>
                  ) : (
                    <div><h5>0</h5></div>
                  )}
                  </>
                </td>
                <td className="border border-slate-700"><h5>{(result.sold.toLocaleString("en-PH", {
                                                                style: "currency",
                                                                currency: "PHP",
                                                              }))}</h5>
                </td>
            </tr>
        </tfoot>
      </table>

      <div className="container mt-3">
        <div className="flex justify-center">
          <button className="btn btn-wide btn-accent" onClick={() => setShowExpensesModal(true)}>Additional Expenses</button>
        </div>
        <div className= "btn-group flex justify-center m-1">
          <button className="btn btn-wide btn-outline btn-success flex-initial" onClick={btnClear}>Clear</button>
          <button className="btn btn-wide btn-outline btn-warning flex-initial" onClick={btnCompute}>Compute</button>
        </div>
      </div>
    <ExpensesModal onClose={handleOnClose} visible={showExpensesModal} resultSold={result.sold} />
    </div>
    )
  }