import './Css/grid.css';
export default function Grid() {
  return (
    <>
      <div className="main-grid bg-light">
        <div className="container my-5">
          <div className="row">
          <h2 className='text-center fw-bold  my-3'>Welcome..</h2>
         <div className='col-md-6 col-lg-6  my-5'>
          <h3 className=' fw-bold fs-2 mt-5'>Discover More and More</h3>
          <p>We are an online store to have every you can even 
          imagine just ask and you filnd between your hands </p>
          <a className='btn btn-outline-dark w-50'> Learn More</a>
         </div>
         <div className='col-md-6 my-5 col-lg-6 col-sm-12' id='border-generator'>
          <img src="https://i.pinimg.com/736x/d3/d2/b9/d3d2b932d5af849ce33ce455911e249e.jpg" className='w-100'  alt='..'></img>
         </div>
          </div>
        </div>
      </div>
    </>
  );
}
