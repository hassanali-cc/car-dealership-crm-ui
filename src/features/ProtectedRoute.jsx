import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const { userInfo: { id }} = useSelector((state) => state.user)
    if (!id) return <Navigate to="/" replace />;

    return <Outlet />;
};

export default ProtectedRoute;
