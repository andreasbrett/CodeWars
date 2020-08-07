<?php

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/

  function detect_pangram($string) {
    for ($i = 65; $i <= 90; $i++) {
      if (!stristr($string, chr($i))) return false;
    }
    return true;
  }

?>