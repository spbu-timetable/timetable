type StudyLevel = {
    StudyLevelName: string;
    StudyLevelNameEnglish: string;
    HasCourse6: boolean;
    StudyProgramCombinations: EducationalProgram[];
};

type EducationalProgram = {
    Name: string;
    NameEnglish: string;
    AdmissionYears: EducationYears[]
}

type EducationYears = {
    StudyProgramId: number;
    YearName: number;
    YearNumber: number;
    IsEmpty: false;
    PublicDivisionAlias: string;
}
export default StudyLevel;