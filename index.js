const spy = chai.spy()

function receivesAFunction(callback){
    callback();
    }

receivesAFunction(spy);
console.log(receivesAFunction(spy));


doRead('The Alchemist')

function returnsANamedFunction(doRead){
    function doRead(Book){
        function Book(author, year){
            return `${author} wrote ${Book} in ${year}!`
        } 
        return(Book)
    };
    return doRead();
}
returnsANamedFunction(doRead);
console.log(returnsANamedFunction(doRead('The Alchemist')));

function returnsAnAnonymousFunction(){
    return function(){
        return 'Unnamed function!'
    }
};
returnsAnAnonymousFunction();