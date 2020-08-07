<?php

  // https://www.codewars.com/kata/52b757663a95b11b3d00062d/

  function toWeirdCase($string) {
    $wordToWeirdCase = function($word) {
      $chars = str_split($word);
      for ($idx = 0; $idx < sizeof($chars); $idx++) {
        $chars[$idx] = ($idx % 2 == 0) ? strtoupper($chars[$idx]) : strtolower($chars[$idx]);
      }
      return implode('', $chars);
    };

    $words = explode(' ', $string);
    $words = array_map($wordToWeirdCase, $words);
    return implode(' ', $words);
  }

?>