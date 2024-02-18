var cn=0;
     var t = 0;
      function createTable() {

        cn = document.getElementById('input').value;

        for (var r = 0; r < parseInt(cn); r++) {
          var x = document.getElementById('myTable').insertRow(r);
          var tr = x.setAttribute("id", "demo_" + r);
          
          for (var c = 0; c < parseInt(cn); c++) {

            var y = x.insertCell(c);
            y.style.height = "50px";
            y.style.width = "50px";
            var tv = y.setAttribute("class", "class");
            y.setAttribute("id", "id_" + t);
            t++;
          }
          

        }
      
        $(function () {
          $(document).on("click", "table tr td", function () {
            var color;
            $(".class").removeClass("selected");
            $(this).css('background-color', color);
            $(this).addClass("selected");
          });
        });


        $(document).ready(function () {
          $("#input").click(function () {
            location.reload(true);
          });
        });

      }
     
      data = 0;
      ts = -1;
      function myclick(){
        if(data > t){
         data = 0;
         ts = -1;
         var abc = $('#id_' + data).addClass("selected");
        $('#id_' + ts).removeClass("selected");
        }else{
          
        var abc = $('#id_' + data).addClass("selected");
        $('#id_' + ts).removeClass("selected");
        console.log(abc);
       
      }
     
       data++;
      
       ts++;
       setTimeout(myclick, 1000);
      
        
        
      }
    
