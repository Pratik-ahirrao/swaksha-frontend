import "./consents.scss"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import Table from "./table/Table"
import Datatable from "./datatable/Datatable"
const consents = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="listContainer">
                    <div className="listTitle"></div>
                        <Datatable />
                    </div>
    </div>
  </div>
  )
}

export default consents;