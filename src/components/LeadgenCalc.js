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
            numberOfLeads: 52,
            minLeads: 10,
            maxLeads: 200,
            minPrice: 750,
            maxPrice: 10000,
            startPrice: 1000,
            currentSpend: 1000,
            avgHomePrice: 200000,
            commissionPrct: 3,
            brokerFeesPrct: 0,
            brokerFeesFixed: 0,
            costPerLead: 12,
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

            numberOfLeads = Math.floor((this.state.currentSpend - 375) / leadPrice);

            incomePerLead = this.state.avgHomePrice * (this.state.commissionPrct / 100);
            brokerFees = (incomePerLead * (this.state.brokerFeesPrct / 100)) + parseFloat(this.state.brokerFeesFixed);
            netIncome = incomePerLead ;
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

            var closeLeadText = 'less than 1 lead';
            var closedLeads = Math.floor((this.state.conversionRate/100) * this.state.numberOfLeads);
            console.log("Closed: "+closedLeads);
            if(closedLeads >= 1){
                var nextStep = closedLeads + 1;
                closeLeadText = closedLeads+"-"+nextStep+" leads";
            }

            var roi = Math.round((this.state.netTotal - this.state.totalLeadSpend) / this.state.totalLeadSpend * 100);
            var yearIncome = this.state.netTotal * 12;

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
                            <div style={{width:"95%",marginBottom:"40px"}}>
                                <Slider step={250} marks={{1000:'',2000:'',3000:'',4000:'',5000:'',6000:'',7000:'',8000:'',9000:''}} min={this.state.minPrice} max={this.state.maxPrice} defaultValue={this.state.startPrice} onChange={this.handleSlide} onBlur={this.handleInputChange} 
                                    className={classes.sliderControl} />
                                <div  className={classes.sliderLabel}>
                                ${this.state.totalLeadSpend.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}/m
                                </div>
                            </div>
                            
                            <div style={{}}>
                                <h2>Your average lead conversion rate:</h2>
                            </div>
                            <div style={{width:"95%",marginBottom:"20px"}}>
                                <Slider marks={{2:'',3:'',4:'',5:'',6:'',7:'',8:'',9:''}} min={1} max={10} defaultValue={this.state.conversionRate} onChange={this.handleConversionSlide} onBlur={this.handleInputChange}
                                    className={classes.sliderControl} />
                                <div className={classes.sliderLabel}>
                                {this.state.conversionRate}%
                                </div>
                            </div>
                            <div style={{color:"rgb(153, 153, 153)",marginTop:"20px",marginBottom:"20px"}}>
                                <hr style={{marginRight:"20px",marginBottom: "30px",borderTop: "1px #e6e6e6 solid"}}/>
                            </div>
                            <div style={{marginBottom:"30px"}}>
                            <div style={{width:"60%",display:"inline-block"}}>
                                <h2>Average home price in your market:</h2>
                                <div className={classes.inputLabel}>
                                $<input style={{width:"60%",background: "#f3f7f7",marginLeft:"6px",marginRight:"6px"}} className={classes.inputControl} value={this.state.avgHomePrice} onChange={this.handleHomePrice} onBlur={this.handleInputChange}/>
                                </div>
                            </div>
                            <div style={{width:"40%",display:"inline-block"}}>
                                <h2>Your average commission:</h2>
                                <div className={classes.inputLabel}>
                                <input style={{width:"25%",background: "#f3f7f7",marginLeft:"6px",marginRight:"6px"}} className={classes.inputControl} value={this.state.commissionPrct} onChange={this.handleCommission} onBlur={this.handleInputChange} />%
                                </div>
                            </div>
                            </div>
                            {/*
                            <div>
                                <h2>Broker/agency fees:</h2>
                                <div className={classes.inputLabel}>
                                <input style={{width:"15%"}} className={classes.inputControl} value={this.state.brokerFeesPrct} onChange={this.handleBrokerPrct} onBlur={this.handleInputChange} />%
                                +
                                $<input style={{width:"25%"}} className={classes.inputControl} value={this.state.brokerFeesFixed} onChange={this.handleBrokerFixed} onBlur={this.handleInputChange} /> (fixed)
                                </div>
                            </div>
                            */}
                        </div>
                        <div className={classes.col}>
                            <div style={{backgroundColor:"#95bbb829",padding:"10px",borderRadius:"4px",border:"1px #b3ccca solid",position:"relative"}}>
                                <img src={ArrowIcon} style={{position: "absolute",left: "20px",top: "20px"}} />
                                <img src={ArrowIcon} style={{position: "absolute",left: "20px",top: "100px"}} />
                                <img src={EqualsIcon} style={{position: "absolute",left: "30px",top: "210px"}} />
                                <img src={LeadsIcon} className={classes.leadIcon} style={{position: "absolute",right: "10px",top: "10px", width: "130px"}} />
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
                                    {/*
                                    <div style={{marginBottom:"20px"}}>
                                        <div style={{fontSize:"30px"}}>
                                            ${this.state.netIncomePerLead.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                                        </div>
                                        <div style={{fontSize:"16px",color:"#999999"}}>
                                            Income potential per lead
                                        </div>
                                    </div>
                                    */}
                                    
                                    <div style={{marginBottom:"20px"}}>
                                        <div style={{fontSize:"30px"}}>
                                            ${this.state.netTotal.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})} 
                                            {/*
                                            <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px",color:"#55c3ba"}}>
                                                &rarr;
                                            </div>
                                            
                                            <div style={{display:"inline-block"}}> 
                                                {roi}% ROI
                                            </div>	
                                            */}
                                        </div>
                                        <div style={{fontSize:"16px",color:"#999999"}}>
                                            Avg. monthly income at {this.state.conversionRate}% Conversion
                                        </div>
                                    </div>
                                    <div style={{marginBottom:"20px"}} className={classes.finalNumberBox}>
                                        <div style={{fontSize:"30px",color:"#FFFFFF"}}>
                                            ${yearIncome.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})} 
                                            <div style={{display:"inline-block",fontSize:"15px",marginLeft:"10px"}}>
                                            ({roi}% ROI)
                                            </div>
                                        </div>
                                        <div style={{fontSize:"16px",color:"#e6fffd",marginTop:"10px"}}>
                                            12 month income potential
                                            <div style={{fontSize:"12px",color:"#e6fffd",marginTop:"10px"}}>Closing {closeLeadText} per month</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginTop:"50px",textAlign:"center",lineHeight: "initial"}}>
                                    Ready to start making MORE MONEY?
                                        <button className={classes.buttonLink} onClick={this.handleShowForm} style={{backgroundColor:"#e78023"}}>Yes! I want Elevate leads</button>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div style={{textAlign:"center",fontSize:"12px",color:"#aaaaaa",marginTop:"30px"}}>
                    The numbers above are estimates only.  For an accurate cost of leads in your specific market, contact an Elevate Lead Generation Specialist today.<br/>
                    <br/>Based on a single agent/license fee. For teams and broker license fees, please contact us.
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
  leadIcon:{
    zIndex: "-100",
    opacity: "0.2",
    [theme.breakpoints[900]]: {
        opacity: "1"
    }
  },
  sliderLabel:{
    textAlign:"center",
    color:"rgb(153, 153, 153)",
    marginTop:"30px",
    fontSize:"20px",
    [theme.breakpoints[900]]: {
        marginTop:"10px",
        textAlign:"right",
        fontSize:"16px"
    }
  },
  sliderControl:{
    marginTop:"30px",
    [theme.breakpoints[900]]: {
        marginTop:"10px",
    }
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
  finalNumberBox:{
    backgroundColor: "#55c3ba",
    padding: "14px",
    width: "90%",
    textAlign: "center",
    borderRadius: "8px",
    paddingTop: "10px",
  }
}))(LeadgenCalc);
