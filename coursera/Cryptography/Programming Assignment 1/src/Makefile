TOP_LEVEL_DIR := ../

include ../Makefile.common

SRC := $(wildcard *$(CPP_SUFFIX))
OBJ := $(SRC:$(CPP_SUFFIX)=$(OBJ_SUFFIX))

.PHONY: all clean 

all : $(OBJ) 

clean:
	$(RM) $(OBJ)
