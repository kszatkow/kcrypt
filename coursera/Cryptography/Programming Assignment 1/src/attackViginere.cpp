/*
 * attackViginere.cpp
 *
 *  Created on: Jun 19, 2016
 *      Author: kszatkow
 */

#include "attackViginere.h"

#include <string>
#include <sstream>
#include <iomanip>
#include <iostream>

using namespace std;

uint8_t convertHexStringByteToRawByte(const string& hexStringByte) {
	istringstream is(hexStringByte);
	// 16 bits needed to avoid coverting to ascii (8-bit is interpreted as char)
	uint16_t rawByte;
	is >> hex >>  noshowbase >> rawByte;
	// cast is safe, one byte is used
	return static_cast<uint8_t>(rawByte);
}

vector<uint8_t> getCiphertext(istream& in) {
	string hexStringByte;
	vector<uint8_t> rawBytes;
	while ( in >> setw(2) >> hexStringByte ) {
		rawBytes.push_back( convertHexStringByteToRawByte( hexStringByte) );
	}
//	cout << rawBytes.size() << endl;
	return rawBytes;
}

