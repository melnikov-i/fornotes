<?php
  require_once __ROOT__.'core/controller.php';

  class ErrorPage implements PageStrategy {
    function getPage() {
      header('HTTP/1.1 404 Not Found');
      header('Status: 404 Not Found');
      require_once __ERROR_PAGE__;
    }
  }