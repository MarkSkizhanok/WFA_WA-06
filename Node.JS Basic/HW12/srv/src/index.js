
const http = require('http');
var Datastore = require('nedb');
const ODataServer = require('simple-odata-server');
const Adapter = require('simple-odata-server-nedb');
var db = new Datastore({
    inMemoryOnly: true
});

var model = {
    namespace: "jsreport",
    entityTypes: {
        "Ultrabook": {
            "_id": {
                "type": "Edm.String",
                key: true
            },
            "manufacturer": {
                "type": "Edm.String"
            },
            "coreNumber": {
                "type": "Edm.Int"
            },
            "ramSize": {
                "type": "Edm.Int"
            },
            "hddSize": {
                "type": "Edm.Int"
            },
            "discreteGraphicsCard": {
                "type": "Edm.Int"
            },
        }
    },
    entitySets: {
        "ultrabooks": {
            entityType: "jsreport.UltrabookType"
        }
    }
};

var odataServer = ODataServer("http://localhost:2403")
    .model(model)
    .adapter(Adapter(function (es, cb) {
        cb(null, db)
    }));


http.createServer(odataServer.handle.bind(odataServer)).listen(2403);