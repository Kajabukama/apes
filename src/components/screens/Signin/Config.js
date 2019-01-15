const config = {
   username: {
      isRequired: "Email field is required!",
      isEmail: "Valid emails only, please!"
   },
   password: {
      isRequired: "Password field required!",
      isMinLength: {
         message: "16+ character password or GTFO",
         length: 6
      }
   }
};

export default config;