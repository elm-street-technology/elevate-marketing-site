import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Form = ({ props, children, classes, className }) => {
    const isSubmitting = false;
    return (
    <div className={classNames(classes.root, className)}>
        <form>
        <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            <div>
                <input type="text" name="first_name" id="first_name" placeholder="First Name" className={classes.field}/>
            </div>
            <div>
                <input type="text" name="last_name" id="last_name" placeholder="Last Name" className={classes.field} />
            </div>
            <div>
                <input type="text" name="email" id="email" placeholder="Email" className={classes.field} />
            </div>
            <div>
                <input type="text" name="phone" id="phone" placeholder="Phone" className={classes.field} />
            </div>
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
        };
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
    width: "60%",
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

}))(Form);
