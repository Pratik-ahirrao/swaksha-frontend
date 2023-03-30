import "./requestRecord.scss"
import Sidebar from "./sidebar/Sidebar"
import Navbar from "./navbar/Navbar"
import RequestRecordTable from "./requestRecordTable/RequestRecordTable"
import RequestRecordForm from "./requestRecordForm/RequestRecordForm"

const consents = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="listContainer">
                    <div className="listTitle">
                    <RequestRecordForm />
                        <RequestRecordTable/>
                    </div>
                       

                    </div>
                   
                   
    </div>
  </div>
  )
}

export default consents;