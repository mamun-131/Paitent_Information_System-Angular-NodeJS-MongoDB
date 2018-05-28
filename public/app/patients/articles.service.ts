import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestMethod, Response} from '@angular/http';
@Injectable()
export class ArticlesService {
    public symptomResult: any;
    private _baseURL = 'api/articles';
    constructor(private _http: Http) { }
    create(article: any): Observable<any> {
        return this._http
            .post(this._baseURL, article)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    read(articleId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${articleId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    } 
    articleByCourseID(courseId: any): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${courseId}/viewByCourse`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    articleByStudentID(studentId: any): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${studentId}/viewByStudent`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    
    infoByPatientID(patientId: any): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${patientId}/viewByPatientId`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    update(article: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${article._id}`, article).map((res: Response) => res.json())
            .catch(this.handleError);
    }
    delete(articleId: any): Observable<any> {
        return this._http
            .delete(`${this._baseURL}/${articleId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    list(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    create_alert(alert: any): Observable<any> {
        return this._http
            .post(`api/alert`, alert)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    list_alert(): Observable<any> {
        return this._http
            .get(`api/alert`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    
    create_symptom(symptom: any): Observable<any> {
        return this._http
            .post(`/api/commonSymptom`, symptom)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    get_symptom(): Observable<any> {
        return this._http
            .get(`/api/commonSymptom`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    create_tip(tip: any): Observable<any> {
        return this._http
            .post(`/api/tip`, tip)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    list_tip(): Observable<any> {
        return this._http
            .get(`/api/tips`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    
    private handleError(error: Response) {
        return Observable.throw( JSON.parse(JSON.stringify(error)) || 'Server error');
       
    }
}
