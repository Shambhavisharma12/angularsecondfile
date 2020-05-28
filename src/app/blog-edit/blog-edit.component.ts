import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {BlogHttpService} from "../blog-http.service"
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from "@angular/common"
//delete
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories=["comdey","drama","action","technology"]
  

  constructor(private _route:ActivatedRoute,private router:Router,private blogHttpService:BlogHttpService,private location:Location) { }

  ngOnInit(): void {
    let myBlogId=this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        console.log(data)
        this.currentBlog=data['data']
        console.log("current blog is")
        console.log(this.currentBlog)

      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage)

      }
    )
  }
  public editThisBlog(): any{
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data=>{
        console.log(data)
        alert("blog editied successfully")
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId])
        },1000)
      },
      error=>{
        console.log("some error occured")
        console.log(error.errorMessage)
        //this.toastr.error("some error occured ", "Error")
        alert("some error msg")
      }
      
    )
  }
}
