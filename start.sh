!#/usr/bin/bash
# Check if user is using bash or sh if sh then change to bash else continue
if [ $SHELL = "/bin/zsh" ]; then
    echo "Changing shell to bash"
    chsh -s /bin/bash
    echo "Please restart the script"
    exit
fi
# If shell is zsh then change shbang to zsh else continue
if [ $SHELL = "/bin/bash" ]; then
    echo "Changing shbang to bash"
    sed -i '1s/bash/zsh/' start.sh
    echo "Please restart the script"
    exit
fi

# Start the server
echo "Starting server..."
START_DIR=$(pwd)
function startServer {
    cd $START_DIR
    echo "........."
    # Check if pnpm is installed
    if ! [ -x "$(command -v pnpm)" ]; then
        echo "Error: pnpm is not installed." >&2
        exit 1
    fi
    # Check if node is installed
    if ! [ -x "$(command -v node)" ]; then
        echo "Error: node is not installed." >&2
        exit 1
    fi
    # Check if npm is installed
    if ! [ -x "$(command -v npm)" ]; then
        echo "Error: npm is not installed." >&2
        exit 1
    fi
    # If pnpx is not installed, install it
    if ! [ -x "$(command -v pnpx)" ]; then
        echo "Installing pnpx..."
        npm install -g pnpm
    fi
    
    # Install dependencies
    echo "Installing dependencies..."
    pnpm install
    # Start the server
    echo "Starting server..."
    pnpm dev
}

startServer