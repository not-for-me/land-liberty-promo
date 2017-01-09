import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class InsuranceTypeService {

  constructor(private router: Router) { }

  goDetails(typeId: number) {
    this.router.navigate(['insurance/details', {typeId: typeId}]);
  }

}
