#!/bin/bash
GIT_REPO_URL=$(git config --get remote.origin.url)
GIT_CURRENT_BRANCH=$(git branch --show-current)
DATE=`date +'%a, %Y-%m-%d %T'`

npm run build

git checkout main
git merge develop

DEST_FILE=last-deploy.txt

if [ -f "$DEST_FILE" ]
then 
    echo "$DATE" >> "$DEST_FILE"
fi

git add --all
git commit -am "deploy $DATE"
git push origin main --force

git checkout $GIT_CURRENT_BRANCH

echo " "
echo "[ + Finished deploy! ]"
echo " "

exit 0