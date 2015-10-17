struct row {
    int id;
    char* name;
};

extern "C" {
    int double_it(int num);
    void print_it(row aRow);
}