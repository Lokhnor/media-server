# Git & SSH

git config --global user.name "Vinicius" && git config --global user.email "vicoporto@gmail.com"

ssh-keygen -t ed25519 -C "vicoporto@gmail.com"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub

# Docker & Docker Compose

curl -sSL https://get.docker.com/ | sh

sudo usermod -aG docker $USER

newgrp docker

mkdir -p "$HOME/.docker/cli-plugins" && \
curl -sL "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o "$HOME/.docker/cli-plugins/docker-compose" && \
chmod +x $HOME/.docker/cli-plugins/docker-compose

# Copy configs

- jellyfin
    sudo mkdir /shared/data/jellyfin
    sudo cp -r /home/vimmy/media-server/jellyfin/config /shared/data/jellyfin

- qbittorrent
    sudo mkdir /shared/data/qbittorrent
    sudo cp -r /home/vimmy/media-server/qbittorrent/config /shared/data/qbittorrent

- prowlarr
    sudo mkdir /shared/data/prowlarr
    sudo cp -r /home/vimmy/media-server/prowlarr/config /shared/data/prowlarr

- radarr
    sudo mkdir /shared/data/radarr
    sudo cp -r /home/vimmy/media-server/radarr/config /shared/data/radarr

- sonarr
    sudo mkdir /shared/data/sonarr
    sudo cp -r /home/vimmy/media-server/sonarr/config /shared/data/sonarr

# FlareSolverr

git clone git@github.com:FlareSolverr/FlareSolverr.git