/*
 * attackViginere.cpp
 *
 *  Created on: Jun 19, 2016
 *      Author: kszatkow
 */

#include "attackViginere.h"

#include <algorithm>
#include <string>
#include <sstream>
#include <iomanip>
#include <iostream>

using namespace std;

uint8_t convertHexStringByteToRawByte(const string& hexStringByte)
{
	istringstream is(hexStringByte);
	// 16 bits needed to avoid coverting to ascii (8-bit is interpreted as char)
	uint16_t rawByte;
	is >> hex >>  noshowbase >> rawByte;

	if (is.fail()) {
		throw invalid_argument("Wrong argument (e.g. non hex string).");
	}

	// cast is safe, one byte is used
	return static_cast<uint8_t>(rawByte);
}

vector<uint8_t> getCiphertext(istream& in)
	throw(invalid_argument, runtime_error)
{
	string hexStringByte;
	vector<uint8_t> rawBytes;
	while ( in >> setw(2) >> hexStringByte ) {
		if ( hexStringByte.length() != 2 ) {
			throw invalid_argument("Invalid ciphertext length (should be even).");
		}

		rawBytes.push_back( convertHexStringByteToRawByte( hexStringByte) );
	}

	if( in.bad() ) {
		throw runtime_error("Fatal IO error.");
	}

	return rawBytes;
}


KeyLengthCracker::KeyLengthCracker(const std::vector<uint8_t>& ciphertxt) :
	ciphertext(ciphertxt) {}

double KeyLengthCracker::tryKeyLength(size_t len) {
	unordered_map<uint8_t, double> frequenciesForPeriod =
			getFrequenciesForPeriod(len, ciphertext.size() / len);

	double sumOfSquaredFrequencies = accumulate(
			frequenciesForPeriod.begin(), frequenciesForPeriod.end(),
			0.0,
			[] (double currentSum, const std::unordered_map<uint8_t, double>::value_type& elem)
			{ return currentSum + elem.second; }
	);

	return sumOfSquaredFrequencies;
}

unordered_map<uint8_t, double> KeyLengthCracker::getFrequenciesForPeriod(
		size_t period, size_t numOfElemsForPeriod) {
	unordered_map<uint8_t, double> frequenciesForPeriod;
	for (auto iter = ciphertext.begin(); iter < ciphertext.end(); iter += period) {
		frequenciesForPeriod[*iter] += 1;
	}

	for (auto freqIter = frequenciesForPeriod.begin();
			freqIter != frequenciesForPeriod.end(); ++freqIter) {
		freqIter->second /= static_cast<double>(numOfElemsForPeriod);
		freqIter->second *= freqIter->second;
	}

	return frequenciesForPeriod;
}
