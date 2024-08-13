import classes from './Footer.module.scss';
const Footer = (): JSX.Element => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.flex_conatiner}>
                    <div>
                        <label>Contact Us</label>
                    </div>
                    <div>
                        <label>About Us</label>
                    </div>
                </div>
                <label className={classes.flex}>I agree for the copyrights @Fahad Sharif</label>
            </div>
        </>
    )
}
export default Footer;