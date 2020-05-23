var ApplePaySession = {
  canMakePayments: function() {
    ApplePaySession.applePayDetectorDetected();
  },

  canMakePaymentsWithActiveCard: function(merchantId) {
    return new Promise((resolutionFunc, rejectionFunc)=>{
      resolutionFunc(false);
    });
  },

  applePayDetectorDetected: function() {
    //TODO: Find out how to tell the user that this website supports Apple Pay
    //Change the icon to show Apple Pay is supported.
    console.log("Hurrah!!!");
  }
};

window.wrappedJSObject.ApplePaySession = cloneInto(
  ApplePaySession,
  window,
  {cloneFunctions: true});
