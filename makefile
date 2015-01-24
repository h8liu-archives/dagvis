all:
	coffee -c dag.coffee

scp:
	scp *.js hm:www/lonnie/gostd/dagvis/.
	scp *.html hm:www/lonnie/gostd/dagvis/.
