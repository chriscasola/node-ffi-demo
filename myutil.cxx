#include "myutil.h"
#include <iostream>
#include <string>

int double_it(int num) {
    return num * 2;
}

row print_it(row aRow) {
    std::cout 
    << "id: "
    << aRow.id 
    << "\n"
    << "name: " 
    << std::string(aRow.name) 
    << "\n"
    << "metadata:\n"
    << "  data_type: "
    << aRow.metadata.data_type
    << "\n"
    << "  group_path: "
    << aRow.metadata.group_path
    << std::endl;

    return aRow;
}