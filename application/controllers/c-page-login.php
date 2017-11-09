<?php
  require_once __ROOT__.'core/controller.php';

  class LoginPage implements PageStrategy {
    function getPage() {
      if ( isset( $_GET ) ) {
        echo '<h4>Login</h4>'; // Сюда веб-приложение
      }
    }
  }