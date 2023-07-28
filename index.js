function demo(){
    const obj = new XMLHttpRequest();
    obj.open('GET','https://jsonplaceholder.typicode.com/users');

    obj.onload = function(){
        if(obj.status === 200){
            const data = JSON.parse(obj.responseText);

            console.log(data);
            for(let i = 0 ;i< data.length ; i++){
                document.write(data[i].name);
            }
            // document.getElementById("shubh").innerHTML = data[].name;
        }
        else{
            console.error('Error: ${obj.status}')
        }
    };

    obj.onerror = function(){
        console.error('Errors');
    };
    obj.send();
}