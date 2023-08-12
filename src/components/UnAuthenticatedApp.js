import { useAuth } from './UseAuth';
import '../styles/unauth.css';

function UnAuthenticatedApp() {
    const { login } = useAuth();

    return (
        <>
            <h2>Log in to join a chat room!</h2>
            <div>
                <button onClick={login} className="login">
                    Login with Google
                </button>
            </div>
        </>
    );
}

export { UnAuthenticatedApp };