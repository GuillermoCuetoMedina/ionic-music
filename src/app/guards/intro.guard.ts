import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router){
    this.storage.create();
  }

  async canActivate(){
    const intro = await this.storage.get('intro');
    if (intro) {
      return true;
    }else {
      this.router.navigateByUrl("/intro");
    }
  }
  
}
