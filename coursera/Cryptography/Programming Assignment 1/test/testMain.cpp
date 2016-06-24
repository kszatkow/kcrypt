/*
 * testMain.cpp
 *
 *  Created on: Jun 19, 2016
 *      Author: moomin
 */

#include "attackViginere.h"

#include <sstream>
#include <vector>
#include <iostream>

using namespace std;

void test_getCiphertext() {
	istringstream in("F96D E8C227");

	vector<char> ciphertext = getCiphertext(in);
	for (auto elem : ciphertext) {
		cout << static_cast<int>(elem) << " ";
	}
	cout << endl;
}

int main(int argc, char** argv) {
	test_getCiphertext();
}
