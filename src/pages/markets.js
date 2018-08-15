import React from "react";
import withStyles from "elevate-ui/withStyles";

import Container from "../components/Container";
import SEO from "../components/SEO";

const Markets = ({ classes, data }) => {
  const markets = data.allContentfulMarket.edges;
  console.log(markets);
  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.container}>
          <div className={classes.heading}>Areas we serve</div>
          <div className={classes.subheading}>Available in ## US states</div>
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
                            i === 0 ? (
                              <span key={mls} className={classes.mls}>
                                {mls}
                              </span>
                            ) : (
                              <span key={mls}>
                                <span
                                  style={{
                                    color: "#64616E",
                                    padding: "0px 10px",
                                  }}
                                >
                                  |
                                </span>
                                <span className={classes.mls}>{mls}</span>
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
    padding: "96px 10px 192px 10px",
    backgroundColor: "#faf8f6",
  },
  container: {
    backgroundColor: "#fff",
    padding: "60px 70px",
    boxShadow: "0px 8px 12px rgba(0,0,0,.1)",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginRight: "auto",
    marginBottom: "16px",
    color: "#2E2E35",
  },
  subheading: {
    color: "#64616E",
    fontSize: "22px",
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
    minWidth: "80px",
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
    minWidth: "80px",
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
