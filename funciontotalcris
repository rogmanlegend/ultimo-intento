function copiarFila(link)
{
    var tr=$(link).parent().parent();   
     $("#t_productos").append(addFila(getNombre(tr), getCantidad(tr), getPrecio(tr), getTotal(tr)));
     
}

function getNombre(tr)
{
    return $(tr).find("td").children().val();
}
function getCantidad(tr)
{
    return  $(tr).find("td").next().children().val();
}
function getPrecio(tr)
{
    return $(tr).find("td").next().next().children().val();
}
function getTotal(tr)
{
    return $(tr).find("td").next().next().next().children().val();
}
function addFila(nombre, cantidad ,precio, total)
{
    var html="<tr>";
     html+="<td><input type='text' value='"+nombre+"'/></td>'";
     html+="<td><input type='text' value='"+cantidad+"'/></td>'";
     html+="<td><input type='text' value='"+precio+"'/></td>'";
     html+="<td><input type='text' value='"+total+"'/></td>'";
     html+="<td><a href='#' onclick='copiarfila(this)'><copiar/></a></td>";
    return html;
    
}
function calculartotal(cant)
{
    var cantidad = parseFloat($(cant).val());
    var  precio = parseFloat($(cant).paernt().parent().find('t_precio').val());
    $(cat).parent(), parent().find('t_total').val(cantidad*precio);
    $("#","_grantotal")
    
}
