#include "myutil.h"
#include <iostream>
#include <string>

int double_it(int num) {
    return num * 2;
}

void print_it(row aRow) {
    std::cout << aRow.id << "\t" << std::string(aRow.name) << std::endl;
}