#!/usr/bin/env bash

curl http://www3.lrs.lt/pls/inter3/dokpaieska.showdoc_l?p_id=429530 >data/lrs-mbi-orig.html
curl http://www3.lrs.lt/pls/inter3/dokpaieska.showdoc_l?p_id=478805 >data/lrs-mbi-20150314.html

curl https://www.e-tar.lt/rs/legalact/TAR.A1FD809510BB >data/etar-mbi-orig.html
curl https://www.e-tar.lt/rs/actualedition/TAR.A1FD809510BB/TAIS_478805 >data/etar-mbi-20150314.html
