import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiUrl = "http://dec01.cloudapp.net/onboarding/apiOffice";
// const apiUrl = "http://10.12.10.27:3001/apiOffice";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    login(parm: any) {
        return this.http.post(apiUrl + '/login', parm);
    }    

    getForms(parm: any) {
        return this.http.post(apiUrl + '/getForms', parm);
    }

    getForm(parm: any){
        return this.http.post(apiUrl + '/getForm', parm);
    }

    editForm(parm: any){
        return this.http.post(apiUrl + '/edit_form', parm);
    }

    confirmForm(parm: any){
        return this.http.post(apiUrl + '/confirm_form', parm);
    }

    search(parm: any) {
        return this.http.post(apiUrl + '/search', parm);
    }

    logoff() {
        return this.http.get(apiUrl + '/logoff');
    }

}