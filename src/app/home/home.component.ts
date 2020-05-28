import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs=[]

  constructor(public blogHttpservice:BlogHttpService) { 
    console.log("home component constructor called")
  }

ngOnInit(): void {
  console.log("Home oninit constructor called")
 // this.allBlogs=this.blogHttpservice.getAllBlogs()


  this.allBlogs=this.blogHttpservice.getAllBlogs().subscribe(
    data =>{
      console.log("logging data")
      console.log(data)
      this.allBlogs=data["data"]
    },
    error =>{
      console.log("some error occured")
      console.log(error.errorMessage);
      
    }
    
  )
 // console.log(this.allBlogs)
  
}

ngOnDestroy(){
  console.log("ondestroy constructor called")

}

}