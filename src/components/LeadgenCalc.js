import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Slider, { Range } from 'rc-slider';
import '../components/slider.css'

const Handle = Slider.Handle;


class LeadgenCalc extends Component {
    constructor() {
        super();
        this.state = {
            numberOfLeads: 50
        };
        this.handleSlide = this.handleSlide.bind(this); // set this, because you need get methods from CheckBox 
      }

    handle(props){
        const { value, dragging, index, ...restProps } = props;
        //console.log(value);
        //this.setState({numberOfLeads:value});
        return (
            <Handle value={value} {...restProps} />
        );
    }

    handleSlide(e){
        //console.log("Current value of slider");
        //console.log(e);
        this.setState({numberOfLeads:e});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <div style={{width:"300px",height:"20px"}}>
                    <Slider min={10} max={500} defaultValue={this.state.numberOfLeads}  handle={this.handle} onChange={ this.handleSlide }/>
                </div>
                <div>
                    <h2>Number of Leads: {this.state.numberOfLeads}</h2>
                </div>
            </div>
        )}
    }

export default withStyles((theme) => ({
  root: {
    padding: "40px 12px",
    justifyContent: "center",
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1080px",
    textAlign: "center",
    fontWeight: "600",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "left",
      fontSize: "28px",
    },
  },
  heading: {
    color: "#FFF",
    fontSize: "16px",
    lineHeight: "1.6",
    fontWeight: "600",
    paddingBottom: "12px",

    [theme.breakpoints[900]]: {
      fontSize: "20px",
      marginBottom: "0px",
    },
  },

}))(LeadgenCalc);
