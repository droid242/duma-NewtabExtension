.PHONY : build

build:
	ls build >/dev/null 2>/dev/null || mkdir build
	cd src && zip -r ../build/duma-newtab-`date +"%Y%m%d-%s"`.zip . >/dev/null