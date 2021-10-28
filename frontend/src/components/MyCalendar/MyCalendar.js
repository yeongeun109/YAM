import React, { useState, useEffect } from 'react'
import moment from 'moment';
import "./MyCalendar.css";
import selectDate from '../../assets/image/selectDate.png'
import returnDatePic from '../../assets/image/returnDate.png'
import rentDatePic from '../../assets/image/rentDate.png'
import today from '../../assets/image/today.png'
import arrowRight from '../../assets/icons/arrow-right.png'
import arrowLeft from '../../assets/icons/back.png'

const MyCalendar = () => {

  const [getMoment, setMoment]=useState(moment());
	const [dateStyle, setDateStyle] = useState("");
	const [selectDateFlag, setSelectDateFlag] = useState(false);
	const [selectMonth, setSelectMonth] = useState('');
	const [selectDay, setSelectDay] = useState('');

	const returnDate = "29";
	const rentDate = ["26", "27", "28"];
	// const returnDate = [11, 23, 29]

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

	useEffect(() => {
		setSelectMonth(moment().format('MM'));
		setSelectDay(moment().format('DD'));
  }, []);

	const onClickDate = (e) => {
		if (dateStyle !== ""){
			dateStyle.style.backgroundImage = "";
			setDateStyle(e.target);
		}
		if (e.target.firstElementChild !== null) {
			setDateStyle(e.target.firstElementChild);
			e.target.firstElementChild.style.backgroundImage = `url(${ selectDate })`;
		} else {
			setDateStyle(e.target);
			e.target.style.backgroundImage = `url(${ selectDate })`;
		}
	}

const tod = moment().format('MMDD');
console.log(tod);

const calendarArr=()=>{

	let result = [];
	let week = firstWeek;
	for ( week; week <= lastWeek; week++) {
		result = result.concat(
			<tr key={week}>
				{
					Array(7).fill(0).map((data, index) => {
						let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
						// 나중에 한자리수 일자 조정할 것.
						if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
							return(
									<td key={index} className="today-box" >
										<span className="">{days.format('D')}</span>
									</td>
							);
						}else if(days.format('MM') !== today.format('MM')){
							return(
									<td key={index} >
										<td key={index} >
										<span className=""></span>
									</td>
									</td>
							);
						} else if (rentDate.includes(days.format('D'))){
							return(
								<td key={index} className="available-date-box" onClick={onClickDate}>
										<div className="return-date-set">
											<span className={`${days.format('D')}`}>{days.format('D')}</span>
											<img className="date-check" src={rentDatePic} alt="rent-date"/>
										</div> 
								</td>
						);
						} else{
							return(
									<td key={index} className="available-date-box" onClick={onClickDate}>
										
										{ 
											days.format('D') === returnDate ?
											<div className="return-date-set">
												<span className={`${days.format('D')}`} >{days.format('D')}</span>
												<img className="date-check" src={returnDatePic} alt="retrun-date"/>
											</div> :
											<span >{days.format('D')}</span>
										}
									</td>
							);
						}
					})
				}
			</tr>
		);
	}
	return result;
}
	
	return (
		<div className="All">
			<div>

				<div className="control">
				<img
							src={arrowLeft}
							alt="arrowLeft"
							width="30px"
							height="30px"
							className="post-month-button" onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}
						/>
				<span className="year-month">{today.format('YYYY 년 MM 월')}</span>
				<img
							src={arrowRight}
							alt="arrowRight"
							width="30px"
							height="30px"
							className="prev-month-button" onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}
						/>
					</div>
					<table>
						<tbody>
							{calendarArr()}
						</tbody>
					</table>
			</div>
		</div>
	);
}

export default MyCalendar
