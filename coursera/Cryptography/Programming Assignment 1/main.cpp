/*
 * main.cpp
 *
 *  Created on: Jun 19, 2016
 *      Author: kszatkow
 */

#include <string>
#include <iostream>
#include <fstream>

#include "attackViginere.h"

using namespace std;

void printUsage() {
	cout << "Usage: attackViginere input alphabet output" << endl;
	cout << "\tinput - encrypted input text in hexadecimal ascii format" << endl;
	cout << "\talphabet - set of allowed characters" << endl;
	cout << "\toutput - name of output file with decrypted text in ascii format" << endl;
}

int main(int argc, char** argv) {
	if (argc < 4) {
		cerr << "Too few arguments" << endl;
		printUsage();
		return 1;
	}

	string inputFilename = argv[1];
	string alphabetFilename = argv[2];
	string outputFilename = argv[3];

	ifstream in(inputFilename);
	if (!in) {
		cerr << "Input file cannot be opened" << endl;
		return 1;
	}

	vector<char> ciphertext = getCiphertext(in);
	for (auto elem : ciphertext) {
//		cout << static_cast<int>(elem) << " ";
	}
	cout << endl;


	return 0;
}
