#!/bin/bash

dirname="/linux-study/bot/itunes-topsong-rss"
echo "dirname: $dirname"
mkdir -p $dirname

filename="${dirname}/hourly-topsong-`date +'%Y%m%d%H%M'`.xml"
curl -s -o $filename -H "User-Agent: CrawlBot; email@example.com" https://itunes.apple.com/jp/rss/topsongs/limit=10/xml
echo "保存しました: $filename"
