import useBlogPosts from "../hooks/useBlogPosts";
import useNavigation from "../hooks/useNavigation";

function ViewPostPage() {
  const { posts, isError, isLoading } = useBlogPosts();
  const { goToHome } = useNavigation();

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        <h2>Post Title</h2>
        <p>Content</p>
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <div className="post-actions">
              <button className="view-button">View post</button>
            </div>
          </div>
        ))}
        {isError && <h1>Request failed</h1>}
        {isLoading && <h1>Loading ....</h1>}
      </div>

      <button onClick={goToHome}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;