<?php

  // https://www.codewars.com/kata/5390bac347d09b7da40006f6/

  function toJadenCase($string) {
      $words = explode(' ', $string);
      for ($idx = 0; $idx < sizeof($words); $idx++) $words[$idx] = strtoupper(substr($words[$idx], 0, 1)) . substr($words[$idx], 1);
      return implode(' ', $words);
  }

?>