import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import '../App.css';

class AppDetail extends Component {

    constructor(props) {
        super(props);
        this.state= {
          article:{}
        }
        
      }
   
      componentDidMount() {
        const articleid = this.props.match.params.articleid
        axios.get(`http://localhost:8000/api/${articleid}`)
          .then(res => {
            this.setState({ article: res.data });
          })
      }

    render() {
            const { article } = this.state

        return (
            <div>
                 <div className="App">
                 <div className="awesome" style={{border: '1px solid red'}}>
                    <div id="content">
                    <div id="post-11" className="post-11 post type-post status-publish format-standard hentry category-blog">
                <div className="post-date">
                  <Link to="/">Back to Posts</Link>
                  <br />
                  <br />
                </div>
                <div className="post-date">
                  <Moment format="YYYY/MM/DD HH:mm">{article.date}</Moment>
                </div>
                <div className="post-title">
                <h2>{article.title}</h2>
                </div>
                <div className="post-content">
                  <p>{article.content}</p>
                  <div id="attachment_40" style={{width: 590}} className="wp-caption aligncenter">
                  <img src={article.image} alt="A Post With An With A Cheeky Caption" width={580} height={387} className="size-full wp-image-40" sizes="(max-width: 580px) 100vw, 580px" />
                  <p className="wp-caption-text">Photo Caption.</p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        </div> 
        );
    }
}

export default AppDetail;