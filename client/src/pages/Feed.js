import React from "react";
import { Col, Row } from "../components/Grid";
import chickadee from "../images/black_capped_chickadee.jpg"
import hSparrow from "../images/house_sparrow.jpg"
import wtSparrow from "../images/whiteThroatedSparrow.png"
import peregrineFalcon from "../images/peregrineFalcon.png"
import blueHeron from "../images/blueHeron.png"
import mallard from "../images/mallard2.png"

function Feed() {
  return (
    <Row>
      <Col size="md-12" >

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" id="feed">

            <div className="col">
              <div className="card">
                <img src={chickadee} className="card-img-top" alt="Black-capped Chickadee" />
                <div className="card-body">
                  <h5 className="card-title">Black-capped Chickadee</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">This little chickadee was hanging out in someone’s front yard. He seemed pretty cozy with his winter feathers.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:47 pm</small> <br />
                  <small className="text-muted">Mount Vernon, NY</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={hSparrow} className="card-img-top" alt="House Sparrow" />
                <div className="card-body">
                  <h5 className="card-title">House Sparrow</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">Just a regular old sparrow hanging out off the reservoir track.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:47 pm</small> <br />
                  <small className="text-muted">Central Park Reservoir</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={wtSparrow} className="card-img-top" alt="White-throated Sparrow" />
                <div className="card-body">
                  <h5 className="card-title">White-throated Sparrow</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">This WTS is perched outside my window this evening… wonder what shes thinking about.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:33 pm</small> <br />
                  <small className="text-muted">spotted near Mt Vernon Fire Dept HQ</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={peregrineFalcon} className="card-img-top" alt="Peregrine Falcon" />
                <div className="card-body">
                  <h5 className="card-title">Peregrine Falcon</h5>
                  <small className="text-muted">the_falconer</small>
                  <p className="card-text">Had an amazing hike today with the kids along the trail and saw this gorgeous peregrine.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:26 pm</small> <br />
                  <small className="text-muted">greystone, yonkers</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={blueHeron} className="card-img-top" alt="Great Blue Heron" />
                <div className="card-body">
                  <h5 className="card-title">Great Blue Heron</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">Looked right past this heron before realizing he was sitting there! His cameo is great at dusk</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:24 pm</small> <br />
                  <small className="text-muted">Willson’s Woods Park</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={mallard} className="card-img-top" alt="Mallard" />
                <div className="card-body">
                  <h5 className="card-title">Mallard</h5>
                  <small className="text-muted">the_falconer</small>
                  <p className="card-text">I love looking at the ducks in the park across the street, this one here is a Mallard male (green head) and female</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:24 pm</small> <br />
                  <small className="text-muted">Found in Willson’s Woods Park</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={chickadee} className="card-img-top" alt="Black-capped Chickadee" />
                <div className="card-body">
                  <h5 className="card-title">Black-capped Chickadee</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">This little chickadee was hanging out in someone’s front yard. He seemed pretty cozy with his winter feathers.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:47 pm</small> <br />
                  <small className="text-muted">Mount Vernon, NY</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={hSparrow} className="card-img-top" alt="House Sparrow" />
                <div className="card-body">
                  <h5 className="card-title">House Sparrow</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">Just a regular old sparrow hanging out off the reservoir track.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:47 pm</small> <br />
                  <small className="text-muted">Central Park Reservoir</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={wtSparrow} className="card-img-top" alt="White-throated Sparrow" />
                <div className="card-body">
                  <h5 className="card-title">White-throated Sparrow</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">This WTS is perched outside my window this evening… wonder what shes thinking about.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:33 pm</small> <br />
                  <small className="text-muted">spotted near Mt Vernon Fire Dept HQ</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={peregrineFalcon} className="card-img-top" alt="Peregrine Falcon" />
                <div className="card-body">
                  <h5 className="card-title">Peregrine Falcon</h5>
                  <small className="text-muted">the_falconer</small>
                  <p className="card-text">Had an amazing hike today with the kids along the trail and saw this gorgeous peregrine.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:26 pm</small> <br />
                  <small className="text-muted">greystone, yonkers</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={blueHeron} className="card-img-top" alt="Great Blue Heron" />
                <div className="card-body">
                  <h5 className="card-title">Great Blue Heron</h5>
                  <small className="text-muted">redtail_99</small>
                  <p className="card-text">Looked right past this heron before realizing he was sitting there! His cameo is great at dusk</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:24 pm</small> <br />
                  <small className="text-muted">Willson’s Woods Park</small>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={mallard} className="card-img-top" alt="Mallard" />
                <div className="card-body">
                  <h5 className="card-title">Mallard</h5>
                  <small className="text-muted">the_falconer</small>
                  <p className="card-text">I love looking at the ducks in the park across the street, this one here is a Mallard male (green head) and female</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">1-13-21 • 5:24 pm</small> <br />
                  <small className="text-muted">Found in Willson’s Woods Park</small>
                </div>
              </div>
            </div>
          </div>


      </Col>
    </Row>
  );
}

export default Feed;
