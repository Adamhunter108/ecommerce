# ecommerce 📦
 
### `About:`
A full-stack e-commerce website. Django handles the backend for managing users, products, and orders, stores and retrieves the data out of a database and serves up an API for the frontend to communicate with.  The frontend features React for the user interface and uses Redux for state management.

### `Run Locally:`
#### `Requirements:`
* Python
* Node.js
#### `Frontend:`
* In root directory of `frontend`, install developer dependencies: `npm i`
* Start frontend Node.js server: `npm start`
#### `Backend:`
* In root directory of `backend`, create a virtual environment:
`virtualenv venv`
* Activate the virtual environment:
`source venv/bin/activate` (if on Mac or Linux)
`c:\>c:\Python35\python -m venv c:\path\to\venv` (if on Windows)
* Install dependencies:
`pip install -r requirements.txt`
* Start the backend Django server:
`python manage.py runserver`
