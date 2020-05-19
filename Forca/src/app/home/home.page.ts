import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  palavras:string[] = ["athletico Paranaense","atletico mineiro","avai","bahia","botafogo","ceara","chapecoense","corinthians","cruzeiro","csa","flamengo","fluminense","fortaleza","goias","gremio","internacional","palmeiras","santos","sao Paulo","vasco da gama"];
  qtd = this.palavras.length -1;
  pos = Math.round(Math.random()*this.qtd);
  palavra = this.palavras[this.pos];
  linhas=[];
  palavravet = this.palavra.split("");
  acertou:boolean;
  acertos:number=0;
  erro:boolean;
  erros:number=0;
  digits = [];
  imgs = [];
  

  public Define(){
    for(var i = 0; i < this.palavra.length; i++){
      this.linhas.push(" ___ ");
    }
  }
  public PalavraAtual(){
    return this.linhas.join("");
  }
  
  public Dica(){
    if(this.palavras[0]==this.palavra){
      alert("Estadio cujo o nome é: Estadio Joaquim Américo Guimarães");
    } 
    if(this.palavras[1]==this.palavra){
      alert("Conhecido como: Campeão do Gelo");
    }
    if(this.palavras[2]==this.palavra){
      alert("Cujo o mascote é conhecido: Leão");
    } 
    if(this.palavras[3]==this.palavra){
      alert("Treinador atual: Roger Machado");
    } 
    if(this.palavras[4]==this.palavra){
      alert("Principais Rivais: Times Cariocas");
    } 
    if(this.palavras[5]==this.palavra){
      alert("Contém 45 Campeonatos Cearenses");
    } 
    if(this.palavras[6]==this.palavra){
      alert("Conquistou a Copa Sul-Americana de 2016");
    } 
    if(this.palavras[7]==this.palavra){
      alert("Fundado em 1 de setembro de 1910");
    } 
    if(this.palavras[8]==this.palavra){
      alert("Mascote: Raposa");
    } 
    if(this.palavras[9]==this.palavra){
      alert("Nome Completo: Centro Sportivo Alagoano");
    } 
    if(this.palavras[10]==this.palavra){
      alert("Localização: Rio de Janeiro");
    } 
    if(this.palavras[11]==this.palavra){
      alert("Estadio Maracanã");
    } 
    if(this.palavras[12]==this.palavra){
      alert("Torcedor: Leonino");
    } 
    if(this.palavras[13]==this.palavra){
      alert("Principal Rival: Vila Nova");
    } 
    if(this.palavras[14]==this.palavra){
      alert("Campeão da Copa Libertadores de 2017");
    } 
    if(this.palavras[15]==this.palavra){
      alert("O idolo já foi treinador da Seleção Brasilerira");
    } 
    if(this.palavras[16]==this.palavra){
      alert("Campeão Brasileiro em 2018");
    } 
    if(this.palavras[17]==this.palavra){
      alert("Ex jogador nos dias atuais é o jogador mais conhecido do mundo");
    } 
    if(this.palavras[18]==this.palavra){
      alert("Tem como melhor jogador da historia como goleiro");
    } 
    if(this.palavra[19]==this.palavra){
      alert("O mais atacante da historia do clube mais conhecido como: Animal");
    }
  }
  
  constructor() {
    this.Define();
  }

  public Enviar(letra:string){
    this.acertou = false;
    this.digits.push(letra);
    this.imgs[0] = document.querySelector("#img0");
    this.imgs[1] = document.querySelector("#img1");
    this.imgs[2] = document.querySelector("#img2");
    this.imgs[3] = document.querySelector("#img3");
    this.imgs[4] = document.querySelector("#img4");
    this.imgs[5] = document.querySelector("#img5");
    this.imgs[6] = document.querySelector("#img6");
    this.imgs[7] = document.querySelector("#img7");
    //document.querySelector("#digitadas").textContent = this.digits;
    for (var i = 0; i < this.palavra.length; i++) {
      console.log(letra, this.palavravet[i], letra==this.palavravet[i])
      if(this.palavravet[i] == letra){
          this.linhas[i] = letra;
          this.acertou = true;
          if(this.acertou==true){
            this.acertos+=1;
            //document.querySelector("#acertos").textContent = this.acertos;
          }
      }
      
    }
    if(this.acertou==false){
      this.erros+=1;
      //document.querySelector("#erros").textContent = this.erros;
    }
    if(this.erros==1){
      this.imgs[0].style.display="none";
      this.imgs[1].style.display="block";
    }
    if(this.erros==2){
      this.imgs[1].style.display="none";
      this.imgs[2].style.display="block";
    }
    if(this.erros==3){
      this.imgs[2].style.display="none";
      this.imgs[3].style.display="block";
    }
    if(this.erros==4){
      this.imgs[3].style.display="none";
      this.imgs[4].style.display="block";
    }
    if(this.erros==5){
      this.imgs[4].style.display="none";
      this.imgs[5].style.display="block";
    }
    if(this.erros==6){
      this.imgs[5].style.display="none";
      this.imgs[6].style.display="block";
    }
    if(this.erros==7){
      this.imgs[6].style.display="none";
      this.imgs[7].style.display="block";
    }
    if(this.acertos==this.palavra.length){
      alert("Você venceu!");
      window.location.reload();
    }
    if(this.erros==7){
      alert("Você perdeu!");
      window.location.reload();
    }

    //Sempre tirar e colocar de novo
    //document.querySelector("#linha").textContent = this.linhas;
    //document.querySelector("#letra").value = "";

  }

  


}
