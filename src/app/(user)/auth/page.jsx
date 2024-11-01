// "use client";
// import { useEffect, useState } from "react";
// import SendOTPFrom from "./SendOTPFrom";
// import { toast } from "react-hot-toast";
// import { useMutation } from "@tanstack/react-query";
// import { checkOtp, getOtp } from "@/services/authServices";
// import CheckOTPForm from "./CheckOTPForm";
// import { useRouter } from "next/navigation";
// const RESEND_TIME = 90;

// function AuthPage() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);
//   const [time, setTime] = useState(RESEND_TIME);
//   const router = useRouter();
//   const {
//     data: otpResponse,
//     error,
//     isLoading,
//     mutateAsync: mutateGetOtp,
//   } = useMutation({
//     mutationFn: getOtp,
//   });
//   const { mutateAsync: mutateCheckOtp, isLoading: isCechkingOtp } = useMutation(
//     {
//       mutationFn: checkOtp,
//     }
//   );

//   const phoneNumberHandler = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const sendOtpHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await mutateGetOtp({ phoneNumber });
//       toast.success(data.message);
//       setStep(2);
//       setTime(RESEND_TIME);
//       setOtp("");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };
//   const checkOtpHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { message, user } = await mutateCheckOtp({ phoneNumber, otp });

//       toast.success(message);
//       if (user.isActive) {
//         router.push("/");
//       } else {
//         router.push("/complete-profile");
//       }
//       // push -> /complete-profile
//       // isActive -> / : /complete-profile
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
//     return () => {
//       if (timer) clearInterval(timer);
//     };
//   }, [time]);

//   const renderSteps = () => {
//     switch (step) {
//       case 1:
//         return (
//           <SendOTPFrom
//             phoneNumber={phoneNumber}
//             onChange={phoneNumberHandler}
//             onSubmit={sendOtpHandler}
//             isLoading={isLoading}
//           />
//         );
//       case 2:
//         return (
//           <CheckOTPForm
//             onBack={() => setStep((s) => s - 1)}
//             otp={otp}
//             setOtp={setOtp}
//             onSubmit={checkOtpHandler}
//             time={time}
//             onResendOtp={sendOtpHandler}
//             otpResponse={otpResponse}
//             isCechkingOtp={isCechkingOtp}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="w-full sm:max-w-sm">{renderSteps()}</div>
//     </div>
//   );
// }
// export default AuthPage;

//? TASK #1 : auth user using OTP :

//1. form -> getOTP -> input + button => phoneNumber => send OTP
// input => TextField
// 2. form -> checkOTP ->
// request => ?
//* 1. axios (useState + useEffect),
//* 2. useFetch (data, loading, error),
//* 3. react-query ->  redux alternative (state management) + fetch , mutate !



"use client";
import { useEffect, useState } from "react";
import SendOTPFrom from "./SendOTPFrom";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";
const RESEND_TIME = 90;

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const router = useRouter();
  
  const {
    data: otpResponse,
    error,
    isLoading,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });
  
  const { mutateAsync: mutateCheckOtp, isLoading: isCechkingOtp } = useMutation(
    {
      mutationFn: checkOtp,
    }
  );

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateGetOtp({ phoneNumber });
      toast.success(data.message);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        {/* نمایش فرم وارد کردن شماره تلفن */}
        <SendOTPFrom
          phoneNumber={phoneNumber}
          onChange={phoneNumberHandler}
          onSubmit={sendOtpHandler}
          isLoading={isLoading}
        />
        
        {/* نمایش فرم وارد کردن کد OTP */}
        <CheckOTPForm
          otp={otp}
          setOtp={setOtp}
          onSubmit={checkOtpHandler}
          time={time}
          onResendOtp={sendOtpHandler}
          otpResponse={otpResponse}
          isCechkingOtp={isCechkingOtp}
        />
      </div>
    </div>
  );
}

export default AuthPage;


// "use client";
// import { useEffect, useState } from "react";
// import SendOTPFrom from "./SendOTPFrom";
// import { toast } from "react-hot-toast";
// import { useMutation } from "@tanstack/react-query";
// import { checkOtp, getOtp } from "@/services/authServices";
// import CheckOTPForm from "./CheckOTPForm";
// import { useRouter } from "next/navigation";

// const RESEND_TIME = 90;

// function AuthPage() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [time, setTime] = useState(RESEND_TIME);
//   const [showOtpForm, setShowOtpForm] = useState(false); // اضافه کردن حالت برای نمایش فرم OTP
//   const router = useRouter();
  
//   const {
//     data: otpResponse,
//     error,
//     isLoading,
//     mutateAsync: mutateGetOtp,
//   } = useMutation({
//     mutationFn: getOtp,
//   });
  
//   const { mutateAsync: mutateCheckOtp, isLoading: isCechkingOtp } = useMutation(
//     {
//       mutationFn: checkOtp,
//     }
//   );

//   const phoneNumberHandler = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const sendOtpHandler = async (e) => {
//     e.preventDefault();
//     setShowOtpForm(true); // نمایش فرم OTP بلافاصله پس از کلیک روی دکمه ارسال
//     try {
//       const data = await mutateGetOtp({ phoneNumber });
//       toast.success(data.message);
//       setTime(RESEND_TIME);
//       setOtp("");
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };
  
//   const checkOtpHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { message, user } = await mutateCheckOtp({ phoneNumber, otp });
//       toast.success(message);
//       if (user.isActive) {
//         router.push("/");
//       } else {
//         router.push("/complete-profile");
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
//     return () => {
//       if (timer) clearInterval(timer);
//     };
//   }, [time]);

//   return (
//     <div className="flex justify-center">
//       <div className="w-full sm:max-w-sm">
//         {/* نمایش فرم وارد کردن شماره تلفن */}
//         <SendOTPFrom
//           phoneNumber={phoneNumber}
//           onChange={phoneNumberHandler}
//           onSubmit={sendOtpHandler}
//           isLoading={isLoading}
//         />
        
//         {/* نمایش فرم وارد کردن کد OTP بلافاصله پس از کلیک روی دکمه ارسال */}
//         {showOtpForm && (
//           <CheckOTPForm
//             otp={otp}
//             setOtp={setOtp}
//             onSubmit={checkOtpHandler}
//             time={time}
//             onResendOtp={sendOtpHandler}
//             otpResponse={otpResponse}
//             isCechkingOtp={isCechkingOtp}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default AuthPage;
