# Connecting our Car-app to a REST-backend 

In this exercise you must rewrite the controller from exercise three to fetch data from a backend via a REST API.

Implement a simple REST API, using JAX-RS which can add, edit, delete and fetch cars. 

Use the factory given below as a substitute for the factory used in exercise 3.

 

**carApp**.**factory**(**'CarFactory'**, **function **() {
  **var getCarss **= **function **() {} **//Return
Cars from the server**
  **var deleteCar =
function (id) {};//Delete Car on the Server**

**  var addCar =function(newcar){};//Add Car on the Server**

**  var editCar =
function(car){}//Edit Car on the Server;**
  **return **{
​    **getCars**: *getCars*,
​    **deleteCar**: *deleteCar*,

​    **addCar**: *addCar,
*    **editCar**: *editCar
  *};
  });

** **

**Hints:**

**A small script to give you a few cars in thedatabase:**

insert intocar(id,model_year,registered,make,model,description,price)values(null,1996,'1999-4-11','Jeep','Grand Cherokee','Air, loaded',4799);

insert intocar(id,model_year,registered,make,model,description,price)values(null,2002,'2002-4-25','Ford','E350','ac, abs, moon',3000);

insert intocar(id,model_year,registered,make,model,description,price)values(null,2005,'2005-4-25','Chevy','Venture','none',7600);

 

**Gson and dates:**

If you have date problems with Gson when de-serializing your car, you should create your gson instance as below:

private staticfinal Gson gson = new GsonBuilder().

​          setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").

​          setPrettyPrinting().create();

** **

 