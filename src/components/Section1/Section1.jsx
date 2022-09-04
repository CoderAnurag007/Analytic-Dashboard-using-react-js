import "./section1.scss";
import Info from "../../images/icons8-info.png";
import Earning from "../../images/earningroundgraph.png";

const Section1 = () => {
  return (
    <>
      <div className="section1 fluid-container">
        <div className="section1-analytic">
          <div className="cardtags container">
            <div className="card">
              <div className="detail">
                <div className="detailimg">
                  <i class="fa-light fa-square-dollar"></i>
                </div>
                <div className="revenuebox">
                  Revenue <br /> $21,556
                </div>
              </div>
              <div className="status-pro">+3.55%</div>
            </div>
            <div className="card">
              <div className="detail">
                <div className="detailimg"></div>
                <div className="revenuebox">
                  Orders <br /> 5,436
                </div>
              </div>
              <div className="status-low">-1.44%</div>
            </div>
            <div className="card">
              <div className="detail">
                <div className="detailimg"></div>
                <div className="revenuebox">
                  Customers <br /> 42,444
                </div>
              </div>
              <div className="status-pro">+1.05%</div>
            </div>
          </div>

          {/* graph box */}

          <div className="graphmainbox ">
            <div className="graph-head-section">
              <div className="overview">Overview</div>
              <div>
                <span className="sortby">Sort By</span> : yearly
              </div>
            </div>
            <div className="graph-content-box">
              <div className="graphtext">
                <div className="thismonth">
                  <span className="month">This Month</span>
                  <br />
                  <div className="pricebox">
                    <span className="month-value">$24,556</span>
                    <span className="status-pro">+2.65%</span>
                  </div>
                </div>
                <div className="otherdata">
                  <div className="card">
                    <span className="text">Orders</span>
                    <br />
                    <span className="value">5,643</span>
                  </div>
                  <div className="card">
                    <span className="text">Sales</span>
                    <br />
                    <span className="value">16,273</span>
                  </div>

                  <div className="card">
                    <span className="text">Order value</span>
                    <br />
                    <span className="value">16.74%</span>
                  </div>
                  <div className="card">
                    <span className="text">Customers</span>
                    <br />
                    <span className="value">21,456</span>
                  </div>

                  <div className="card">
                    <span className="text">Income</span>
                    <br />
                    <span className="value">$35,652</span>
                  </div>
                  <div className="card">
                    <span className="text">Expenses</span>
                    <br />
                    <span className="value">$12,275</span>
                  </div>
                </div>
              </div>
              <div className="graphimage"></div>
            </div>
          </div>

          {/* Big Cards */}

          <div className="bigcards container">
            <div className="bigcard1 bigcard">
              <div className="headtext">
                <span className="user">User Activity</span>
                <span className="weekly">Weekly</span>
              </div>
              <div className="monthbox">
                <span className="txt">This Month</span>
                <br />
                <span className="value">16,453</span>
              </div>
              <div className="imgbox"></div>
            </div>
            <div className="bigcard2 bigcard">
              <div className="headtext">
                <span className="order">Order stats</span>
                <span className="dots">...</span>
              </div>
              <div className="imgbox2"></div>
            </div>
            <div className="bigcard3 bigcard">
              <div className="headtext">
                <span className="order">Top product</span>
                <span className="monthly">Monthly</span>
              </div>
              <div className="products-shell">
                <div className="product">
                  <div className="left">
                    <div className="no-box">#1</div>
                    <div className="text-box">Polo shirt</div>
                  </div>
                  <div className="right">3.8k</div>
                </div>
                <div className="product">
                  <div className="left">
                    <div className="no-box">#2</div>
                    <div className="text-box">Hoodie for men</div>
                  </div>
                  <div className="right">3.14k</div>
                </div>
                <div className="product">
                  <div className="left">
                    <div className="no-box">#3</div>
                    <div className="text-box">Red color cap</div>
                  </div>
                  <div className="right">2.4k</div>
                </div>
                <div className="product">
                  <div className="left">
                    <div className="no-box">#4</div>
                    <div className="text-box">Pocket T-shirt</div>
                  </div>
                  <div className="right">2.1k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section1-profile">
          <div className="profile-back"></div>
          <div className="profile-front"></div>
          <div className="profile-detail">
            <span className="profilename">Jennifer Bennet</span> <br />
            <span className="occupation">Product Designer</span>
          </div>
          <div className="audience">
            <div className="field">
              <span className="fieldno">1,278</span>
              <br />
              <span className="fieldtext">Products</span>
            </div>
            <hr className="field-divider" />
            <div className="field">
              <span className="fieldno">5.2k</span>

              <br />
              <span className="fieldtext">Followers</span>
            </div>
          </div>
          <hr className="audience-underline" />
          <div className="profile-earning-container">
            <div className="profile-earning">
              <div className="earn-text">Earning</div>
              <div className="info-icon">
                <img src={Info} alt="" />
              </div>
            </div>
            <div className="earning-graph-image">
              <img src={Earning} alt="" />
            </div>
          </div>
          <hr className="audience-underline" />
          <div className="recent-activity">
            <span className="recent-heading">Recent Activity</span>
            <div className="recent-cards">
              <div className="recent-card">
                <div className="datebox">
                  <span className="date">12</span>
                  <br />
                  sep
                </div>
                <div className="recent-text">Joined the group boardmanship</div>
              </div>
              <div className="recent-card">
                <div className="datebox">
                  <span className="date">11</span>
                  <br />
                  sep
                </div>
                <div className="recent-text">
                  Responded to needed volunteers
                </div>
              </div>
              <div className="recent-card">
                <div className="datebox">
                  {" "}
                  <span className="date">10</span>
                  <br />
                  sep
                </div>
                <div className="recent-text">Everyone realizes ...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
