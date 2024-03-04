import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path:'',
        pathMatch:"full",
        loadComponent :()=>
          import('./modules/home-page/home-page.component')
            .then(m => m.HomePageComponent)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./modules/about/about-us/about-us.component')
            .then(m => m.AboutUsComponent),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./modules/team-Management/team-list/team-list.component')
            .then(m => m.TeamListComponent),
      },
      {
        path: 'join-our-team',
        loadComponent: () =>
          import('./modules/about/join-our-team/join-our-team.component')
            .then(m => m.JoinOurTeamComponent),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./modules/about/contact-page/contact-page.component')
            .then(m => m.ContactPageComponent),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./modules/project-management/projects-page/projects-page.component')
            .then(m => m.ProjectsPageComponent),
      },
      {
        path: 'project-details',
        loadComponent: () =>
          import('./modules/project-management/project-details/project-details.component')
            .then(m => m.ProjectDetailsComponent),
      },
      {
        path:'partners-program',
        loadComponent:() =>
          import('./modules/partners-program/partners-program.component')
            .then(m => m.PartnersProgramComponent)
      },
      {
        path:'list-your-property',
        loadComponent : () =>
          import('./modules/list-your-property/list-your-property.component')
            .then( m => m.ListYourPropertyComponent)
      },
      {
        path:'property-list',
        loadComponent : () =>
          import('./modules/property-management/property-listing-page/property-listing-page.component')
            .then( m => m.PropertyListingPageComponent)
      },
      {
        path:'property-details',
        loadComponent : () =>
          import('./modules/property-management/property-detail-page/property-detail-page.component')
            .then( m => m.PropertyDetailPageComponent)
      },
      {
        path:'terms-and-conditions',
        loadComponent:()=>
          import('./modules/terms-and-conditions/terms-and-conditions.component')
            .then( m => m.TermsAndConditionsComponent)
      }

];
