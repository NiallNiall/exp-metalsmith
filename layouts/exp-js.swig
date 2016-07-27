<!doctype html>
<html>
{% include 'header-exp.swig' %}
<body>
{# <h1>{{title}}</h1> #}

  <div class="canvasinfo rborder">
    {{title}}
    {{ contents | safe }}

    <div class="canvasbuttons right">
      <a class="boldlink" href="/">Experiments</a>
      <a class="boldlink" href="paperjs.html">Previous</a>
      <a class="boldlink" href="robots2.html">Next</a>
    </div>
  </div>
</body>
</html>