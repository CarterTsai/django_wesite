django website integrate vue3
-------------------------------

### Create Environment
```
$> python3.10 -m venv venv
$>　.\venv\Scripts\activate
```

### Create Django Project
```
$> django-admin startproject testsite
$> cd testsite
$> python manage.py migrate
$> pip install django-cors-headers
```

### Create Frontend For Vue3
```
$> npm init vue@latest
--------------------------------------------------------
√ Project name: ... frontent
√ Add TypeScript? ... No / Yes
√ Add JSX Support? ... No / Yes
√ Add Vue Router for Single Page Application development? ... No / Yes
√ Add Pinia for state management? ... No / Yes
√ Add Vitest for Unit Testing? ... No / Yes
√ Add an End-to-End Testing Solution? » Playwright
√ Add ESLint for code quality? ... No / Yes
√ Add Prettier for code formatting? ... No / Yes
--------------------------------------------------------
$> cd frontend
$> npm install
$> npm install vue-resource
$> npm install vuetify@^3.1.8
$> npm run format
$> npm run dev
```

### Release View
```
$>  npm run build
```

### Run Project
```
$> cd testsite
$> python manage.py runserver
```

### Ref
* Django https://docs.djangoproject.com/en/4.1/
* vuetify https://vuetifyjs.com/en/
* Pinia https://pinia.vuejs.org/introduction.html


### Create requirements.txt
$> pip3 freeze > requirements.txt