TOP_LEVEL_DIR := ../

include ../Makefile.common

SRC := $(wildcard *$(CPP_SUFFIX))
OBJ := $(SRC:$(CPP_SUFFIX)=$(OBJ_SUFFIX))

.PHONY: all clean src

all :  src testMain

testMain : testMain$(OBJ_SUFFIX) $(OBJ)
	$(CXX) $(LDFLAGS) -o $@ $? $(TOP_LEVEL_DIR)/src/*$(OBJ_SUFFIX) $(LDLIBS)

src : 
	$(MAKE) -C ../src

clean:
	$(RM) $(OBJ)