import AboutBuilding from "../../assets/img/about-building.jpeg"
const AboutHydrocut = (props) => {
 return (
   <div class="about-us">
     <section class="container">
       <div
         class="gray-background row d-flex justify-content-center align-items-center flex-row-reverse"
         id="about-hydrocut"
       >
         <div class="col-md-6 d-md-flex flex-column justify-content-center">
           <div>
             <h1 class="text-center text-md-start">About Hydrocut</h1>
             <h6 class="text-center text-md-start">
               Building up a good company is like raising up an extraordinary
               kid, the pain and perseverance it takes to inculcate values in
               the kid to make them tough and be able to withstand every
               situation. Your machines are those values which makes your
               company good. Keep believing your child and always fuel up their
               values.
               <br />
               We are known in the industry as Quality MWFs and Lubes
               Manufacturers.
               <br />
             </h6>
             <p>
               We have a wide range of products which guarantees quality and
               availability.
             </p>
             <button class="btn btn-primary" type="button">
               Explore Products
             </button>
           </div>
         </div>
         <div class="col-md-6">
           <img
             alt="Hydrocut"
             class="img-fluid"
             src={AboutBuilding}
           />
         </div>
       </div>
     </section>
   </div>
 );
}
export default AboutHydrocut