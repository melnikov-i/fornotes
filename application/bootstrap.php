<?php
  /* Файл конфигурации */
  require_once __ROOT__.'conf/index.php';

  class FrontController {
    static private $_instance;
    protected $index = FC_SPLITS_INDEX;

    private function __construct() {}
    private function __clone() {}

    static function getInstance() {
      if ( empty(self::$_instance) ) {
        self::$_instance = new self();
      }
      return self::$_instance;
    }

    function router() {
      /* Обработка HTTP-запроса */
      $request = $_SERVER['REQUEST_URI'];
      $splits = explode('/', trim($request, '/'));
      
      switch ( count($splits) ) {
        case FC_SPLITS_INDEX:
          /* Пустая адресная строка: подключаем главную страницу */
          $controllerName = 'MainPage';
          $controllerPath = __CONTROLLERS__.'c-page-main.php';
          break;
        
        case FC_SPLITS_INDEX + 1:
          /* В адресной строке пришел 1 элемент: должно быть это запрос авторизации */
          if ( $splits[$this->index] === 'login' ) {
            $controllerName = 'LoginPage';
            $controllerPath = __CONTROLLERS__.'c-page-login.php';
          } else {
            $controllerName = 'ErrorPage';
            $controllerPath = __CONTROLLERS__.'c-page-404.php';
          }
          break;

        default:
          /* В адресную строку пришло не понятно что */
          $controllerName = 'ErrorPage';
          $controllerPath = __CONTROLLERS__.'c-page-404.php';
          break;
      }

      /* Подключаем контроллер */
      require_once $controllerPath;
      $page = new PageContext(new $controllerName);
      return $page->execute();
    }
  }