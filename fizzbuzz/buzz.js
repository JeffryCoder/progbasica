/*Fizzbuzz escribe los numeros del uno al 100
pero si el numero es multiplo de 3 escribe
Fizz y si es multiplo de 5 escribe Buzz pero
si es multiplo de ambos escribe FizzBuzz */
var  divisible = false;
for ( i = 1; i <= 100; i++ )
{
    divisible = false;
    
    if (esDivisible(i,3))
    {
        document.write("Fizz");
        divisible = true;
    }
    if (esDivisible(i ,5))
    {
        document.write("Buzz");
        divisible = true;
    }  
    if (!esDivisible(i,5) && !esDivisible(i,3) )
    {
        document.write(i);
    }
    
    document.write(" <br /> ");
}


function esDivisible(num,divisor)
{
    if ( num % divisor == 0 )
    {
        return true;
    }
    else 
    {
        return false;
    }
}