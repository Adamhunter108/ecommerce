# ecommerce 📦
 

### `About:`
A full-stack, fully functional e-commerce website. 

The website features account registration and login functionality.  Once a user is logged in they can place orders, pay for orders with PayPal (or credit card), and access a user profile screen where account information can be added or changed and a table of orders and order status can be viewed. The frontend also features admin abilities to manage users, products and orders.

This is a Django web-app.  Django REST framework is being used to build, customize and serve an API for the frontend to communicate with.  The frontend features React for the user interface, Bootstrap for UI styling and Redux for state management. 

The `main` git branch uses an SQLite database for ease of running the project locally. The `postgres` branch is using a live PostgreSQL database hosted on AWS.  The images on the `postgres` branch are hosted on AWS as well via S3 buckets and the entire branch is deployed live via Heroku.

### `View Live:`
[thirtysixchambers.herokuapp.com](https://thirtysixchambers.herokuapp.com/)

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

### `Run Locally:`
---
#### `Requirements:`
* Python 3   <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" width="25" height="25"/>
---
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

```bash
$ # Create virtual environment
$ virtualenv venv
$ 
$ # Activate virtual environment
$ # If on Mac or Linux
$  source venv/bin/activate
$ # If on Windows
$ c:\>c:\Python35\python -m venv c:\path\to\venv
$ 
$ # Connect to SQLite database
$ python manage.py migrate
$
$ # Start the Django development server
$ python manage.py runserver
```
