// import React from 'react'
// import { Route, Redirect, Router } from 'react-router';

// const ProtectedRoute = ({component: Comp, loggedIn, path, ...rest}) => {
//     return (
//         <Router>

//         <Route 
//         path={path}
//         {...rest}
//         render ={(props) =>{
//             return loggedIn ? 
//             (<Comp {...props} />) : 
//             (<Redirect to ={{
//                 pathname:"/",
//                 state:{prevLocation:path,
//                     error:"You need to login first",
//                 },
//             }}
//             />
//             );
//         }}
//         />
//         </Router>
//     );
// };

// export default ProtectedRoute
