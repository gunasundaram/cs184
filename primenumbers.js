#!/usr/bin/env node

var n, result;
var fs = require('fs');
var targetFile = "primenumbers.txt";

var isPrime = function (num)
{
	var isPrime = 1;

	for (var testnum = 2; testnum <= Math.sqrt(num); testnum++)
	{
		if(num%testnum == 0)
		{
			isPrime = 0;
			break;
		}
	}

	return isPrime;
}

n = 100;
result = 2;

for (var count = 2, num = 3; count <= n; num++ )
{

	if(isPrime(num) != 0)
	{
		result = result + "," + num;
		count++;			
	}
}

result = result + "\n";

fs.writeFileSync(targetFile, result);
