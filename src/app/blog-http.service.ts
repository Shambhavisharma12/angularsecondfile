import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs
  public currentBlog
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs'
  public authToken='ODgxYWUxMjFlNWU4YWVjNWVkZDk1Y2EyNWZjYjFiYjFlMGZiMjQ3ZmEzNmVjZWQzNTg0YTU0NDA0MjJlYzcxYzdlNzk5NDQ4OWI1MzBiODcyOGJmNThmZjY1NTBmYjcyYjdmMjlmY2I2NjBhMDVkOGU4OTgyMjlkY2ZkYzhlYjk4ZA==';
  
  constructor(private _http:HttpClient) { 
    console.log("blog-http servic was called")
  }
  
  /*private handleError(err: HttpErrorResponse){
    console.log("handle error http calls")
    console.log(err.message)
    return observable.throw(err.message)
  }*/

  
  public getAllBlogs():any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken)
    console.log(myResponse)
    return myResponse
  }
  public getSingleBlogInformation(currentBlogId):any{
    let myResponse=this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken)
    return myResponse
  }

  public createBlog(blogData):any{
    let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken,blogData)
    return myResponse
  }
  public deleteBlog(blogId):any{
    let data={}
    let myResponse=this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken,data)
    return myResponse
  }
  public editBlog(blogId,blogData):any{
    let myResponse=this._http.put(this.baseUrl+'/'+blogId+'?authToken='+this.authToken,blogData)
    return myResponse
  }
}

