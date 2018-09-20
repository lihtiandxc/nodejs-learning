var AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
var ec2 = new AWS.EC2();


exports.handler = (event, context, callback) => {
    // TODO implement
    //console.log(event)
    var params = {
        InstanceIds: [ /* required */
            'i-052ca87000a2691cc',
            'i-0a186c58cab30721a',
            'i-054dcf51799226e62',
            'i-056871016b9cf2320',
            /* more items */
        ],
        // AdditionalInfo: 'STRING_VALUE ',
        // DryRun: true || false
    };

    ec2.startInstances(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    });
};
