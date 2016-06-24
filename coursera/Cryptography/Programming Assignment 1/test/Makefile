##### top-level common base for makefiles #####

include ../Makefile.common

##### compiler and linker flags #####

# override CPPFLAGS variable, loki headers need to be accessible
override CPPFLAGS += -I../inc


SRC := $(wildcard *$(CPP_SUFFIX))
OBJ := $(SRC:$(CPP_SUFFIX)=$(OBJ_SUFFIX))

.PHONY: all clean src

all :  testMain

testMain : testMain$(OBJ_SUFFIX) $(OBJ) 
	$(CXX) $(LDFLAGS) -o $@ $? ../src/*$(OBJ_SUFFIX) $(LDLIBS)

src : 
	$(MAKE) -C ../src

clean:
	$(RM) $(OBJ)