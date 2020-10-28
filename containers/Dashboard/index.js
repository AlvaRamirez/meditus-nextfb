import Container from './styles';
import { useProtected } from 'lib/useProtected';

const Dashboard = () => {

    //Para proteger una ruta
    const auth = useProtected();
    if (!auth.user) return null;

    return (
        <Container>
            <h1>Dashboard</h1>
            <h2>{auth.user.email}</h2>
        </Container>
    )
}

export default Dashboard