include ../Makefile.common

override CPPFLAGS += -I../inc

SRC := $(wildcard *$(CPP_SUFFIX))
OBJ := $(SRC:$(CPP_SUFFIX)=$(OBJ_SUFFIX))

.PHONY: all clean 

all : $(OBJ) 

clean:
	$(RM) $(OBJ)
