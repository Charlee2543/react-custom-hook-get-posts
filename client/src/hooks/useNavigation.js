import { useNavigate } from "react-router-dom";

function useNavigation() {
  const navigate = useNavigate();

  const goToViewPost = (postId) => {
    navigate(`/post/view/${postId}`);
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToCreatePost = () => {
    navigate("/post/create");
  };

  return { goToViewPost, goToHome, goToCreatePost };
}

export default useNavigation;