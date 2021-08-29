# ecommerce 📦
 
### `About:`
A full-stack e-commerce website. Django handles the backend for managing users, products, and orders, stores and retrieves the data out of a database and serves up an API for the frontend to communicate with.  The frontend features React for the user interface and uses Redux for state management.

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
