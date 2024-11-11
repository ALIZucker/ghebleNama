import {Component, ElementRef, OnInit, viewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-app',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login-app.component.html',
  styleUrl: './login-app.component.css'
})
export class LoginAppComponent implements OnInit {

  myformGroup!: FormGroup;

  ngOnInit(): void {
    this.myformGroup = new FormGroup({
      'nameUser': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'passUser': new FormControl('', [Validators.required, Validators.minLength(10)])

    })
  }


  saveinLocall($event: MouseEvent) {
    const formname = this.myformGroup.get('nameUser')?.value;
    const formpass = this.myformGroup.get('passUser')?.value;
    if (formname == 'admin' && formpass == 'admin') {
      localStorage.setItem("isLogin", "ok");
    } else {
      localStorage.setItem("isLogin", "no");
    }
  }

}
