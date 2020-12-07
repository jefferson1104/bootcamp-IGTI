## iniciando projeto nodeJS
<p><b>Comando:</b> npm init<p>


<p>
  NodeJS trabalha com assincronismo, com isso o processador pode sempre trabalhar
  em sua maxima capacidade.  
</p>


#### EventMitter
<p>Modulo responsavel por emitir eventos.
<br>
Quando um evento e emitido ele e enviado para a fila de eventos, para que o event loop possa executa-lo e depois retornar seu callback.
</p>

#### EventLoop
<p>
  Basicamente e um loop infinito que a cada interacao ele verifica se existem novos eventos em sua fila de eventos.  
  <br>
  EventLoop e quem coordena a execucao das tasks e callbacks.
</p>