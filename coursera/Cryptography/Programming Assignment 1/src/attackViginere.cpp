/*
 * attackViginere.cpp
 *
 *  Created on: Jun 19, 2016
 *      Author: kszatkow
 */

#include "attackViginere.h"

#include <vector>
#include <string>
#include <iostream>
#include <fstream>
#include <cctype>
#include <iomanip>

using namespace std;

vector<char> getCiphertext(istream& in) {
	vector<char> rawInput;
	int c;
	// TODO - use locale
//	in >> setw(2) >> hex;
	while(in >> hex >> noshowbase >> setw(2) >> c) {
		cout << c << " ";
//		rawInput.push_back(c);
//		in >> setw(2) >> hex;
	}
	cout << endl;

	auto rawInputIter = rawInput.cbegin();
	auto rawInputEnd = rawInput.cend();
	vector<char> input;
//	while (rawInputIter < rawInputEnd) {
//		char singleByteChars[2];
//		singleByteChars[0] = *rawInputIter++;
//		if (rawInputIter == rawInputEnd) {
//			cerr << "Wrong input" << endl;
//			return {};
//		}
//		singleByteChars[1] = *rawInputIter++;
//
//		char result = (isdigit(singleByteChars[0]) ?
//				(singleByteChars[0] - '0') : (singleByteChars[0] - '1')) * 16;
//		result +=  (isdigit(singleByteChars[1]) ?
//				(singleByteChars[1] - '0') : (singleByteChars[1] - '1'));
//		input.push_back(result);
//	}

	return input;
}
