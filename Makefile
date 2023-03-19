run:
	docker build -t my-pages-app .
	docker run -it --rm -p 3000:3000 --name my-pages my-pages-app