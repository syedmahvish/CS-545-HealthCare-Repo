# CS-545-HealthCare-Repo

Project name: CityHealthcare Provider

Group members:
Syed Mahvish, Shweta Singh, Priya Gupta , Samir Shah


Github: https://github.com/syedmahvish/CS-545-HealthCare-Repo


Software dependency:

1- To view application code: Access to Github account.

2-Visual studio code : To run application and its dependency

3-Browser : Google chrome, Firefox, Safari to view application.

Steps to run application:
1- Download Project from provided github link: https://github.com/syedmahvish/CS-545-HealthCare-Repo
2- Open Visual studio Code:
    1- Open project using File-> Open -> Select project
    2- Install dependency : Select Terminal -> new Terminal
        1- Install dependency using below command:
                    To start execute "npm install" to install dependenies
        2- Setup Backend (Collections= users, doctors, hospitals, appointments)
                    To seed file "npm run seed"
        3- Finally run project :
                    To run execute "npm start"
3- Open browser and got to address : "http://localhost:3000/"
                    
                    
DESCRIPTION:
The idea of healthcare provider application is to allow users to book online doctor’s appointment
through the website.

Core Features:
1. Book doctor’s appointment.
2. Search by doctor and hospitals.
3. Allow patients to make notes on what needs to be asked to a doctor prior to
appointment.

Main Page:
Access to list of all doctors using "Find doctor now". 
Specialist Doctors are displayed on main page with icon for each eg. Primary care, Dentist etc.
User will be able to see the list of doctors under each speciality.
User can locate and find all hospitals in New Jersey
Easy access to "Help" and "Covid-19 information"

Users:
Login, SignUp, Forgot Password, Reset Password.

Search by doctor:
User will be able to see the listings of doctors.
User will be able to search doctor by speciality.

Search by Hospitals: 
User will be able to search hospital to find the doctor.

Book Appointment:
User will be able to book appointment.

View Appointments:
Allow users to view all of their appointments.

Edit Appointment:
Allow users to edit date of the appointment and hospital in which doctors work.

Cancel Appointment:
User will be able to cancel the appointment.

Security: Login Authentication, data security.

Add notes:
Allows user to make a note to any of their appointments.

Extra Features:
1. Book lab tests: user will be able to book the lab test based on uploaded doctor prescription.
