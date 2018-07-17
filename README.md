# Codeline Frontend

Yep, $this project is VueJS based and packed in Docker container, so you
just need type few commands to make it work.

## How to use

### 1. Preparation

Clone the repo and change your work directory to root of sources

    git clone https://github.com/EvilFreelancer/codeline-frontend.git
    cd codeline-frontend

Now you need prepare docker compose config file:

    cp docker-compose.yml.dist docker-compose.yml

Inside `docker-compose.yml` you need change the values to the ones you
need, for example you do not want to tun this project on `80` port, to
fix that you need just change this line `80:80` to what you need (`7777:80`).

    docker-compose build
    docker-compose up -d

The shortest instruction out of all, I know, that's because everything
is already pre-configured via NPM and you just need run it.

## The End

Now you just need open following page http://localhost in your browser
and you will get the result of my work.

Thanks for reading!
