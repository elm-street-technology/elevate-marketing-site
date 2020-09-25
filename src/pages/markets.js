import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Mlsbg from "../images/mls_bg.jpg";
import MLSHeatMap from "../images/mls-heat-map.jpg";
import SEO from "../components/SEO";
import FormMLS from "../components/FormMLS";

const Markets = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate MLS Markets - ${config.siteTitle}`,
  };
  const markets = data.allContentfulMarket.edges;
  let marketCount = 0;
  markets.forEach(({ node: market }) => {
    marketCount += market.mlsName.length;
  });

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate MLS Markets - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="markets" customTitle />

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

<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
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
                  <div style={{marginTop:"60px", paddingBottom:"25px"}}>
                    <FormMLS />
                  </div>
                  
         </Container>
</div>

</div>
  );
};

export const query = graphql`
  query market2Query {
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
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "auto",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  heading: {
    fontSize: "33px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#5ac0ba",
    marginBottom: "12px",
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

  landingHeaderStyle:{
    textAlign:"center",
  },

  mlsHeatMapContainer: {
    width: "70%",
    margin: "16px auto 0 auto",
  },
  mlsHeatMap: {
    width: "100%",
  },


  buttonLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },

  flexContainer: {
    padding: "0",
    margin: '0',
  
    display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    flexWrap: "wrap",
  
  },
  flexItem: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "50%",
        width: "50%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  flexItem2: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "33%",
        width: "33%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  flexItem3: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "40%",
        width: "40%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
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
}))(Markets);
