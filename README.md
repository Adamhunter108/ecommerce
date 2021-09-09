# ecommerce 📦
 
### `About:`
A full-stack e-commerce website. The backend is built using the Python framework Django.  Django is responsible for managing users, products, orders, and for storing and retrieving data out of the database.  Django REST framework is being used to build, customize and serve an API for the frontend to communicate with.  The frontend features React for the user interface and uses Redux for state management.  

### `Run Locally:`
#### `Requirements:`
* Python
* Node.js
#### `Frontend:`
* In root directory of `frontend`, install developer dependencies:<br> `npm i` <br>
* Start frontend Node.js server:<br> `npm start` <br>
#### `Backend:` <br>
* In root directory of `backend`, create a virtual environment:<br>
`virtualenv venv` <br>
* Activate the virtual environment: <br>
`source venv/bin/activate` (if on Mac or Linux) <br>
`c:\>c:\Python35\python -m venv c:\path\to\venv` (if on Windows) <br>
* Install dependencies: <br>
`pip install -r requirements.txt` <br>
* Start the backend Django server: <br>
`python manage.py runserver`
