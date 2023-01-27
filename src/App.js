import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterFrameList from "./components/MasterFrameList";
import AddMasterFrame from "./components/AddMasterFrame";
import EditMasterFrame from "./components/EditMasterFrame";
import ScanFrame from "./components/ScanFrame";
import ScanFrame2 from "./components/ScanFrame2";
import Charging from "./components/Charging";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterFrameList />} />
        <Route path="add" element={<AddMasterFrame />} />
        <Route path="edit/:id" element={<EditMasterFrame />} />
        <Route path="scanframe" element={<ScanFrame />} />
        <Route path="scanframe2" element={<ScanFrame2 />} />
        <Route path="charging" element={<Charging />} />
      </Routes>
      {/* <MasterFrameList /> */}
    </BrowserRouter>
  );
}

export default App;
