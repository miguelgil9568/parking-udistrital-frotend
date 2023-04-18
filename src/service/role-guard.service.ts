import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: LoginService, public router: Router, public jwtHelper: JwtHelperService) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log('  >>> On RoleGuardService');
    // Check if user is authenticated
    if (this.auth.isAuthenticated) {
      console.log('  >>> On isAuthenticated');
      // Get roles list needed to access route
        const rolesNeeded = route.data['roles'] as Array<string>;
      console.dir(rolesNeeded);
      // Check if needed roles to access route
      if (rolesNeeded != null) {
        // get token from local storage
        const token = sessionStorage.getItem('token');
        if (token) {
          // get roles of user on token provided by server
          const rolesAssociated = this.getRolesUser(token);
          // check if user have roles to check
          if (rolesAssociated != null && rolesAssociated.length > 0) {
            let i = 0;
            for (i = 0; i < rolesNeeded.length; i++) {
              const rolNeeded = rolesNeeded[i];
              //console.log(' >>>>>>>>>> Role Needed:  ' + rolNeeded);
              let j = 0;
              for (j = 0; j < rolesAssociated.length; j++) {
                const rolAssociated = rolesAssociated[j];
                //console.log(' >>>>>>>>>> Role Associated:  ' + rolAssociated);
                if (rolNeeded === rolAssociated) {
                  //console.log(' >>>>>>>>>> Have a role authorized');
                  return true;
                }
              }
            }
            console.log(' xxxxxxxxx no one role authorized:  ');
            // this.router.navigate(['/app/extra/forbidden']);
            return false;
          } else {
            return false;
          }
        } else {
          this.router.navigate(['/login']);
          return false;
        }

      } else {
        return true;
      }
    } else {
      return false;
    }
  }



  checkUserRole(roleToCheck: String): boolean {

    console.log('  >>>>>>>>>> ROL A CHECKEAR   '+roleToCheck);
    const token = sessionStorage.getItem('token');
    if (token) {
      // get roles of user on token provided by server
      const rolesAssociated = this.getRolesUser(token);
      // check if user have roles to check
      if (rolesAssociated != null && rolesAssociated.length > 0) {
        //console.log(' >>>>>>>>>> Role to Check:  ' + roleToCheck);
        let j = 0;
        for (j = 0; j < rolesAssociated.length; j++) {
          const rolAssociated = rolesAssociated[j];
          console.log(' >>>>>>>>>> Role Associated:  ' + rolAssociated);
          if (roleToCheck === rolAssociated) {
            //console.log(' >>>>>>>>>> Have role Check');
            return true;
          }
        }
        console.log(' xxxxxxxxx no one role authorized:  ');
        return false;
      } else {
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  /**
   * Función encargada de deocodificar el Token JWT y obtener la lista de los códigos pertenecientes
   * a los roles que tiene asignados el usuario loggeado en el sistema
   * @param authToken
   */
  private getRolesUser(authToken): Array<string> {

    console.log('authToken ' + authToken);
    const tokenDecode = this.jwtHelper.decodeToken(authToken).scopes;
    let rolesArraySplit = new Array();
    console.log('tokenDecode ' + tokenDecode);
    rolesArraySplit = tokenDecode.split(',');
    return rolesArraySplit;
  }

  /**
   * Función para obtener el usuario actual en la plataforma
   */
  getCurrentUser(): string {
    const token = sessionStorage.getItem('token');
    if (token) {
      return this.jwtHelper.decodeToken(token).sub;
    } else {
      return "NO_USER";
    }
  }
}
