function binario(number, type) {
	if (!number) {
		return 0;
	}
	var num = number;
	var ar = [];

	while (num > 0) {
		if (type === 16) {
            
			switch (num % type) {
				case 10:
					ar.unshift("A");
					break;
				case 11:
					ar.unshift("B");
					break;
				case 12:
					ar.unshift("C");
					break;
				case 13:
					ar.unshift("D");
					break;
				case 14:
					ar.unshift("E");
					break;
				case 15:
					ar.unshift("F");
					break;
				default:
                   
					ar.unshift(num % type);
			}
        } else {
            
			ar.unshift(num % type);
		}
		num = Math.floor(num / type);
	}

	return ar.join("");
}

console.log(binario(29, 16));
