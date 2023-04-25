#!/bin/sh

# Morty  installation script
#
# See https://github.com/morty-faas/cli/blob/main/README.md#quick-start for the installation steps.
#
# This script is meant for quick & easy install via:
#   $ curl -fsSL https://morty-faas.github.io/install-cli.sh -o get-morty.sh
#   $ sudo sh get-morty.sh
set -e

DEFAULT_RELEASE_URL="https://api.github.com/repos/morty-faas/cli/releases"

get_distribution() {
	os="$(uname)"
	echo "$os"
}

get_architecture() {
  architecture="$(uname -m)"
  echo "$architecture"
}

check_root() {
  if [ "$(id -u)" != "0" ]
  then
    echo "This script must be run as root"
    exit 1
  fi
}

do_install() {
  architecture=$( get_architecture )
  distribution=$( get_distribution | tr '[:upper:]' '[:lower:]')

  # Convert architecture to match the morty binary name
  if [ "$architecture" = "x86_64" ]
  then
    architecture="amd64"
  fi

  dist_arch="$distribution-$architecture"
  echo "Installing Morty CLI for $dist_arch"

  # Get the latest release id for our distribution and architecture
  binary_id=$(curl -sL "$DEFAULT_RELEASE_URL/latest" | jq --arg dist_arch "$dist_arch" '.assets[] | select(.name | endswith($dist_arch+".tar.gz")) | .id')

  if [ -z "$binary_id" ]
  then
    echo "No binary found for $dist_arch"
    exit 1
  fi

  # Download the binary
  curl -o ./morty-cli.tar.gz -J -L -s -H "Accept: application/octet-stream" "$DEFAULT_RELEASE_URL/assets/$binary_id" > /dev/null

  # Extract the binary and move it to /usr/local/bin
  tar -xvf morty-cli.tar.gz morty > /dev/null
  mv ./morty /usr/local/bin/morty
  chmod +x /usr/local/bin/morty

  # Clean up
  rm morty-cli.tar.gz

  echo "Morty CLI installed successfully. Use 'morty --help' to get started."

}

check_root
do_install