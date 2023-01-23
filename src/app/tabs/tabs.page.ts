import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  handlerMessage = '';
  roleMessage = '';

  constructor(private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController) {}

  async logout() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Confirm & Exit',
          role: 'confirm',
          handler: async () => {
            this.handlerMessage = 'Alert confirmed';
            await this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
    
  }
}
