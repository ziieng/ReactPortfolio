import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col size="lg-10" className="my-5 p-3 pgBody shadow">
          <h1 className="text-center">About Zii</h1>
          <hr />
          <div class="ml-2 mr-3 float-left profileImg">
            <img src="assets/MeAndFreds.jpg" className="img-fluid rounded"
              alt="Zii, a nerdy girl with short brown hair and rectangular glasses. Her hair is buzzed very short on one side, and is parted away from the camera. Behind her is a small black and white dog with large, pointed ears." />
          </div>
          <main>
            <p>Hi, I'm Zii! My legal name is Christina, but I don't use it very much.</p>
            <p>I started out my academic career with UW as a Finance major, but after graduation found that I didn't
                    have the stomach to <s>do evil</s> go into investment banking. Instead, I have been working as an
                    admin for the Department of the Navy. While I was in school, I tutored mathematics for 5 years and
                    in my heart I'll always be a mathematician first. I loved tutoring, as it gave me an opportunity to
                    help others share in the fun that mathematics can be. Unfortunately, I also have bills to pay!</p>
            <p>I've always been a nerd, and my favorite hobby is playing video games - specifically ones that have
            an immersive story, or challenging puzzles. I'm terrible at Gears of Duty and the like, but can get
            through most of Spacechem and Infinifactory without looking up any solutions! Before Boot Camp
                    started, Animal Crossing was my main link to sanity - as it is for a lot of folks.</p>
            <p>I work at two of the four domestic PAXes (West and East) and have been the manager of Line
            Entertainment for the
            past 5 years. It's a lot of work, but also a lot of fun and I value all the friends and connections
                    I've made there over the 12 years I've been Enforcing.</p>
            <p>My family consists of my partner and our dog, who is essentially our daughter. As tends to happen
            with only children, she's a little spoiled and gets way too excited in drive-thru's (pictured).
            Whenever we go somewhere like the bank and she doesn't get treats, she's always deeply disappointed
                    in my ability to provide for her needs. (At least she's cute.)</p>
          </main>
        </Col>
      </Row>
    </Container>
  );
}


export default Home;
