import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Account} from "../model/Account";

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  public createAccount(account: Account, roleId:number) {
    return this.http.post(environment.BACKEND_URL + '/account/', account,{params: {roleId}});
  }
}
