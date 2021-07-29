const Navigation = (props) => {
 return (
   <>
     <nav class="navbar  navbar-expand-md bg-danger navigation-clean">
       <div class="container">
         <a class="navbar-brand" href="#">
           Hydrocut
         </a>
         <button
           data-bs-toggle="collapse"
           class="navbar-toggler"
           data-bs-target="#navcol-1"
         >
           <span class="visually-hidden">Toggle navigation</span>
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navcol-1">
           <ul class="navbar-nav ms-auto">
             <li class="nav-item">
               <a class="nav-link active" href="#">
                 About Us
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">
                 Our Products
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">
                 Features
               </a>
             </li>
             <li class="nav-item dropdown">
               <a
                 class="dropdown-toggle nav-link"
                 aria-expanded="false"
                 data-bs-toggle="dropdown"
                 href="#"
               >
                 Contact Us{" "}
               </a>
               <div class="dropdown-menu">
                 <a class="dropdown-item" href="#">
                   First Item
                 </a>
                 <a class="dropdown-item" href="#">
                   Second Item
                 </a>
                 <a class="dropdown-item" href="#">
                   Third Item
                 </a>
               </div>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   </>
 );
}
export default Navigation