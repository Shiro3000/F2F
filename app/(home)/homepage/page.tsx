import Link from 'next/link';
import React from 'react';
import './globals.css';
import './styleguide.css';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="flex-col desktop">
      <div className="div">
        <div className="overlap" id="empowering-farmers">
          <div className="group">
            <div className="empowering-farmers">EMPOWERING FARMERS<br />EMPOWERING THAILAND</div>
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
          <img className="image" src="img/image-2.png" />
        </div>
        <img className="screenshot" src="img/screenshot-2567-06-17-at-11-57-40-2.png" />
        <div className="overlap-group">
          <div className="frame"><div className="frame-2"></div></div>
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
          <img className="line" src="img/line-1.svg" />
          <img className="img" src="img/line-2.png" />
          <img className="image-2" src="img/image-3.png" />
          <div className="text-wrapper-7">Secure Transactions</div>
          <p className="p">Experience peace of mind with our secure and transparent lending platform.</p>
          <div className="text-wrapper-8">Smart Credit Assessments</div>
          <p className="text-wrapper-9">Leverage machine learning to ensure accurate and fair credit evaluations.</p>
          <div className="text-wrapper-10">Competitive Interest Rates</div>
          <p className="text-wrapper-11">Benefit from attractive interest rates for both farmers and investors.</p>
          <img className="image-3" src="img/image-4.png" />
          <img className="image-4" src="img/image-5.png" />
        </div>
        <div className="group-4" id="our-impact">
          <div className="overlap-group-2" id="our-mission">
            <div className="text-wrapper-12">Our Mission</div>
            <p className="text-wrapper-13">Making a Difference in Thai Agriculture</p>
          </div>
          <img className="image-5" src="img/image-6.png" />
          <p className="text-wrapper-14">
            At FUND2FARM, our mission is to empower Thai farmers by providing them with accessible, affordable loans and
            connecting them with investors who are passionate about making a social impact. We aim to bridge the
            financial gap in agriculture, fostering sustainable growth and development in rural communities.
          </p>
        </div>
        <div className="group-wrapper">
          <div className="group-5">
            <img className="image-6" src="img/image-6-1.png" />
            <div className="overlap-2">
              <div className="text-wrapper-12">Our Vision</div>
              <div className="text-wrapper-13">Empowering Farmers, Engaging Investors</div>
            </div>
            <p className="text-wrapper-15">
              We envision a future where every farmer has the financial support and resources needed to thrive. By
              leveraging technology and fostering a transparent, secure lending environment, we strive to create a
              thriving agricultural sector that benefits both farmers and investors, contributing to the overall
              economic and social well-being of Thailand.
            </p>
          </div>
        </div>
        <div className="overlap-3">
          <div className="group-6">
            <div className="overlap-4">
              <div className="text-wrapper-16">Secure Transactions</div>
              <p className="text-wrapper-17">Your transactions are safe and transparent</p>
              <div className="text-wrapper-18">Competitive Interest Rates</div>
              <p className="text-wrapper-19">Get the best rates tailored to your needs</p>
              <img className="piggy-bank" src="img/piggy-bank-1.png" />
              <div className="text-wrapper-20">Loan Monitoring</div>
              <p className="text-wrapper-21">Track your loan utilization and progress</p>
              <img className="shield" src="img/shield-1.png" />
              <img className="analytics" src="img/analytics-1.png" />
              <div className="text-wrapper-22">Trusted Platform</div>
              <p className="text-wrapper-23">Join thousands of farmers benefiting from our services</p>
              <div className="text-wrapper-24">Direct Investor Connections</div>
              <p className="text-wrapper-25">Connect directly with investors who believe in your project</p>
              <img className="piggy-bank-2" src="img/piggy-bank-2.png" />
              <div className="text-wrapper-26">Sustainable Farming</div>
              <p className="text-wrapper-27">Promote sustainable farming practices with our support</p>
              <img className="shield-2" src="img/shield-2.png" />
              <img className="analytics-2" src="img/analytics-2.png" />
              <div className="overlap-5">
                <img className="line-2" src="img/line-2-1.svg" />
                <img className="line-3" src="img/line-2-1.svg" />
                <img className="line-4" src="img/line-3.svg" />
              </div>
            </div>
            <p className="text-wrapper-28">Discover the benefits of using our platform to secure funding for your farm.</p>
            <div className="overlap-6">
              <div className="text-wrapper-29">Why Choose FUND2FARM?</div>
              <div className="text-wrapper-29">Why Choose FUND2FARM?</div>
            </div>
          </div>
          <img className="screenshot-2" src="img/screenshot-2567-06-17-at-11-57-40-4.png" />
        </div>
        <div className="overlap-7">
          <div className="overlap-wrapper">
            <div className="overlap-8">
              <div className="overlap-9">
                <div className="overlap-10" id="for-farmers-how-to-get-started">
                  <div className="text-wrapper-30">For Farmers</div>
                  <div className="text-wrapper-31">How to Get Started</div>
                  <img className="image-7" src="img/image-7.png" />
                </div>
                <p className="text-wrapper-32">Follow these simple steps to register, apply, and receive your loan.</p>
                <div className="overlap-11">
                  <img className="line-5" src="img/line-2-3.svg" />
                  <div className="ellipse"></div>
                  <div className="ellipse-2"></div>
                  <div className="ellipse-3"></div>
                  <div className="ellipse-4"></div>
                  <div className="ellipse-5"></div>
                  <img className="add-friend" src="img/add-friend-1-1.png" />
                  <img className="add-friend-2" src="img/add-friend-2.png" />
                  <img className="add-friend-3" src="img/add-friend-3-1.png" />
                  <img className="add-friend-4" src="img/add-friend-4.png" />
                  <img className="add-friend-5" src="img/add-friend-5-1.png" />
                </div>
                <div className="text-wrapper-33">Sign Up</div>
                <p className="text-wrapper-34">
                  Sign up on our platform and complete your profile with the required personal and farm details.
                </p>
                <div className="text-wrapper-35">Apply for a Loan</div>
                <p className="text-wrapper-36">
                  Provide detailed information about your loan requirements and how you plan to use the funds.
                </p>
                <div className="text-wrapper-37">Credit Scoring Assessment</div>
                <p className="text-wrapper-38">
                  Our machine learning algorithms will assess your creditworthiness using various data points such as
                  crop estimates, weather forecasts, and soil quality.
                </p>
                <div className="text-wrapper-39">Receive Funds</div>
                <p className="text-wrapper-40">
                  Once approved, the loan amount will be credited to your account, and you can start purchasing the
                  necessary agricultural products.
                </p>
                <div className="text-wrapper-41">Fund Utilization and Monitoring</div>
              </div>
              <p className="text-wrapper-42">
                We ensure the proper use of funds through continuous monitoring and provide regular reports to keep you
                on track.
              </p>
            </div>
          </div>
        </div>
        <div className="group-7">
          <img className="image-8" id="for-investors-image" src="img/image-7-1.png" />
          <div className="text-wrapper-43">For Investors</div>
          <div className="text-wrapper-44">How to Invest</div>
          <p className="text-wrapper-45">
            Follow these simple steps to start investing in agricultural projects and see your returns grow.
          </p>
          <div className="overlap-12">
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
          <div className="text-wrapper-46">Sign Up</div>
          <p className="text-wrapper-47">
            Sign up on our platform and complete your profile with the required personal and financial details.
          </p>
          <div className="text-wrapper-48">Browse and Select Projects</div>
          <p className="text-wrapper-49">
            Explore our curated agricultural projects, complete with profiles and risk assessments. Choose one that fits
            your risk and return preferences.
          </p>
          <div className="text-wrapper-50">Invest Funds</div>
          <p className="text-wrapper-51">
            Decide on the amount you wish to invest and transfer the funds securely through our platform. We ensure all
            transactions are safe and transparent.
          </p>
          <div className="text-wrapper-52">Monitor Your Investment</div>
          <p className="text-wrapper-53">
            Track your investment progress with a personalized dashboard. Receive regular updates on fund utilization
            and project outcomes.
          </p>
          <div className="text-wrapper-54">Receive Returns</div>
          <p className="text-wrapper-55">
            Earn returns on your investment as the project progresses and completes. Returns are deposited directly into
            your account.
          </p>
        </div>
        <div className="overlap-13">
          <div className="rectangle"></div>
          <div className="overlap-group-wrapper">
            <div className="overlap-14">
              <div className="overlap-15">
                <img className="image-9" src="img/image-8.png" />
                <div className="join-today">
                  Join&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Today
                </div>
              </div>
              <p className="become-a-part-of-our">
                Become a part of our community and start benefiting from secure and transparent transactions. Whether
                you&#39;re a farmer in need of funds or an investor looking for profitable opportunities, FUND2FARM is
                the right place for you.
              </p>
              <button className="button"><div className="text-wrapper-56">Get Started</div></button>
              <div className="text-wrapper-57">Learn more →</div>
            </div>
          </div>
          <div className="group-8">
            <div className="overlap-16">
              <img className="screenshot-3" src="img/screenshot-2567-06-17-at-11-57-40-removebg-preview-1.png" />
              <img className="output" src="img/output-onlinepngtools-1-1.png" />
            </div>
          </div>
        </div>
        <div className="overlap-17" id="get-in-touch">
          <div className="rectangle-2"></div>
          <p className="text-wrapper-58">For any questions or partnership inquiries, feel free to reach out to our team.</p>
          <p className="text-wrapper-59">Get in Touch with Us</p>
          <div className="group-9">
            <div className="text-wrapper-60">Office Hours</div>
            <p className="text-wrapper-61">Monday-Friday 8:00 am to 5:00 pm</p>
            <div className="time-wrapper"><img className="time" src="img/time-1.png" /></div>
            <div className="text-wrapper-62">Our Address</div>
            <p className="text-wrapper-63">123 Agriculture St. Bangkok, Thailand</p>
            <div className="img-wrapper"><img className="time" src="img/time-2.png" /></div>
            <div className="text-wrapper-64">Contact Us</div>
            <div className="text-wrapper-65">+66 89 999 9999</div>
            <div className="overlap-18"><img className="time" src="img/time-3.png" /></div>
          </div>
          <div className="rectangle-3"></div>
          <div className="group-10">
            <p className="text-wrapper-66">© 2024 FUND2FARM. All rights reserved.</p>
            <div className="group-11">
              <div className="group-12">
                <a href="#empowering-farmers" className="text-wrapper-67">HOME</a>
                <a href="#get-in-touch" className="text-wrapper-68">CONTACT US</a>
                <a href="#for-investors-image" className="text-wrapper-69">FOR INVESTORS</a>
                <div className="frame-7">
                  <div className="frame-8">
                    <a className="text-wrapper-70" href="#our-impact">ABOUT US</a>
                  </div>
                </div>
                <div className="frame-9">
                  <div className="frame-8"><a href="#for-farmers-how-to-get-started" className="text-wrapper-70">FOR FARMERS</a></div>
                </div>
              </div>
              <img className="line-6" src="img/line-2-4.svg" />
              <img className="image-10" src="img/image-9.png" />
              <img className="facebook" src="img/facebook-1.png" />
              <img className="youtube" src="img/youtube-1.png" />
            </div>
          </div>
        </div>
        <div className="overlap-19">
          <div className="text-wrapper-71">Meet the FUND2FARM Team</div>
          <img className="screenshot-4" src="img/screenshot-2567-06-17-at-11-57-40-4.png" />
        </div>
        <div className="text-wrapper-72">Our Partners</div>
        <p className="text-wrapper-73">
          Our dedicated team works tirelessly to connect farmers and investors, ensuring the success of every project.
        </p>
        <p className="nantawan-chief">
          <span className="span">Nantawan<br /></span> <span className="text-wrapper-74">Chief Executive Officer</span>
        </p>
        <p className="padsawut-chief">
          <span className="span">Padsawut<br /></span> <span className="text-wrapper-74">Chief Operating Officer</span>
        </p>
        <img className="IMG" src="img/img-4863-1.png" />
        <img className="IMG-2" src="img/img-4863-2.png" />
        <p className="napat-chief-design">
          <span className="span">Napat<br /></span> <span className="text-wrapper-74">Chief Design Officer</span>
        </p>
        <p className="dhakorn-chief">
          <span className="span">Dhakorn<br /></span> <span className="text-wrapper-74">Chief Technology Officer</span>
        </p>
        <p className="thanaphot-chief">
          <span className="span">Thanaphot<br /></span> <span className="text-wrapper-74">Chief Financial Officer</span>
        </p>
        <img className="IMG-3" src="img/img-4863-3.png" />
        <img className="IMG-4" src="img/img-4863-4.png" />
        <img className="IMG-5" src="img/img-4863-5.png" />
        <img className="image-11" src="img/image-10.png" />
        <img className="image-12" src="img/image-11.png" />
        <img className="image-13" src="img/image-12.png" />
        <img className="image-14" src="img/image-13.png" />
        <img className="image-15" src="img/image-14.png" />
      </div>
    </div>
  );
};

export default App;
