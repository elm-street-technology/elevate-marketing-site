import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Form = ({ props, children, classes, className }) => {
    const isSubmitting = false;
    return (
    <div className={classNames(classes.root, className)}>
        <form>
        <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            <div id="contact_confirmation" className={classes.confirmationText}>
                
            </div>
            <input type="hidden" name="first_name" id="first_name" />
            <input type="hidden" name="last_name" id="last_name" />
            <input type="hidden" name="recipient_id" id="recipient_id" />
            <input type="hidden" name="email" id="email" />
            <div id="prefButtons">
                <button type="button" id="optin" className={classes.signUpBtn} disabled={isSubmitting}>
                    Yes, I would like to participate in the pilot!
                </button>
                <button type="button" id="optout" className={classes.signUpBtn} disabled={isSubmitting}>
                No, thank you.  I will pass on the pilot.
                </button>
            </div>
            <div className={classes.thankYouMsg} id="submitResult" style={{display:"none"}}></div>
        </div>

    </form>
    </div>
    );
};


if (typeof window != 'undefined') {
    window.onload = function (e) {
        findRecipient();

        $("#optin").click(function () {
            var recipient_id = $("#recipient_id").val();
            var email = $("#email").val();
            saveRecipToList(recipient_id, email, 123985);
            $("#prefButtons").hide();
        });

        $("#optout").click(function () {
            var recipient_id = $("#recipient_id").val();
            var email = $("#email").val();
            saveRecipToList(recipient_id, email, 123986);
            $("#prefButtons").hide();
        });

        $('#recipient_id').change(function(){
            var recipient_id = $("#recipient_id").val();
            var email = $("#email").val();
            loadData(recipient_id, email);
        });
    };
}

function loadData(recipient_id, email){
    var data = { recipient_id, email }

    if (recipient_id > 0) {
        makeApiCall(0, 'contacts/info/get_optfields', data, preLoad);
    }
}

function preLoad(data){
    let company = '';
    let address = '';
    let city = '';
    let state = '';
    let zip = '';

    data.data.forEach(function(optfield) {
        if(optfield.name == 'Address'){
            address = optfield.string_value;
        }
        if(optfield.name == 'City'){
            city = optfield.string_value;
        }
        if(optfield.name == 'State'){
            state = optfield.string_value;
        }
        if(optfield.name == 'Zip'){
            zip = optfield.string_value;
        }
        if(optfield.name == 'Company Name'){
            company = optfield.string_value;
        }
    })


    let contact_info = '';
    contact_info = $('#first_name').val()+" "+$("#last_name").val()+"<br/>";
    contact_info += $('#email').val()+"<br/>";
    contact_info += company+"<br/>";
    contact_info += address+"<br/>";
    contact_info += city+", "+state+" "+zip+"<br/>";

    $('#contact_confirmation').html(contact_info);
}

function showThankyouMessage(){
    $('#submitResult').html("Thank you. Your preference has been recorded.");
    $('#submitResult').show();
}

function saveRecipToList(recipient_id, email, list_id){
    var data = { recipient_id, email }
    if (list_id) {
        data['opt' + list_id] = 1;
        data.list_id = list_id;
    }

    if (recipient_id > 0 && list_id > 0) {
        makeApiCall(0, 'contacts/edit/update', data, showThankyouMessage);
    }
    if (recipient_id == 0 && list_id > 0) {
        makeApiCall(0, 'contacts/edit/add', data, showThankyouMessage);
    }
}

export default withStyles((theme) => ({
  root: {
    height: "300px",
  },

  signUpBtn: {
    width: "90%",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: "#55c3ba",
    borderRadius: "6px",
    padding: "12px",
    marginTop: "10px",
    marginBottom: "10px",
    textDecoration: "none",

  },
  thankYouMsg: {
    backgroundColor:"#eaeaea",
    padding:"10px",
    textAlign:"center"
  },
  confirmationText: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#666666",
    marginBottom:"20px",
  },

}))(Form);
