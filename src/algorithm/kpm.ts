export const kmp = (text: string, target: string) => {
    console.log("kmp: target -> " + target)
	var i,j
    var lsp
    var ret

	i = 0
    j = 0
    ret = []
	
	if(!target.length || !text.length){
		return;
	}	

	lsp = creteLsp(target);	
	while(i < text.length){
		if(text[i] === target[j]){
			if(j === (target.length - 1)){
                // console.log("targettern found at " + (i-j) + " -> " + target)
                ret.push(i - j)
				i++;
				j = 0;
			} else {
				i++;
				j++;
			}
		} else {
			if(j === 0){
				i++;
			} else {
				j = lsp[j-1];
			}
		}
    }
    return ret
}

export const creteLsp = (target) => {
	var lsp = [];
	var i,j;

	lsp[0] = 0;
	i = 1;
	j = 0;

	while(i < target.length){
		if(target[i] === target[j]){
			j++;
			lsp[i] =  j;
			i++;
		} else {
			if(lsp[j] !== 0){
				j = lsp[j-1];
			} else {
				lsp[i] = 0;
				i++;
			}
		}
	}	
	return lsp;
}
