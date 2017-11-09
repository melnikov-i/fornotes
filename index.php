<?php
  mb_internal_encoding("UTF-8");
  header("Cache-control: no-store");
  session_start();

  define('__ROOT__', dirname(__FILE__) . '/application/');

  require_once __ROOT__.'bootstrap.php';

  $run = FrontController::getInstance();
  $run->router();