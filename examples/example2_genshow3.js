'use strict';

function earlyGenerations() {
    var tree = new FamilyTree();

    tree.addPerson("edward3",{"name":"Edward III","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edward_III_of_England"});

    tree.setActiveGeneration("#after");
    tree.addPerson("edmund",{"name":"Edmund of Langley","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edmund_of_Langley,_1st_Duke_of_York"});
    tree.addPerson("edwardblack",{"name":"Edward the Black Prince","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edward,_the_Black_Prince"});
    tree.addPerson("lionel",{"name":"Lionel of Antwerp","gender":"m","box-url":"https://en.wikipedia.org/wiki/Lionel_of_Antwerp,_1st_Duke_of_Clarence"});
    tree.addPerson("johngaunt",{"name":"John of Gaunt","gender":"m","box-url":"https://en.wikipedia.org/wiki/John_of_Gaunt,_1st_Duke_of_Lancaster"});
    tree.addLines1(["edward3"],["edmund","edwardblack","lionel","johngaunt"]);

    tree.setActiveGeneration("#after");
    tree.addPoint("edmund,1");
    tree.addLines1(["edmund"],["edmund,1"]);
    tree.addPerson("richard2",{"name":"Richard II","gender":"m","box-url":"https://en.wikipedia.org/wiki/Richard_II_of_England"});
    tree.addLines1(["edwardblack"],["richard2"]);
    tree.addPerson("philippa",{"name":"Philippa","gender":"f","box-url":"https://en.wikipedia.org/wiki/Philippa,_5th_Countess_of_Ulster"});
    tree.addLines1(["lionel"],["philippa"]);
    tree.addPoint("johngaunt,1");
    tree.addLines1(["johngaunt"],["johngaunt,1"]);

    tree.setActiveGeneration("#after");
    tree.addPoint("edmund,2");
    tree.addLines1(["edmund,1"],["edmund,2"]);
    tree.addPerson("roger",{"name":"Roger Mortimer","gender":"m","box-url":"https://en.wikipedia.org/wiki/Roger_Mortimer,_4th_Earl_of_March"});
    tree.addPerson("elizabethmortimer",{"name":"Elizabeth Mortimer","gender":"f","box-url":"https://en.wikipedia.org/wiki/Elizabeth_Mortimer"});
    tree.addLines1(["philippa"],["roger","elizabethmortimer"]);
    tree.addPerson("joan",{"name":"Joan Beaufort","gender":"f","box-url":"https://en.wikipedia.org/wiki/Joan_Beaufort,_Countess_of_Westmorland"});
    tree.addPerson("henry4",{"name":"Henry IV","nickname":"Bolingbroke","gender":"m","box-url":"https://en.wikipedia.org/wiki/Henry_IV_of_England"});
    tree.addPerson("johnbsr",{"name":"John Beaufort","gender":"m","box-url":"https://en.wikipedia.org/wiki/John_Beaufort,_1st_Earl_of_Somerset"});
    tree.addLines1(["johngaunt,1"],["joan","henry4","johnbsr"]);

    return tree;
}

function mortimerFamily() {
    var tree = new FamilyTree();
    tree.addPerson("richard",{"name":"Richard of Conisburgh","gender":"m","box-url":"https://en.wikipedia.org/wiki/Richard_of_Conisburgh,_3rd_Earl_of_Cambridge"});
    tree.addPerson("anne",{"name":"Anne Mortimer","gender":"f","box-url":"https://en.wikipedia.org/wiki/Anne_de_Mortimer"});
    tree.setActiveGeneration("#after");
    tree.addPerson("richardplantagenet",{"name":"Richard Plantagenet","gender":"m","box-url":"https://en.wikipedia.org/wiki/Richard_of_York,_3rd_Duke_of_York","color":"blue"});
    tree.addPerson("cecily",{"name":"Cecily Neville","gender":"f","box-url":"https://en.wikipedia.org/wiki/Cecily_Neville,_Duchess_of_York"});
    tree.addLines3(["richard","anne"],["richardplantagenet"]);
    return tree;
}

