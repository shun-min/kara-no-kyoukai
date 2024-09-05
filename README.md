pyenv local 3.12.1
python -m pip venv env
source env/bin/activate
env/bin/python -m pip install -e .
env/bin/python -m pip install -e .[dev]
env/bin/python -m pip install -e .[dev-lint]

seed database: 
https://medium.com/@anindya.lokeswara/django-data-seeding-a-quick-guide-b8cfd72be4cc
https://github.com/Brobin/django-seed

python manage.py dumpdata core --indent 2 > core/manage/seed.json
