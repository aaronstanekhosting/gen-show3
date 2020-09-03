'use strict';

function houseTully() {
    var tree = new FamilyTree();
    tree.addPerson("tully",{"name":"House Tully"});
    tree.setActiveGeneration("#after");
    tree.addPerson("mwhent",{"name":"Minisa Whent","gender":"f"});
    tree.addPerson("htully",{"name":"Hoster Tully","gender":"m"});
    tree.addPerson("btully",{"name":"Brynden Tully","gender":"m"});
    tree.addLines1(["tully"],["htully","btully"],{"dashed":true});
    tree.setActiveGeneration("#after");
    tree.addPerson("etully",{"name":"Edmure Tully","gender":"m"});
    tree.addPerson("ltully",{"name":"Lysa Tully","gender":"f"});
    tree.addPerson("jarryn",{"name":"Jon Arryn","gender":"m"});
    tree.addPerson("ctully",{"name":"Catelyn Tully","gender":"f"});
    tree.addLines3(["mwhent","htully"],["etully","ltully","ctully"]);
    tree.setActiveGeneration("#after");
    tree.addPerson("rarryn",{"name":"Robin Arryn","gender":"m"});
    tree.addLines3(["ltully","jarryn"],["rarryn"]);
    return tree;
}

function houseStark() {
    var tree = new FamilyTree();
    tree.addPerson("stark",{"name":"House Stark"});
    tree.setActiveGeneration("#after");
    tree.addPerson("rickardstark",{"name":"Rickard Stark","gender":"m"});
    tree.addPerson("lstark",{"name":"Lyarra Stark","gender":"f"});
    tree.addLines1(["stark"],["rickardstark"],{"dashed":true});
    tree.setActiveGeneration("#after");
    tree.addPerson("estark",{"name":"Eddard Stark","gender":"m"});
    tree.addPerson("bstark",{"name":"Brandon Stark","gender":"m"});
    tree.addPerson("lyannastark",{"name":"Lyanna Stark","gender":"f"});
    tree.addPerson("benstark",{"name":"Benjen Stark"});
    tree.addLines3(["rickardstark","lstark"],["estark","bstark","lyannastark","benstark"]);
    tree.setActiveGeneration("#after");
    tree.addPerson("rstark",{"name":"Robb Stark","gender":"m"});
    tree.addPerson("sstark",{"name":"Sansa Stark","gender":"f"});
    tree.addPerson("astark",{"name":"Arya Stark","gender":"f"});
    tree.addPerson("branstark",{"name":"Bran Stark","gender":"m"});
    tree.addPerson("rickstark",{"name":"Rickon Stark","gender":"m"});
    return tree;
}

function unknownHouse() {
    var tree = new FamilyTree();
    tree.addPerson("unknown",{"name":"Unknown","gender":"f"});
    tree.setActiveGeneration("#after");
    tree.addPerson("jsnow",{"name":"Jon Snow","gender":"m"});
    return tree;
}

function genshow3() {
    var tree = houseTully();
    tree = tree.merge(houseStark(),"ctully","estark");
    tree = tree.merge(unknownHouse(),"estark","unknown");
    tree.addLines1(["estark","unknown"],["jsnow"],{"dashed":true});
    tree.addLines3(["ctully","estark"],["rstark","sstark","astark","branstark","rickstark"]);
    tree.queueRender();
}

setTimeout(genshow3,0);