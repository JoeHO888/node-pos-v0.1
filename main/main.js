module.exports = function main(array) {
	var text = '***<store earning no money>Receipt ***\n';
	tmp = [];
	text_array = {};
	total = 0;
	for (i = 0; i < array.length; i++){
		var key = array[i].Name;
		
		total  +=array[i].Price;
		if (tmp.includes(key)){
			var key_array = text_array[key];
			key_array[0] += 1;
			key_array[3] += array[i].Price;
			key_array[1] = array[i].Unit.toLocaleString()+"s";
		}else{
			tmp.push(key);
			if (array[i].Unit == "a"){
				text_array[key] = [1,"",array[i].Price,array[i].Price];
			}else{
				text_array[key] = [1,array[i].Unit.toLowerCase(),array[i].Price,array[i].Price];
			}
		}
		
	}
	for (var key in text_array) {
		var whole_text = 'Name: '+ key;
		whole_text+=', Quantity: ';
		whole_text+=text_array[key][0].toString();
		if (text_array[key][1]!=""){
			whole_text+=" ";
		}
		whole_text+=text_array[key][1];
		whole_text+=', Unit price: ';
		whole_text+=text_array[key][2].toString();
		whole_text+='.00 (yuan), Subtotal: ';
		whole_text+=text_array[key][3].toString();
		whole_text+='.00 (yuan)\n';
		text+=whole_text;
	};

	text += '----------------------\n' +'Total: '+total.toString()+'.00 (yuan)\n' +'**********************\n';
	console.log(text);
	return text
};