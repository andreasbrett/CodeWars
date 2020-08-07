<?php

  // https://www.codewars.com/kata/5390bac347d09b7da40006f6/

  function toJadenCase($string) {
    $words = explode(' ', $string);
    foreach ($words as &$word) $word = ucfirst($word);
    return implode(' ', $words);
  }

?>