function startPlugin(){
  
  chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
    console.log(tablink);

    let url = `https://muysalud.com/salud/composicion-corporal/`; 


    // https://muysalud.com/wp-json/mc/v3/router?permalink=/salud/composicion-corporal/
    // ${dominio}/wp-json/mc/v3/router?permalink=/${path}

    
    console.log(Date.now()+'v2');

    domains.map(domain => {
      dominioAtual = domain.indexOf(tablink) > -1 ? domain : ``;
    })
    
    console.log(dominioAtual);
  });

}

document.addEventListener('DOMContentLoaded', startPlugin, false);


/*
  objetivo : ao acessar a página espeficica do site, separar o dominio e o path da url
  url : https://muysalud.com/salud/composicion-corporal/  
  dominio : https://www.muysalud.com
  path : /salud/composicion-corporal/

  
  criar um botão na página que irá chamar a função startPlugin()

  ${dominio}/wp-json/mc/v3/router?permalink=/${path}
*/
