import Card from "react-bootstrap/Card";
export default function Opinions() {
  return (
    <>
      <div className="opinoions-main mb-4">
        <div className="container">
          <h2 className="mt-5 text-center fw-bolder">Our Clients</h2>
          <div className="row">
            <div className="col-md-4">
              <Card className="my-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Tim.D junior</Card.Title>
                  <Card.Text>
                    one of the most exciting experiament I have ever had thanks
                    to the team and the stoke holders
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="my-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Anna Holmes</Card.Title>
                  <Card.Text>
                    I have to admit I always have some suspecios with the online shopping but now I can say I am in 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card className="my-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Dr.Langhdon</Card.Title>
                  <Card.Text>
                    Now I can continue with my dedictive work with some trust that I will find everything, everytime 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            
            <div className="col-md-4">
              <Card className="my-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Achiro Aoda</Card.Title>
                  <Card.Text>
                   Nomore worroies about one piece it will be ended within one year, with them 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>



            <div className="col-md-4">
              <Card className="my-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Elon Mask</Card.Title>
                  <Card.Text>
                  Now I could waste my money on something worth it , X really has piss me off 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>


            
            <div className="col-md-4">
              <Card className="my-3">
                <Card.Body>
                  <Card.Title className="fw-bold">Dr.Langhdon</Card.Title>
                  <Card.Text>
                    Now I can continue with my dedictive work with some trust that I will find everything, everytime 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
