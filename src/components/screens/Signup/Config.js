const config = {
   email: {
      isRequired: "Email field is required!",
      isEmail: "Valid emails only, please!"
   },
   password: {
      isRequired: "Password field required!",
      isMinLength: {
         message: "16+ character password or GTFO",
         length: 6
      }
   },
   firstname: {
      isRequired: 'You must provide a firstname'
   },
   lastname: {
      isRequired: 'You must provide a lastname'
   },
   mobile:{
      isRequired: 'Mobile number is required',
      isNumber: 'You must provide a number'
   }
};

export default config;