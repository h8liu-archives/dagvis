all:
	coffee -c dag.coffee

scp:
	scp dag.js hm:www/lonnie/gostd/dagvis/.
	scp index.html hm:www/lonnie/gostd/dagvis/.
