<?php
$fi=fopen("archivo.txt", "a")
or die("problemas al crear");
fwrite($fi,"Datos");
fwrite($fi,"\n");
fclose($fi)
?>