import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Slider, { Range } from 'rc-slider';
import '../components/slider.css'

const Handle = Slider.Handle;


class LeadgenCalc extends Component {
    constructor() {
        super();
        this.state = {
            numberOfLeads: 50,
            minLeads: 10,
            maxLeads: 200,
            avgHomePrice: 200000,
            commissionPrct: 3,
            brokerFeesPrct: 25,
            brokerFeesFixed: 0,
            costPerLead: 20,
            netIncomePerLead: 0,
            netTotalAtThree: 0,
            netTotalAtFive: 0,
            totalLeadSpend: 0,
            typeOfLead: "blend", // either "blend" or "seller", changes the price per lead
        };
        this.handleSlide = this.handleSlide.bind(this);
        this.handleHomePrice = this.handleHomePrice.bind(this);
        this.handleCommission = this.handleCommission.bind(this);
        this.handleBrokerPrct = this.handleBrokerPrct.bind(this);
        this.handleBrokerFixed = this.handleBrokerFixed.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    componentDidMount(){
        this.recalcResults();
    }

    handleSlide(e){
        this.setState({numberOfLeads:e});
        var that = this;
        setTimeout(function() { that.recalcResults(); }, 100);
        
    }

    handleHomePrice(e){
        this.setState({avgHomePrice:e.target.value});
    }

    handleCommission(e){
        console.log(e);
        this.setState({commissionPrct:e.target.value});
    }

    handleBrokerPrct(e){
        this.setState({brokerFeesPrct:e.target.value});
    }

    handleBrokerFixed(e){
        this.setState({brokerFeesFixed:e.target.value});
    }

    handleInputChange(e){
        this.recalcResults();
    }

    recalcResults(){
        if(this.state.typeOfLead === "blend"){
            var incomePerLead = 0;
            var brokerFees = 0;
            var netIncome = 0;

            // table for lead price
            var leadPrice = 26;
            if(this.state.avgHomePrice < 1000000){
                leadPrice = 22;
            }
            if(this.state.avgHomePrice < 750000){
                leadPrice = 20;
            }
            if(this.state.avgHomePrice < 500000){
                leadPrice = 17;
            }
            if(this.state.avgHomePrice < 300000){
                leadPrice = 12;
            }
            this.setState({costPerLead:leadPrice});

            incomePerLead = this.state.avgHomePrice * (this.state.commissionPrct / 100);
            brokerFees = (incomePerLead * (this.state.brokerFeesPrct / 100)) + parseFloat(this.state.brokerFeesFixed);
            netIncome = incomePerLead - brokerFees;
            this.setState({netIncomePerLead:netIncome});
        }

        // Calc potential income
        var totalLeadSpend = this.state.costPerLead * this.state.numberOfLeads;
        var potentialTotal = netIncome * this.state.numberOfLeads;
        var atThreePrct = (potentialTotal * 0.03) - (this.state.costPerLead * this.state.numberOfLeads);
        var atFivePrct = (potentialTotal * 0.05) - (this.state.costPerLead * this.state.numberOfLeads);
        this.setState({netTotalAtThree:atThreePrct, netTotalAtFive:atFivePrct, totalLeadSpend: totalLeadSpend});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.row}>
                    <div className={classes.col} style={{textAlign:"center",marginBottom:"30px"}}>
                        <h1 style={{fontSize:"28px"}}>Lead Calculator</h1>
                        <span style={{color:"#999999"}}>tag line </span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <div style={{width:"300px",height:"20px"}}>
                            <Slider min={this.state.minLeads} max={this.state.maxLeads} defaultValue={this.state.numberOfLeads} onChange={this.handleSlide} onBlur={this.handleInputChange}/>
                        </div>
                        <div style={{marginBottom:"40px"}}>
                            <h2>Number of Leads: {this.state.numberOfLeads}</h2>
                        </div>
                        <div>
                            <h2>Average Home Price in your Market:</h2>
                            <div className={classes.inputLabel}>
                            $<input style={{width:"30%"}} className={classes.inputControl} value={this.state.avgHomePrice} onChange={this.handleHomePrice} onBlur={this.handleInputChange}/>
                            </div>
                        </div>
                        <div>
                            <h2>Your commission:</h2>
                            <div className={classes.inputLabel}>
                            <input style={{width:"15%"}} className={classes.inputControl} value={this.state.commissionPrct} onChange={this.handleCommission} onBlur={this.handleInputChange} />%
                            </div>
                        </div>
                        <div>
                            <h2>Broker/Agency Fees:</h2>
                            <div className={classes.inputLabel}>
                            <input style={{width:"15%"}} className={classes.inputControl} value={this.state.brokerFeesPrct} onChange={this.handleBrokerPrct} onBlur={this.handleInputChange} />%
                            +
                            $<input style={{width:"25%"}} className={classes.inputControl} value={this.state.brokerFeesFixed} onChange={this.handleBrokerFixed} onBlur={this.handleInputChange} /> (fixed)
                            </div>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div style={{marginBottom:"20px"}}>
                            <div style={{fontSize:"30px"}}>
                                ${this.state.totalLeadSpend.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                            </div>
                            <div style={{fontSize:"16px",color:"#999999"}}>
                                Total Lead Spend
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <div style={{fontSize:"30px"}}>
                                ${this.state.netIncomePerLead.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                            </div>
                            <div style={{fontSize:"16px",color:"#999999"}}>
                                Potential income per lead
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <div style={{fontSize:"30px"}}>${this.state.costPerLead.toFixed(2)}</div>
                            <div style={{fontSize:"16px",color:"#999999"}}>
                                Average cost per lead
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <div style={{fontSize:"30px"}}>
                                ${this.state.netTotalAtThree.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                            </div>
                            <div style={{fontSize:"16px",color:"#999999"}}>
                                Total Income at 3% Conversion
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <div style={{fontSize:"30px"}}>
                                ${this.state.netTotalAtFive.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                            </div>
                            <div style={{fontSize:"16px",color:"#999999"}}>
                                Total Income at 5% Conversion
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )}
    }

export default withStyles((theme) => ({
  root: {
    padding: "40px 12px",
    justifyContent: "center",
  },
  row:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1080px",
    fontWeight: "600",
    alignItems: "flex-start",
    [theme.breakpoints[900]]: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        textAlign: "left",
        fontSize: "20px",
      },
  },
  col:{
    flexGrow: "1",
    width:"100%",
    [theme.breakpoints[900]]: {
        width:"50%",
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
  inputControl:{
    padding: ".275rem .65rem",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    fontSize: "18px"
  },
  inputLabel:{
      marginTop:"10px",
      marginBottom:"10px",
      color:"#666666",
      fontSize:"18px"
  }
}))(LeadgenCalc);
