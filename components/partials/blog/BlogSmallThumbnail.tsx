import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {
  getFeaturedPost,
  getPostCategories,
  getPosts,
  getRecentPosts
} from '../../../store/post/action';
import PostSmallThumbnail from '../../elements/post/PostSmallThumbnail';
import Sidebar from './modules/Sidebar';

class BlogSidebar extends PureComponent<{
  layout: string;
  featuredPost: any[];
  categories: any[];
  recentPost: any[];
  posts: any[];
  dispatch?(val: any): void;
}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPosts());
    this.props.dispatch(getRecentPosts());
    this.props.dispatch(getFeaturedPost());
    this.props.dispatch(getPostCategories());
  }

  render() {
    const {layout, categories, recentPost} = this.props;
    let gridPosts;
    if (this.props) {
      gridPosts = this.props.posts;
    }
    return (
      <div className={layout === 'left' ? 'ps-blog--sidebar reverse' : 'ps-blog--sidebar'}>
        <div className="ps-blog__left">
          <div className="row">
            {gridPosts &&
              gridPosts.map(post => {
                return <PostSmallThumbnail data={post} key={post.id} />;
              })}
          </div>
          <div className="ps-pagination">
            <ul className="pagination">
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  Next Page
                  <i className="icon-chevron-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ps-blog__right">
          <Sidebar categories={categories || []} recentPosts={recentPost || []} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.post;
};
export default connect(mapStateToProps)(BlogSidebar);
