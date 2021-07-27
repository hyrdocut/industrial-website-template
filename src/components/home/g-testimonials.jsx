const Testimonials = (props) => {
 return (
   <>
     <section class="">
       <div class="container">
         <div class="intro">
           <h2 class="text-center">Feedbacks </h2>
           <p class="text-center">
             Our customers love us! Read what they have to say below. Aliquam
             sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet
             vitae.
           </p>
         </div>
         <div class="row people">
           <div class="col-md-6 col-lg-4 item">
             <div class="box">
               <p class="description">
                 Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                 lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                 finibus est.
               </p>
             </div>
             <div class="author">
               <img
                 alt="Hydrocut"
                 class="rounded-circle"
                 src="assets/img/clipboard-image.png"
               />
               <h5 class="name">Heading</h5>
               <p class="title">soem post</p>
             </div>
           </div>
           <div class="col-md-6 col-lg-4 item">
             <div class="box">
               <p class="description">
                 Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                 est, et interdum justo suscipit id.
               </p>
             </div>
             <div class="author">
               <img
                 alt="Hydrocut"
                 class="rounded-circle"
                 src="assets/img/clipboard-image.png"
               />
               <h5 class="name">Heading</h5>
               <p class="title">some post</p>
             </div>
           </div>
           <div class="col-md-6 col-lg-4 item">
             <div class="box">
               <p class="description">
                 Aliquam varius finibus est, et interdum justo suscipit.
                 Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                 in tellus eu.
               </p>
             </div>
             <div class="author">
               <img
                 alt="Hydrocut"
                 class="rounded-circle"
                 src="assets/img/clipboard-image.png"
               />
               <h5 class="name">heading</h5>
               <p class="title">post</p>
             </div>
           </div>
         </div>
       </div>
     </section>
   </>
 );
}
export default Testimonials