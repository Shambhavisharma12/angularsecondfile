import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

 public allBlogs=[{
    "blogId":1,
    "lastmodified": "22/5/12",
    "creted": "2017-10-20T12:20:47.656Z",
    "tags":[],
    "author":"shambhavi",
    "catgory":"comedy",
    "ispublished":true,
    "view":0,
    "bodyHtml":"this is body blog",
    "description":"this is blog one descriptoin",
    "title":"blog1"
  },{
    "blogId":2,
    "lastmodified": "22/5/14",
    "creted": "15/12/12",
    "tags":[],
    "author":"shambhavi",
    "catogery":"comedy",
    "ispublished":true,
    "view":0,
    "bodyHtml":"<h1>this is big text</h1><p>small text</p>",
    "description":"this is blog one descriptoin",
    "title":"blog2"
  },
  {
    "blogId":3,
    "lastmodified": "20/9/20",
    "creted": "15/12/12",
    "author":"shambhavi",
    "category":"comedy",
    "ispublished":true,
    "tags":[],
    "view":0,
    "bodyHtml":"welcome",
    "description":"this is blog one descriptoin",
    "title":"blog3"
  
  }
]

public currentBlog;




constructor() { 
  console.log("service constructer is called")
}
public getAllBlogs():any {
  
  return this.allBlogs
}


public getSingleBlogInformation(currentBlogId):any{
  for (let blog of this.allBlogs){
    if(blog.blogId==currentBlogId){
      this.currentBlog=blog
    }
  }
  console.log(this.currentBlog)
  return this.currentBlog
}
 
}
