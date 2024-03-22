import "./Css/contact.css";
export default function Contact() {
  return (
    <>
     <div className="contact-grid bg-dark">
        <div className="container text-light  my-5">
          <div className="row">
          <h2 className='text-center fw-bold  my-3'>Welcome..</h2>
         <div className='col-md-6 col-lg-6  my-5'>
          <h3 className=' fw-bold fs-2 mt-5'>How TO Pay </h3>
          <p>You have many way to pay you <ul>
            <li>Credit Cards</li>
            <li>Debit Cards</li>
            <li>Wallet Cards</li>
            <li>payBal</li>
            <li>Cash</li>
          </ul>
          </p>
          
         </div>
         <div className='col-md-6 my-5 col-lg-6 col-sm-12' id='border-generator'>
          <img src="https://i.pinimg.com/236x/35/f9/c4/35f9c43e08c7910869550c5936df9ad5.jpg"   alt='..'></img>
         </div>
          </div>
        </div>
      </div>
    </>
  );
}
