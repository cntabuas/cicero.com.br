FROM docker.io/library/debian:bookworm

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# https://github.com/tailwindlabs/tailwindcss/releases
ARG TAILWINDCSS_VERSION=3.4.1
# https://github.com/gohugoio/hugo/releases
ARG HUGO_VERSION=0.123.8

# This Dockerfile adds a non-root user with sudo access. Use the "remoteUser"
# property in devcontainer.json to use it. On Linux, the container user's GID/UIDs
# will be updated to match your local UID/GID (when using the dockerFile property).
# See https://aka.ms/vscode-remote/containers/non-root-user for details.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Configure apt, install packages and tools
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    #
    # Verify git, process tools, lsb-release (common in install instructions for CLIs) installed
    && apt-get -y install curl git git-lfs procps lsb-release jq \
    #
    # Create a non-root user to use if preferred - see https://aka.ms/vscode-remote/containers/non-root-user.
    && groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    # [Optional] Add sudo support
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    #
    # Ruby Stuff
    #&& apt-get -y install ruby-full bundler build-essential \
    #
    # Nodejs stuff
    #&& curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash - \
    #&& apt-get install -y nodejs \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://github.com/tailwindlabs/tailwindcss/releases/download/v${TAILWINDCSS_VERSION}/tailwindcss-linux-x64 -o /usr/local/bin/tailwindcss \
    # use https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64 for latest
    && chmod a+x /usr/local/bin/tailwindcss

RUN curl -sL https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.tar.gz -o /tmp/hugo.tgz \
    && cd /usr/local/bin \
    && tar -xf /tmp/hugo.tgz hugo \
    && rm /tmp/hugo.tgz

# Update this to "on" or "off" as appropriate
ENV GO111MODULE=auto

# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=dialog
