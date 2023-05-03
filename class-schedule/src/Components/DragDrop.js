import React from 'react';
import Draggable from 'react-draggable';
import { Box, Checkbox, Grid, Paper } from '@mui/material';
import { SportsSoccer, Fastfood, School, Language, Functions, Map, ColorLens, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';

class IncompleteItems extends React.Component {
  handleDragStart = (e, id) => {
    // Add the id of the dragged item to the dataTransfer object
    e.dataTransfer.setData("text/plain", id);
  }

  render() {
    const incompleteItems = this.props.items.map(item => (
      <Draggable
        key={item.id}
        axis="both"
        handle=".handle"
        position={{ x: 0, y: 25 * item.id }}
        onStop={(event, data) => {
          // check if the item was dropped on the right side of the screen
          if (data.x > window.innerWidth / 2) {
            // update the position of the dragged item to the right side of the screen
            const newPosition = { x: window.innerWidth - 200, y: data.y };
            event.target.style.position = 'fixed';
            event.target.style.left = `${newPosition.x}px`;
            event.target.style.top = `${newPosition.y}px`;
          }
        }}
      >
        <Paper
          className='paperblock'
          sx={{ p: 1, textAlign: 'center', backgroundColor: '#eee' }}
          draggable="true"
          onDragStart={(e) => this.handleDragStart(e, item.id)}
        >
          <div className="handle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            {item.name}
          </div>
          {item.icon}
        </Paper>
      </Draggable>
    ));

    return (
      <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.props.handleDrop(e, "incompleteItems")}>
        <h1>To Do<CheckBoxOutlineBlank/></h1>
        {incompleteItems}
      </div>
    );
  }
}

class CompletedItems extends React.Component {
  render() {
    const completedItems = this.props.items.map(item => (
      <Paper
        key={item.id}
        sx={{ p: 1, textAlign: 'right', backgroundColor: '#ccc' }}
      >
        {item.name}
      </Paper>
    ));

    return (
      <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => this.props.handleDrop(e, "completedItems")}>
        <h1>Done <CheckBox /> </h1>
        {completedItems}
      </div>
    );
  }
}

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
        { id: 7, name: "Art", icon: <ColorLens /> },
      ],
      completedItems: [],
    };
  }

  handleDrop = (e, target) => {
    e.preventDefault();
    const itemId = parseInt(e.dataTransfer.getData("text/plain"));
    const item = this.state.incompleteItems.find(item => item.id === itemId);

    if (item) {
      // Remove the dragged item from the incompleteItems array
      const incompleteItems = this.state.incompleteItems.filter(item => item.id !== itemId);
      
      // Add the dragged item to the completedItems array
      const completedItems = [...this.state.completedItems, item];
      
      // Update the state with the new arrays
      this.setState({
        incompleteItems,
        completedItems,
      });
    }
  }

  render() {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <IncompleteItems items={this.state.incompleteItems} handleDrop={this.handleDrop} />
            </Grid>
            <Grid item xs={6}>
              <CompletedItems items={this.state.completedItems} handleDrop={this.handleDrop} />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
    
    export default DragDrop;