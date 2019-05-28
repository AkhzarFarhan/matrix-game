import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

	// private columnDefs;
	// private rowData;
	// private columnTypes;
	// private gridApi;
	// private gridColumnApi;
	private status;
	// private position;
	private first = true;
	private alert = false;
	private moved = false;

	mainPuzzle:any = [
		{
			data: 1,
			pos: 0
		},
		{
			data: 2,
			pos: 1
		},
		{
			data: 3,
			pos: 2
		},
		{
			data: 4,
			pos: 3
		},
		{
			data: 5,
			pos: 4
		},
		{
			data: 6,
			pos: 5
		},
		{
			data: 7,
			pos: 6
		},
		{
			data: 8,
			pos: 7
		},
		{
			data: 'x',
			pos: 8
		}
	];

	// sPuzzle = this.mainPuzzle;

 //  constructor() {
	//  this.columnDefs = [
 //        {headerName: 'A', field: 'a', editable: true },
 //        {headerName: 'B', field: 'b', editable: true },
 //        {headerName: 'C', field: 'c', editable: true }
 //    ];    

 //    this.rowData = this.getRowData();
 //    // console.log(this.rowData);
 //    // this.status =  this.wincheck(this.rowData);
 //  } 

  ngOnInit() {
  }

  reset(): void {
  	window.location.reload();
  }

	someFunc = (index:number) => {

		let possileMove: any = [];

		if(index == 0){
			possileMove.push([1, 3]);
		}
		else if(index == 1){
			possileMove.push([0, 2, 4]);			
		}
		else if(index == 2){
			possileMove.push([1, 5]);
		}
		else if(index == 3){
			possileMove.push([0, 4, 6]);
		}
		else if(index == 4){
			possileMove.push([1, 3, 5, 7]);
		}
		else if(index == 5){
			possileMove.push([2, 4, 8]);
		}
		else if(index == 6){
			possileMove.push([3, 7]);
		}
		else if(index == 7){
			possileMove.push([4, 6, 8]);
		}
		else if(index == 8){
			possileMove.push([5, 7]);
		}

		// let alert = false;
		// let moved = false;
		let flag;

		this.mainPuzzle.forEach((tile:any)=>{

		if(tile.data == 'x'){
			let position = tile.pos;

			for (var i=0; i<possileMove[0].length; i++){
				this.moved = false;
				this.alert = false;

				if(possileMove[0][i] == position){

					console.log(this.mainPuzzle[index]);
					let tempData = this.mainPuzzle[index].data;
					this.mainPuzzle[index].data = this.mainPuzzle[position].data;
					this.mainPuzzle[position].data = tempData;
					this.first = false;
					this.moved = true;
					flag = true;
					// this.alert = false;
					// this.alert = false;


					break;					
				}
				// else{
				// 	if(i == possileMove[0].length -1){
				// 	this.moved = false;
				// }
				// }
			}
			}

	})
			if (this.moved == false && flag != true){
				this.alert = true;
			}
			else{
				this.alert = false;
			}
		// console.log(this.mainPuzzle);
		this.status = this.wincheck(this.mainPuzzle);
		console.log("moved: ", this.moved, "alert: ", this.alert, "flag: ", flag);
}

// 	getRowData = () =>{
// 	  var rowData = [];
// 	  for (var i = 1; i <=7 ; i+=3) {
// 	    rowData.push({
// 	    	a: (i),
// 	    	b: (i+1),
// 	    	c: (i+2)
// 	    });
// 	  }
// 	  rowData[2].c = 'X';
// 	  return rowData;
// }

	 wincheck = (tiles) =>{
		let win =  false;
		var count = 0;

		for (var i=0; i<8; i++){
			if(tiles[i].data == i+1){
				count ++;
			}
		}
		console.log(count);
		if (count == 8){
			win =  true;
		}
		return win;
}
}

	 
