import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import 'components/breadcrumb/breadcrumb.scss';

const Breadcrumb = (props) => {
    const links = props.links;
    return (
        <>
            <NavLink to="/shopee">
                <b>{props.isChild ? ` / ${links.menuLabel}` : `${links.menuLabel}`}</b>
            </NavLink>            
            {links.childMenu && <Breadcrumb links={links.childMenu} isChild={true} />}
        </>
    )
}

const BreadcrumbWrapper = (props) => <section className='breadcrumb-section'> <Breadcrumb {...props} /> </section>

BreadcrumbWrapper.propTypes = {
    links: PropTypes.object
}

export default BreadcrumbWrapper;