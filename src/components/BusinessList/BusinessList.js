import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render(){
        return (
            <div className="BusinessList">
                {
                    // either one of the following works; which is "better?"
                    // this.props.businesses.map(business => { return <Business key={business.id} business={business} />; })
                    this.props.businesses.map(function(business){ return <Business key={business.id} business={business} />; })
                }
            </div>
        );
    }
};

export default BusinessList;
