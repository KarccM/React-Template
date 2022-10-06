interface Input { 
    name: string,
    control: any,    
}

type Option = { 
    label: string,
    value: string
}

export type MaterialInput = Input &{
    value: string | number
};

export type MaterialSelect = Input & { 
    options: Array<Option>
}