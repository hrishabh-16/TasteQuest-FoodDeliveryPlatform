import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleGoogleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(email, password);
    if (success) {
      navigate('/');
    }
  };

  const onGoogleSignInSuccess = async (credentialResponse) => {
    const success = await handleGoogleSignIn(credentialResponse);
    if (success) {
      navigate('/');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-register-bg bg-cover bg-center">
      <div className="bg-white p-8 rounded-lg shadow-custom w-full max-w-md">
        <h2 className="text-3xl font-nunito font-bold text-textPrimary mb-6">Register</h2>
        
        <div className="flex justify-center mb-4">
          <img src="/images/register-logo.png" alt="Chef Illustration" className="w-36 h-36" />
        </div>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 border rounded-md text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-opacity-90 transition duration-200"
          >
            Register
          </button>
        </form>
        
        <p className="text-sm text-center text-textSecondary mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-primary font-semibold hover:underline">
            Login
          </a>
        </p>
        
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="px-4 text-sm text-textSecondary">OR</span>
          <hr className="flex-grow border-t" />
        </div>
        
        <div className="flex justify-center">
          <div className="w-full">
            <GoogleLogin
              onSuccess={onGoogleSignInSuccess}
              onError={() => {
                console.log('Login Failed');
              }}
              size="large"
              width="100%"
              text="signin_with"
              shape="rectangular"
              logo_alignment="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

 




// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { register } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Register form submitted');
//       await register(email, password);
//       console.log('Registration successful');
//       toast.success('Registered successfully');
//       navigate('/');
//     } catch (error) {
//       console.error('Registration error in component:', error);
//       toast.error(error.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-register-bg bg-cover bg-center">
//       <div className="bg-white p-8 rounded-lg shadow-custom w-full max-w-md">
//         <h2 className="text-3xl font-nunito font-bold text-textPrimary mb-6">Register</h2>
        
//         {/* Illustration */}
//         <div className="flex justify-center mb-4">
//           <img src="/images/register-logo.png" alt="Chef Illustration" className="w-36 h-36" />
//         </div>
        
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 mb-4 border rounded-md text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 mb-6 border rounded-md text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-opacity-90 transition duration-200"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-sm text-center text-textSecondary mt-4">
//           Already have an account?{' '}
//           <a href="/login" className="text-primary font-semibold hover:underline">
//             Login
//           </a>
//         </p>

//         {/* OR Divider */}
//         <div className="flex items-center my-4">
//           <hr className="flex-grow border-t" />
//           <span className="px-4 text-sm text-textSecondary">OR</span>
//           <hr className="flex-grow border-t" />
//         </div>

//         {/* Social Logins */}
//         <div className="flex flex-col space-y-3">
//           <button className="flex items-center justify-center bg-white border text-textPrimary rounded-md py-3 hover:bg-gray-100 transition">
//             <img src="/images/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2" />
//             Continue with Google
//           </button>
//           <button className="flex items-center justify-center bg-blue-600 text-white rounded-md py-3 hover:bg-blue-700 transition">
//             <img src="/images/facebook-icon.png" alt="Facebook Icon" className="w-5 h-5 mr-2" />
//             Continue with Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
