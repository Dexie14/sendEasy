import arrow from '../../Images/arrow.svg';
import courier from '../../Images/courier.svg';
import classes from './Footer.module.css';


const Footer = () => {
  return (
    <div className={classes.foot}>
        <footer className={classes.footer}>
            <div className={classes.footflex}>
            <div className={`${classes.Products} ${classes.item}`}>
                <h3>Products</h3>
                <p>Why Send easy?</p>
                <p>Product Updates</p>
                <p>Email Marketing</p>
                <p>Websites</p>
                <p>Transactional Email</p>
                <p>How we compare</p>
                <p>Security</p>
                <p>Status</p>
                <p>Mobile App</p>
            </div>

            <div className={`${classes.Resources} ${classes.item}`}>
                <h3>Resources</h3>
                <p>Guide and tutorials</p>
                <p>Marketing Tips</p>
                <p>Free Marketing Tools</p>
                <p>Marketing Glossary</p>
                <p>Browse by Topic</p>
                <p>Intergrations Directory</p>
            </div>

            <div className={`${classes.Community} ${classes.item}`}>
                <h3>Community</h3>
                <p>Agencies and Freelancers</p>
                <p>Developers</p>
                <p>Events</p>
            </div>
            </div>

            <div className={classes.footflex}>
            <div className={`${classes.Company} ${classes.item}`}>
                <h3>Company</h3>
                <p>Our Story</p>
                <p>Newsroom</p>
                <p>Annual Report</p>
                <p>Careers</p>
                <p>Accessibility</p>
            </div>

            <div className={`${classes.Help} ${classes.item}`}>
                <h3>Help</h3>
                <p>Contact Us</p>
                <p>Hire an Expert</p>
            </div>

            <div className={`${classes.Sendeasy} ${classes.item}`}>
                <div className={classes.send}>
                <h3>Send easy</h3>
                <p>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
                <h4>Check it out <span><img src={arrow} alt="arrow"/></span></h4>
                </div>
                <div className={classes.easy}>
                    <h3><span><img src={courier} alt="courier"/>Courier</span></h3>
                    <p>Expert insights, industry trends, and insipiring stories that help you live and work on your own terms.</p>
                    <h4>Learn more <span><img src={arrow} alt="arrow"/></span></h4>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer