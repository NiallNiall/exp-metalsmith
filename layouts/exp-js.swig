<!doctype html>
<html>
{% include 'header-exp.swig' %}
<body>
<h1>{{title}}</h1>
<div>{{ contents | safe }}</div>
</body>
</html>