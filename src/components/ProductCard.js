import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Checkmark from "../images/checkmark.svg";
// import Checkmark from "../components/Checkmark";

const ProductCard = ({ props, children, classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.productCard}>
        <div className={classes.productTitle}>Elevate DMS</div>
        <div>
          <ul className={classes.featureList}>
            <li className={classes.feature}>All Elevate IDX Features</li>
            <li className={classes.feature}>Blog with Automatic Content</li>
            <li className={classes.feature}>Branded Mobile App</li>
            <li className={classes.feature}>Features Added Regularly</li>
            <li className={classes.feature}>Social Media Branding</li>
            <li className={classes.feature}>All Elevate IDX Features</li>
          </ul>
        </div>
        <button className={classes.productBtn}>Learn More</button>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "340px",
    background: "#fff", // material-design 1dp
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "12px",
    margin: "20px 20px",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, .1)",
  },
  productTitle: {
    fontSize: "22px",
    fontWeight: "800",
    textAlign: "center",
    paddingBottom: "20px",
  },
  productCard: {
    padding: "40px 26px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  feature: {
    padding: "10px 0",
    marginLeft: "40px",
    color: "#64616E",
  },
  featureList: {
    marginBottom: "20px",
    listStyleImage: `url('${Checkmark}')`,
  },
  productBtn: {
    padding: "14px",
    width: "200px",
    color: "#FFF",
    borderRadius: "4px",
    backgroundColor: "#E46457",
    margin: "auto",
    fontWeight: "600",
  },
}))(ProductCard);
