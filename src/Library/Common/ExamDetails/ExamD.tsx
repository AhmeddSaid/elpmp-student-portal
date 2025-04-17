import React from "react";
//
// const QuestionAr = "السؤال عربي";
// const QuestionEn = "Let’s say your colleagues";
//
// const answersContent = [
// 	{
// 		body: (
// 			<div>
// 				<p>Answer 1</p>
// 			</div>
// 		),
// 		isCorrect: false,
// 	},
// 	{
// 		body: <div>Answer 12</div>,
// 		isCorrect: true,
// 	},
// 	{
// 		body: <div>Answer 55</div>,
// 		isCorrect: false,
// 	},
// 	{
// 		body: <div>Answer 51</div>,
// 		isCorrect: false,
// 	},
// ];

const ExamD = () => {
	// const [openDropdown, setOpenDropdown] = useState<number | null>(null);
	// const { dirIsLTR } = useSelector((state: any) => state.ChangeDirectionAnswer);
	// const [isEnglish, setIsEnglish] = useState<boolean>(true);
	//
	// const QuestionContent = isEnglish ? QuestionEn : QuestionAr;
	//
	// const dropdownOptions = [
	// 	[<QAnswer key={uuid()} answers={answersContent} type={"single"} question={QuestionContent} />],
	// 	[<QAnswer key={uuid()} answers={answersContent} type={"single"} question={QuestionContent} />],
	// 	[<QAnswer key={uuid()} answers={answersContent} type={"single"} question={QuestionContent} />],
	// ];
	//
	// const toggleDropdown = (index: number) => {
	// 	setOpenDropdown(prevIndex => (prevIndex === index ? null : index));
	// };
	//
	// function setOpenImage(arg0: (prev: boolean) => boolean): void {
	// 	throw new Error("Function not implemented.");
	// }

	return (
		<></>
		// <ExamPageShell>
		// 	<ExamTitle>Exam Title</ExamTitle>
		// 	<Flexbox align={"center"} justify={"space-between"}>
		// 		<ExamSubTitle>
		// 			Improve your design skills through interactive, hands-on professional courses.
		// 		</ExamSubTitle>
		// 		<QuestionImageStyles
		// 			onClick={() => setOpenImage(prev => !prev)}
		// 			width={120}
		// 			height={120}
		// 			src={"/liana-s-VT2Ygvzn49Y-unsplash(1).jpg"}
		// 			alt={""}
		// 			dirIsLTR={dirIsLTR}
		// 		/>
		// 	</Flexbox>
		// 	<div className={`${styles.marginTop16} ${styles.marginBottom16}`}>
		// 		<Button buttonType={"button"} size={"medium"} body={"Start Course"} />
		// 	</div>
		// 	<div className={styles.marginTop48}>
		// 		<Flexbox gap={10}>
		// 			<WhiteBoard />
		// 			<span>Hello</span>
		// 			<Calculator />
		// 			<span>Hello</span>
		// 			<WhiteBoard />
		// 			<span>Hello</span>
		// 			<Calculator />
		// 			<span>Hello</span>
		// 		</Flexbox>
		// 	</div>
		// 	<div
		// 		style={{ borderTop: "1px solid #ddd", paddingTop: "0.5rem" }}
		// 		className={`${styles.marginTop16}`}
		// 	>
		// 		{dropdownOptions.map((options, index) => (
		// 			<div key={index} style={{ marginBottom: "0.5rem" }}>
		// 				<DropDownNew
		// 					headerContent={
		// 						<Row>
		// 							<ExamTitle>Exam Title</ExamTitle>
		//
		// 							<ExamSubTitle>
		// 								Improve your design skills through interactive, hands-on professional courses.
		// 							</ExamSubTitle>
		// 						</Row>
		// 					}
		// 					options={options}
		// 					isOpen={openDropdown === index}
		// 					toggleDropdown={() => toggleDropdown(index)}
		// 				/>
		// 			</div>
		// 		))}
		// 	</div>
		// </ExamPageShell>
	);
};

export default ExamD;
