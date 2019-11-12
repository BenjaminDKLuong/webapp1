import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth=false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authChange.subscribe(result=>{
      this.isAuth = result;
    })
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
}
