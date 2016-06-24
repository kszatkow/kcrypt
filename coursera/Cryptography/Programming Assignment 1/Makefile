TOP_LEVEL_DIR := 

include Makefile.common

.PHONY: all src test clean
all: main test

main : main$(OBJ_SUFFIX) src
	$(CXX) $(LDFLAGS) -o $@ $< src/*$(OBJ_SUFFIX) $(LDLIBS)

src:
	$(MAKE) -C src

test:
	$(MAKE) -C test

clean:
	$(RM) main
	$(MAKE) -C src clean
	$(MAKE) -C test clean