function percyFamily() {
    var tree = new FamilyTree();
    tree.addPerson("henrysr",{"name":"Henry Percy","gender":"m","box-url":"https://en.wikipedia.org/wiki/Henry_Percy,_2nd_Earl_of_Northumberland","color":"red"});
    tree.addPerson("eleanor",{"name":"Eleanor Neville","gender":"f","box-url":"https://en.wikipedia.org/wiki/Eleanor_Percy,_Countess_of_Northumberland"});
    tree.setActiveGeneration("#after");
    tree.addPerson("henryjr",{"name":"Henry Percy","gender":"m","box-url":"https://en.wikipedia.org/wiki/Henry_Percy,_3rd_Earl_of_Northumberland","color":"red"});
    tree.addLines3(["henrysr","eleanor"],["henryjr"]);
    return tree;
}

function nevilleFamily() {
    var tree = new FamilyTree();
    tree.addPerson("richardsr",{"name":"Richard Neville","gender":"m","box-url":"https://en.wikipedia.org/wiki/Richard_Neville,_5th_Earl_of_Salisbury","color":"blue"});
    tree.addPerson("william",{"name":"William Neville","gender":"m","box-url":"https://en.wikipedia.org/wiki/William_Neville,_1st_Earl_of_Kent","color":"blue"});
    tree.setActiveGeneration("#after");
    tree.addPerson("richardjr",{"name":"Richard Neville","gender":"m","box-url":"https://en.wikipedia.org/wiki/Richard_Neville,_16th_Earl_of_Warwick","color":"purple"});
    tree.addPerson("john",{"name":"John Neville","gender":"m","box-url":"https://en.wikipedia.org/wiki/John_Neville,_1st_Marquess_of_Montagu","color":"purple"});
    tree.addPerson("thomas",{"name":"Thomas Neville","gender":"m","box-url":"https://en.wikipedia.org/wiki/Thomas_Neville_(died_1471)","color":"purple"});
    tree.addLines1(["richardsr"],["richardjr","john"]);
    tree.addLines1(["william"],["thomas"]);
    return tree;
}

function valoisFamily() {
    var tree = new FamilyTree();
    tree.addPerson("henry5",{"name":"Henry V","gender":"m","box-url":"https://en.wikipedia.org/wiki/Henry_V_of_England"});
    tree.addPerson("catherine",{"name":"Catherine of Valois","gender":"f","box-url":"https://en.wikipedia.org/wiki/Catherine_of_Valois"});
    tree.addPerson("owen",{"name":"Owen Tudor","gender":"m","box-url":"https://en.wikipedia.org/wiki/Owen_Tudor","color":"red"});
    tree.setActiveGeneration("#after");
    tree.addPerson("margaret",{"name":"Margaret of Anjou","gender":"f","box-url":"https://en.wikipedia.org/wiki/Margaret_of_Anjou","color":"red"});
    tree.addPerson("henry6",{"name":"Henry VI","gender":"m","box-url":"https://en.wikipedia.org/wiki/Henry_VI_of_England","color":"red"});
    tree.addPerson("edmundtudor",{"name":"Edmund Tudor","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edmund_Tudor,_1st_Earl_of_Richmond"});
    tree.addLines3(["henry5","catherine"],["henry6"]);
    tree.addLines3(["catherine","owen"],["edmundtudor"]);
    return tree;
}

function beaufortFamily() {
    var tree = new FamilyTree();
    tree.addPerson("johnbjr",{"name":"John Beaufort","gender":"m","box-url":"https://en.wikipedia.org/wiki/John_Beaufort,_1st_Duke_of_Somerset"});
    tree.addPerson("edmundsr",{"name":"Edmund Beaufort","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edmund_Beaufort,_2nd_Duke_of_Somerset","color":"red"});
    tree.setActiveGeneration("#after");
    tree.addPerson("margaretb",{"name":"Margaret Beaufort","gender":"f","box-url":"https://en.wikipedia.org/wiki/Margaret_Beaufort,_Countess_of_Richmond_and_Derby"});
    tree.addPerson("henry",{"name":"Henry Beaufort","gender":"m","box-url":"https://en.wikipedia.org/wiki/Henry_Beaufort,_3rd_Duke_of_Somerset","color":"red"});
    tree.addPerson("edmundjr",{"name":"Edmund Beaufort","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edmund_Beaufort,_4th_Duke_of_Somerset","color":"red"});
    tree.addLines1(["johnbjr"],["margaretb"]);
    tree.addLines1(["edmundsr"],["henry","edmundjr"]);
    return tree;
}

