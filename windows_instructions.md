## Steps to install this flask project on Windows:

### Step 0

Clone this repository on your PC in a directory that you want. To do this make sure you have git installed on your PC and then through command prompt, reach the directory where you want your project to be. Now run the following command to clone the repository to your PC:

`git clone https://github.com/Aayush-N/Airtable-Parser.git`

---
### Step 1

To test if you have python installed on your PC, run the following command:

`python -V`

If you have python installed you will see an output that says the version of the installation, make sure this output version is > 3.7.0 

---
### Step 2

To test whether you have pip installed, run the command `pip -V`

If you see an output with a version number, that means you have pip installed as well

---
### Step 3

Now in command prompt make sure you are in the folder where you have the project code with the "index.py" file present in it. To enter into the project folder, type `cd Airtable-Parser-master`. This will put you inside the project folder. 

To check type `dir` and if you see "index.py" in the output, then you are successfully inside the project folder 

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

Now run the project by entering the command:

`python index.py`

This should fire up the web application, go to the following URL in a browser: `http://localhost:5000`

---
You can also refer:

[flask official documentation](https://flask.palletsprojects.com/en/1.1.x/installation/)

[Blogpost on installation but it has python 2.7](https://timmyreilly.azurewebsites.net/python-flask-windows-development-environment-setup/)
