## Steps to install this flask project on Windows:

### Step 1

Open command prompt and run the following commad:

`python -V`

If you have python installed you will see an output that says the version of the installation, make sure this output version is > 3.7.0 

---
### Step 2

Run the command `pip -V`

If you see an output with a version number, that means you have pip installed as well

---
### Step 3

In command prompt make sure you are in the folder where you have the project code with the "index.py" file present in it.

Run the following command to start a new virtual env:

`py -3 -m venv venv`



Now activate the virtualenv by running:

`venv\Scripts\activate`

Now if successful the command prompt will indicate this by prefixinf (venv) in front of the prompt.

---
### Step 4

Now install the required modules by running:

`pip install -r requirements.txt`

---
### Step 5

Now let flask know what the name of the python file is which will run the app by typing:

`set FLASK_APP=index`

---
### Step 6

Now run the project by entering the command:

`flask run`

This should fire up the web application, go to the following URL in a browser: `http://localhost:5000`

---
You can also refer:

[flask official documentation](https://flask.palletsprojects.com/en/1.1.x/installation/)

[Blogpost on installation but it has python 2.7](https://timmyreilly.azurewebsites.net/python-flask-windows-development-environment-setup/)
