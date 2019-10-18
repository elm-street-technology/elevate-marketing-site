import React from "react";
import withStyles from "elevate-ui/withStyles";

import Container from "../components/Container";
import SEO from "../components/SEO";
import CircuitBoard from "../images/circuit-board.svg";
import Mlsbg from "../images/mls_bg.jpg";
import MLSHeatMap from "../images/mls-heat-map.jpg";

const Markets = ({ classes, data }) => {
  const markets = data.allContentfulMarket.edges;
  let marketCount = 0;
  markets.forEach(({ node: market }) => {
    marketCount += market.mlsName.length;
  });

  
  return (

    
    <div
    
      className={classes.root}
    >
      <div style={{backgroundImage:"url("+Mlsbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"80px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#ffffff"}}>The Power of PARTNERS</div>
                            <div className={classes.subtext} style={{color:"#ffffff"}}>Our ever-growing network across the U.S. allows us to service more brokers,<br />
                            agents &amp; teams than most any other solution out there.
                            </div>
          </div>
      </div>
</Container>
</div>
      <SEO />
      <Container>
        <div className={classes.container}>
          <div className={classes.heading}>Areas we serve</div>
          <div className={classes.subheading}>
            Available in {marketCount} markets across the US
          </div>
          <div className={classes.mlsHeatMapContainer}>
            <img
              src={MLSHeatMap}
              alt="MLS Heat Map"
              title="MLS Heat Map"
              className={classes.mlsHeatMap}
            />
          </div>
          <div className={classes.table}>
            <div className={classes.tableThead}>
              <div className={classes.tableTh}>State</div>
              <div className={classes.tableTh}>MLS</div>
            </div>
            <div className={classes.tableTbody}>
              {markets.map(({ node: market }) => {
                return (
                  <div key={market.id} className={classes.tableTr}>
                    <div className={classes.tableTd}>{market.state}</div>
                    <div className={classes.tableTd}>
                      {market.mlsName &&
                        market.mlsName.map(
                          (mls, i) =>
                            i === market.mlsName.length - 1 ? (
                              <span key={mls} className={classes.mls}>
                                {mls}
                              </span>
                            ) : (
                              <span key={mls}>
                                <span className={classes.mls}>{mls}</span>
                                <span
                                  style={{
                                    color: "#64616E",
                                    padding: "0px 10px",
                                  }}
                                >
                                  |
                                </span>
                              </span>
                            )
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const query = graphql`
  query marketQuery {
    allContentfulMarket(limit: 1000, sort: { fields: [state], order: ASC }) {
      edges {
        node {
          id
          state
          mlsName
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    padding: "15px 0px 70px 0px",
    backgroundColor: "#ffffff",
  },
  container: {
    backgroundColor: "#fff",
    padding: "20px 24px",

    [theme.breakpoints[600]]: {
      padding: "40px 48px",
    },

    [theme.breakpoints[900]]: {
      padding: "60px 72px",
    },
  },
  mlsHeatMapContainer: {
    width: "75%",
    margin: "16px auto 0 auto",
  },
  mlsHeatMap: {
    width: "100%",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginRight: "auto",
    marginBottom: "16px",
    color: "#2E2E35",
    textAlign: "center",
  },
  subheading: {
    color: "#64616E",
    fontSize: "22px",
    textAlign: "center",
  },
  table: {
    paddingTop: "62px",
    width: "100%",
  },
  tableThead: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "#ececec",
  },
  tableTh: {
    minWidth: "120px",
    padding: "14px",
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#64616E",
  },
  tableTbody: {
    fontSize: "16px",
  },
  tableTr: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderBottom: "1px solid rgba(100, 97, 110, .25)",
  },
  tableTd: {
    minWidth: "120px",
    padding: "24px 14px",
    fontWeight: "600",
    maxWidth: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  mls: {
    fontWeight: "600",
    lineHeight: "1.6",
    color: theme.colors.primary,
  },

  heading: {
    fontSize: "33px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#5ac0ba",
    marginBottom: "12px",
    textAlign: "center",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },

  Heading2: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "26px",
    color: "#5ac0ba",
    letterSpacing: ".14px",
  },

}))(Markets);
