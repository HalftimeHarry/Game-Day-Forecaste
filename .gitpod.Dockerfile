FROM gitpod/workspace-full

# Install MySQL client and server
RUN sudo apt-get update && \
    sudo apt-get install -y mysql-server mysql-client && \
    sudo rm -rf /var/lib/apt/lists/*
