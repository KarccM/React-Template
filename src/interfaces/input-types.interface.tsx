interface Input { 
    name: string,
    control: any,    
}

type Option = { 
    label: string,
    id: number
}

export type MaterialInput = Input &{
    defaultValue: string | number 
    error:boolean
};

export type MaterialSelect = Input & { 
    options: Array<Option>
}