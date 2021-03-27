# internship-problemProblem Statement


Consider a Company XYZ which provides Transportation services. They are planning to provide their services online by having a mobile application for the same. Your Project Manager has assigned you the following tasks.


Task Allocated 


Customer and Drivers Sign-up/Sign-in facility using Phone number or Email.
Driver allocation for the customer.


Driver Allocation Criteria


Nearest Driver will be  allocated based on the customer's source location. 
In the first iteration, Drivers available within 2 km radius from the customer's location would be considered. If none available then the next iteration would be 4 km and/or 6 km.
If no drivers are available within 6 km then cancel the request automatically. 
Incase of multiples, higher priority should be given to the rider with the lowest number of trips for that day. Next priority should be given based on  Driver’s ratings. If still you have multiple results, fetch the first record as the Driver to be allocated.
