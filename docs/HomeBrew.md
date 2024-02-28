# MacOS HomeBrew安装
## 安装和卸载
```
- 使用国产脚本安装
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

- 使用国产脚本卸载
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

## 常用命令
```
# 自身更新
brew update

# 查看 Homebrew 版本
brew -v

# 列出已安装的软件
brew list

# 使用浏览器打开 Homebrew 官网
brew home

# 查看包的详细信息
brew info 包名

# 检测系统中与Homebrew有关的潜在问题
brew doctor

# 查看包的所有版本
brew list --versions | grep 包名

# 以树形展示所有已安装包的依赖
brew deps --installed --tree

# 查找软件包
brew search git
brew search /^git$/

# 安装软件包
brew install 包名

# 卸载软件包
brew uninstall 包名

# 查看哪些包有新版本可更新
brew outdated

# 更新所有包
brew upgrade

# 更新指定包
brew upgrade 包名

# 查看哪些包可清理
brew cleanup -n

# 清理所有
brew cleanup

# 清理指定包
brew cleanup 包名

# 锁定
brew pin 包名

# 解锁
brew unpin 包名

# 清理无效的关联，且清理与之相关的位于/Applications和~/Applications中的无用App链接
brew prune

# 将指定软件的安装文件symlink到Homebrew上
brew link 包名
```