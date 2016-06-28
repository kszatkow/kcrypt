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
#include <iostream>

using namespace std;

#define RUN_TEST(x)									\
	std::cout << "Running " << #x << std::endl; 	\
	x();											\
	std::cout << "Finished " << #x << std::endl

const string TestInput = "F96DE8C227A259C87EE1DA2AED57C93FE5DA36ED4E"
		"C87EF2C63AAE5B9A7EFFD673BE4ACF7BE8923AB1ECE7AF2DA3DA44FCF7AE"
		"29235A24C963FF0DF3CA3599A70E5DA36BF1ECE77F8DC34BE129A6CF4D126"
		"BF5B9A7CFEDF3EB850D37CF0C63AA2509A76FF9227A55B9A6FE3D720A850D"
		"97AB1DD35ED5FCE6BF0D138A84CC931B1F121B44ECE70F6C032BD56C33FF9"
		"D320ED5CDF7AFF9226BE5BDE3FF7DD21ED56CF71F5C036A94D963FF8D473A"
		"351CE3FE5DA3CB84DDB71F5C17FED51DC3FE8D732BF4D963FF3C727ED4AC87"
		"EF5DB27A451D47EFD9230BF47CA6BFEC12ABE4ADF72E29224A84CDF3FF5D720"
		"A459D47AF59232A35A9A7AE7D33FB85FCE7AF5923AA31EDB3FF7D33ABF52C3"
		"3FF0D673A551D93FFCD33DA35BC831B1F43CBF1EDF67F0DF23A15B963FE5DA36"
		"ED68D378F4DC36BF5B9A7AFFD121B44ECE76FEDC73BE5DD27AFCD773BA5FC93F"
		"E5DA3CB859D26BB1C63CED5CDF3FE2D730B84CDF3FF7DD21ED5ADF7CF0D636BE1"
		"EDB79E5D721ED57CE3FE6D320ED57D469F4DC27A85A963FF3C727ED49DF3FFF"
		"DD24ED55D470E69E73AC50DE3FE5DA3ABE1EDF67F4C030A44DDF3FF5D73EA25"
		"0C96BE3D327A84D963FE5DA32B91ED36BB1D132A31ED87AB1D021A255DF71B1C"
		"436BF479A7AF0C13AA147940";

string convertBytesToHexString(const vector<uint8_t>& bytes) {
	ostringstream os;
	for (uint8_t c : bytes) {
		// cast needed to avoid displaying as char (ascii)
		os << hex << noshowbase << uppercase << static_cast<uint16_t>(c);
	}
	return os.str();
}

void test_getCiphertextProperText() {
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

void test_getCiphertextEmptyText() {
	// given
	istringstream in( "" );

	// when
	vector<uint8_t> ciphertext = getCiphertext(in);

	// then
	assert( ciphertext.size() == 0 );
}

void test_getCiphertextOddLength() {
	// given
	istringstream in( "F96DE" );

	// when
	try {
		vector<uint8_t> ciphertext = getCiphertext(in);
		// control should never reach here
		assert (false);
	// then
	} catch(std::invalid_argument& e) {
		// expected
		assert (true);
	}
}

void test_getCiphertextNotHexString() {
	// given
	istringstream in( "F96DEX34WE" );

	// when
	try {
		vector<uint8_t> ciphertext = getCiphertext(in);
		// control should never reach here
		assert (false);
	// then
	} catch(std::invalid_argument& e) {
		// expected
		assert (true);
	}
}

void test_getCiphertextIOError() {
	// given
	istringstream in( "F96DE8" );

	// when
	try {
		in.setstate(ios::badbit);
		vector<uint8_t> ciphertext = getCiphertext(in);
		// control should never reach here
		assert (false);
	// then
	} catch(std::runtime_error& e) {
		// expected
		assert (true);
	}
}

void test_KeyLengthCrackerTryLength() {
	// given
	istringstream in( TestInput );
	vector<uint8_t> ciphertext = getCiphertext(in);

	// when
	KeyLengthCracker cracker( ciphertext );
	double squaredFrequenciesProduct = cracker.tryKeyLength(1);

	// then
	cout << squaredFrequenciesProduct << endl;
}

int main(int argc, char** argv) {
	// test getCiphertext
	RUN_TEST(test_getCiphertextProperText);
	RUN_TEST(test_getCiphertextEmptyText);
	RUN_TEST(test_getCiphertextOddLength);
	RUN_TEST(test_getCiphertextNotHexString);
	RUN_TEST(test_getCiphertextIOError);

	// test KeyLengthCracker::tryKeyLength
	RUN_TEST(test_KeyLengthCrackerTryLength);
}
