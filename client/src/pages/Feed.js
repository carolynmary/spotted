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

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" id="feed">

          <div class="col">
            <div class="card">
              <img src={chickadee} class="card-img-top" alt="Black-capped Chickadee" />
              <div class="card-body">
                <h5 class="card-title">Black-capped Chickadee</h5>
                <small class="text-muted">redtail_99</small>
                <p class="card-text">This little chickadee was hanging out in someone’s front yard. He seemed pretty cozy with his winter feathers.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">1-13-21 • 5:47 pm</small> <br/>
                <small class="text-muted">Mount Vernon, NY</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={hSparrow} class="card-img-top" alt="House Sparrow" />
              <div class="card-body">
                <h5 class="card-title">House Sparrow</h5>
                <small class="text-muted">redtail_99</small>
                <p class="card-text">Just a regular old sparrow hanging out in off the reservoir track.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">1-13-21 • 5:47 pm</small> <br/>
                <small class="text-muted">Central Park Reservoir</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={wtSparrow} class="card-img-top" alt="White-throated Sparrow" />
              <div class="card-body">
                <h5 class="card-title">White-throated Sparrow</h5>
                <small class="text-muted">redtail_99</small>
                <p class="card-text">This WTS is perched outside my window this evening… wonder what shes thinking about.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">1-13-21 • 5:33 pm</small> <br/>
                <small class="text-muted">spotted near Mt Vernon Fire Dept HQ</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={peregrineFalcon} class="card-img-top" alt="Peregrine Falcon" />
              <div class="card-body">
                <h5 class="card-title">Peregrine Falcon</h5>
                <small class="text-muted">the_falconer</small>
                <p class="card-text">Had an amazing hike today with the kids along the trail and saw this gorgeous peregrine.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">1-13-21 • 5:26 pm</small> <br/>
                <small class="text-muted">greystone, yonkers</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={blueHeron} class="card-img-top" alt="Great Blue Heron" />
              <div class="card-body">
                <h5 class="card-title">Great Blue Heron</h5>
                <small class="text-muted">redtail_99</small>
                <p class="card-text">Looked right past this heron before realizing he was sitting there! His cameo is great at dusk</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">1-13-21 • 5:24 pm</small> <br/>
                <small class="text-muted">Willson’s Woods Park</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={mallard} class="card-img-top" alt="Mallard" />
              <div class="card-body">
                <h5 class="card-title">Mallard</h5>
                <small class="text-muted">the_falconer</small>
                <p class="card-text">I love looking at the ducks in the park across the street, this one here is a Mallard male (green head) and female</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">1-13-21 • 5:24 pm</small> <br/>
                <small class="text-muted">Found in Willson’s Woods Park</small>
              </div>
            </div>
          </div>



        </div>


      </Col>
    </Row>
  );
}

export default Feed;
{/* 
        <div class="row">

              <div class="card col-md-4">

                <img src={blueHeron} alt="Great Blue Heron" class="img-fluid" />
                <h1>Ava Lorusso</h1>
                <p class="title">Full-Stack Developer; Student</p>
                <p>Columbia University</p>

                <div class="mx-2">
                  <a href="https://github.com/avatl" target="_blank"><i class="fa fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/ava-lorusso-08a0791b8/" target="_blank"><i class="fa fa-linkedin"></i></a>
                  <a href="https://angel.co/u/avalorusso" target="_blank"><i class="fa fa-angellist"></i></a>
                </div>

                <p>
                  <button class="card-button">
                    <a href="Assets/Images/codeResumeNew.pdf" download="ALorussoResume" class="text-light">
                      Resume
                        </a>
                  </button>
                </p>

              </div>
            </div> */}