function Page() {
    return (
        <div class="Page">
            <h2>Who are we (ISAC) ?</h2>
            <p>Indian Students Association Cottbus (ISAC) is one of many student association in the University.
                The objective of the association is to unite all Indian students in the university under one umbrella and facilitate services for them.
                Our partnership with the Indians in Germany platform which comes under the purview of the Indian embassy in Berlin is seen to be fruitful in many ways.
                We conduct events of academic, professional and cultural importance.
                Indian Embassy in Berlin organizes activities all-round the year and the formation of the student associations is a part of that process.
                ISAC is one of the 16 student organizations in Germany.
                We welcome you to be a part of this organization and to receive benefits.</p>
            <h2>How can ISAC help?</h2>
            <p>ISAC team is a group of volunteers who wish to make starting days for new students less stressful.
                We have come forward on our own interest to help fresh students to guide and introduce new culture by utilising their own experience from their days in Cottbus.
                <br></br>
                Through this website, students will be able to self-guide themselves on:
                <ul>
                    <li>The admission process</li>
                    <li>Finding accommodation</li>
                    <li>Reaching Cottbus</li>
                    <li>City registration</li>
                    <li>Opening Bank Account</li>
                </ul>And, making your time in Cottbus more fun.
            </p>
            <p><b>Note:</b><i>You can find more resources in the links option of this website above.</i></p>

            <div class="row container-fluid">
                <div class="col-md-6">
                    <div class="card" id="contactForm">
                        <div class="card-body">
                            <h4 id="contactheader">Help us improve!</h4>
                            <h6 id="contactsubheading">We the ISAC community, would like to hear from you.</h6>
                            <form>
                                <div class="mb-3">
                                    <label class="form-label" for="name">My name is</label>
                                    <input class="form-control" id="name" type="text" placeholder="First Name, Last Name" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="emailAddress">I can be reached at (Preferably, btu mail id)</label>
                                    <input class="form-control" id="emailAddress" type="email" placeholder="Your Email Address" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="message">Your message</label>
                                    <textarea class="form-control" id="message" type="text" placeholder="This is regarding..."></textarea>
                                </div>
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card" id="ThankYouCard">
                        <div class="card-body text-center">
                            <h3 id="contactheader">Thank you!</h3>
                            <h5 id="contactsubheading">We will reach to you shortly.<br></br>(Typically in 1-2 working days)</h5>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Page;