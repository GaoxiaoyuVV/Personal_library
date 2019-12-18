export interface TableCommonSettings {
    pager?: Boolean;
    pageSize?: number;
    pageOn?: number;
    searchable?: Boolean;
    sourceData?: any;
    sortBy?: string;
    sortable?: Boolean;
    orderBy?: string;
    header?: string;
    //all table data
    tbodyData?: string;
    //pageinaiton table data
    pageTbodyData?: string;
    //all data count
    total?: number;
    //table left bottom start index
    startIndex?: number;
    //table bottom show more page
    startIndexpage?: number;
    //table left bottom end index
    endIndex?: number;
    //save source data
    pageTbodySourceData?:number;
    totalPage?: number;
    currentPage?: number;
    pageize?: number;
    displayPageList?: string;
    id?: any;
}