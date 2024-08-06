function parent(){
    let name="mayank";
    function child(){
        console.log(name);        
    }
    return child;
}

const value=parent();           // value=child
value();                         //child()
