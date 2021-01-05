#!/bin/bash
GIT_REPO_URL=$(git config --get remote.origin.url)
GIT_CURRENT_BRANCH=$(git branch --show-current)
DATE=`date +'%a, %Y-%m-%d %T'`

npm run build

git checkout --orphan gh-pages
git add docs
git commit -am "deploy $DATE"
git push origin gh-pages --force
git checkout $GIT_CURRENT_BRANCH

echo " "
echo "[ + Finished deploy! ]"
echo " "

exit 0