import {InsuranceCompositonType} from '../insurance-details';

export interface QuestionInfo {
    id: string;
    hasNext: boolean;
    nextId: string;
    problemHtml: string;
    compoTypeInNo: InsuranceCompositonType;
    compoTypeInYes?: InsuranceCompositonType;
}