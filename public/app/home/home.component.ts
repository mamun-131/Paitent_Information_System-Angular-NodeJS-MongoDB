import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
    selector: 'home',
    templateUrl: './app/home/home.template.html'
})
export class HomeComponent {
    user: any;
    role: any;
    constructor(private _authenticationService:
        AuthenticationService) {
        this.user = _authenticationService.user;
       
    }

    isPatient() {
        this.role = this.user.role;

        if(this.role=="Patient"){
            return true;
        }
        else{
            return false;
        }
    }

    isNurse() {
        this.role = this.user.role;

        if(this.role=="Nurse"){
            return true;
        }
        else{
            return false;
        }
    }
}