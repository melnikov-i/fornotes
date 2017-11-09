<?php
  interface PageStrategy {
    function getPage();
  }

  class PageContext {
    private $s;
    function __construct(PageStrategy $s) {
      $this->s = $s;
    }
    function execute() {
      return $this->s->getPage();
    }
  }