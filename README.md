# ecommerce 📦
 

### `About:`
A fully functional e-commerce website that features user account registration and management functionality, a checkout process where users can add items to a cart, place orders, pay for orders with PayPal or a credit card and leave public
item reviews. The website also features admin functionality for managing all users, products, inventory and orders from the frontend.

This is a Django web-app. Django REST framework is being used to serve an API for the frontend to communicate with. The frontend features React for the user interface, Bootstrap for UI styling and Redux for state management. The live demo is using a PostgreSQL database hosted on AWS. The images are stored in AWS S3 buckets, the project is deployed via Heroku and PayPal is set to developer sandbox.

The `main` git branch uses an SQLite database for ease of running the project locally.

---
### `View Live:`
[thirtysixchambers.herokuapp.com](https://thirtysixchambers.herokuapp.com/)

---
### `Tech Stack:`

`Frontend:`
| JavaScipt | Node.js | React | Redux | Bootstrap |
| :----: | :----: | :----: | :----: | :----: | 
| <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" width="50" height="50"/> |  

`Backend:`
| Python | Django | PostgreSQL | SQLite |
| :----: | :----: | :----: | :----: | 
| <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/django.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/sqlite.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" width="50" height="50"/> |

| AWS | Heroku |
| :----: | :----: | 
| <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" width="50" height="50"/> | <img src="https://cdn.worldvectorlogo.com/logos/heroku-4.svg" width="50" height="50"/> |
---
### `Run Locally:`

#### `Requirements:`
* Python 3   <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" width="25" height="25"/>

<!-- * Node.js <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" width="25" height="25"/>
 #### `Frontend:`
* In root directory of `frontend`, install developer dependencies:<br> `npm i` <br>
* Start frontend Node.js server:<br> `npm start` <br>
#### `Backend:` <br>
Don't need anymore bc of merged project -->

<!-- made this easier to read/follow -->
<!-- * In root directory of `backend`, create a virtual environment:<br>
`virtualenv venv` <br>
* Activate the virtual environment: <br>
`source venv/bin/activate` (if on Mac or Linux) <br>
`c:\>c:\Python35\python -m venv c:\path\to\venv` (if on Windows) <br>
* Install dependencies: <br>
`pip install -r requirements.txt` <br>
*  Migrate to the SQLite database:<br>
`python manage.py migrate`
* Start the backend Django server: <br>
`python manage.py runserver` -->

After downloading or cloing into this repository:
```bash
$ # Change into the backend directory 
$ cd backend
$
$ # Create virtual environment
$ virtualenv venv
$ 
$ # Activate virtual environment
$ # If on Mac or Linux
$  source venv/bin/activate
$ # If on Windows
$ c:\>c:\Python35\python -m venv c:\path\to\venv
$
$ # Install dependencies
$ pip install -r requirements.txt
$ 
$ # Connect to SQLite database
$ python manage.py migrate
$
$ # Start the Django development server
$ python manage.py runserver
```
