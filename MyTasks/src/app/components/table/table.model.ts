interface TableData{
    status ?: string
    name : string;
    description : string;
    data : Date;
    isFinished : string;
    importance : string;
    edit ?: ()=>{}
    delete ?: () =>{}

}