import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

function New() {
    const [inputvalue, setinputvalue] = useState({ text: "", Descriptionvalue: "" })
    const [submitvalue, setsubmitvalue] = useState([])
    const [create, setcreate] = useState(false)
    const [Modal, setModal] = useState(false)

    const handletaskbar = () => {
        setcreate(!create)
    }
    const handlesubmit = (e) => {
        const { name, value } = e.target;
        setinputvalue({ ...inputvalue, [name]: value });
    }
    console.log(inputvalue);
    const handlevaluesubmit = (e) => {
        e.preventDefault();

        setsubmitvalue([...submitvalue, {
            text: inputvalue.text, Descriptionvalue: inputvalue.Descriptionvalue, isComplete: false,
            isShow: false
        }])

        setinputvalue({ text: "", Descriptionvalue: "" })
        setcreate(!create)

        Swal.fire({
            title: "Good job!",
            text: "Your task has been added !",
            icon: "success"
        });
    }

    const handleDelete = (index) => {
        const dataUpdate = [...submitvalue];
        dataUpdate.splice(index, 1)
        setsubmitvalue(dataUpdate)
        Swal.fire({
            title: "Task deleted!",
            text: "Your task has been deleted !",
            icon: "success"
        });
        setModal(!Modal)

    };

    const handleLine = (index) => {
        const dataUpdate = [...submitvalue];
        dataUpdate[index].isComplete = !dataUpdate[index].isComplete
        setsubmitvalue(dataUpdate)
    }


    const modalOpen = (index) => {
        setModal(!Modal)
        const dataUpdate = [...submitvalue];
        dataUpdate[index].isShow = !dataUpdate[index].isShow
        setsubmitvalue(dataUpdate)
    }


    return (
        <>
            <div className="flex justify-center relative">
                <div className="w-[411px] min-h-[729px] h-full rounded-[10px] bg-[linear-gradient(179.98deg,#1253AA_00.2%,#05243E_99.98%)] relative">
                    <div className="p-[45px_9px_0px_18px]">
                        <div className="flex gap-[8px]">
                            <div className=" w-[252px] h-[42px] rounded-[10px] bg-[#102D53CC] p-[12px_19px_13px_8px] flex justify-between">
                                <input type="text" className=' border-none outline-none bg-transparent h-full pl-[8px] ff-poppins font-medium text-[12px] leading-[18px] text-[#FFFFFF99]' placeholder='Search by task title' />
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3142 7.19231C12.3142 4.66887 10.2491 2.61538 7.71135 2.61538C5.1736 2.61538 3.10847 4.66887 3.10847 7.19231C3.10847 9.71574 5.1736 11.7692 7.71135 11.7692C10.2491 11.7692 12.3142 9.71574 12.3142 7.19231ZM17.5747 15.6923C17.5747 16.4075 16.9788 17 16.2596 17C15.9102 17 15.5712 16.857 15.3349 16.6118L11.8108 13.1178C10.6087 13.9453 9.1703 14.3846 7.71135 14.3846C3.71466 14.3846 0.478256 11.1665 0.478256 7.19231C0.478256 3.21815 3.71466 0 7.71135 0C11.708 0 14.9444 3.21815 14.9444 7.19231C14.9444 8.64303 14.5027 10.0733 13.6704 11.2686L17.1945 14.7728C17.4308 15.0078 17.5747 15.345 17.5747 15.6923Z" fill="white" fill-opacity="0.5" />
                                </svg>
                            </div>
                            <div className="w-[124px] h-[42px] rounded-[10px] bg-[#102D53CC] p-[12px_19px_13px_8px] flex justify-between">
                                <input type="text" className=' border-none outline-none bg-transparent w-full h-full pl-[8px] ff-poppins font-medium text-[12px] leading-[18px] text-[#FFFFFF99]' placeholder='Sort By:' />
                            </div>
                        </div>
                        <p className=' ff-poppins font-normal text-[16px] leading-[24px] text-white mt-[46px]'>Tasks List</p>
                        <ul>
                            {submitvalue.map((data, index) => (
                                <div key={index}>
                                    <li onClick={() => modalOpen(index)} className={` ${data.isComplete ? "line-through" : ""} w-[375px] h-[51px] rounded-[5px] bg-[#FFFFFFF7] ff-poppins font-medium text-[14px] leading-[21px] text-black tracking-[9%] p-[0px_20px_0px_25px] flex justify-between items-center mt-[20px]`} type="button"
                                    >{data.text}
                                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3913 8.05321L3.36035 0.686162C3.08976 0.437946 2.65683 0.437946 2.38624 0.686162L0.589565 2.33432C0.318981 2.58253 0.318981 2.97968 0.589565 3.22789L6.33677 8.5L0.589565 13.7721C0.318981 14.0203 0.318981 14.4175 0.589565 14.6657L2.38624 16.3138C2.65683 16.5621 3.08976 16.5621 3.36035 16.3138L11.3913 8.94679C11.6619 8.69857 11.6619 8.30143 11.3913 8.05321Z" fill="#0EA5E9" />
                                        </svg>
                                    </li>
                                </div>
                            ))}
                        </ul>
                        <button className="w-[50px] h-[50px] bg-[#63D9F3] rounded-[50%] flex justify-center items-center absolute bottom-[5%] right-[2%]" onClick={handletaskbar}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1471 7.40443V9.74267C17.1471 10.3881 16.6234 10.9118 15.978 10.9118H10.9118V15.978C10.9118 16.6234 10.3881 17.1471 9.74267 17.1471H7.40443C6.75898 17.1471 6.23531 16.6234 6.23531 15.978V10.9118H1.16912C0.523669 10.9118 0 10.3881 0 9.74267V7.40443C0 6.75898 0.523669 6.23531 1.16912 6.23531H6.23531V1.16912C6.23531 0.523669 6.75898 0 7.40443 0H9.74267C10.3881 0 10.9118 0.523669 10.9118 1.16912V6.23531H15.978C16.6234 6.23531 17.1471 6.75898 17.1471 7.40443Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <form className={`${create ? "block" : "hidden"} h-[444px] rounded-[20px_20px_0px_0px] p-[33px_26px_25px_27px] bg-[#ffffff] absolute bottom-0`} onSubmit={handlevaluesubmit}>
                        <div className=" w-[358px] h-[42px] rounded-[5px] bg-[#05243E] flex gap-[14px] items-center pl-[16px]" >
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 7.97443V11.1364C14 12.7173 12.7173 14 11.1364 14H2.86364C1.28267 14 0 12.7173 0 11.1364V2.86364C0 1.28267 1.28267 0 2.86364 0H11.1364C11.5341 0 11.9318 0.0795455 12.2997 0.24858C12.3892 0.288352 12.4588 0.377841 12.4787 0.477273C12.4986 0.586648 12.4688 0.68608 12.3892 0.765625L11.902 1.25284C11.8423 1.3125 11.7528 1.35227 11.6733 1.35227C11.6435 1.35227 11.6136 1.34233 11.5838 1.33239C11.4347 1.29261 11.2855 1.27273 11.1364 1.27273H2.86364C1.98864 1.27273 1.27273 1.98864 1.27273 2.86364V11.1364C1.27273 12.0114 1.98864 12.7273 2.86364 12.7273H11.1364C12.0114 12.7273 12.7273 12.0114 12.7273 11.1364V8.6108C12.7273 8.53125 12.7571 8.4517 12.8168 8.39205L13.4531 7.75568C13.5227 7.68608 13.6023 7.65625 13.6818 7.65625C13.7216 7.65625 13.7614 7.66619 13.8011 7.68608C13.9205 7.7358 14 7.84517 14 7.97443ZM16.2969 3.11222L8.20312 11.206C7.88494 11.5241 7.38778 11.5241 7.0696 11.206L2.79403 6.9304C2.47585 6.61222 2.47585 6.11506 2.79403 5.79688L3.88778 4.70312C4.20597 4.38494 4.70312 4.38494 5.02131 4.70312L7.63636 7.31818L14.0696 0.884943C14.3878 0.566761 14.8849 0.566761 15.2031 0.884943L16.2969 1.97869C16.6151 2.29688 16.6151 2.79403 16.2969 3.11222Z" fill="white" />
                            </svg>
                            <input name='text' type="text" className=' outline-none border-none bg-transparent ff-poppins fw-normal text-[16px] leading-[24px] text-[#FFFFFFCC] w-[85%]' value={inputvalue.text} onChange={handlesubmit} required placeholder='Task' />
                        </div>
                        <div className=" w-[358px] h-[159px] rounded-[5px] bg-[#05243E] p-[14px_0px_0px_16px] mt-[34px]">
                            <div className="flex gap-[12px] items-baseline ">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 13.8182V15.2727C20 15.6705 19.6763 16 19.2857 16H0.714286C0.323661 16 0 15.6705 0 15.2727V13.8182C0 13.4205 0.323661 13.0909 0.714286 13.0909H19.2857C19.6763 13.0909 20 13.4205 20 13.8182ZM15.7143 9.45455V10.9091C15.7143 11.3068 15.3906 11.6364 15 11.6364H0.714286C0.323661 11.6364 0 11.3068 0 10.9091V9.45455C0 9.05682 0.323661 8.72727 0.714286 8.72727H15C15.3906 8.72727 15.7143 9.05682 15.7143 9.45455ZM18.5714 5.09091V6.54545C18.5714 6.94318 18.2478 7.27273 17.8571 7.27273H0.714286C0.323661 7.27273 0 6.94318 0 6.54545V5.09091C0 4.69318 0.323661 4.36364 0.714286 4.36364H17.8571C18.2478 4.36364 18.5714 4.69318 18.5714 5.09091ZM14.2857 0.727273V2.18182C14.2857 2.57955 13.9621 2.90909 13.5714 2.90909H0.714286C0.323661 2.90909 0 2.57955 0 2.18182V0.727273C0 0.329545 0.323661 0 0.714286 0H13.5714C13.9621 0 14.2857 0.329545 14.2857 0.727273Z" fill="white" />
                                </svg>
                                <textarea name='Descriptionvalue' value={inputvalue.Descriptionvalue} onChange={handlesubmit} className=' outline-none border-none bg-transparent resize-none w-full h-[150px] ff-poppins fw-normal text-[16px] leading-[24px] text-[#FFFFFFCC]' placeholder='Description' ></textarea>
                            </div>
                        </div>
                        <div className="flex gap-[19px] mt-[22px]">
                            <div className=" w-[170px] h-[42px] rounded-[5px] bg-[#05243E] flex items-center">
                                <input type="date" placeholder='Date' className='ff-poppins fw-normal text-[16px] leading-[24px] text-[#FFFFFFCC] bg-transparent border-none outline-none' />
                            </div>
                            <div className=" w-[170px] h-[42px] rounded-[5px] bg-[#05243E] flex items-center">
                                <input type="time" placeholder='Date' className='ff-poppins fw-normal text-[16px] leading-[24px] text-[#FFFFFFCC] bg-transparent border-none outline-none' />
                            </div>
                        </div>
                        <div className="flex justify-between mt-[20px]">
                            <button className=' ff-poppins font-medium text-[16px] leading-[24px] text-[#05243E] w-[170px] h-[45px] border-[2px] border-[#0EA5E9] rounded-[10px]' type='button' onClick={handletaskbar}>cancel</button>
                            <button className=' ff-poppins font-medium text-[16px] leading-[24px] text-white w-[170px] h-[45px] bg-[#0EA5E9] rounded-[10px]' type="submit">create</button>
                        </div>
                    </form>

                    {submitvalue.map((data, index) => (
                        <div className={`${data.isShow ? "fixed" : "hidden"} w-[411px] h-[731px] rounded-[10px] top-0 z-[50] bg-[linear-gradient(179.98deg,#1253AA_00.2%,#05243E_99.98%)]`}>
                            <div className=" pt-[62px] pl-[37px]">
                                <div className="flex gap-[14px] items-center">
                                    <svg onClick={() => modalOpen(index)} width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.91383 1.41383C9.91383 1.5501 9.84569 1.70341 9.74349 1.80561L3.0491 8.5L9.74349 15.1944C9.84569 15.2966 9.91383 15.4499 9.91383 15.5862C9.91383 15.7224 9.84569 15.8758 9.74349 15.978L8.89178 16.8297C8.78958 16.9319 8.63627 17 8.5 17C8.36373 17 8.21042 16.9319 8.10822 16.8297L0.170341 8.89178C0.0681363 8.78958 0 8.63627 0 8.5C0 8.36373 0.0681363 8.21042 0.170341 8.10822L8.10822 0.170341C8.21042 0.0681363 8.36373 0 8.5 0C8.63627 0 8.78958 0.0681363 8.89178 0.170341L9.74349 1.02204C9.84569 1.12425 9.91383 1.26052 9.91383 1.41383Z" fill="#63D9F3" />
                                    </svg>
                                    <p className=' ff-poppins fw-medium text-[16px] leading-[24px] tracking-[9%] text-white '>Task Details</p>
                                </div>
                                <div className=" flex items-center gap-3 mt-[76px]">
                                    <p className={`${data.isComplete ? "line-through" : ""}  ff-poppins font-medium text-[18px] leading-[27px] text-white`}>{data.text}</p>
                                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0909 12L11.4091 10.6818L9.68182 8.95455L8.36364 10.2727V10.9091H9.45455V12H10.0909ZM15.0909 3.81818C14.9886 3.71591 14.8182 3.72727 14.7159 3.82955L10.7386 7.80682C10.6364 7.90909 10.625 8.07955 10.7273 8.18182C10.8295 8.28409 11 8.27273 11.1023 8.17045L15.0795 4.19318C15.1818 4.09091 15.1932 3.92045 15.0909 3.81818ZM16 10.5682V12.7273C16 14.5341 14.5341 16 12.7273 16H3.27273C1.46591 16 0 14.5341 0 12.7273V3.27273C0 1.46591 1.46591 0 3.27273 0H12.7273C13.1818 0 13.6364 0.0909091 14.0568 0.284091C14.1591 0.329545 14.2386 0.431818 14.2614 0.545455C14.2841 0.670455 14.25 0.784091 14.1591 0.875L13.6023 1.43182C13.5 1.53409 13.3636 1.56818 13.2386 1.52273C13.0682 1.47727 12.8977 1.45455 12.7273 1.45455H3.27273C2.27273 1.45455 1.45455 2.27273 1.45455 3.27273V12.7273C1.45455 13.7273 2.27273 14.5455 3.27273 14.5455H12.7273C13.7273 14.5455 14.5455 13.7273 14.5455 12.7273V11.2955C14.5455 11.2045 14.5795 11.1136 14.6477 11.0455L15.375 10.3182C15.4886 10.2045 15.6364 10.1818 15.7727 10.2386C15.9091 10.2955 16 10.4205 16 10.5682ZM14.9091 2.18182L18.1818 5.45455L10.5455 13.0909H7.27273V9.81818L14.9091 2.18182ZM19.9545 3.68182L18.9091 4.72727L15.6364 1.45455L16.6818 0.409091C17.1023 -0.0113636 17.8068 -0.0113636 18.2273 0.409091L19.9545 2.13636C20.375 2.55682 20.375 3.26136 19.9545 3.68182Z" fill="white" />
                                    </svg>
                                </div>
                                <div className=" w-[320px] border-[1px] border-[#FFFFFF40] mt-[25px]"></div>
                                <p className=' mt-[24px] ff-poppins font-medium text-[14px] leading-[21px] text-white max-w-[331px] '>{data.Descriptionvalue}</p>
                                <div className=" flex gap-[35px] mt-[58px]">
                                    <div className=" w-[88px] h-[71px] bg-[#05243E] shadow-[0px_0px_10px_1px_#FFFFFF40] rounded-[10px] flex justify-center items-center cursor-pointer" onClick={() => handleLine(index)}>
                                        <div className="">
                                            <div className=" flex justify-center">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.7188 7.89062C16.7188 7.66927 16.6406 7.44792 16.4844 7.29167L15.2995 6.11979C15.1432 5.96354 14.9349 5.8724 14.7135 5.8724C14.4922 5.8724 14.2839 5.96354 14.1276 6.11979L8.8151 11.4193L5.8724 8.47656C5.71615 8.32031 5.50781 8.22917 5.28646 8.22917C5.0651 8.22917 4.85677 8.32031 4.70052 8.47656L3.51562 9.64844C3.35938 9.80469 3.28125 10.026 3.28125 10.2474C3.28125 10.4688 3.35938 10.6771 3.51562 10.8333L8.22917 15.5469C8.38542 15.7031 8.60677 15.7943 8.8151 15.7943C9.03646 15.7943 9.25781 15.7031 9.41406 15.5469L16.4844 8.47656C16.6406 8.32031 16.7188 8.11198 16.7188 7.89062ZM20 10C20 15.5208 15.5208 20 10 20C4.47917 20 0 15.5208 0 10C0 4.47917 4.47917 0 10 0C15.5208 0 20 4.47917 20 10Z" fill="#49EA80" />
                                                </svg>
                                            </div>
                                            <p className=' ff-poppins font-medium text-[14px] leading-[21px] text-white'>Done</p>
                                        </div>
                                    </div>
                                    <div className=" w-[88px] h-[71px] bg-[#05243E] shadow-[0px_0px_10px_1px_#FFFFFF40] rounded-[10px] flex justify-center items-center cursor-pointer" onClick={() => handleDelete(index)}>
                                        <div className="">
                                            <div className=" flex justify-center">
                                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.27273 17.7273V7.72727C7.27273 7.47159 7.07386 7.27273 6.81818 7.27273H5.90909C5.65341 7.27273 5.45455 7.47159 5.45455 7.72727V17.7273C5.45455 17.983 5.65341 18.1818 5.90909 18.1818H6.81818C7.07386 18.1818 7.27273 17.983 7.27273 17.7273ZM10.9091 17.7273V7.72727C10.9091 7.47159 10.7102 7.27273 10.4545 7.27273H9.54545C9.28977 7.27273 9.09091 7.47159 9.09091 7.72727V17.7273C9.09091 17.983 9.28977 18.1818 9.54545 18.1818H10.4545C10.7102 18.1818 10.9091 17.983 10.9091 17.7273ZM14.5455 17.7273V7.72727C14.5455 7.47159 14.3466 7.27273 14.0909 7.27273H13.1818C12.9261 7.27273 12.7273 7.47159 12.7273 7.72727V17.7273C12.7273 17.983 12.9261 18.1818 13.1818 18.1818H14.0909C14.3466 18.1818 14.5455 17.983 14.5455 17.7273ZM6.81818 3.63636H13.1818L12.5 1.97443C12.4574 1.91761 12.3295 1.83239 12.2585 1.81818H7.75568C7.67045 1.83239 7.55682 1.91761 7.5142 1.97443L6.81818 3.63636ZM20 4.09091V5C20 5.25568 19.8011 5.45455 19.5455 5.45455H18.1818V18.9205C18.1818 20.483 17.1591 21.8182 15.9091 21.8182H4.09091C2.84091 21.8182 1.81818 20.5398 1.81818 18.9773V5.45455H0.454545C0.198864 5.45455 0 5.25568 0 5V4.09091C0 3.83523 0.198864 3.63636 0.454545 3.63636H4.84375L5.83807 1.2642C6.12216 0.568182 6.97443 0 7.72727 0H12.2727C13.0256 0 13.8778 0.568182 14.1619 1.2642L15.1562 3.63636H19.5455C19.8011 3.63636 20 3.83523 20 4.09091Z" fill="#E76666" />
                                                </svg>
                                            </div>
                                            <p className=' ff-poppins font-medium text-[14px] leading-[21px] text-white'>Delete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default New