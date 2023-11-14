converter = (valorDolar) => {
    valorDolar = valorDolar.value;
    let dolarConvertido = document.getElementsByClassName("resultado-conversao");
    let dolarPraReal = 4.91;
    let dolarPraEuro = 0.93;
    let dolarPraYen = 30.92;
    let dolarPraBtc = 0.000028;
  
    //real
    dolarConvertido[0].value = `R$ ${(valorDolar * dolarPraReal).toFixed(2)}`;
    dolarConvertido[0].style.color = "#00e64d";
  
    //euro
    dolarConvertido[1].value = `€ ${(valorDolar * dolarPraEuro).toFixed(2)}`;
    dolarConvertido[1].style.color = "#f3c70d";
  
    //yen
    dolarConvertido[2].value = `¥ ${(valorDolar * dolarPraYen).toFixed(2)}`;
    dolarConvertido[2].style.color = "#d8b688";
  
    //btc
    dolarConvertido[3].value = `₿ ${(valorDolar * dolarPraBtc).toFixed(5)}`;
    dolarConvertido[3].style.color = "#f7931a";
  };
  
  anosLuzConverter = (valorEmKm) => {
    let campoRevelarAnosLuz = document.getElementsByClassName("campo-revelar-anosLuz");
    let kmPraAnosLuz = 1.057e-13
    valorEmKm = valorEmKm.value
    campoRevelarAnosLuz[0].value = valorEmKm * kmPraAnosLuz
  }
  
  converterTemp = (valorEmCelsius) => {
    valorEmCelsius = parseInt(valorEmCelsius.value)
    let campoFahr = document.getElementsByClassName("campo-fahr-temp");
    let campoKelv = document.getElementsByClassName("campo-kelvin-temp");
    let celToFahr = ((valorEmCelsius * 9/5) + 32)
    let celToKelv = valorEmCelsius + 273.15 
    
    if(valorEmCelsius <= 12){
      campoFahr[0].style.color = "#0000ff"
      campoKelv[0].style.color = "#0000ff"
    }else if(valorEmCelsius >= 13 && valorEmCelsius <= 18){
      campoFahr[0].style.color = "#33cccc"
      campoKelv[0].style.color = "#33cccc"
    }else if(valorEmCelsius >= 19 && valorEmCelsius <= 26){
      campoFahr[0].style.color = "#2c8e5d"
      campoKelv[0].style.color = "#2c8e5d"
    }else if(valorEmCelsius >= 27 && valorEmCelsius <= 32.9){
      campoFahr[0].style.color = "#ff9900"
      campoKelv[0].style.color = "#ff9900"
    }else if(valorEmCelsius >= 33){
      campoFahr[0].style.color = "#ff0000"
      campoKelv[0].style.color = "#ff0000"
    }
    
    
    campoFahr[0].value = `${celToFahr} °F`
    campoKelv[0].value = `${celToKelv} °K`
    
    
  }
  
  anosLuz = () => {
    let social = document.getElementsByClassName("social");
    let conteudosPraRemover = document.getElementsByClassName("some");
    let conteudosPraAdicionar = document.getElementsByClassName("aparece");
    let flexArea = document.getElementsByClassName("area-anos-luz");
    let especialArea = document.getElementsByClassName("area-resultado");
    let tempContainer = document.getElementsByClassName("area-temp");
    let tempIcones = document.getElementsByClassName("temp");
    for(let i = 0; i < tempIcones.length; i++){
      tempIcones[i].style.display = "none"
    }
    tempContainer[0].style.display = "none"
    document.body.style.backgroundImage =
      "url('https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/09/umberto-xbrMwBgYUHY-unsplash-2048x1360.jpg')";
    flexArea[0].style.display = "flex";
    especialArea[0].style.display = "none";
    for (let i = 0; i < conteudosPraRemover.length; i++) {
      conteudosPraRemover[i].style.display = "none";
    }
    for (let i = 0; i < conteudosPraAdicionar.length; i++) {
      conteudosPraAdicionar[i].style.display = "block";
    }
    social[0].src= "https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
    social[1].src= "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
  };
  
  mdbRR = () =>{
    let dotrr = document.getElementById("mdby")
    dotrr.innerHTML = "by Ryotruuser"
  }
  
  mdbRR()
  
  conversorMoedas = () => {
    let social = document.getElementsByClassName("social");
    let conteudosPraAdicionar = document.getElementsByClassName("some");
    let conteudosPraRemover = document.getElementsByClassName("aparece");
    let especialArea = document.getElementsByClassName("area-anos-luz");
    let flexArea = document.getElementsByClassName("area-resultado");
    let tempContainer = document.getElementsByClassName("area-temp");
    let tempIcones = document.getElementsByClassName("temp");
    for(let i = 0; i < tempIcones.length; i++){
      tempIcones[i].style.display = "none"
    }
    tempContainer[0].style.display = "none"
    document.body.style.backgroundImage =
      "url('https://caelum-online-public.s3.amazonaws.com/assets-imersaodev/Background.png')";
    especialArea[0].style.display = "none";
    for (let i = 0; i < conteudosPraAdicionar.length; i++) {
      conteudosPraAdicionar[i].style.display = "block";
    }
    flexArea[0].style.display = "flex";
    for (let i = 0; i < conteudosPraRemover.length; i++) {
      conteudosPraRemover[i].style.display = "none";
    }
    social[0].src= "https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png"
    social[1].src= "https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
  }
  
  temperatura = () => {
    let social = document.getElementsByClassName("social");
    let anosLuzArea = document.getElementsByClassName("area-anos-luz");
    let anosLuzIcones = document.getElementsByClassName("aparece");
    let areaMoedas = document.getElementsByClassName("area-resultado");
    let moedaBtns = document.getElementsByClassName("outros-conversores");
    let moedaTitulo = document.getElementsByClassName("page-title");
    let tempContainer = document.getElementsByClassName("area-temp");
    let tempIcones = document.getElementsByClassName("temp");
    for(let i = 0; i < tempIcones.length; i++){
      tempIcones[i].style.display = "block"
    }
    for(let i = 0; i < anosLuzIcones.length; i++){
      anosLuzIcones[i].style.display = "none"
    }
    document.body.style.backgroundImage =
      "url('https://proxy.olhardigital.com.br/wp-content/uploads/2022/05/shutterstock_743819602.jpg')";
    anosLuzArea[0].style.display = "none"
    areaMoedas[0].style.display = "none"
    moedaBtns[0].style.display = "none"
    moedaTitulo[0].style.display = "none"
    tempContainer[0].style.display = "flex"
    social[0].src= "https://cdn.icon-icons.com/icons2/855/PNG/512/Github_social_media_corporate_logo_icon-icons.com_67672.png"
    social[1].src= "https://secure.webtoolhub.com/static/resources/icons/set56/cac7ef55.png"
  
  }