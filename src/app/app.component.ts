import { Component, ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[];
  itemsTxt: string[] = ["1 Mois", "2 Mois", "3 Mois", "6 Mois", "9 Mois", "1 Année", "1 Année et demi", "2 Ans", "2 Ans et demi", "3 Ans", "3 Ans et demi", "4 Ans"];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER

  ngOnInit(){
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    console.log("idToLandOn: ", this.idToLandOn)
    const colors = ['#FF0000', '#000000']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 2],
      text: this.itemsTxt[value],
      id: value,
      textFillStyle: 'white',
      textFontSize: '16'
    }))
  }
  reset() {
    this.wheel.reset()
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
  }
  before() {
    //alert('Cliquer OK pour tourner la roue')
  }

  async spin(prize) {
    this.idToLandOn = prize
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    //console.log(this.itemsTxt[this.wheel.idToLandOn])
    //alert('You have been bamboozled')
  }
}
