import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Slider, { Range } from 'rc-slider';
import '../components/slider.css'
import ArrowIcon from '../images/icon-teal-roundarrow.png';
import EqualsIcon from '../images/icon-teal-equals.png';
import FormLeadgenCalc from '../components/FormLeadgenCalc';
import LeadsIcon from "../images/leads_icon.png";

const Handle = Slider.Handle;


class LeadgenCalc extends Component {
    constructor() {
        super();
        this.state = {
            numberOfLeads: 50,
            minLeads: 10,
            maxLeads: 200,
            minPrice: 750,
            maxPrice: 10000,
            startPrice: 1000,
            currentSpend: 1000,
            avgHomePrice: 200000,
            commissionPrct: 3,
            brokerFeesPrct: 25,
            brokerFeesFixed: 0,
            costPerLead: 20,
            netIncomePerLead: 0,
            netTotal: 0,
            totalLeadSpend: 0,
            conversionRate: 3,
            typeOfLead: "blend", // either "blend" or "seller", changes the price per lead
            showForm: false,
        };
        this.handleSlide = this.handleSlide.bind(this);
        this.handleConversionSlide = this.handleConversionSlide.bind(this);
        this.handleHomePrice = this.handleHomePrice.bind(this);
        this.handleCommission = this.handleCommission.bind(this);
        this.handleBrokerPrct = this.handleBrokerPrct.bind(this);
        this.handleBrokerFixed = this.handleBrokerFixed.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleShowForm = this.handleShowForm.bind(this);
      }

    componentDidMount(){
        this.recalcResults();
    }

    handleShowForm(e){
        this.setState({showForm:true});
    }

    handleSlide(e){
        this.setState({currentSpend:e});
        var that = this;
        setTimeout(function() { that.recalcResults(); }, 100);
    }

    handleConversionSlide(e){
        this.setState({conversionRate:e});
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
            var numberOfLeads = 0;

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

            numberOfLeads = Math.floor((this.state.currentSpend / 2) / leadPrice);

            incomePerLead = this.state.avgHomePrice * (this.state.commissionPrct / 100);
            brokerFees = (incomePerLead * (this.state.brokerFeesPrct / 100)) + parseFloat(this.state.brokerFeesFixed);
            netIncome = incomePerLead - brokerFees;
            this.setState({netIncomePerLead:netIncome, numberOfLeads:numberOfLeads});
        }

