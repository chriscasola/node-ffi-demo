struct row_metadata {
    char* data_type;
    char* group_path;
};

struct row {
    int id;
    char* name;
    row_metadata metadata;
};

extern "C" {
    int double_it(int num);
    row print_it(row aRow);
}