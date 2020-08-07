<?php

    // https://www.codewars.com/kata/550554fd08b86f84fe000a58/

    function inArray($array1, $array2) {
        $result = array();
        foreach ($array1 as $word1) {
            foreach ($array2 as $word2) {
                if (stristr($word2, $word1)) {
                    $result[] = $word1;
                    break;
                }
            }
        }

        sort($result);
        return array_values(array_unique($result));
    }

?>