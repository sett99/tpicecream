

export default function Expenses () {

    return (
        <div className="flex flex-col lg:flex-row mt-2">
          <div className="form-control grid flex-grow place-items-center">
            <label className="input-group input-group-sm input-group-vertical">
              <span>Cashier</span>
              <input type="number" name="cashier" placeholder="Cashier Fee" className="input input-sm input-bordered" />
            </label>
          </div>
          <div className="divider lg:divider-horizontal text-sm font-semibold">ADD</div>
          <div className="form-control grid flex-grow place-items-center">
            <label className="input-group input-group-sm input-group-vertical">
              <span>Rent</span>
              <input type="number" name="rent" placeholder="Rent Fee" className="input input-sm input-bordered" />
            </label>
          </div>
          <div className="divider lg:divider-horizontal text-sm font-semibold">HERE</div>
          <div className="form-control grid flex-grow place-items-center">
            <label className="input-group input-group-sm input-group-vertical">
              <span>Electricity</span>
              <input type="number" name="elec" placeholder="Electricity Fee" className="input input-sm input-bordered" />
            </label>
          </div>
        </div>
    )
    
}