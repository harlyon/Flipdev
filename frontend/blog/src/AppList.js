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
                  <a href="/">March 26, 2017</a>
                </div>
                <div className="post-title">
                  <h2><a href={`/${item.id}`}>{article.title}</a></h2>
                </div>
                <div className="post-content">
                  <p>{article.content}</p>
                  <p>Cras eget sem nisi, convallis pharetra tortor. Donec sed felis odio, vitae pharetra lorem. Fusce quis augue arcu, in ultricies enim. Morbi id urna quam, et consectetur nisi. Suspendisse potenti. Donec imperdiet venenatis pharetra. Integer et risus metus. Maecenas et leo tellus, feugiat sodales elit. Sed mi est, commodo ut egestas hendrerit, pulvinar et dui. Vestibulum lacus urna, luctus eu iaculis vel, suscipit quis sapien. Phasellus enim justo, adipiscing sit amet fermentum ut, scelerisque sit amet dolor. In hac habitasse platea dictumst.</p>
                  <div id="attachment_40" style={{width: 590}} className="wp-caption aligncenter">
                  <img src="https://opldemoserver.wpengine.com/clutterless/wp-content/uploads/sites/2/2017/03/phone.jpg" alt="A Post With An With A Cheeky Caption" width={580} height={387} className="size-full wp-image-40" srcSet="https://ayn9m8yjfd-flywheel.netdna-ssl.com/clutterless/wp-content/uploads/sites/2/2017/03/phone.jpg 1600w, https://ayn9m8yjfd-flywheel.netdna-ssl.com/clutterless/wp-content/uploads/sites/2/2017/03/phone-300x200.jpg 300w, https://ayn9m8yjfd-flywheel.netdna-ssl.com/clutterless/wp-content/uploads/sites/2/2017/03/phone-768x512.jpg 768w, https://ayn9m8yjfd-flywheel.netdna-ssl.com/clutterless/wp-content/uploads/sites/2/2017/03/phone-1024x683.jpg 1024w" sizes="(max-width: 580px) 100vw, 580px" />
                  <p className="wp-caption-text">A man walks into a bar… 7 stitches.</p>
                  </div>
                  <p>Morbi et tortor at lorem egestas dictum. Aenean vehicula augue sit amet risus luctus vel lobortis nunc accumsan. Nunc viverra elit ut nisi lobortis eu luctus velit interdum. Donec non nisi lorem. Aliquam vitae mauris odio. Sed fringilla vulputate dui id tincidunt. Duis ut dui id orci viverra consequat. Suspendisse pretium, lacus in interdum interdum, urna turpis rutrum diam, vitae blandit lorem quam ac velit. Morbi ante purus, rutrum vel fringilla id, feugiat ac urna. Cras pulvinar eleifend erat, eu auctor justo aliquet vel. Ut commodo cursus massa, vel blandit neque rhoncus non. Cras enim leo, dignissim at feugiat sit amet, ultrices non ante. Cras tempus elit eu nunc consectetur pretium. Integer sit amet augue erat, vitae semper eros.</p>
                  <p>Aenean venenatis luctus lacus id tristique. Ut gravida luctus commodo. Nulla at lectus tortor. Sed nec suscipit dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis augue in orci ultrices pharetra. Vestibulum ipsum diam, sagittis sed elementum vulputate, suscipit vel sapien. In risus dolor, hendrerit non convallis vel, congue a mauris. Duis tincidunt vehicula tellus in fringilla. Aliquam at turpis nibh. Duis non dolor libero, eu hendrerit est. Fusce lorem ante, molestie sodales eleifend in, hendrerit sed urna. Sed a metus magna, in pharetra diam. Phasellus a eros dolor.</p>
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