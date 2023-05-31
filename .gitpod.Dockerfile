FROM gitpod/workspace-full

# Install MySQL Server
RUN apt-get update \
    && apt-get install -y mysql-server
