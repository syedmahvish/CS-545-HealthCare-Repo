
const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const hospitals = mongoCollections.hospitals;
const doctors = mongoCollections.doctors;
const { ObjectId } = require('mongodb');
const hospitalData = require('../data/hospitals')
const user = require("./users");

module.exports = {

  async getDoctor(id) {
    if (!id) throw 'You must provide an id to search for';
    if(typeof id !== 'string' && typeof id !== 'object') throw 'id must be a string or object';

    if(typeof id === 'string'){
     id = ObjectId.createFromHexString(id);
    }
   
    const docCollection = await doctors();
    const doc = await docCollection.findOne({ _id: id });
    if (doc === null) throw 'No doctor with that id.';
   //whole doc data
    return doc;

},
async getDoctorBySpeciality(speciality) {
  if (!speciality) throw 'You must provide an speciality to search for';
  if(typeof speciality !== 'string') throw 'specilaity must be a string';
 
  const docCollection = await doctors();
  const doc = await docCollection.find({ specialization : speciality }).toArray();
  if (doc === null) throw `No doctor with that specilaity : ${speciality}.`;

  return doc;
},

    async addDoctors(doctorData) {

    if (!doctorData) throw 'Doctor Data is not provided';

        const doctorsCollection = await doctors();
    
        const newInsertInformation = await doctorsCollection.insertOne(doctorData);
        if (newInsertInformation.insertedCount === 0) throw 'Insert failed';
  
        const newId = newInsertInformation.insertedId;  
        return this.getDoctor(newId);
      },

      async getDoctorsByHospital(hospital){
        return hospital.doctors;
      },

    async getAllDoctors(){
        const doctorsCollections = await doctors();
        const docsList = await doctorsCollections.find({}).toArray();
        return docsList;

    },

    async getDoctors(id) {
        if (!id) throw 'You must provide an id to search for';
        if(typeof id !== 'string' && typeof id !== 'object') throw 'id must be a string or object';
    
        if(typeof id === 'string'){
         id = ObjectId.createFromHexString(id);
        }
       
        const docCollection = await doctors();
        const arrayOfDoctors = await docCollection.find({_id:id}).toArray();
        return arrayOfDoctors;
    },

      
}