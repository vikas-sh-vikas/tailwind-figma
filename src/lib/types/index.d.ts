type CompanyProfileModel = {
    companyName:string,
    name:string,
    startDate?:Date | string,
    regNo:number,
    isSaleSystem:boolean,
    phoneNo:number,
    employment:string,
    licence?:File,
  }

  type EditStateProps = {
    span: number;
    type: string;
    data: {
      label: string;
      input: string;
    };
    setFormData?: (e: string) => void;
  };

  type ToggleStateProps = {
    span: number;
    checked: boolean;
    label: string;
    setFromdata: (e:boolean)=> void
  };

  type UploadStateProps = {
    span: number;
    type: string;
  };

  type DocStateProps = {
    span: number;
    type: string;
    data: {
      label: string;  
      input: string;
    };
  };

  type ModalProps = {
    isOpen: boolean;
    type: string;
    data?: {
      label: string;
      input: string;
    };
    closeModal: () => void;
    setData?: (data: string) => void;
  };