TOP_LEVEL_DIR := ..

include ../Makefile.common

SRC := $(wildcard *$(CPP_SUFFIX))
OBJ := $(SRC:$(CPP_SUFFIX)=$(OBJ_SUFFIX))

.PHONY: all src clean clean-src clean-all

all :  src testMain

testMain : testMain$(OBJ_SUFFIX) $(OBJ)
	$(CXX) $(LDFLAGS) -o $@ $? $(TOP_LEVEL_DIR)/src/*$(OBJ_SUFFIX) $(LDLIBS)

src : 
	$(MAKE) -C $(TOP_LEVEL_DIR)/src

clean:
	$(RM) $(OBJ)

clean-src:
	$(MAKE) -C $(TOP_LEVEL_DIR)/src clean

clean-all : clean clean-src
