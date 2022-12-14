var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var ec2 = new AWS.EC2();

var tag = {
    Filters: [{
      Name: "tag:Difficulty", 
      Values: [
         "easy"
    ]}]
};

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

async function terminate_instance(tag) {
    try {
        const instanceData = await ec2.describeInstances(tag).promise();
        const instanceId = JSON.stringify(instanceData.Reservations[0].Instances[0].InstanceId).replaceAll('"','');
        var params = {
            InstanceIds: [instanceId]
        }
        ec2.terminateInstances(params, function(err, data) {
            if (err) console.log(err, err.stack);
            else console.log("Success\n", data);
        })
    } catch (error) {
        console.log(error);
    }
}

async function run_instance(type) {
    var params = { 
        ImageId: "ami-090fa75af13c156b4", 
        InstanceType: "t2.micro", 
        KeyName: type, 
        MaxCount: 1, 
        MinCount: 1, 
        SecurityGroupIds: [
           "sg-0f4c17db3a74996bb"
        ], 
        SubnetId: "subnet-06dd0cd4ec50f5135", 
        TagSpecifications: [
           {
          ResourceType: "instance", 
          Tags: [
             {
            Key: "Difficulty", 
            Value: type
           },
           {
            Key: "Name",
            Value: "Easy Vuln Box"
           }
          ]
         }
        ]
       };
       try {
        ec2.runInstances(params, function(err, data) {
            if (err) console.log(err, err.stack);
            else console.log("Success\n", data);
        })
    } catch (error) {
        console.log(error);
    }
}

// terminate, reboot, run (create)
// start_instance(tag);
// stop_instance(tag);
// terminate_instance(tag);
// run_instance(tag.Filters[0].Values[0]);