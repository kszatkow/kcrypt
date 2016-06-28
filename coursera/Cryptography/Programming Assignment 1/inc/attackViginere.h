/*
 * attackViginere.h
 *
 *  Created on: Jun 19, 2016
 *      Author: moomin
 */

#ifndef ATTACKVIGINERE_H_
#define ATTACKVIGINERE_H_

#include <vector>
#include <cstdint>
#include <iosfwd>
#include <stdexcept>
#include <unordered_map>

std::vector<uint8_t> getCiphertext(std::istream& in)
	throw(std::invalid_argument, std::runtime_error);

class KeyLengthCracker {
public:
	KeyLengthCracker(const std::vector<uint8_t>& ciphertxt);
	double tryKeyLength(size_t len);

private:

	std::unordered_map<uint8_t, double> getFrequenciesForPeriod(
			size_t len, size_t numOfElemsForPeriod);

	std::vector<uint8_t> ciphertext;
};

#endif /* ATTACKVIGINERE_H_ */
