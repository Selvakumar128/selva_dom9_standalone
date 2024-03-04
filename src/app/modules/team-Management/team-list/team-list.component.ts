import { Component } from '@angular/core';
import { teamMembers } from '../../../../assets/models/endpoint';
import { ApiServiceService } from '../../../shared/services/api-service.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent {
  constructor(private apiService: ApiServiceService) {}
  grid: any = [];
  first: number = 0;
  rows: number = 3;
  p: number = 1;
  getTeamMembers: Subscription = new Subscription();
  whatsapp: any = [{ img: 'assets/images/whatsapp.png' }];
  gridHeader: any = {
    headerimg: 'assets/images/headerLeftBorder.svg',
    header1: 'OUR',
    header2: 'TEAM',
  };

  onPageChange(event: { first: number; rows: number }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  ngOnInit() {
    this.fetchTeamMembers();
  }

  fetchTeamMembers() {
    this.apiService.get(teamMembers.getTeamMembers).subscribe({
      next: (res: any) => {
        console.log('API Response:', res.results);
        // this.grid = res.results;

        // Image and role Static data added for checking responsive
        this.grid = res.results.map((item: any) => ({
          ...item,
          image: 'assets/images/person1.png',
          role: 'Designation',
        }));
      },
      error: (error) => {
        console.error('Error fetching team members:', error);
      },
    });
  }

  // Unsubscribe from subscriptions to prevent memory leaks
  ngOnDestroy(): void {
    this.getTeamMembers.unsubscribe();
  }
}