function middleGenerations() {
    var tree = mortimerFamily();
    tree.setActiveGeneration("anne");
    tree.addPoint("joan,1");
    tree = tree.merge(percyFamily(),"anne","eleanor");
    tree = tree.merge(nevilleFamily(),"eleanor","william");
    tree = tree.merge(valoisFamily(),"eleanor","catherine");
    tree = tree.merge(beaufortFamily(),"eleanor","johnbjr");
    tree.addLines1(["joan,1"],["cecily"]);
    return tree;
}

function laterGenerations() {
    var tree = new FamilyTree();

    tree.addPerson("edward4",{"name":"Edward IV","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edward_IV_of_England","color":"blue"});
    tree.addPerson("george",{"name":"George Plantagenet","gender":"m","box-url":"https://en.wikipedia.org/wiki/George_Plantagenet,_1st_Duke_of_Clarence","color":"purple"});
    tree.addPerson("isabel",{"name":"Isabel Neville","gender":"f","box-url":"https://en.wikipedia.org/wiki/Isabel_Neville,_Duchess_of_Clarence"});
    tree.addPerson("richard3",{"name":"Richard III","gender":"m","box-url":"https://en.wikipedia.org/wiki/Richard_III_of_England","color":"blue"});
    tree.addPerson("annen",{"name":"Anne Neville","gender":"f","box-url":"https://en.wikipedia.org/wiki/Anne_Neville"});
    tree.addPerson("edward",{"name":"Edward of Westminster","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edward_of_Westminster,_Prince_of_Wales","color":"red"});
    tree.addPoint("henry7,above");

    tree.setActiveGeneration("#after");
    tree.addPerson("edward5",{"name":"Edward V","gender":"m","box-url":"https://en.wikipedia.org/wiki/Edward_V_of_England","color":"blue"});
    tree.addPerson("elizabethyork",{"name":"Elizabeth of York","gender":"f","box-url":"https://en.wikipedia.org/wiki/Elizabeth_of_York"});
    tree.addPerson("henry7",{"name":"Henry VII","nickname":"Tudor","gender":"m","box-url":"https://en.wikipedia.org/wiki/Henry_VII_of_England"});

    tree.setActiveGeneration("#after");
    tree.addPerson("tudor",{"name":"Tudor dynasty","box-url":"https://en.wikipedia.org/wiki/Tudor_dynasty"});

    tree.addLines3(["george","isabel"],[]);
    tree.addLines3(["richard3","annen"],[]);
    tree.addLines3(["edward","annen"],[]);
    tree.addLines1(["edward4"],["edward5","elizabethyork"]);
    tree.addLines1(["henry7,above"],["henry7"]);
    tree.addLines3(["elizabethyork","henry7"],["tudor"],{"dashed":true});

    return tree;
}

function connectingLines1(tree) {
    tree.addLines1(["edmund,2"],["richard"]);
    tree.addLines1(["roger"],["anne"]);
    tree.addLines1(["elizabethmortimer"],["henrysr"]);
    tree.addLines1(["joan"],["joan,1","eleanor","richardsr","william"]);
    tree.addLines1(["henry4"],["henry5"]);
    tree.addLines1(["johnbsr"],["johnbjr","edmundsr"]);
}

function connectingLines2(tree) {
    tree.addLines1(["richardjr"],["isabel","annen"]);
    tree.addLines3(["margaret","henry6"],["edward"]);
    tree.addLines3(["richardplantagenet","cecily"],["edward4","george","richard3"]);
    tree.addLines3(["edmundtudor","margaretb"],["henry7,above"]);
}

function genshow3() {
    var tree = earlyGenerations();
    tree = tree.mergeSequential(middleGenerations());
    tree = tree.mergeSequential(laterGenerations());
    connectingLines1(tree);
    connectingLines2(tree);
    tree.queueRender();
}

setTimeout(genshow3,0);