        // Calc potential income
        //var totalLeadSpend = this.state.costPerLead * this.state.numberOfLeads;
        var totalLeadSpend = this.state.currentSpend;
        var potentialTotal = netIncome * this.state.numberOfLeads;
        var calculated = (potentialTotal * (this.state.conversionRate/100)) - (this.state.costPerLead * this.state.numberOfLeads);
        this.setState({netTotal:calculated, totalLeadSpend: totalLeadSpend});
    }

    render() {
        const { classes } = this.props;

        if(this.state.showForm){
            return(
                <div>
                    <FormLeadgenCalc />
                </div>
            )
        }
        else{

            return (
                <div className={classes.root}>
                    <div className={classes.row}>
                        <div className={classes.col} style={{textAlign:"center",marginBottom:"40px"}}>
                            <h1 style={{color:"#55c3ba",fontSize:"33px",marginBottom:"20px"}}>Lead Generation ROI Calculator</h1>
                            Insert a few details, along with what you have to invest in monthly lead generation, to calculate potential income.  Wow!
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.col}>
                            <div style={{}}>
                                <h2>How much can you spend on monthly leads?</h2>
                                <div style={{fontSize:"12px",color:"#aaaaaa"}}>(Note:  Minimum of $750/m)</div>
                            </div>
                            <div style={{width:"90%",marginBottom:"40px"}}>
                                <Slider min={this.state.minPrice} max={this.state.maxPrice} defaultValue={this.state.startPrice} onChange={this.handleSlide} onBlur={this.handleInputChange} 
                                    style={{margin:"10px"}} />
                                <div style={{color:"rgb(153, 153, 153)"}}>
                                ${this.state.totalLeadSpend.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}/m
                                </div>
                            </div>
                            
                            <div style={{}}>
                                <h2>Your average lead conversion rate:</h2>
                            </div>
                            <div style={{width:"90%",marginBottom:"20px"}}>
                                <Slider min={1} max={10} defaultValue={this.state.conversionRate} onChange={this.handleConversionSlide} onBlur={this.handleInputChange}
                                    style={{margin:"10px"}} />
                                <div style={{color:"rgb(153, 153, 153)"}}>
                                {this.state.conversionRate}%
                                </div>
                            </div>
                            <div style={{color:"rgb(153, 153, 153)",marginTop:"20px",marginBottom:"20px"}}>
                                <hr style={{marginRight:"20px"}}/>
                            </div>
                            <div>
                                <h2>Average home price in your market:</h2>
                                <div className={classes.inputLabel}>
                                $<input style={{width:"30%"}} className={classes.inputControl} value={this.state.avgHomePrice} onChange={this.handleHomePrice} onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div>
                                <h2>Your average commission:</h2>
                                <div className={classes.inputLabel}>
                                <input style={{width:"15%"}} className={classes.inputControl} value={this.state.commissionPrct} onChange={this.handleCommission} onBlur={this.handleInputChange} />%
                                </div>
                            </div>
                            <div>
                                <h2>Broker/agency fees:</h2>
                                <div className={classes.inputLabel}>
                                <input style={{width:"15%"}} className={classes.inputControl} value={this.state.brokerFeesPrct} onChange={this.handleBrokerPrct} onBlur={this.handleInputChange} />%
                                +
                                $<input style={{width:"25%"}} className={classes.inputControl} value={this.state.brokerFeesFixed} onChange={this.handleBrokerFixed} onBlur={this.handleInputChange} /> (fixed)
                                </div>
                            </div>
                        </div>
                        <div className={classes.col}>
                            <div style={{backgroundColor:"#8bd0ca29",padding:"10px",borderRadius:"4px",border:"1px #55c3ba solid",position:"relative"}}>
                                <img src={ArrowIcon} style={{position: "absolute",left: "20px",top: "20px"}} />
                                <img src={ArrowIcon} style={{position: "absolute",left: "20px",top: "100px"}} />
                                <img src={EqualsIcon} style={{position: "absolute",left: "30px",top: "210px"}} />
                                <img src={LeadsIcon} style={{position: "absolute",right: "10px",top: "10px", width: "130px"}} />
                                <div style={{marginLeft:"70px"}}>
                                    <div style={{marginBottom:"20px"}}>
                                        <div style={{fontSize:"30px"}}>
                                            ${this.state.totalLeadSpend.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}/m
                                        </div>
                                        <div style={{fontSize:"16px",color:"#999999"}}>
                                            Your monthly lead spend
                                        </div>
                                    </div>
                                    <div style={{marginBottom:"20px"}}>
                                        <div style={{fontSize:"30px"}}>{this.state.numberOfLeads}</div>
                                        <div style={{fontSize:"16px",color:"#999999"}}>
                                        Monthly average number of leads
                                        </div>
                                    </div>
                                    <div style={{marginBottom:"20px"}}>
                                        <div style={{fontSize:"30px"}}>
                                            ${this.state.netIncomePerLead.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                                        </div>
                                        <div style={{fontSize:"16px",color:"#999999"}}>
                                            Income potential per lead
                                        </div>
                                    </div>
                                    
                                    <div style={{marginBottom:"20px"}}>
                                        <div style={{fontSize:"30px",color:"#f15953"}}>
                                            ${this.state.netTotal.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                                        </div>
                                        <div style={{fontSize:"16px",color:"#999999"}}>
                                            Net Income at a {this.state.conversionRate}% Conversion
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginTop:"50px",textAlign:"center",lineHeight: "initial"}}>
                                    Ready to start making MORE MONEY?
                                        <button className={classes.buttonLink} onClick={this.handleShowForm}>Yes! I want Elevate leads</button>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div style={{textAlign:"center",fontSize:"12px",color:"#aaaaaa",marginTop:"30px"}}>
                    The numbers above are estimates only.  For an accurate cost of leads in your specific market, contact an Elevate Lead Generation Specialist today.
                    </div>
                </div>
            )
        }
        }
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
  },
  buttonLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
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
}))(LeadgenCalc);
