import React from 'react';
import ReactQuill from 'react-quill';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import ListPostComponent from '../ListPost/ListPost';
// import * as sureRealJQ from 'jquery';



class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null
    };
    this.modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ]
    }
  }
  render() {

    const { posts, classes } = this.props;

    if (posts) {
      return (
        <div >
          {/* react Quill Editor */}
            <ReactQuill 
              value={this.state.text}
              modules={this.modules}
              formats={this.formats}
            >
            </ReactQuill>
          {/* button For adding New Post */}
            <Button
              className={classes.newPostBtn}
              onClick={this.newPost}>Submit
            </Button>

          {/* List all the posts till today */}
          <List>
            {
              posts.map((_post, _index) => {
                return (
                  <div key={_index}>
                    <ListPostComponent
                      _post={_post}
                      _index={_index}>
                    </ListPostComponent>
                    <Divider></Divider>
                  </div>
                )
              })
            }
          </List>
        </div>

      );
    } else {
      return (<div></div>);
    }
    
  }

  newPost = () => {
    var postContent = global.sureRealJQ(".ql-editor")[0].innerHTML;
    this.props.updateFireBaseDB(postContent);
  }


}

export default withStyles(styles)(HomePage);