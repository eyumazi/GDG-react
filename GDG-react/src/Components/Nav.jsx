import { Link } from "react-router-dom";
const Nav = () =>
{
   return (
     <>
       <nav>
         <ul>
           <li>
             <Link>Home</Link>
           </li>
           <li>
             <Link>About</Link>
           </li>
           <li>
             <Link>Contact</Link>
           </li>
           <li>
             <Link>UserProfile</Link>
           </li>
         </ul>
       </nav>
     </>
   );
}
export default Nav;