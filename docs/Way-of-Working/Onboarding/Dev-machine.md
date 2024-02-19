# Setting up your Dev Machine

We are assuming your dev machine is a mac.

## Things that should have been default on mac

- [Keep awake](https://apps.apple.com/us/app/amphetamine/id937984704)
- [Office screen driver](https://www.synaptics.com/products/displaylink-graphics/downloads/macos)
- [Package manager](https://brew.sh/)

```shell
brew install --cask rectangle
```

## Communication

```shell
brew install --cask webex
brew install --cask mattermost
```

## Terminal and shell

```shell
brew install --cask iterm2
```

- [Oh my zsh](https://ohmyz.sh/)

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
```

- [Touch id in terminal](https://apple.stackexchange.com/questions/259093/can-touch-id-on-mac-authenticate-sudo-in-terminal)

Add [plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) to your shell in `~/.zshrc`

```ini
plugins = (... kubectl pyenv z)
```

## Coding

```shell
brew install --cask sourcetree
brew install pyenv
```

- [pyenv virtualenv](https://github.com/pyenv/pyenv-virtualenv)

```shell
xcode-select --install
```

- [Sign commits using SSH](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-ssh-key)
