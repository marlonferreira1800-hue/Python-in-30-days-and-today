const topics = [
  ["Começo","Primeiros passos com Python"],["Fundamentos","Variáveis e tipos de dados"],["Fundamentos","Operadores"],["Fundamentos","Strings e texto"],["Coleções","Listas"],["Coleções","Tuplas"],["Coleções","Conjuntos"],["Coleções","Dicionários"],["Decisões","Condicionais"],["Repetição","Laço while"],["Repetição","Laço for"],["Reutilização","Funções"],["Reutilização","Parâmetros e retorno"],["Biblioteca padrão","Módulos e imports"],["Biblioteca padrão","Datas e horários"],["Confiabilidade","Tratamento de erros"],["Arquivos","Arquivos de texto"],["Coleções","List comprehensions"],["Reutilização","Funções lambda"],["Repetição","enumerate e iteradores"],["Texto","Expressões regulares"],["Classes","Programação orientada a objetos"],["Classes","Métodos e atributos"],["Classes","Herança"],["Ferramentas","Ambientes virtuais e pip"],["Qualidade","Testes automatizados"],["Qualidade","Depuração"],["Dados","JSON"],["Web","Requisições HTTP"],["Projeto final","Lista de tarefas"]
];
const examples = [
  "print(\"Olá, mundo!\")\nprint(2 + 3)",
  "nome = \"Ana\"\nidade = 20\nestuda_python = True\nprint(nome, idade)",
  "soma = 8 + 2\nresto = 10 % 3\nprint(soma, resto)",
  "nome = \"Ana\"\nprint(f\"Olá, {nome}!\")\nprint(nome.upper())",
  "frutas = [\"maçã\", \"banana\"]\nfrutas.append(\"uva\")\nprint(frutas[0])",
  "data = (4, 10, 2026)\ndia, mes, ano = data\nprint(dia, mes, ano)",
  "grupo_a = {\"Ana\", \"Bia\"}\ngrupo_b = {\"Bia\", \"Caio\"}\nprint(grupo_a & grupo_b)",
  "aluno = {\"nome\": \"Lia\", \"nota\": 9.2}\nprint(aluno[\"nome\"])",
  "nota = 7\nif nota >= 7:\n    print(\"Aprovado\")\nelse:\n    print(\"Continue estudando\")",
  "n = 1\nwhile n <= 3:\n    print(n)\n    n += 1",
  "for n in range(1, 6):\n    print(n)",
  "def saudacao(nome):\n    return f\"Olá, {nome}!\"\nprint(saudacao(\"Rafa\"))",
  "def somar(a, b=0):\n    return a + b\nprint(somar(4, 3))",
  "import random\nprint(random.randint(1, 10))",
  "from datetime import date\nhoje = date.today()\nprint(hoje.strftime(\"%d/%m/%Y\"))",
  "try:\n    idade = int(\"vinte\")\nexcept ValueError:\n    print(\"Digite um número válido\")",
  "with open(\"notas.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Estudar Python\")",
  "quadrados = [n ** 2 for n in range(1, 6)]\nprint(quadrados)",
  "dobro = lambda n: n * 2\nprint(dobro(6))",
  "tarefas = [\"estudar\", \"praticar\"]\nfor i, tarefa in enumerate(tarefas, start=1):\n    print(i, tarefa)",
  "import re\ntexto = \"Pedido 42\"\nprint(re.findall(r\"\\d+\", texto))",
  "class Livro:\n    def __init__(self, titulo):\n        self.titulo = titulo\nlivro = Livro(\"Python\")\nprint(livro.titulo)",
  "class Conta:\n    def __init__(self):\n        self.saldo = 0\n    def depositar(self, valor):\n        self.saldo += valor",
  "class Animal:\n    def falar(self): return \"Som\"\nclass Cao(Animal):\n    def falar(self): return \"Au au\"",
  "python -m venv .venv\n# Ative o ambiente e instale pacotes com pip",
  "import unittest\nclass Teste(unittest.TestCase):\n    def test_soma(self):\n        self.assertEqual(2 + 3, 5)",
  "valor = 10\nprint(\"antes:\", valor)\nvalor /= 2\nprint(\"depois:\", valor)",
  "import json\ndados = {\"nome\": \"Lia\"}\ntexto = json.dumps(dados, ensure_ascii=False)\nprint(json.loads(texto))",
  "import requests\nresposta = requests.get(\"https://api.github.com\", timeout=10)\nprint(resposta.status_code)",
  "tarefas = []\ndef adicionar(titulo):\n    tarefas.append({\"titulo\": titulo, \"feita\": False})\nadicionar(\"Praticar Python\")\nprint(tarefas)"
];
const challenges = [
  "Altere a mensagem para se apresentar e imprima mais duas frases.",
  "Crie variáveis para sua cidade, seu curso e se você gosta de programação.",
  "Calcule o total de três itens e compare o resultado com 100.",
  "Monte uma frase com f-string usando seu nome e sua cidade.",
  "Crie uma lista de tarefas e adicione um novo item com append().",
  "Guarde dia, mês e ano em uma tupla e desempacote os valores.",
  "Compare dois grupos e descubra quais itens aparecem nos dois.",
  "Crie um dicionário de produto com nome, preço e quantidade.",
  "Classifique uma temperatura como fria, agradável ou quente.",
  "Faça uma contagem regressiva de 5 até 1.",
  "Percorra uma lista de três filmes e imprima cada título.",
  "Crie uma função que receba dois números e devolva a soma.",
  "Escreva uma função que calcule a área de um retângulo.",
  "Importe math e calcule a raiz quadrada de 81.",
  "Exiba a data de hoje no formato dia/mês/ano.",
  "Proteja uma conversão de texto para número contra entradas inválidas.",
  "Grave uma meta em um arquivo e leia o conteúdo de volta.",
  "Crie uma lista com o dobro dos números de 1 a 8.",
  "Ordene palavras pelo tamanho usando sorted() e uma lambda.",
  "Imprima uma lista numerada de compras com enumerate().",
  "Encontre todos os números de uma frase usando re.findall().",
  "Crie uma classe Produto com nome e preço.",
  "Adicione à classe Conta um método para consultar o saldo.",
  "Crie uma classe Carro que herde de Veiculo.",
  "Crie e ative um ambiente virtual para um projeto pessoal.",
  "Escreva testes para uma função que calcula o dobro.",
  "Use mensagens de depuração para encontrar um erro em um código.",
  "Converta uma lista de produtos para JSON e leia-a de volta.",
  "Consulte uma API pública e mostre um campo da resposta.",
  "Amplie o exemplo com opções para listar, concluir e salvar tarefas."
];
const list = document.querySelector("#days"), panel = document.querySelector("#lesson"), search = document.querySelector("#search");
const completed = new Set(JSON.parse(localStorage.getItem("python30-progress") || "[]"));
let current = 0;
function safe(text) { return text.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;"); }
function drawList() {
  const q = search.value.toLowerCase();
  const matches = topics.map((x,i)=>({x,i})).filter(o=> (o.x.join(" ")+" "+(o.i+1)).toLowerCase().includes(q));
  list.innerHTML = matches.length ? matches.map(({x,i})=>'<button class="day '+(i===current?"active ":"")+(completed.has(i)?"done":"")+'" data-i="'+i+'"><span class="num">'+String(i+1).padStart(2,"0")+'</span><span class="meta"><small>DIA '+(i+1)+' · '+x[0]+'</small><b>'+x[1]+'</b></span>'+(completed.has(i)?'<span class="tick">✓</span>':"")+'</button>').join("") : '<div class="empty">Nenhum tema encontrado.</div>';
}
function drawLesson() {
  const topic=topics[current], done=completed.has(current);
  panel.innerHTML='<span class="tag">DIA '+String(current+1).padStart(2,"0")+' DE 30 · '+topic[0].toUpperCase()+'</span><h3>'+topic[1]+'</h3><p>Aprenda o conceito e teste o exemplo. Você pode copiar o código para o Python instalado no seu computador.</p><h4>Exemplo</h4><pre class="code"><code>'+safe(examples[current])+'</code></pre><h4>Desafio de hoje</h4><div class="challenge">✦ &nbsp;'+challenges[current]+'</div><div class="actions"><button class="finish '+(done?"done":"")+'" id="finish">'+(done?"✓ Aula concluída":"Marcar como concluída")+'</button><button class="next" id="next">Próxima aula →</button></div>';
  document.querySelector("#finish").onclick=()=>{if(done)completed.delete(current);else completed.add(current);localStorage.setItem("python30-progress",JSON.stringify([...completed]));render();};
  document.querySelector("#next-lesson").onclick=()=>{current=(current+1)%topics.length;render();panel.scrollIntoView({behavior:"smooth",block:"start"});};
}
function render(){drawList();drawLesson();const n=completed.size,p=Math.round(n/30*100);document.querySelector("#count").textContent=n+" / 30";document.querySelector("#percent").textContent=p+"%";document.querySelector("#bar").style.width=p+"%";document.querySelector("#next-step").textContent=n===30?"Concluído!":"Dia "+Math.min(n+1,30);}
list.onclick=e=>{const b=e.target.closest("[data-i]");if(b){current=Number(b.dataset.i);render();}};
search.oninput=drawList;
render();
