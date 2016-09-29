// https://ko.wikipedia.org/wiki/대수의_이름
(function($){
	"use strict";
	var d , s , l , t , out , e , orgnum ,i;
	var pluginNS = "koamtjs" ;
	d = ["","만","억","조","경","해","자","양","구","간","정","재","극","항하사","아승기","나유타","불가사의","무량대수"];
	$.fn[pluginNS] = function(option){
		if(option=="restore"){
			return this.each(function(){
				orgnum = $(this).attr("data-"+pluginNS);
				if( orgnum ){
					$(this).html(orgnum).attr("data-"+pluginNS,"").removeClass(pluginNS);
				}
			});
		}else{
			return this.each(function(){
				if( !$(this).attr("data-"+pluginNS) ){
					s = this.outerText;
					$(this).attr("data-"+pluginNS,s).addClass(pluginNS);
					if(s==="0"){
						out = '<span class="'+pluginNS+'-t">'+ s ;
					}else{
						s = s.replace(/\D/g,"");
						l = s.length-4;
						while(l > 0) {
							s = s.substr(0,l) + "," + s.substr(l);
							l -= 4;
						};
						s = s.split(",");
						//console.log(s , s[0] , s[1] , s.length , d.length);
						out = '';
						for(i=1 ; i<=s.length ; i++){
							//console.log(  s[s.length-i] + d[i-1]  );
							t = parseInt( s[s.length-i] ,10);
							e = d[i-1];
							if( e !== undefined){
								e = '<span class="'+pluginNS+'-e">'+ e +'</span>';
							}else{
								e = '<span class="'+pluginNS+'-e">10<sup>'+(i-1)*4+'</sup></span>';
							}
							if( t!==0 ){
								if($(e).text()==''){
									e='';
								}
								out = '<span class="'+pluginNS+'-t">'+ t +'</span>' + e + out ;
							}
						}
						//console.log(out);
						//this.innerHtml = k; 
					}
					$(this).html(out);
				}
			});
		}
	};
})(jQuery);
