import React from 'react';
import './styles.css';

const Overview = () => (
  <div className="overview-card">
    <div className="left">
      <h2>
        Build like the best <br />
        with GitHub
      </h2>
      <p>
        Take collaboration to the next level with
        <br /> security and administrative features built for teams.
      </p>
    </div>
    <div className="right">
      <div className="imgbox">
        <img src="/overview.png" alt="" />
      </div>
    </div>
  </div>
);
export default Overview;
