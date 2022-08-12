var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var ec2 = new AWS.EC2();

var tag = {
    Filters: [{
      Name: "tag:Name", 
      Values: [
         "JCTF-Bot"
    ]}]
};

async function stop_instance(tag) {
    try {
        const instanceData = await ec2.describeInstances(tag).promise();
        const instanceId = JSON.stringify(instanceData.Reservations[0].Instances[0].InstanceId).replaceAll('"','');
        var params = {
            InstanceIds: [instanceId]
        }
        ec2.stopInstances(params, function(err, data) {
            if (err) console.log(err, err.stack);
            else console.log("Success\n", data);
        })
    } catch (error) {
        console.log(error);
    }
}

async function start_instance(tag) {
    try {
        const instanceData = await ec2.describeInstances(tag).promise();
        const instanceId = JSON.stringify(instanceData.Reservations[0].Instances[0].InstanceId).replaceAll('"','');
        var params = {
            InstanceIds: [instanceId]
        }
        ec2.startInstances(params, function(err, data) {
            if (err) console.log(err, err.stack);
            else console.log("Success\n", data);
        })
    } catch (error) {
        console.log(error);
    }
}

// terminate, reboot, run (create)

stop_instance(tag);