# Setting up your Dev Machine

We are assuming your dev machine is a Mac.
This guide is rather opinionated, feel free to have your own opinion, and feel free to contribute!
Contributing can be done by clicking "edit" top right and by making a pull request on this repository.

## Things that should have been default on Mac

- [Keep awake with Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704)
- [Office DisplayLink software](https://www.synaptics.com/products/displaylink-graphics/downloads/macos)
- [Homebrew as the missing Package Manager](https://brew.sh/)

    ```shell
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

- [Rectange](https://rectangleapp.com/)

    ```shell
    brew install --cask rectangle
    ```

## Citrix workspace

- [Citrix workspace](https://www.citrix.com/downloads/workspace-app/)
- [Flex2Rijk](https://www.flex2rijk.nl/) to login

## Communication

- [WebEx](https://www.webex.com/) for video conferencing

    ```shell
    brew install --cask webex
    ```

- [Mattermost](https://mattermost.com/) for team communication

    ```shell
    brew install --cask mattermost
    ```

## Terminal and shell

- [Iterm2](https://iterm2.com/)

    ```shell
    brew install --cask iterm2
    ```

- [Oh My Zsh](https://ohmyz.sh/)

    ```shell
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

- [Autosuggestions for zsh](https://github.com/zsh-users/zsh-autosuggestions)

    ```shell
    git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
    ```

- [Fish shell like syntax highlighting for Zsh](https://github.com/zsh-users/zsh-syntax-highlighting)

    ```shell
    brew install zsh-syntax-highlighting
    ```

- Add [plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) to your shell in `~/.zshrc`

    ```ini
    plugins = (
        # other plugins...
        zsh-autosuggestions
        kubectl
        docker
        docker-compose
        pyenv
        z
    )
    ```

- [Touch ID in Terminal](https://apple.stackexchange.com/questions/259093/can-touch-id-on-mac-authenticate-sudo-in-terminal)

## Coding

- [Sourcetree](https://www.sourcetreeapp.com/)

    ```shell
    brew install --cask sourcetree
    ```

- [Pyenv](https://github.com/pyenv/pyenv)

    ```shell
    brew install pyenv
    ```

- [pyenv virtualenv](https://github.com/pyenv/pyenv-virtualenv)

    ```shell
    brew install pyenv-virtualenv
    ```

- [Xcode Command Line Tools](https://developer.apple.com/xcode/resources/)

    ```shell
    xcode-select --install
    ```

- [Sign commits using SSH](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-ssh-key)
