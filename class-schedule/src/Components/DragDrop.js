import React from 'react';
import Draggable from 'react-draggable';
import { Box } from '@mui/material';
import { SportsSoccer, Fastfood, School, DirectionsRun, Language, Functions, Map, ColorLens } from '@mui/icons-material';

class DragDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incompleteItems: [
        { id: 1, name: "Social Studies", icon: <Map /> },
        { id: 2, name: "Physical Education", icon: <SportsSoccer /> },
        { id: 3, name: "Lunch", icon: <Fastfood /> },
        { id: 4, name: "English", icon: <Language /> },
        { id: 5, name: "Math", icon: <Functions /> },
        { id: 6, name: "Science", icon: <School /> },
        { id: 7, name: "Art", icon: <ColorLens /> }
      ],
      completeItems: [

      ]
    }
  }

  render() {
    const incompleteList = this.state.incompleteItems.map(item => (
      <Draggable
        key={item.id}
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 100, y: 25 * item.id }}
        grid={[25, 25]}
      >
        <div>
          <div className="handle">{item.name}</div>
          {item.icon}
        </div>
      </Draggable>
    ));

    const completeList = this.state.completeItems.map(item => (
      <Draggable
        key={item.id}
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 400, y: 25 * item.id }}
        grid={[25, 25]}
      >
        <div>
          <div className="handle">{item.name}</div>
          {item.icon}
        </div>
      </Draggable>
    ));

    return (
      <Box display="flex" justifyContent="center">
        <div style={{ float: 'right', width: '40%' }}>
          <h2>To Do</h2>
          {incompleteList}
        </div>
        <div style={{ float: 'left', width: '40%' }}>
          <h2>Done</h2>
          {completeList}
        </div>
      </Box>
    );
  }
}

export default DragDrop;