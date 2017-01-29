import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-fresh.css';

const columns = [{
                    headerName: "Classroom Students", 
                    children: [
                      { headerName: 'ID', field: 'ID', width: 100 }, 
                      { headerName: 'First Name', field: 'First Name', width: 300 },
                      { headerName: 'Last Name', field: 'Last Name', width: 300 }
                   ]
                  }]
const styles = {
    height: 350,
    width: 700
}

class ImportedStudents extends Component {

  componentWillReceiveProps(props) {    
    this.api.setRowData(this.props.data)
  }

  render() { 
      return (
        <div id="myGrid" className="ag-fresh" style={styles}>
          <AgGridReact
              onGridReady = {this.onGridReady.bind(this)}
              onSelectionChanged={this.onSelectionChanged.bind(this, this.props.data)}
              columnDefs={columns}
              rowData={this.props.data}
              rowSelection="single"
              enableSorting="true"
              enableFilter="true"
              enableColResize ="true"
              debug = "true"
              rowHeight="22"
          />
        </div>
    )
  }

  onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  }

  onSelectionChanged(row) {
    let selectedRows = this.api.getSelectedRows();
    let temp;
    selectedRows.forEach( function(selectedRow, index) {
        temp = row.indexOf(selectedRows[0])
    });
    this.props.removeStudents(temp, selectedRows[0])
  }



}

export default ImportedStudents;