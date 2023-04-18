import React from "react";
import { Dndprovider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Schedule = () => {
  return (
    <Dndprovider backend={HTML5Backend}>
    <div>Schedule</div>
    </Dndprovider>
  )
}

export default Schedule;