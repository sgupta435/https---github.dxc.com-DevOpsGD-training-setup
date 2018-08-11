<?php
//Added By Sunetra Mhaske for language support on 07/07/2015
function Getdualsupp($lang,$resellerid)
{
if (($handle2 = fopen("$pre_path../../configuration/dualsupp.csv", "r")) !== FALSE) { // fetch url from dualsupp.csv
  $row2=0;
  
  while (($data2 = fgetcsv($handle2,",")) !== FALSE) {
    if ($data2[1] == $lang and $data2[0]==$resellerid ) { //compare the id and lang 
      $csv_row2 = $data2[2];                               // display the respective country url
    }
  }
  fclose($handle2);
  return $csv_row2;
}
}
//end of code for dual language support
?>