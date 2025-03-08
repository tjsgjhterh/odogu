self.addEventListener("install" , e => {
    e.waituntil(
        catches.open("static").then(catche =>{
            return catche.addAll(["./","./src/master.css","./images/logo192.png"]);
        })
    );
});
