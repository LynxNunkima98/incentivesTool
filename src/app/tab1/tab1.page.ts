import { Component } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  sc = {
    name: "Ailawng SC",
    population: 2311,
    thirtyAbove: 1562,
    isActive: true,
    isAyush: true,
  };

  data: any;
  firstCalculation: any;
  secondCalculation: any;
  thirdCalculation: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl("/", { replaceUrl: true });
  }

  async save() { 
    this.getData();
    console.log('Get Data: ', this.data);
    this.firstCal();
    console.log('First Data: ', this.firstCalculation);
    this.secondCal();
    console.log('Second Data: ', this.secondCalculation);
    this.thirdCal();
    console.log('Final Data(Amount): ', this.thirdCalculation);

    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
  }
  

  getData() {
    this.data = {
      month: (document.getElementById("month") as HTMLInputElement).value,
      year: (document.getElementById("year") as HTMLInputElement).value,
      a1: +(document.getElementById("1a") as HTMLInputElement).value,
      b1: +(document.getElementById("1b") as HTMLInputElement).value,
      a2: +(document.getElementById("2a") as HTMLInputElement).value,
      b2: +(document.getElementById("2b") as HTMLInputElement).value,
      a3: +(document.getElementById("3a") as HTMLInputElement).value,
      b3: +(document.getElementById("3b") as HTMLInputElement).value,
      a4: +(document.getElementById("4a") as HTMLInputElement).value,
      a5: +(document.getElementById("5a") as HTMLInputElement).value,
      b5: +(document.getElementById("5b") as HTMLInputElement).value,
      a6: +(document.getElementById("6a") as HTMLInputElement).value,
      b6: +(document.getElementById("6b") as HTMLInputElement).value,
      a7: +(document.getElementById("7a") as HTMLInputElement).value,
      b7: +(document.getElementById("7b") as HTMLInputElement).value,
      a8: +(document.getElementById("8a") as HTMLInputElement).value,
      a9: +(document.getElementById("9a") as HTMLInputElement).value,
      a10: +(document.getElementById("10a") as HTMLInputElement).value,
      b10: +(document.getElementById("10b") as HTMLInputElement).value,
      a11: +(document.getElementById("11a") as HTMLInputElement).value,
      b11: +(document.getElementById("11b") as HTMLInputElement).value,
      a12: +(document.getElementById("12a") as HTMLInputElement).value,
      b12: +(document.getElementById("12b") as HTMLInputElement).value
    };
  }

  firstCal() {
    this.firstCalculation = {
      date: this.data.month + this.data.year,
      ind1: (this.data.a1 / this.data.b1) * 100,
      ind2: (this.data.a2 / this.data.b2) * 100,
      ind3: (this.data.a3 / this.data.b3) * 100,
      ind4: (this.data.a4 / +this.sc.population) * 100,
      ind5: (this.data.a5 / this.data.b5) * 100,
      ind6: (this.data.a6 / this.data.b6) * 100,
      ind7: (this.data.a7 / this.data.b7) * 100,
      ind8: (this.data.a8 / 25) * 100,
      ind9: (this.data.a9 / 10) * 100,
      ind10: (this.data.a10 / this.data.b10) * 100,
      ind11: (this.data.a11 / this.data.b11) * 100,
      ind12: (this.data.a12 / this.data.b12) * 100
    };
  }

  secondCal() {
    this.secondCalculation = {
      date: this.firstCalculation.date,
      ind1: this.firstCalculation.ind1 < 80 ? (this.firstCalculation.ind1/80)*100 : 100,
      ind2: this.firstCalculation.ind2 < 80 ? (this.firstCalculation.ind2/80)*100 : 100,
      ind3: this.firstCalculation.ind3 < 100 ? (this.firstCalculation.ind3/100)*100 : 100,
      ind4: this.firstCalculation.ind4 < 6 ? (this.firstCalculation.ind4/6)*100 : 100,
      ind5: this.firstCalculation.ind5 < 3 ? (this.firstCalculation.ind5/3)*100 : 100,
      ind6: this.firstCalculation.ind6 < 3 ? (this.firstCalculation.ind6/3)*100 : 100,
      ind7: this.firstCalculation.ind7 < 3 ? (this.firstCalculation.ind7/3)*100 : 100,
      ind8: this.firstCalculation.ind8,
      ind9: this.firstCalculation.ind9,
      ind10: this.firstCalculation.ind10 < 100 ? (this.firstCalculation.ind10/100)*100 : 100,
      ind11: this.firstCalculation.ind11 < 100 ? (this.firstCalculation.ind11/100)*100 : 100,
      ind12: this.firstCalculation.ind12 < 100 ? (this.firstCalculation.ind12/100)*100 : 100
    };
  }

  thirdCal() {
    this.thirdCalculation = {
      date: this.secondCalculation.date,
      amnt1: (this.secondCalculation.ind1/100)*500,
      amnt2: (this.secondCalculation.ind2/100)*500,
      amnt3: (this.secondCalculation.ind3/100)*1000,
      amnt4: (this.secondCalculation.ind4/100)*3000,
      amnt5: (this.secondCalculation.ind5/100)*1000,
      amnt6: (this.secondCalculation.ind6/100)*1000,
      amnt7: (this.secondCalculation.ind7/100)*1000,
      amnt8: (this.secondCalculation.ind8/100)*1500,
      amnt9: (this.secondCalculation.ind9/100)*2000,
      amnt10: (this.secondCalculation.ind10/100)*2000,
      amnt11: (this.secondCalculation.ind11/100)*1000,
      amnt12: (this.secondCalculation.ind12/100)*500
    }
  }
}
