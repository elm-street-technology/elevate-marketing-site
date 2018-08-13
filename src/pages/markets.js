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
        <div className={classes.heading}>Markets</div>
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
                              <span>|</span>
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
    paddingTop: "96px",
    paddingBottom: "192px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
  },
  table: {
    paddingTop: "96px",
    width: "100%",
  },
  tableThead: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "#ccc",
  },
  tableTh: {
    minWidth: "80px",
    padding: "8px",
  },
  tableTbody: {},
  tableTr: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderBottom: "1px solid #ccc",
  },
  tableTd: {
    minWidth: "80px",
    padding: "24px 8px",
  },
  mls: {
    fontWeight: "700",
    color: theme.colors.primary,
  },
}))(Markets);
