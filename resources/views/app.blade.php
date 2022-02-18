<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Next Basket</title>
  <link rel="icon" href="https://nextbasket.com/wp-content/uploads/2022/01/cropped-2-favicon-32x32.jpg" sizes="32x32">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body class="antialiased">

  <div id="app"></div>

  <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
