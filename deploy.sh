#!/bin/bash
GIT_REPO_URL=$(git config --get remote.origin.url)
GIT_CURRENT_BRANCH=$(git branch --show-current)

npm run build

mkdir .deploy
cp -R ./docs .deploy
cd .deploy
git init .
git remote add github $GIT_REPO_URL
git checkout --orphan gh-pages
git add .
git commit -am "Static site deploy"
git push github gh-pages --force
cd ..
rm -rf .deploy
git checkout $GIT_CURRENT_BRANCH
echo " "
echo "[ + Finished deploy! ]"
echo " "

exit 0