import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FireserviceService } from '../fireservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
 
})
export class LoginPage implements OnInit {
  public email:any;
  public password:any;



  constructor(
    public router:Router,
    public fireService:FireserviceService,
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }


  login(){
    this.fireService.loginWithEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
          this.navCtrl.navigateRoot("TabInicioPage");
          alert('Welcome '+ res['name']);
      

        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }


  signup(){
    this.router.navigateByUrl('signup');
  }
}