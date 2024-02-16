import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VtuberService } from 'src/app/vtuber.service';
import { Vtuber } from 'src/app/models/vtuber.model';

@Component({
  selector: 'app-vtuber-new',
  templateUrl: './vtuber-new.page.html',
  styleUrls: ['./vtuber-new.page.scss'],
})
export class VtuberNewPage implements OnInit {
  public vtuber!: Vtuber;

  constructor(
    private Vtuber: VtuberService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.vtuber = new Vtuber();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Vtuber enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/vtubers']);
      }, 2000);
    });
  }

  add() {
    this.Vtuber.saveNewVtuber(this.vtuber).subscribe(() => {
      this.vtuber = new Vtuber();
      this.presentToast();
    });
  }
}
