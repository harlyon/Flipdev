import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class AppList extends Component {

   constructor(props) {
     super(props);
     this.state= {
       articles:[]
     }
     
   }

   componentDidMount() {
     axios.get('http://localhost:8000/api/')
       .then(res => {
         this.setState({ articles: res.data });
         console.log(res.data)
       })
   }
   

  render() {
    return (
      <div className="App">
         <div className="awesome" style={{border: '1px solid red'}}>
            <div id="content">
          {
            this.state.articles.map((article, item) =>{
              return(
                <div id="post-11" key={item} className="post-11 post type-post status-publish format-standard hentry category-blog">
                <div className="post-date">
                  <a href="/">{article.date}</a>
                </div>
                <div className="post-title">
                  <h2><a href={`/${item.id}`}>{article.title}</a></h2>
                </div>
                <div id="attachment_40" style={{width: 590}} className="wp-caption aligncenter">
                  <img src={article.image} alt="A Post With An With A Cheeky Caption" width={580} height={387} className="size-full wp-image-40" sizes="(max-width: 580px) 100vw, 580px" />
                  <p className="wp-caption-text">Caption Image.</p>
                  </div>
                <div className="post-content">
                  <p>{article.content}</p>
                  
                  </div>
              </div>  
              )
            })
          }
         
          </div>
          
        </div>
      </div>
    );
  }
}

export default AppList;