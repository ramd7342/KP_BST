import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HireEmployeeComponent } from '../hire-employee/hire-employee.component';
import { AuthGuard } from 'src/app/auth.guard';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

export const MainLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'hireEmployee', component: HireEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'viewemployees', component: EmployeeListComponent, canActivate: [AuthGuard] }
];
