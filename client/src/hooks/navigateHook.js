import { useNavigate } from 'react-router-dom';
const navigateHook = () => {
   const navigate = useNavigate();
   const goHome = () => navigate('/');
   const goView = (numberId) => navigate(`/post/view/${numberId}`);
   return { goHome, goView };
};
export default navigateHook;
