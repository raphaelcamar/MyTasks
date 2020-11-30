import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router : Router, private userService : UserService) { }

  private isAuth : boolean = false;

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //FAZER A LOGICA DEPOIS
    return true;
  }
}
