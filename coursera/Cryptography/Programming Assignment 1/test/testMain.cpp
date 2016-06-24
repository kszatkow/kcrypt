/*
 * testMain.cpp
 *
 *  Created on: Jun 19, 2016
 *      Author: moomin
 */

#include "attackViginere.h"

#include <cstdint>
#include <string>
#include <vector>
#include <sstream>
#include <iomanip>
#include <cassert>

using namespace std;

string convertBytesToHexString(const vector<uint8_t>& bytes) {
	ostringstream os;
	for (uint8_t c : bytes) {
		// cast needed to avoid displaying as char (ascii)
		os << hex << noshowbase << uppercase << static_cast<uint16_t>(c);
	}
	return os.str();
}

void test_getCiphertext() {
	// given
	vector<uint8_t> expectedOutput = { 0xF9, 0x6D, 0xE8, 0xC2, 0x27, 0x45, 0xEF, 0x23 };
	istringstream in( convertBytesToHexString( expectedOutput ) );

	// when
	vector<uint8_t> ciphertext = getCiphertext(in);

	// then
	auto ciphertextIter = ciphertext.begin();
	for (auto encryptedByte : expectedOutput) {
		assert( encryptedByte == *ciphertextIter++);
	}
}

int main(int argc, char** argv) {
	test_getCiphertext();
}
