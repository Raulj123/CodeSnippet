import type { PageLoad } from "./$types";

export const load =(()=>{
    //maybe from backend?? later 
    return{
        snippets:[
            {
				
				title:"Raul",
				language: "html",
				code: "<div>hi</div>",
				favorite: false
			},
			{
				
				title:"Katherine",
				language: "html",
				code: "<div>hi</div>",
				favorite: true
			}
		]
    }
}) satisfies PageLoad;  //pageload => pagedata