document.addEventListener('DOMContentLoaded', function() {

    

    var Die = function() {
        this.value = 0;
        this.div = document.createElement('div');
        var h4 = document.createElement('h4');
        var btn = document.getElementById('#genBtn');
        btn.addEventListener('click', function(num) {
        document.getElementById(Die).innerHTML =
        Math.floor(Math.random() * 6) + 1;
        document.body.appendChild(this.div);
        });
        h4.innerHTML = this.value;
        document.body.appendChild(this.div);
        
        console.log('rolling');
    };

    // function generate() {
    //     var btn = document.getElementById('#genBtn');
    //     btn.addEventListener('click', function(num) {
    //     document.getElementById(Die).innerHTML =
    //     Math.floor(Math.random() * 7);
    //     document.body.appendChild(this.div);
    //     });
    // }

    Die();

   

});













    // });


    // btn.addEventListener('click', function() {
    //         var div = document.createElement('div');
    //         div.className = 'square';
    //         div.style.backgroundColor = "black";
    //         div.style.height = "100px";
    //         div.style.width = "100px";
    //         div.style.margin = "10px";
    //         div.style.display = "inline-block";
    //         div.style.color = "white";
    //         div.id = i;
    //         i++;
            
    //         document.body.appendChild(div);