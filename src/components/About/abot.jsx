import './about.css'
import LongMenu from "../menu/menu";
import tdimg1 from "../../assets/tdimg1.png";
const About = () => {
    return (
      <div>
        <img className="img1" src={tdimg1} alt="flower" />
        <div className="hd1">
          <div className="hd2">
            <h3 className="head1">
              About Our <br />
              Todo list
            </h3>
            <LongMenu className="m" />
          </div>

          <div className="aboutdiv">
            <p>
              Welcome to our to-do list app, where organization meets
              simplicity. We understand the demands of modern life and the need
              for effective task management. Our app is designed to streamline
              your daily routines, prioritize your tasks, and ultimately help
              you achieve your goals with ease.
            </p>
            <h4>Our Mission</h4>
            <p>
              Welcome to our to-do list app, where organization meets
              simplicity. We understand the demands of modern life and the need
              for effective task management. Our app is designed to streamline
              your daily routines, prioritize your tasks, and ultimately help
              you achieve your goals with ease.
            </p>
            <h4>Our Key Features are:</h4>
            <ul>
              <li>
                <h5>Intuitive Interface:</h5>
                <p>
                  Our app boasts a clean and intuitive interface, making it
                  effortless to navigate and use.
                </p>
              </li>

              <li>
                <h5>Task Organization: </h5>
                <p>
                  Easily create, edit, and categorize tasks to ensure nothing
                  falls through the cracks.
                </p>
              </li>

              <li>
                <h5>Priority Settings: </h5>
                <p>
                  Prioritize your tasks based on urgency and importance, helping
                  you focus on what matters most.
                </p>
              </li>
            </ul>
            <h4>Our Commitment to Privacy and Security</h4>
            <p>
              We understand the importance of protecting your data. Our app is
              built with robust security measures to safeguard your personal
              information and tasks. We adhere to strict privacy standards,
              ensuring that your data remains confidential and secure at all
              times.
            </p>
            <h4>Get Started Today</h4>
            <p>
              Ready to take control of your tasks and maximize your
              productivity? Download our app now and experience the convenience
              of efficient task management firsthand. Join our growing community
              of users who are achieving more with less stress, one task at a
              time. Thank you for choosing our to-do list app to accompany you
              on your journey towards success!
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default About;