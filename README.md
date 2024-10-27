# Setup
1. cd in `<project_directory>/backend` folder
2. Execute the following lines:
```
pyenv local 3.12.1
python -m pip venv env
source env/bin/activate
env/bin/python -m pip install -e .
env/bin/python -m pip install -e .[dev]
env/bin/python -m pip install -e .[dev-lint]
```

# Database: 
This project uses sqlite, controls db data with django-seed module\
(https://medium.com/@anindya.lokeswara/django-data-seeding-a-quick-guide-b8cfd72be4cc)
(https://github.com/Brobin/django-seed)

# Seed database: 
```
python manage.py loaddata core/manage/seed.json
```

# Dump database: 
```
python manage.py dumpdata core --indent 2 > core/manage/seed.json
```
