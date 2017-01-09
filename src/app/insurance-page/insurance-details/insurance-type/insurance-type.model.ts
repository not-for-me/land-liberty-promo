export class InsuranceTypeInfo {
    id: number;
    title: string;
    desc: string;
};

export const INSURANCE_TYPE: InsuranceTypeInfo[] = [
    { id: 1, title: '단독형 실손보험', desc: '우리가 일상에서 "병원비"라고 부르는 것을 보상해주는 보험입니다.' },
    { id: 2, title: '질병 ⋅ 상해보험', desc: '가계책임자의 질병 및 상해로 인한 소득활동의 중단을 대비하는 보험입니다.' },
    { id: 3, title: '사망보험', desc: `'생계책임자'의 사망에 의한 가계파산을 막기 위한 보험입니다.` }
];

/**
 * type-1은 1번만
 * type-2는 1+2 조합
 * type-3는 1+2+3 조합
 */
export type InsuranceCompositonType = 'type-1' | 'type-2' | 'type-3';
