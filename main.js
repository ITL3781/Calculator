<button 
onclick="document.getElementById('display').value	 
+='1'">1</button>
<button class="tr-ash" data action="add" onlick="Calculator('add')">+</button> 
function Calculator(id) {
           rem =
Number(document.getElementById('display').value);
                                           op = id;

document.getElementById('display').value = "";
                                       }
<script>
       function Calculator(id) {
           rem = Number(document.getElementById('display').value);
           op = id;
           document.getElementById('display').value =
       }
           
       }
       function operations() {
           if (op == 'add') {
               cd = Number(document.getElementById('display').value);                      document.getElementById('display').value = rem + cd;
           }
           if (op=='subtract') {
               cd = Number(document.getElementById('display').value);                      document.getElementById('display').value = rem - cd;
           }
           if (op == 'multiply') {
               cd = Number(document.getElementById('display').value);                      document.getElementById('display').value = rem* cd;
           }
           if (op== 'divide') {
               cd = Number(document.getElementById('display').value);                      document.getElementById('display').value = rem / cd;
           }
       }
}

           
