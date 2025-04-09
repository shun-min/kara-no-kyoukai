# Setup
### Notes:
1. Top level `karaoke-django` folder is the django project root, which contains a `core` app and `backend` app.
2. `pyproject.toml` and `env` are outside of the django project root, but does not affect the frontend folder.

## Pre-requisites:
1. Have pyenv installed
2. use python 3.12.1

### Instructions (Linux only)
1. git clone kara-no-kyoukai project
2. cd into cloned `kara-no-kyoukai` folder
3. Execute the following lines:
```shell
pyenv local 3.12.1
python -m venv env
source env/bin/activate
pip install -e .
pip install -e .[dev]
pip install -e .[dev-lint]
```
4. `cd karaoke-django`
5. `python manage.py runserver` to test


# Database: 
This project uses sqlite, controls db data with django-seed module. \
(https://medium.com/@anindya.lokeswara/django-data-seeding-a-quick-guide-b8cfd72be4cc)
(https://github.com/Brobin/django-seed)

### Seed database: 
```
cd karaoke-django
python manage.py loaddata core/manage/seed.json
```

### Dump database: 
```
cd karaoke-django
python manage.py dumpdata core --indent 2 > core/manage/seed.json
```
