const config = {
  development: {
    odrs: "http://demo-odrs.1degree.org/v1/",
    odas: "http://demo.1degree.org/",
    odApiKey: "116a982084a50135de470e09a2d30796",
    basicAuth: "Basic ZGVtbzoxNm1pc3Npb24=",
    mailgun:{
      apiKey: "key-87a9f61957b37b2281094b647eb4d34e",
      domain: "email.asylumconnectcatalog.org"
    },
  },
  production: {
    odrs: "https://data.1degree.org/v1/",
    odas: "https://www.1degree.org/",
    odApiKey: "244a9ed0545c013590490614a1d2fcd4"
  }
};

//use ES5 for this because it is being imported into the local API scripts that aren't being transpiled
module.exports = config;
