import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

import { PostList } from './components/PostList';

import './App.scss';

const getUserById = (usersArr, userId) => {
  return usersArr.find(user => user.id === userId);
};

const getCommnetsByPostId = (commentsArr, postId) => {
  return commentsArr.filter(comment => comment.postId === postId);
};

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(usersFromServer, post.userId),
  comments: getCommnetsByPostId(commentsFromServer, post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
