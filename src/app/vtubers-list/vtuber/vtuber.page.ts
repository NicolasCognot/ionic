import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { VtuberService } from 'src/app/vtuber.service';
import { Vtuber } from 'src/app/models/vtuber.model';

@Component({
  selector: 'app-vtuber',
  templateUrl: './vtuber.page.html',
  styleUrls: ['./vtuber.page.scss'],
})
export class VtuberPage implements OnInit {
  modif: boolean = false;
  vtuber!: Vtuber;

  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Vtuber: VtuberService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Vtuber.get(id).subscribe((value: any) => {
      this.vtuber = value;
    });
  }

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header : 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Configurer',
            handler: () => {this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Vtuber.update(this.vtuber).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Vtuber.delete(id);
    this.router.navigate(['/vtubers']);
  }
}
