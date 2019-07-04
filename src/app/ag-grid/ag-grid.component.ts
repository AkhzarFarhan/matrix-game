import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
	public status;
	public first = true;
	public alert = false;
	public moved = false;

	mainPuzzle:any = [
		{
			data: 6,
			pos: 0
		},
		{
			data: 5,
			pos: 1
		},
		{
			data: 7,
			pos: 2
		},
		{
			data: 3,
			pos: 3
		},
		{
			data: 8,
			pos: 4
		},
		{
			data: 4,
			pos: 5
		},
		{
			data: 2,
			pos: 6
		},
		{
			data: 'X',
			pos: 7
		},
		{
			data: 1,
			pos: 8
		}
	];
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

		if(tile.data == 'X'){
			let position = tile.pos;

			for (var i=0; i<possileMove[0].length; i++){
				this.moved = false;
				this.alert = false;

				if(possileMove[0][i] == position) {

					console.log(this.mainPuzzle[index]);
					let tempData = this.mainPuzzle[index].data;
					this.mainPuzzle[index].data = this.mainPuzzle[position].data;
					this.mainPuzzle[position].data = tempData;
					this.first = false;
					this.moved = true;
					flag = true;
					break;					
				}
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

	 
