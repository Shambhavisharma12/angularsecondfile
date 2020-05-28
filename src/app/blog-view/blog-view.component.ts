import { Component, OnInit, OnDestroy } from '@angular/core';

//importing router
import{ActivatedRoute,Router} from "@angular/router";
import { BlogService } from '../blog.service';
import {BlogHttpService} from "../blog-http.service"
//import {ToastsManager}from "ng2-toastr/ng2-toastr"
import {Location} from "@angular/common"


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {
  
  public currentBlog;
  blogHttpservice: any;

  constructor(private _route: ActivatedRoute, private router: Router,public blogservice:BlogService,public blogHttpService:BlogHttpService,private location:Location/*private toastr:ToastsManager,vcr:ViewContainerRef*/) {
  console.log("blog-view constructor is called");
  
  //this.toastr.setRootViewContainerRef(vcr)
  
}
  ngOnInit(): void {
    console.log("blo-view ngonit called")
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    //this.currentBlog=this.blogHttpservice.getSingleBlogInformation(myBlogId)
    //console.log
     //calling a function to get a blog
     this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data)
        this.currentBlog=data["data"]
      },
      error =>{
        console.log("some error occured")
        console.log(error.errorMessage)
      }
 )
 //console.log(this.currentBlog)
 }



 

  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data)
         alert('Blog deleted successfully')
        //this.toastr.success('blog Deleted successfuly','Success')
        setTimeout(()=>{
        this.router.navigate(['/home'])
        },1000)
      },
  
      error=>{
        console.log("some error occured")
        console.log(error.errorMessage)
       // this.toastr.error("some error occured ", "Error")
        alert("some error msg")
      }
    )
  }
  public goBackToPreviousPage():any{
    this.location.back()
  }
  ngOnDestroy(): void {
    console.log(" blog-view destroy called")}

} 
   



