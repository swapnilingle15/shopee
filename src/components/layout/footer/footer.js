import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { ABOUTUS_LINKS, ACCOUNT_LINKS, HELP_LINKS } from 'components/layout/footer/utils';
import { ReactComponent as Instagram } from 'assets/instagram.svg'
import { ReactComponent as Facebook } from 'assets/facebook.svg'
import { ReactComponent as Twitter } from 'assets/twitter.svg'
import logo from 'assets/images/shopee_logo.png'
import Media from 'react-media';
import 'components/layout/footer/footer.scss';


const FooterBlock = ({ blockLable, links }) => (
    <section className='footer-block aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
        <div><b>{blockLable}</b></div>
        <ul>
            {links.map((link) =>
                <li key={link.label}>
                    {link.label}
                </li>
            )}
        </ul>
    </section>
)


const Footer = () => {
    const isCheckoutPage = useMatch('/checkout');
    const isOrderSummaryPage = useMatch('/ordersummary');

    return (
        <footer className='footer-section'>
            <article className={`${isOrderSummaryPage || isCheckoutPage ? 'mobile' : ''}`}>
                {!isOrderSummaryPage && !isCheckoutPage &&
                    <div className='container'>
                        <div className='aem-Grid aem-Grid--12'>
                            <FooterBlock blockLable={"Account"} links={ACCOUNT_LINKS} />
                            <FooterBlock blockLable={"About Us"} links={ABOUTUS_LINKS} />
                            <FooterBlock blockLable={"Help"} links={HELP_LINKS} />

                            <section className='footer-block aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                                <div><b>Follow Us!</b></div>
                                <div className='followus-info'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </div>
                                <div className='social-links'>
                                    <Instagram />
                                    <Facebook />
                                    <Twitter />
                                </div>
                            </section>
                        </div>
                    </div>}
            </article>

            <Media query={'(max-width: 1023px)'}>
                {maches => (
                    <>
                        {maches ? (
                            <article className='footer-bottom-section'>
                                <section className='aem-Grid aem-Grid--12'>
                                    <div className='aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--phone--6'>
                                        <Link to="/">Term of Use</Link>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--phone--6'>
                                        <Link to="/">Privacy Policy</Link>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                                        <span>Copyright©2022 Shopee, Inc. </span>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                                        All rights reserved.
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                                        <img src={logo} width={160} alt="logo"  />
                                    </div>
                                </section>
                            </article>
                        ) :
                            <article className='footer-bottom-section'>
                                <div className='aem-Grid aem-Grid--12 container'>
                                    <div className='aem-GridColumn aem-GridColumn--default--4'>
                                        <img src={logo} width={160} alt="logo"  />
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--4'>
                                        <span>Copyright©2022 Shopee, Inc. All rights reserved.</span>
                                    </div>
                                    <div className='aem-GridColumn aem-GridColumn--default--4'>
                                        <Link to="/">Term of Use</Link>
                                        <Link to="/">Privacy Policy</Link>
                                    </div>
                                </div>
                            </article>}
                    </>
                )}
            </Media>
        </footer>
    )
}



export default Footer;
