import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';

@Injectable()
export class ActivateGuardService implements CanActivate {

  constructor() { }
  canActivate() {
    console.log('canActivate en ActivateGuardService invocado');
    return false;
  }
}
