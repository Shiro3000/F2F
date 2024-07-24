import Link from 'next/link';
import React from 'react';
import './globals.css';
import './styleguide.css';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap" id="empowering-farmers">
          <div className="group">
            <div className="empowering-farmers">
              EMPOWERING FARMERS<br />EMPOWERING THAILAND
            </div>
            <p className="text-wrapper">
              Our peer-to-peer lending platform connects farmers and investors through direct, secure, and transparent
              transactions. We provide affordable loans to farmers, ensure proper fund utilization, and offer investors
              the opportunity to support agricultural projects with competitive returns.
            </p>
            <Link href={'/sign-in'}>
              <button className="fill-button">
                <div className="text-wrapper-2">Get Started</div>
              </button>
            </Link>
          </div>
          <img className="image" src="img/image-2.png" alt="Empowering Farmers" />
        </div>
        <img className="screenshot" src="img/screenshot-2567-06-17-at-11-57-40-2.png" alt="Screenshot" />
        <div className="overlap-group">
          <div className="frame">
            <div className="frame-2"></div>
          </div>
          <a href="#get-in-touch" className="text-wrapper-4">CONTACT US</a>
        </div>
        <div className="frame-wrapper">
          <div className="div-wrapper">
            <a href="#for-investors-image" className="text-wrapper-5">FOR INVESTORS</a>
          </div>
        </div>
        <div className="frame-3">
          <div className="div-wrapper">
            <a href="#for-farmers-how-to-get-started" className="text-wrapper-5">FOR FARMERS</a>
          </div>
        </div>
        <div className="frame-4">
          <div className="div-wrapper">
            <a className="text-wrapper-5" href="#our-impact">ABOUT US</a>
          </div>
        </div>
        <div className="frame-5">
          <div className="div-wrapper">
            <a href="#empowering-farmers" className="text-wrapper-5">HOME</a>
          </div>
        </div>
        <div className="group-2">
          <div className="frame-6">
            <Link href={'/sign-in'}>
              <div className="text-wrapper-6">LOGIN/SIGN UP</div>
            </Link>
          </div>
        </div>
        <div className="group-3">
          <img className="line" src="img/line-1.svg" alt="Line" />
          <img className="img" src="img/line-2.png" alt="Line 2" />
          <img className="image-2" src="img/image-3.png" alt="Image 3" />
          <div className="text-wrapper-7">Secure Transactions</div>
          <p className="p">Experience peace of mind with our secure and transparent lending platform.</p>
          <div className="text-wrapper-8">Smart Credit Assessments</div>
          <p className="text-wrapper-9">Leverage machine learning to ensure accurate and fair credit evaluations.</p>
          <div className="text-wrapper-10">Competitive Interest Rates</div>
          <p className="text-wrapper-11">Benefit from attractive interest rates for both farmers and investors.</p>
          <img className="image-3" src="img/image-4.png" alt="Image 4" />
          <img className="image-4" src="img/image-5.png" alt="Image 5" />
        </div>
        <div className="group-4" id="our-impact">
          <div className="text-wrapper-12">Our Impact</div>
          <p className="text-wrapper-13">Making a Difference in Thai Agriculture</p>
          <img className="image-5" src="img/image-6.png" alt="Our Impact" />
          <p className="every-investment">
            Every investment helps improve the lives of farmers and contributes to the sustainable development of
            Thailand&#39;s agricultural sector
          </p>
        </div>
        <div className="group-5">
          <div className="overlap-2">
            <div className="text-wrapper-14">Secure Transactions</div>
            <p className="text-wrapper-15">Your transactions are safe and transparent</p>
            <div className="text-wrapper-16">Competitive Interest Rates</div>
            <p className="text-wrapper-17">Get the best rates tailored to your needs</p>
            <img className="piggy-bank" src="img/piggy-bank-1.png" alt="Piggy Bank" />
            <div className="text-wrapper-18">Loan Monitoring</div>
            <p className="text-wrapper-19">Track your loan utilization and progress</p>
            <img className="shield" src="img/shield-1.png" alt="Shield" />
            <img className="analytics" src="img/analytics-1.png" alt="Analytics" />
            <div className="text-wrapper-20">Trusted Platform</div>
            <p className="text-wrapper-21">Join thousands of farmers benefiting from our services</p>
            <div className="text-wrapper-22">Direct Investor Connections</div>
            <p className="text-wrapper-23">Connect directly with investors who believe in your project</p>
            <img className="piggy-bank-2" src="img/piggy-bank-2.png" alt="Piggy Bank 2" />
            <div className="text-wrapper-24">Sustainable Farming</div>
            <p className="text-wrapper-25">Promote sustainable farming practices with our support</p>
            <img className="shield-2" src="img/shield-2.png" alt="Shield 2" />
            <img className="analytics-2" src="img/analytics-2.png" alt="Analytics 2" />
            <div className="overlap-group-2">
              <img className="line-2" src="img/line-2-1.svg" alt="Line 2" />
              <img className="line-3" src="img/line-2-1.svg" alt="Line 3" />
              <img className="line-4" src="img/line-3.svg" alt="Line 4" />
            </div>
          </div>
          <p className="text-wrapper-26">Discover the benefits of using our platform to secure funding for your farm.</p>
          <div className="overlap-3">
            <div className="text-wrapper-27">Why Choose FUND2FARM?</div>
            <div className="text-wrapper-27">Why Choose FUND2FARM?</div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="overlap-wrapper">
            <div className="overlap-4">
              <div className="overlap-5">
                <div className="overlap-6" id="for-farmers-how-to-get-started">
                  <div className="text-wrapper-28">For Farmers</div>
                  <div className="text-wrapper-29">How to Get Started</div>
                  <img className="image-6" src="img/image-7.png" alt="For Farmers" />
                </div>
                <p className="text-wrapper-30">Follow these simple steps to register, apply, and receive your loan.</p>
                <div className="overlap-7">
                  <img className="line-5" src="img/line-2-3.svg" alt="Line 5" />
                  <div className="ellipse"></div>
                  <div className="ellipse-2"></div>
                  <div className="ellipse-3"></div>
                  <div className="ellipse-4"></div>
                  <div className="ellipse-5"></div>
                  <img className="add-friend" src="img/add-friend-1-1.png" alt="Add Friend" />
                  <img className="add-friend-2" src="img/add-friend-2.png" alt="Add Friend 2" />
                  <img className="add-friend-3" src="img/add-friend-3-1.png" alt="Add Friend 3" />
                  <img className="add-friend-4" src="img/add-friend-4.png" alt="Add Friend 4" />
                  <img className="add-friend-5" src="img/add-friend-5-1.png" alt="Add Friend 5" />
                </div>
                <div className="text-wrapper-31">Sign Up</div>
                <p className="text-wrapper-32">
                  Sign up on our platform and complete your profile with the required personal and farm details.
                </p>
                <div className="text-wrapper-33">Apply for a Loan</div>
                <p className="text-wrapper-34">
                  Provide detailed information about your loan requirements and how you plan to use the funds.
                </p>
                <div className="text-wrapper-35">Credit Scoring Assessment</div>
                <p className="text-wrapper-36">
                  Our machine learning algorithms will assess your creditworthiness using various data points such as
                  crop estimates, weather forecasts, and soil quality.
                </p>
                <div className="text-wrapper-37">Receive Funds</div>
                <p className="text-wrapper-38">
                  Once approved, the loan amount will be credited to your account, and you can start purchasing the
                  necessary agricultural products.
                </p>
                <div className="text-wrapper-39">Fund Utilization and Monitoring</div>
              </div>
              <p className="text-wrapper-40">
                We ensure the proper use of funds through continuous monitoring and provide regular reports to keep you
                on track.
              </p>
            </div>
          </div>
        </div>
        <div className="group-6">
          <img className="image-7" id="for-investors-image" src="img/image-7-1.png" />
          <div className="text-wrapper-41">For Investors</div>
          <div className="text-wrapper-42">How to Invest</div>
          <p className="text-wrapper-43">
            Follow these simple steps to start investing in agricultural projects and see your returns grow.
          </p>
          <div className="overlap-8">
            <img className="line-5" src="img/line-2-3.svg" />
            <div className="ellipse"></div>
            <div className="ellipse-2"></div>
            <div className="ellipse-3"></div>
            <div className="ellipse-4"></div>
            <div className="ellipse-5"></div>
            <img className="add-friend" src="img/add-friend-1-1.png" />
            <img className="add-friend-6" src="img/add-friend-2-1.png" />
            <img className="add-friend-5" src="img/add-friend-3-1.png" />
            <img className="add-friend-7" src="img/add-friend-4-1.png" />
            <img className="add-friend-8" src="img/add-friend-5-1.png" />
          </div>
          <div className="text-wrapper-44">Sign Up</div>
          <p className="text-wrapper-45">
            Sign up on our platform and complete your profile with the required personal and financial details.
          </p>
          <div className="text-wrapper-46">Browse and Select Projects</div>
          <p className="text-wrapper-47">
            Explore our curated agricultural projects, complete with profiles and risk assessments. Choose one that fits
            your risk and return preferences.
          </p>
          <div className="text-wrapper-48">Invest Funds</div>
          <p className="text-wrapper-49">
            Decide on the amount you wish to invest and transfer the funds securely through our platform. We ensure all
            transactions are safe and transparent.
          </p>
          <div className="text-wrapper-50">Monitor Your Investment</div>
          <p className="text-wrapper-51">
            Track your investment progress with a personalized dashboard. Receive regular updates on fund utilization
            and project outcomes.
          </p>
          <div className="text-wrapper-52">Receive Returns</div>
          <p className="text-wrapper-53">
            Earn returns on your investment as the project progresses and completes. Returns are deposited directly into
            your account.
          </p>
        </div>
        <div className="overlap-9">
          <div className="rectangle"></div>
          <div className="overlap-group-wrapper">
            <div className="overlap-10">
              <div className="overlap-11">
                <img className="image-8" src="img/image-8.png" />
                <div className="text-wrapper-54">Join FUND2FARM Today</div>
              </div>
              <p className="become-a-part-of-our">
                Become a part of our community and start benefiting from secure and transparent transactions. Whether
                you&#39;re a farmer in need of funds or an investor looking for profitable opportunities, FUND2FARM is
                the right place for you.
              </p>
              <Link href={'/sign-in'}>
                <button className="button"><div className="text-wrapper-55">Get Started</div></button>
              </Link>
            </div>
          </div>
        </div>
        <div className="overlap-12" id="get-in-touch">
          <div className="rectangle-2"></div>
          <p className="text-wrapper-57">For any questions or partnership inquiries, feel free to reach out to our team.</p>
          <p className="text-wrapper-58">Get in Touch with Us</p>
          <div className="group-7">
            <div className="text-wrapper-59">Office Hours</div>
            <p className="text-wrapper-60">Monday-Friday 8:00 am to 5:00 pm</p>
            <div className="time-wrapper"><img className="time" src="img/time-1.png" /></div>
            <div className="text-wrapper-61">Our Address</div>
            <p className="text-wrapper-62">123 Agriculture St. Bangkok, Thailand</p>
            <div className="img-wrapper"><img className="time" src="img/time-2.png" /></div>
            <div className="text-wrapper-63">Contact Us</div>
            <div className="text-wrapper-64">+66 89 999 9999</div>
            <div className="overlap-13"><img className="time" src="img/time-3.png" /></div>
          </div>
          <div className="rectangle-3"></div>
          <div className="group-8">
            <p className="text-wrapper-65">© 2024 FUND2FARM. All rights reserved.</p>
            <div className="group-9">
              <div className="group-10">
                <a href="#empowering-farmers" className="text-wrapper-66">HOME</a>
                <a href="#get-in-touch" className="text-wrapper-67">CONTACT US</a>
                <a href="#for-investors-image" className="text-wrapper-68">FOR INVESTORS</a>
                <div className="frame-7">
                  <div className="frame-8"><a className="text-wrapper-69" href="#our-impact">ABOUT US</a></div>
                </div>
                <div className="frame-9">
                  <div className="frame-8"><a href="#for-farmers-how-to-get-started" className="text-wrapper-69">FOR FARMERS</a></div>
                </div>
              </div>
              <img className="line-6" src="img/line-2-4.svg" />
              <img className="image-9" src="img/image-9.png" />
              <img className="facebook" src="img/facebook-1.png" />
              <img className="youtube" src="img/youtube-1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
