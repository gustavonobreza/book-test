# Book Test
Feito com o intuito de piratear livros do acervo da biblioteca minhabiblioteca.com.br disponibilizada gratuitamente pelo Cruzeiro do Sul.

# Como usar 
É necessário ainda um trabalho manual para extrair o html gerado dinamicamente do frame do livro!

### 1.
![Alt text](image.png) 
### 2.
![Alt text](image-1.png)
### 3. 
![Alt text](image-2.png)
### 4.
![Alt text](image-3.png)
### 5.Analizar quais arquivos de estilização que a página usa e fazer o download para usar localmente e o PDF ficar com aparência igual ao disponibilizado na minhabiblioteca.com.br
![Alt text](image-4.png)
### 6. Abra cada arquivo html novo salvo e abra o console do navegador em cada página, copie e cole o arquivo /analyzer/browser.js e execute. Pegue o resultado e adicione em um grande array no arquivo node.js, faça isso em cada página (Para conseguir o link de todas as imagens do livro)
### 7. Pegue o cookie session do navegador e insira na variável do arquivo /analyzer/node.js e rode. Caso dê erro rode novamente até parar de dar erro.
![Alt text](captura.gif)
### 8. Se tudo estiver organizado da forma correta nos diretórios correspondentes aos arquivos html os estilos e as images serão aplicados.
### 9. Agora manualmente abra seu navegador e peça para imprimir cada uma das páginas html
### 10. E no final faça o merge dos arquivos PDF utilizando o ILovePDF.com