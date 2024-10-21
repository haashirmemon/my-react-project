import { useState } from "react";
 import { createUserWithEmailAndPassword, } from "firebase/auth";
  
     import { useNavigate } from "react-router";
// import Button from "../../components/button";
import { auth } from "./firebase";


function Signupform() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setusername] = useState("");
    const [loading, setLoading] = useState(false);
    const goToHomePage = () => navigate("/");
  
    const handleSignUp = async () => {
      try {
        setLoading(true);
        console.log(email, password);
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log("user==>", user);
        navigate("/")
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
      return (
        <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ margin: '5px 0', fontWeight: 'bold' }}>Sign Up</h1>
      
        <input
          style={{
            width: '100%',
            maxWidth: '50%',
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
          }}
          placeholder="Username"
          value={username}
          type="text"
          onChange={(e) => setusername(e.target.value)}
          required
        />
      
        <input
          style={{
            width: '100%',
            maxWidth: '50%',
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
          }}
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      
        <input
          style={{
            width: '100%',
            maxWidth: '50%',
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '6px',
          }}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      
        <button
          onClick={handleSignUp}
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#4CAF50',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: '20px',
          }}
        >
          {loading ? 'Loading...' : 'Signup'}
        </button>
      </div>
      
      );
    }
    

export default Signupform