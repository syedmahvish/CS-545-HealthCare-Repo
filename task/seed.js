var dbConnection = require("../config/mongoConnection");
var hospitalData = require('../data/hospitals')
var doctorData = require('../data/doctors')
var userData = require('../data/users')
async function main() {
    var db = await dbConnection();
    await db.dropDatabase();
    //hospitals
    let hos1 = {
      "name": "Riverside hospital",
      "address":"1485 Bloomfield St, Hoboken, NJ ",
      "holidays":["Sunday"]
      };
    let hos2 = {
        "name": "Christ Hospital",
        "address":"176 Palisade Avenue Jersey City, New Jersey",
        "holidays":["Saturday", "Sunday"]
        };
    let hos3 = {
          "name": "Essex County Hospital Center",
          "address":"Cedar Grove, New Jersey",
          "holidays":["Saturday", "Sunday"]
      };
     let hos4 = {
        "name": "Pascack Valley Medical Center",
        "address":"250 Old Hook Road, Westwood, New Jersey",
        "holidays":["Sunday"]
    };
    let hos5 = {
      "name": "Jefferson Cherry Hill Hospital",
      "address":"Cherry Hill, NJ 08002",
      "holidays":["Saturday", "Sunday"]
  };
  let hos6 = {
    "name": "Jefferson Stratford Hospital",
    "address":"18 East Laurel Road Stratford",
    "holidays":["Saturday", "Sunday"]
};
let hos7 = {
  "name": "Jefferson Washington Township Hospital",
  "address":"435 Hurffville-Cross Keys Road Turnersville",
  "holidays":["Sunday"]
};
let hos8 = {
  "name": "Jersey City Medical Center",
  "address":"355 Grand Street, Jersey City, Hudson County",
  "holidays":["Sunday"]
};
let hos9 = {
  "name": "East Mountain Hospital",
  "address":" 252 County Road 601, Belle Mead, NJ",
  "holidays":["Sunday"]
};
let hos10 = {
  "name": "East Orange General Hospital",
  "address":"80 S Munn Ave, East Orange, NJ",
  "holidays":["Sunday"]
};
    
      var hospital1 = await hospitalData.addHospitals(hos1);
      var hospital2 = await hospitalData.addHospitals(hos2);
      var hospital3 = await hospitalData.addHospitals(hos3);
      var hospital4 = await hospitalData.addHospitals(hos4);
      var hospital5 = await  hospitalData.addHospitals(hos5);
      var hospital6 = await hospitalData.addHospitals(hos6);
      var hospital7 = await hospitalData.addHospitals(hos7);
      var hospital8 = await  hospitalData.addHospitals(hos8);
      var hospital9 = await hospitalData.addHospitals(hos9);
      var hospital10 = await  hospitalData.addHospitals(hos10);


      // doctors

      let doc1= {
         "name": "Dr. Shalini",
         "gender":"Female",
        "specialization":"gynecologist",
        "imageURL":"https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=338&ext=jpg&ga=GA1.2.1512130935.1606241087",
        "education":"MBBS, MD",
        "medical_registration_verified":true,
        "experience":"12 years",
        "phoneNumber": "+1(541) 754-3010",
        "description":"Dr.Shalini is a gynecologist, in Washington street, New Jersey and has an"+
        "experience of 12 years in these fields.",
        "hospitals":[
        {
        "_id":hospital1._id,
        "available_slots":[
        "10:00 am", "11:00 am",
        "2:00 pm"],
        "fee": 100
        },
        {
        "_id":hospital5._id,
        "available_slots":[
        "3:00 pm", "4:00 pm", "7:00 pm", "8:00 pm"],
        "fee": 150
        }
        ]
      };
      var doctor1= await doctorData.addDoctors(doc1);
      await hospitalData.addDoctorsToHospital(doctor1, hospital1._id);
      await hospitalData.addDoctorsToHospital(doctor1, hospital5._id);

      let doc2= {
        "name": "Dr. Lisa Hadley",
        "gender":"Female",
       "specialization":"OB-GYN",
       "imageURL":"https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg?size=626&ext=jpg&ga=GA1.2.1512130935.1606241087",
       "education":"MD",
       "medical_registration_verified":true,
       "experience":"20 years",
       "description":"Dr. Lisa Hadleyis a OB-GYN, in New Jersey and has an"+
       "experience of 20 years in these fields.",
       "phoneNumber": "+1(541) 754-3010",
       "hospitals":[
       {
       "_id":hospital2._id,
       "available_slots":[
       "10:00 am", "11:00 am",
       "2:00 pm","3:00 pm", "4:00 pm"],
       "fee": 110
       }
       ]
     };
     var doctor2= await doctorData.addDoctors(doc2);
     await hospitalData.addDoctorsToHospital(doctor2, hospital2._id);
    
     let doc3= {
      "name": "Dr. Charles Pearson",
      "gender":"Male",
      
     "specialization":"Dentist",
     "imageURL":"https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.2.1512130935.1606241087",
     "education":"MBBS, MD",
     "medical_registration_verified":true,
     "experience":"17 years",
     "description":"Dr. Charles Pearson is a Dentist, in hoboken, New Jersey and has an"+
     "experience of 17 years in these fields.",
     "phoneNumber": "+1(541) 754-3010",
     "hospitals":[
     {
     "_id":hospital1._id,
     "available_slots":[
     "10:00 am", "11:00 am",
     "2:00 pm"],
     "fee": 100
     },
     {
     "_id":hospital5._id,
     "available_slots":[
     "3:00 pm", "4:00 pm"],
     "fee": 150
     },
     {
      "_id":hospital8._id,
      "available_slots":[
       "6:00 pm", "7:00 pm", "8:00 pm"],
      "fee": 80
      }
     ]
   };
   var doctor3= await doctorData.addDoctors(doc3);
   await hospitalData.addDoctorsToHospital(doctor3, hospital1._id);
   await hospitalData.addDoctorsToHospital(doctor3, hospital5._id);
   await hospitalData.addDoctorsToHospital(doctor3, hospital8._id);
   
   let doc4= {
    "name": "Dr. Jamie Bassel",
    "gender":"Male",
   
   "specialization":"Chiropractor",
   "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIJg4FqU83YCmH6nzJJmWMFVGvvQGEUQBTg&usqp=CAU",
   "education":"MBBS, MD",
   "medical_registration_verified":true,
   "experience":"13 years",
   "description":"Dr. Jamie Bassel is a Chiropractor, in New Jersey and has an"+
   "experience of 13 years in these fields.",
   "phoneNumber": "+1(541) 754-3010",
   "hospitals":[
   {
   "_id":hospital5._id,
   "available_slots":[
   "10:00 am", "11:00 am",
   "2:00 pm"],
   "fee": 100
   },
   {
   "_id":hospital6._id,
   "available_slots":[
   "3:00 pm", "4:00 pm"],
   "fee": 150
   },
   {
    "_id":hospital7._id,
    "available_slots":[
     "6:00 pm", "7:00 pm", "8:00 pm"],
    "fee": 80
    }
   ]
 };

 var doctor4= await doctorData.addDoctors(doc4);
 await hospitalData.addDoctorsToHospital(doctor4, hospital5._id);
 await hospitalData.addDoctorsToHospital(doctor4, hospital6._id);
 await hospitalData.addDoctorsToHospital(doctor4, hospital7._id);

 let doc5= {
  "name": "Dr. Monica C. Martin",
  "gender":"Female",
 "specialization":"Cardiologist",
 "imageURL":"https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg?size=338&ext=jpg&ga=GA1.2.1512130935.1606241087",
 "education":"MBBS, MD",
 "medical_registration_verified":true,
 "experience":"11 years",
 "description":"Dr. Monica C. Martin is a Cardiologist, in New Jersey and has an"+
 "experience of 11 years in these fields.",
 "phoneNumber": "+1(541) 754-3010",
 "hospitals":[
 {
 "_id":hospital5._id,
 "available_slots":[
 "10:00 am", "11:00 am",
 "2:00 pm"],
 "fee": 100
 },
 {
 "_id":hospital6._id,
 "available_slots":[
 "3:00 pm", "4:00 pm"],
 "fee": 150
 },
 {
  "_id":hospital7._id,
  "available_slots":[
   "6:00 pm", "7:00 pm", "8:00 pm"],
  "fee": 80
  }
 ]
};
var doctor5= await doctorData.addDoctors(doc5);
await hospitalData.addDoctorsToHospital(doctor5, hospital5._id);
await hospitalData.addDoctorsToHospital(doctor5, hospital6._id);
await hospitalData.addDoctorsToHospital(doctor5, hospital7._id);

let doc6= {
  "name": "Dr. Michael Pollak",
  "gender":"Male",
 "specialization":"Primary Care Doctor",
 "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNc6njEDU_GDa19Ce1U21SZCuj3FJpJ9qCw&usqp=CAU",
 "education":"MBBS, MD",
 "medical_registration_verified":true,
 "experience":"10 years",
 "description":"Dr. Michael Pollak is a Primary Care Doctor, in New Jersey and has an"+
 "experience of 10 years in these fields.",
 "phoneNumber": "+1(541) 754-3010",
 "hospitals":[
 {
 "_id":hospital5._id,
 "available_slots":[
 "10:00 am", "11:00 am",
 "2:00 pm"],
 "fee": 100
 },
 {
 "_id":hospital6._id,
 "available_slots":[
 "3:00 pm", "4:00 pm"],
 "fee": 150
 },
 {
  "_id":hospital7._id,
  "available_slots":[
   "6:00 pm", "7:00 pm", "8:00 pm"],
  "fee": 80
  }
 ]
};
var doctor6= await doctorData.addDoctors(doc6);
await hospitalData.addDoctorsToHospital(doctor6, hospital5._id);
await hospitalData.addDoctorsToHospital(doctor6, hospital6._id);
await hospitalData.addDoctorsToHospital(doctor6, hospital7._id);

let doc7= {
  "name": "Dr. Prahlad Gadhavi",
  "gender":"Male",
 "specialization":"Primary Care Doctor",
 "imageURL":"data:image/jpeg;base64,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",
 "education":"MBBS, MD",
 "medical_registration_verified":true,
 "experience":"5 years",
 "description":"Dr. Prahlad Gadhavi is a Primary Care Doctor, in New Jersey and has an"+
 "experience of 5 years in these fields.",
 "phoneNumber": "+1(541) 754-3010",
 "hospitals":[
 {
 "_id":hospital5._id,
 "available_slots":[
 "10:00 am", "11:00 am",
 "2:00 pm"],
 "fee": 100
 },
 {
 "_id":hospital6._id,
 "available_slots":[
 "3:00 pm", "4:00 pm"],
 "fee": 150
 },
 {
  "_id":hospital7._id,
  "available_slots":[
   "6:00 pm", "7:00 pm", "8:00 pm"],
  "fee": 80
  }
 ]
};
var doctor7= await doctorData.addDoctors(doc7);
await hospitalData.addDoctorsToHospital(doctor7, hospital5._id);
await hospitalData.addDoctorsToHospital(doctor7, hospital6._id);
await hospitalData.addDoctorsToHospital(doctor7, hospital7._id);

let doc8= {
  "name": "Dr. Jonathan Dominguez",
  "gender":"Male",
 "specialization":"Primary Care Doctor",
 "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjlB7at5C2zSHGEDP3eb3QaVqFWU7SXUbhQ&usqp=CAU",
 "education":"MBBS, MD",
 "medical_registration_verified":true,
 "experience":"5 years",
 "description":"Dr. Jonathan Dominguez is a Primary Care Doctor, in New Jersey and has an"+
 "experience of 5 years in these fields.",
 "phoneNumber": "+1(541) 754-3010",
 "hospitals":[
 {
 "_id":hospital3._id,
 "available_slots":[
 "3:00 pm", "4:00 pm"],
 "fee": 150
 }
 ]
};
var doctor8= await doctorData.addDoctors(doc8);
await hospitalData.addDoctorsToHospital(doctor8, hospital3._id);

let doc9= {
  "name": "Dr. Deval Gadhvi",
  "gender":"Female",
 "specialization":"Primary Care Doctor",
 "imageURL":"https://t3.ftcdn.net/jpg/03/13/77/82/240_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg",
 "education":"MBBS, MD",
 "medical_registration_verified":true,
 "experience":"24 years",
 "description":"Dr. Deval Gadhvi is a Primary Care Doctor, in New Jersey and has an"+
 "experience of 24 years in these fields.",
 "phoneNumber": "+1(541) 754-3010",
 "hospitals":[
 {
 "_id":hospital9._id,
 "available_slots":[
 "10:00 am", "11:00 am",
 "2:00 pm"],
 "fee": 100
 },
 {
  "_id":hospital10._id,
  "available_slots":[
   "6:00 pm", "7:00 pm", "8:00 pm"],
  "fee": 80
  }
 ]
};
var doctor9= await doctorData.addDoctors(doc9);
await hospitalData.addDoctorsToHospital(doctor9, hospital9._id);
await hospitalData.addDoctorsToHospital(doctor9, hospital10._id);

let doc10= {
  "name": "Dr. Robert Mmereole",
  "gender":"Male",
  
 "specialization":"Primary Care Doctor",
 "imageURL":"data:image/jpeg;base64,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",
 "education":"MBBS, MD",
 "medical_registration_verified":true,
 "experience":"22 years",
 "description":"Dr. Robert Mmereole is a Primary Care Doctor, in New Jersey and has an"+
 "experience of 22 years in these fields.",
 "phoneNumber": "+1(541) 754-3010",
 "hospitals":[
 {
 "_id":hospital9._id,
 "available_slots":[
 "10:00 am", "11:00 am",
 "2:00 pm"],
 "fee": 100
 },
 {
  "_id":hospital10._id,
  "available_slots":[
   "6:00 pm", "7:00 pm", "8:00 pm"],
  "fee": 80
  }
 ]
};
var doctor10= await doctorData.addDoctors(doc10);
await hospitalData.addDoctorsToHospital(doctor10, hospital9._id);
await hospitalData.addDoctorsToHospital(doctor10, hospital10._id);

    await db.serverConfig.close();
}
main();